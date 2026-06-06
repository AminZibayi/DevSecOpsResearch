# Appendices

## Appendix A: Glossary of Terms

- **Agentic Development**: A software engineering paradigm where autonomous AI agents perform multi-step tasks (planning, coding, testing, reviewing) by interacting with tools and environments, rather than just generating text.
- **AI-Native**: Systems, repositories, or pipelines designed from the ground up to be primarily operated by or in deep collaboration with AI agents.
- **DORA Metrics**: DevOps Research and Assessment metrics (Deployment Frequency, Lead Time for Changes, Change Failure Rate, Time to Restore Service).
- **HitL (Human-in-the-Loop)**: A design pattern where an autonomous process requires explicit human approval before executing a high-risk action (e.g., merging to production, modifying infrastructure).
- **MCP (Model Context Protocol)**: An open standard enabling secure, standardized communication between AI agents and local/remote tools or data sources.
- **RAG (Retrieval-Augmented Generation)**: A technique that enhances LLM responses by fetching relevant context from an external database (e.g., `AgentDB`) before generating an answer.
- **SAST (Static Application Security Testing)**: Traditional security scanning that analyzes source code for known vulnerability patterns without executing the code.
- **SCA (Software Composition Analysis)**: Security scanning focused on identifying known vulnerabilities (CVEs) and license risks in third-party dependencies.
- **Slopsquatting**: An AI-era supply chain attack where malicious actors register package names that LLMs frequently hallucinate.
- **Spec-Driven Development**: A workflow where developers define rigid specifications (functional, non-functional, security constraints) which are then used as the unalterable source of truth for an AI agent to generate code.
- **Three-Gate Pattern**: A runtime defense mechanism for agentic interactions consisting of 1) Pre-storage PII detection, 2) Data Sanitization, and 3) Prompt-Injection detection.

---

## Appendix B: Reference Configurations

### B.1 GitHub Actions: AI-Native Security Pipeline (SCA + AI Audit)

```yaml
name: DevSecOps Pre-Merge Gate
on: [pull_request]
jobs:
  security-audit:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
      security-events: write
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }

      - name: Setup Nx
        uses: nrwl/nx-set-shas@v4

      - name: Deterministic SAST & SCA
        uses: ministryofjustice/devsecops-actions/sca@v1.5.0
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          dependency-review-config-file: '.github/dependency-review-config.yml'

      - name: AI-Native Security Audit
        run: |
          claude plugin install cybersecurity
          claude cybersecurity --scope diff --compliance soc2

      - name: Self-Healing CI
        if: failure()
        run: npx nx fix-ci
```

### B.2 nx.json (Module Boundaries & Self-Healing CI)

```json
{
  "targetDefaults": {
    "lint": {
      "inputs": ["default", "{workspaceRoot}/.eslintrc.json"]
    }
  },
  "pluginsConfig": {
    "@nx/eslint-plugin": {
      "targetName": "lint"
    }
  },
  "conformance": {
    "rules": [
      {
        "rule": "@nx/conformance/enforce-project-boundaries",
        "options": {
          "depConstraints": [
            {
              "sourceTag": "scope:shared",
              "onlyDependOnProjectsWithTags": ["scope:shared"]
            },
            {
              "sourceTag": "scope:admin",
              "onlyDependOnProjectsWithTags": ["scope:shared", "scope:admin"]
            },
            {
              "sourceTag": "scope:client",
              "onlyDependOnProjectsWithTags": ["scope:shared", "scope:client"]
            }
          ]
        }
      }
    ]
  }
}
```

### B.3 .nx/SELF_HEALING.md

```markdown
# Self-Healing Configuration

## Confidence Rules

- Security scanning (SAST/SCA) failures require HIGH confidence and Human Approval.
- Formatting and Linting fixes can be applied with MEDIUM confidence.

## Off-Limits Areas

- `/libs/crypto/` - Do not automatically remediate cryptographic implementations.
- `/infra/` - Terraform definitions require explicit security review.

## Fix Preferences

- For type errors, prefer explicit typing over adding `any`.
- Never modify tests to pass a failing implementation.
```

---

## Appendix C: SLSA Level Achievement Checklist

For AI-Native workflows seeking SLSA Level 3/4 compliance:

