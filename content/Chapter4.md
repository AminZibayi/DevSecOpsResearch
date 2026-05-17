# Chapter 4: The AI-Native DevSecOps Workflow (Engineer's Guide)

## 4.1 Workflow Overview: From Spec to Production

The AI-native DevSecOps workflow transforms the traditional linear SDLC into a **High-Velocity Feedback Loop**. In this paradigm, AI agents are not just tools used by humans; they are participants that must be governed by automated security gates.

The workflow is categorized into six phases (A-F), moving from initial specification to production runtime, with a "Self-Healing" feedback loop that feeds back into the planning phase.

---

## 4.2 Phase A: Planning & Threat Modeling

In AI-native development, the "Plan" is the agent's source of truth. Security must be injected here to prevent "vulnerable-by-design" code generation.

### 4.2.1 Phase A: Planning & Threat Modeling

In AI-native development, the "Plan" is the agent's source of truth. We implement a structured 4-step threat modeling process early in the SDLC:

1.  **Scoping (Decomposition)**:
    - Identify **Entry Points**: User stories, Jira tickets, and data streams that feed into the agent.
    - Identify **Exit Points**: Code commits, shell commands, and API deployments executed by the agent.
    - Map **Assets**: Cryptographic keys, source code, and user data within the agent's reach.
2.  **Threat Identification (STRIDE)**: Conduct an AI-assisted review of trust boundaries.
3.  **Countermeasure Mapping**: Determine whether to Eliminate, Mitigate, Accept, or Transfer each risk.
4.  **Verification**: Assess the work by ensuring the resulting "Threat Model document" (stored as `threat-model.md` or in `AgentDB`) is accurate.

### 4.2.2 AI-Assisted Architecture Review

Before coding starts, an agent (orchestrated via a skill like `cybersecurity`) performs a reconnaissance of the proposed design.

