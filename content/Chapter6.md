# Chapter 6: Practical Implementation: The Adoption Roadmap

This chapter provides a phased roadmap for engineering teams to transition from traditional DevOps to an AI-Native DevSecOps posture. The timeline is structured as a journey across three distinct phases.

## 6.1 The Foundation

The first phase focus on establishing structural rigor and shifting security to the local developer environment.

### 6.1.1 Monorepo Consolidation & Nx Setup

- **Action**: Migrate fragmented repositories into a single monorepo managed by **Nx**.
- **Outcome**: Enables deep project graph analysis, allowing security tools to understand the relationship between different services and libraries.
- **Key Command**: `npx nx@latest init`

### 6.1.2 "Source of Truth" Governance

- **Conventional Commits**: Implement `devsecops-actions/github/commit` to enforce standardized commit messages, which AI agents use to generate accurate changelogs.
- **Commit Signing**: Mandate GPG/SSH signing for all commits to ensure non-repudiation of both human and AI changes.
- **Branch Protection**: Enforce "Signed Commits" and "Passing Status Checks" on the `main` branch.

### 6.1.3 Shift-Left Local Security

- **Pre-commit Hooks**: Deploy **Husky** with `Gitleaks` and `TruffleHog` to prevent secrets from entering the repository locally.
- **Linter Enforcer**: Configure `eslint-plugin-security` to catch common patterns (e.g., `eval`, insecure regex) during the implementation phase.

---

## 6.2 Hardening the Pipeline

The second phase introduces deterministic security scanning and supply chain integrity controls.

### 6.2.1 Deterministic Security Scanning (SCA & SAST)

- **Action**: Integrate the `devsecops-actions/sca` composite action into the CI pipeline.
- **SCA**: Deploy **OWASP Dependency-Check** to fail builds with vulnerabilities having a CVSS score ≥ 7.0.
- **Multi-Engine Secret Scan**: Deploy both **MOJ Secret Scanner** (regex) and **TruffleHog** (entropy) to detect hardcoded and obfuscated credentials.
- **SAST**: Enable **CodeQL** for deep semantic analysis of the codebase.

### 6.2.2 Supply Chain Integrity (SBOM & SLSA)

- **SBOM Generation**: Use `Syft` (via the MoJ SBOM generator) to produce **CycloneDX 1.5** artifacts for every build.
- **Safe-Chain / SLSA**: Implement the `devsecops-actions/sca/slsa` pattern to verify package integrity and detect "malicious" holding packages before installation.

### 6.2.3 Policy-as-Code Gates

- **Action**: Deploy **Open Policy Agent (OPA)** or custom CI checkscripts.
- **Goal**: Block PRs that introduce new vulnerabilities or violate architectural boundaries (e.g., Nx `enforce-module-boundaries`).

---

## 6.3 AI-Native Integration

The final phase introduces agentic reasoning and autonomous remediation.

### 6.3.1 Agent Harness Rollout

- **Action**: Provide developers with **Claude Code** or **Cursor** licenses.
- **Governance**: Commit a `CLAUDE.md` and `.nx/SELF_HEALING.md` to the repository root. These files provide the agent with project-specific security constraints and "off-limits" areas.

### 6.3.2 Agentic PR Reviews

- **Action**: Integrate an AI security skill (e.g., `claude-cybersecurity`) into the Pull Request workflow.
- **Logic**: After deterministic SAST/SCA finishes, the AI agent audits the diff for business logic flaws and authorization bypasses.

### 6.3.3 Self-Healing CI Experiments

- **Action**: Enable `nx fix-ci` in the CI pipeline (using `if: always()`).
- **Workflow**: When a build fails due to a lint error or test breakage, the AI agent autonomously proposes a fix PR, significantly reducing the "Time to Green" (TTG).

---

## 6.4 Maturity Model: The 5 Levels of AI-Native DevSecOps

| Level       | Name           | Characteristics                                                                          |
| :---------- | :------------- | :--------------------------------------------------------------------------------------- |
| **Level 1** | **Ad-hoc**     | Manual security reviews, no monorepo, AI used only for autocomplete.                     |
| **Level 2** | **Repeatable** | Deterministic SAST/SCA in CI, pre-commit hooks, basic linting rules.                     |
| **Level 3** | **Defined**    | Monorepo (Nx) adoption, SBOM generation, centralized policy-as-code.                     |
| **Level 4** | **Managed**    | Agentic PR reviews, diff-aware risk scoring, signed provenance for artifacts.            |
| **Level 5** | **Optimizing** | **AI-Native**: Self-healing CI, autonomous incident response, 3-gate runtime protection. |