- [x] **Source: Version Controlled** — All prompts, `agents.md`, and configuration files are stored in Git.
- [x] **Source: Verified History** — All commits (human and AI) are signed (`devsecops-actions/github/commit`).
- [x] **Source: Retained Indefinitely** — Repository history is immutable.
- [x] **Build: Scripted Build** — Build process defined via Nx Task Graph.
- [x] **Build: Build Service** — Builds run on ephemeral GitHub Actions runners.
- [x] **Build: Ephemeral Environment** — Runners are destroyed after each run.
- [x] **Build: Isolated** — No network access to other builds; agents restricted from accessing parallel pipeline state.
- [x] **Build: Parameterless** — Builds derive entirely from the commit context.
- [x] **Provenance: Available** — CycloneDX 1.5 SBOM generated via `Syft`.
- [x] **Provenance: Authenticated** — Provenance signed via `Sigstore/Cosign`.
- [x] **Provenance: Non-Falsifiable** — Safe-Chain validation blocks malicious holding packages.

## Appendix D: Keyless Signing with Sigstore (Cosign)

Keyless signing eliminates the risk of long-lived private key exposure in CI/CD secrets. The `implementing-code-signing-for-artifacts` skill documents two complementary approaches:

### D.1 GPG-Signed Artifacts (Traditional)

```bash
# Generate Ed25519-based GPG key for CI
gpg --full-generate-key --batch <<EOF
Key-Type: eddsa
Key-Curve: ed25519
Subkey-Type: eddsa
Subkey-Curve: ed25519
Name-Real: CI Build System
Name-Email: ci-signing@company.com
Expire-Date: 1y
%no-protection
EOF

# Export public key for distribution
gpg --armor --export ci-signing@company.com > signing-key.pub

# Export private key for CI/CD (MUST be stored in secrets manager)
gpg --armor --export-secret-keys ci-signing@company.com > signing-key.priv
```

### D.2 Sigstore Keyless Signing (Modern)

