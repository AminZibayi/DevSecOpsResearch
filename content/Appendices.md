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
          dependency-review-config-file: ".github/dependency-review-config.yml"

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
            { "sourceTag": "scope:shared", "onlyDependOnProjectsWithTags": ["scope:shared"] },
            { "sourceTag": "scope:admin", "onlyDependOnProjectsWithTags": ["scope:shared", "scope:admin"] },
            { "sourceTag": "scope:client", "onlyDependOnProjectsWithTags": ["scope:shared", "scope:client"] }
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

---

## Appendix D: Bibliography & Sources

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