- **Trust Boundary Mapping**: The agent identifies where data crosses trust levels (e.g., User Input → API → Database).
- **STRIDE Analysis**: For each boundary, the agent evaluates Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.
- **[Engineer's Note]**: Use a "Reconnaissance Phase" to detect the tech stack and entry points before generating code. This ensures the agent understands the context in which it is operating.

### 4.2.2 Prompt Templates for Secure-by-Design Specs

Teams should maintain a library of **Secure Prompt Templates**. Instead of "Write a login function," the template should be:

> "Implement a login function using Argon2id for hashing, enforcing a minimum entropy of 60 bits, and integrating with the existing `rate-limit` middleware located in `libs/shared/auth`."

---

## 4.3 Phase B: Local Development

The goal of this phase is to provide the "Security Spellchecker" effect, catching AI hallucinations before they reach the repository.

### 4.3.1 Agent Constraints

Harnesses like **Claude Code** use `CLAUDE.md` to enforce hard constraints on the agent's reasoning:

- **Linter Enforcement**: The agent is instructed to run `npm run lint` after every edit.
- **Type Safety**: Mandatory use of TypeScript with `strict: true` to prevent type-coercion vulnerabilities.

### 4.3.2 Real-time SAST/SCA in IDE

IDE plugins (e.g., Snyk, SonarLint) provide inline annotations. If an agent generates code using a vulnerable library version, the IDE flags it immediately, allowing the agent to "self-correct" during the implementation phase.

### 4.3.3 Pre-commit Security Gates

A mandatory local gate using **Husky** or **pre-commit** hooks:

1.  **Secret Scan**: Run `Gitleaks` or `TruffleHog` to prevent credentials from entering the git history.
2.  **Lint & Format**: Ensure the code follows project standards (ESLint/Prettier).
3.  **Type Check**: Verify `tsc` passes for all changed files.

---

## 4.4 Phase C: Pre-Merge CI (The Security Gate)

Upon Pull Request, the CI pipeline executes a "Layered Audit." Following the `devsecops-actions` and `claude-cybersecurity` patterns, the order is critical:

### 4.4.1 Step-by-Step Pipeline Order

The CI pipeline orchestrates 9 specialized security steps, ensuring a "Defense in Depth" approach:

1.  **Repository Checkout**: Secure code retrieval with full history (required for `nx affected`).
2.  **Dependency Review**: PR-native vulnerability scanning that identifies newly introduced risks and license compliance issues.
3.  **OWASP Dependency-Check**: Deep scanning against the NVD. Builds must **fail if any vulnerability with CVSS ≥ 7.0** is detected.
4.  **Renovate Integration**: Automated hygiene to keep dependencies current, preventing AI agents from generating code against "stale" vulnerable stacks.
5.  **Multi-Engine Secret Scanning**:
    - **MOJ Scanner**: Custom regex patterns for organization-specific secrets.
    - **TruffleHog**: Entropy-based detection for obfuscated or high-entropy keys.
6.  **CodeQL SAST**: Semantic analysis that detects complex attack paths (e.g., A03: Injection).
7.  **OpenSSF Scorecard**: Automated posture assessment verifying 18+ security best practices (branch protection, signed commits, etc.).
8.  **Agentic Security Audit (AI-Native)**:
    - **Contextual Depth**: Using scoping data from Phase A to prioritize review of high-risk components.
    - **ruflo-jujutsu**: Diff-aware risk scoring.
9.  **SBOM & Policy Gate**: Generation of CycloneDX 1.5 artifacts followed by an OPA/Rego check to ensure zero critical failures remain.

---

## 4.5 Phase D: Build, Sign, and SBOM

Once the PR is merged, the pipeline produces a secured artifact.

### 4.5.1 Deterministic Builds with Nx Caching

By using **Nx Computation Hashing**, the pipeline ensures that if the source and dependencies haven't changed, the build output is identical. This prevents non-deterministic "build drift."

### 4.5.2 SBOM & Provenance

- **SBOM Generation**: Use `Syft` to generate a **CycloneDX 1.5** JSON artifact, capturing the "ground truth" of all dependencies used in the build.
- **SLSA Attestation**: Generate provenance using the **Safe-Chain** model, linking the artifact to the specific GitHub Actions run and commit SHA.

### 4.5.3 Container Signing

Sign the final image using **Sigstore/Cosign**. This signature is verified at deployment time to ensure no unauthorized images enter the environment.

---

## 4.6 Phase E: Deployment & Runtime

The security posture continues into the execution environment.

### 4.6.1 Environment-Specific Policy Enforcement

Kubernetes admission controllers verify the SBOM and signature of images. Images missing a valid pipeline signature are blocked from deployment.

### 4.6.2 Continuous Monitoring & The 3-Gate Pattern

Runtime tools (e.g., Falco) monitor for anomalous behavior. For applications using LLM agents, the **ruflo-aidefence 3-Gate Pattern** is applied:

- **Gate 1**: Pre-storage PII detection.
- **Gate 2**: Token sanitization.
- **Gate 3**: Prompt-injection scanning before re-entry into an LLM.

### 4.6.3 RAG Quality & Groundedness Gates

For systems utilizing Retrieval-Augmented Generation, we implement the **RAG Triad** as a runtime quality gate:

1.  **Context Relevance**: Verify the retrieved snippets are relevant to the user query to prevent "Context Poisoning."
2.  **Groundedness**: Ensure the agent's response is derived solely from the retrieved context, mitigating hallucinations.
3.  **Answer Relevance**: Verify the final output addresses the user's intent without introducing tangential risks.

---

## 4.7 Phase F: Feedback & Self-Healing

Failures in CI/CD are treated as learning opportunities for the system.

### 4.7.1 Nx Self-Healing CI

If a task (e.g., `lint` or `test`) fails in CI, the `nx fix-ci` command triggers an AI repair agent:

1.  **Analyze**: The agent reads the failure log.
2.  **Diagnose**: It identifies the root cause (e.g., a missing import or a broken test).
3.  **Repair**: It proposes a fix via a PR comment or auto-applies it if confidence is high (as configured in `.nx/SELF_HEALING.md`).

### 4.7.2 Failure-Driven Improvement Loops

Confirmed vulnerabilities or build failures are logged into the `AgentDB` (e.g., `security-findings` namespace). Future agents consult this database to avoid repeating the same security mistakes, effectively "hardening" the team's development patterns over time.