Cosign keyless signing uses OIDC identity tokens to obtain short-lived signing certificates from Fulcio (Sigstore's CA) without ever materializing a private key:

```bash
# Install cosign
# (The cosign-installer GitHub Action is preferred in CI)
curl -Lo cosign https://github.com/sigstore/cosign/releases/latest/download/cosign-linux-amd64
chmod +x cosign

# Sign a container image (keyless — uses OIDC from GitHub Actions)
export COSIGN_EXPERIMENTAL=1
cosign sign \
  --yes \
  --output-signature image.sig \
  --output-certificate image.cert \
  ghcr.io/org/app:latest

# Verify signature
cosign verify \
  --certificate-identity ci-signing@company.com \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  ghcr.io/org/app:latest
```

**npm Provenance Attestation** (for JS/TS package registries):

```json
// package.json
{
  "publishConfig": {
    "provenance": true
  }
}
```

```bash
npm publish --provenance
```

**Attestation reporting format** used for compliance audits:

```
Artifact Signing Report
=======================
Pipeline: Build and Sign v2.3.0
Date: 2026-02-23
Signing Method: Sigstore Keyless + GPG

SIGNED ARTIFACTS:
app-v2.3.0-linux-amd64.tar.gz
  GPG: PASS (ci-signing@company.com, EdDSA/Ed25519)
  Sigstore: PASS (Rekor entry: 24658135, Fulcio cert issued)
  SHA256: a1b2c3d4...

TRANSPARENCY LOG:
  Entries recorded: 3
  Log index range: 24658135-24658137
  Verification: https://search.sigstore.dev
```

---

## Appendix E: Terraform IaC Security Scanning Patterns

From the `auditing-terraform-infrastructure-for-security` and `detecting-supply-chain-attacks-in-ci-cd` skills:

### E.1 Terraform Plan Validation with OPA/Rego

Before scanning raw `.tf` files, generate a plan file for accurate pre-deployment analysis:

```bash
terraform init
terraform plan -out=tfplan
terraform show -json tfplan > tfplan.json
```

Custom Rego policies for organization-wide Terraform security standards:

```rego
# policy/aws_s3_encryption.rego
package terraform.aws.s3

deny[msg] {
  resource := input.resource.aws_s3_bucket[name]
  not resource.server_side_encryption_configuration
  msg := sprintf("S3 bucket '%s' must have server-side encryption enabled", [name])
}

# policy/aws_iam_no_wildcards.rego
package terraform.aws.iam

deny[msg] {
  resource := input.resource.aws_iam_policy[name]
  statement := resource.policy.Statement[_]
  statement.Action == "*"
  statement.Effect == "Allow"
  msg := sprintf("IAM policy '%s' must not use wildcard (*) actions", [name])
}

deny[msg] {
  resource := input.resource.aws_iam_policy[name]
  statement := resource.policy.Statement[_]
  statement.Resource == "*"
  statement.Effect == "Allow"
  contains(statement.Action[_], "*")
  msg := sprintf("IAM policy '%s' has overly permissive actions on wildcard resources", [name])
}

# policy/aws_no_public_ingress.rego
package terraform.aws.security_group

deny[msg] {
  resource := input.resource.aws_security_group_rule[name]
  resource.type == "ingress"
  resource.cidr_blocks[_] == "0.0.0.0/0"
  resource.from_port <= 22
  resource.to_port >= 22
  msg := sprintf("Security group rule '%s' allows SSH from 0.0.0.0/0", [name])
}
```

Policy evaluation in CI/CD:

```bash
# Using conftest (easiest CI integration)
conftest test terraform/tfplan.json --policy ./policy/ --output json

# Using opa directly
terraform show -json tfplan | opa eval \
  --data ./policy/ \
  --input /dev/stdin \
  "data.terraform.aws" \
  --format pretty
```

CI/CD integration (GitHub Actions):

```yaml
name: Terraform Security Scan
on: [pull_request]
jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: hashicorp/setup-terraform@v3
      - run: terraform init && terraform plan -out=tfplan && terraform show -json tfplan > tfplan.json
      - uses: bridgecrewio/checkov-action@master
        with:
          directory: terraform/
          framework: terraform
          output_format: sarif
          output_file_path: checkov.sarif
          soft_fail: false
```

### E.2 CI/CD Pipeline Supply Chain Audit Checklist

Critical risks in GitHub Actions and other CI/CD pipelines that must be scanned before each production deployment:

1. **Unpinned Actions**: All `uses:` references MUST use full SHA hashes, not tags or `@main`
2. **Script Injection via `${{ github.event }}`**: Never interpolate untrusted PR payload data directly into `run:` commands
3. **Overly Permissive Tokens**: `GITHUB_TOKEN` scope must be explicitly restricted to `contents: read`, `pull-requests: write`
4. **Dependency Confusion**: Verify internal package namespaces exist in the private registry to prevent public-registry shadowing
5. **Secrets in Workflow YAML**: No hardcoded credentials in `.github/workflows/` files

---

## Appendix F: OpenSSF Scorecard Checks in CI

From the `devsecops-actions` pattern, the OpenSSF Scorecard should run as a weekly scheduled job rather than on every PR (it is expensive and slow). Configure as:

```yaml
name: OpenSSF Scorecard
on:
  schedule:
    - cron: '0 2 * * 1'  # Every Monday at 2 AM
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  security-events: write
  id-token: write
  contents: read
  actions: read

jobs:
  analysis:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          persist-credentials: false

      - name: Run OpenSSF Scorecard
        uses: ossf/scorecard-action@v2.4.1
        with:
          results_file: results.sarif
          results_format: sarif
          publish_results: true

---

## Appendix G: Bibliography & Sources

1. **OWASP.** _Top 10 for Large Language Model Applications_ (2025).
2. **Anthropic.** _Model Context Protocol (MCP) Specification_ (2025).
3. **Nx / nrwl.** _Official Nx Documentation: Monorepos, Task Graphs, and Self-Healing CI_.
4. **Ministry of Justice UK.** _devsecops-actions — Enterprise GitHub Actions for Security Automation_.
5. **AgriciDaniel.** _claude-cybersecurity — AI-Powered Code Security Audit Skill_ (2026).
6. **ruvnet.** _ruflo — Safety, Test Generation, and Audit Plugins for Claude Code_ (2026).
7. **Google/OpenSSF.** _SLSA Framework (Supply-chain Levels for Software Artifacts)_.
8. **Sigstore.** _Keyless Artifact Signing framework_.
9. **CISA/G7.** _SBOM Minimum Elements for AI Applications_ (2025).
10. **MITRE.** _CWE Top 25 Most Dangerous Software Weaknesses_ (2024).
11. **OWASP.** _OWASP Top 10:2025 — The Ten Most Critical Web Application Security Risks_.
12. **NIST.** _Framework for Improving Critical Infrastructure Cybersecurity v2.0_ (2024).
13. **MITRE.** _MITRE ATT&CK® v19.1 — Enterprise_ (2026).
14. **MITRE.** _MITRE ATLAS™ v5.4 — Adversarial Threat Landscape for Artificial-Intelligence Systems_ (2025).
15. **MITRE.** _MITRE D3FEND™ v1.3 — Defensive Countermeasures_ (2024).
16. **NIST.** _NIST AI Risk Management Framework (AI RMF 1.0) and Generative AI Profile (AI 600-1)_ (2024).
17. **Jangra, Mahipal.** _Anthropic Cybersecurity Skills — 754 structured cybersecurity skills for AI agents, mapped to MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, MITRE D3FEND, and NIST AI RMF_ (2026). https://github.com/mukul975/Anthropic-Cybersecurity-Skills
18. **OWASP.** _OWASP Software Component Verification Standard (SCVS)_.
19. **CNCF.** _in-toto Framework: Supply Chain Integrity for Containers_ (2025).
20. **Snyk.** _SCA Dependency Scanning Skill Reference_ (2026).
```
