# Chapter 3: The Reference Architecture

## 3.1 Architectural Principles

The AI-native DevSecOps architecture is built on four core principles designed to balance the speed of agentic development with the rigor of enterprise security.

1.  **Defense-in-Depth**: Multiple overlapping security layers (Local → CI → Build → Runtime) ensure that if an agent bypasses one control, others are in place to catch the vulnerability.
2.  **Least Privilege by Default**: Agents and tools are granted the minimum permissions necessary for their specific task. This is enforced via scoped GitHub tokens and isolated MCP environments.
3.  **Reproducibility & Determinism**: While LLMs are non-deterministic, the _process_ must be deterministic. This is achieved through strict linting, type-checking, and "Smoke Test" contracts.
4.  **Continuous Observability**: Every agent action, tool invocation, and prompt is logged and auditable to provide a clear trail for incident response.

## 3.2 Layer 1: Developer Environment (IDE Security)

Security starts where the code is generated. The local environment acts as the first "gate" to prevent insecure patterns from entering the repository.

- **Local Agent Constraints**: Harnesses like Claude Code or Cursor are configured with project-level rules (e.g., `.cursorrules` or `CLAUDE.md`) that enforce secure coding standards.
- **Pre-commit Hooks**: Automated hooks run locally before any code is committed.
  - **Secret Scanning**: Tools like `Gitleaks` or `TruffleHog` scan for API keys and credentials.
  - **Linting & Formatting**: `ESLint` (with security plugins) and `Prettier` ensure that AI-generated code meets quality standards.
- **Real-time SAST/SCA**: IDE plugins provide immediate feedback to both humans and agents, highlighting vulnerable dependencies or insecure functions as they are typed.

## 3.3 Layer 2: Source Control Governance

The repository is the "Source of Truth" and must be protected from unauthorized or insecure changes, especially those originating from autonomous agents.

- **Branch Protection**: Critical branches (`main`, `develop`) require signed commits and passing status checks before merging.
- **CODEOWNERS Enforcement**: Sensitive directories (e.g., `/infra`, `/auth`) require mandatory review from specific human security engineers, regardless of who (or what) generated the change.
- **Commit Signing**: All commits, including those from AI agents or "self-healing" bots, must be cryptographically signed (GPG/SSH) to ensure non-repudiation.

## 3.4 Layer 3: Monorepo Build & Task Orchestration (Nx)

In complex codebases, the build system is the "brain" that coordinates tasks. **Nx** provides the necessary structure for AI-native orchestration.

- **Project & Task Graphs**: Nx maintains a deep understanding of project relationships. Agents use these graphs to understand the impact of their changes across the entire monorepo.
- **Affected Commands**: By running `nx affected`, the CI pipeline only scans and tests the projects impacted by a specific PR. This significantly reduces "noise" and token usage for AI reviewers.
- **Module Boundary Enforcement**: Nx uses a tag-based system (`scope:shared`, `scope:admin`) to prevent illegal imports (e.g., a client-side app importing server-side secrets).
- **Self-Healing CI**: As documented in the `nx docs`, AI-powered agents can detect CI failures and automatically propose (or apply) fixes for deterministic errors like linting or formatting violations.

## 3.5 Layer 4: CI/CD Pipeline Security (GitHub Actions)

The CI/CD pipeline is the definitive security gate. It must orchestrate a suite of tools with extreme efficiency.

- **Composite Actions**: Following the `devsecops-actions` pattern, the pipeline uses modular, reusable components for SCA, SAST, and Secret Scanning.
- **SARIF Unified Visibility**: All security tools (CodeQL, OWASP, Trivy) are configured to output results in **SARIF** (Static Analysis Results Interchange Format), which are uploaded to the GitHub Security tab for a centralized "Single Pane of Glass" view.
- **Explicit Permissions**: Workflows follow the principle of least privilege, explicitly declaring only the required permissions (e.g., `contents: read`, `security-events: write`).
- **Version Pinning**: All actions are pinned to specific **Commit SHAs** rather than tags to prevent supply-chain attacks via compromised 3rd-party actions.

## 3.6 Layer 5: Artifact Integrity (SBOM & Signing)

The final output of the pipeline must be a "Provenanced Artifact."

- **SBOM Generation**: The pipeline automatically generates **CycloneDX 1.5** compliant Software Bill of Materials (SBOM) using tools like `Syft`. This provides a transparent inventory of all dependencies, including those selected by AI.
- **SLSA Provenance**: Using the **Safe-Chain** model, the pipeline generates attestations that link the final artifact back to the specific build process and source commit.
- **Container Signing**: Final images are signed using **Sigstore/Cosign**, ensuring that only verified, pipeline-produced artifacts can be deployed to production.

## 3.7 Layer 6: Runtime & Production Security

Deployment is governed by strict policy enforcement.

- **Admission Controllers**: In Kubernetes environments, admission controllers verify the signatures and SBOMs of images before allowing them to run.
- **AI Anomaly Detection**: Runtime protection tools (e.g., Falco) are augmented with AI to detect unusual patterns in traffic or system calls that might indicate an "Excessive Agency" exploit.

## 3.8 Layer 7: AI Governance Layer

This meta-layer governs the behavior and identity of the agents themselves.

- **Agent Identity (IAM)**: Every agent has a unique, auditable identity and is authenticated using short-lived, scoped tokens.
- **The 3-Gate Pattern**: All untrusted data (external PRs, tickets, docs) is filtered through a 3-gate system:
  1.  **PII Detection**: Redact sensitive data before persistence.
  2.  **Sanitization**: Opaque handling of tokens and keys.
  3.  **Injection Scanning**: Verify the safety of text before it re-enters an LLM prompt.
- **Prompt Logging & Audit**: A centralized log records every "Intent" (Prompt) and "Action" (Tool Call) taken by an agent, mapping them to human approvals.

## 3.9 Layer 8: Knowledge & Vector Security (RAG)

As Retrieval-Augmented Generation (RAG) becomes the standard for grounding AI outputs, the security of the vector database is a critical boundary (LLM08:2025).

- **Permission-Aware Retrieval**: The vector database must implement fine-grained access control, ensuring that agents can only retrieve data that the requesting user is authorized to see.
- **Logical Partitioning**: Multi-tenant environments must strictly isolate embedding namespaces to prevent cross-context information leakage.
- **Groundedness Verification**: Implementing the **RAG Triad** (Relevance, Groundedness, Q&A relevance) to detect and filter out hallucinations or "poisoned" knowledge entries before they reach the final LLM output.

## 3.10 Layer 9: Continuous Compliance & Audit (Evidence Layer)

This layer automates the collection of artifacts required for regulatory certification.

- **Policy-as-Evidence**: Mapping OPA/Rego policy passes directly to **PCI DSS 4.0.1 Requirement 6.2.3** and **SOC 2 CC8.1**.
- **Immutable Evidence Store**: Automated archiving of signed SBOMs, SLSA provenance, and agent reasoning logs in a write-once repository.
- **Compliance-as-Code (CaC)**: Using agents to maintain a "Compliance Graph" that links every architectural component to its relevant regulatory controls (GDPR, HIPAA, NIST).
