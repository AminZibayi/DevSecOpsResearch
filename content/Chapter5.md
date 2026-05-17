# Chapter 5: Tooling Deep-Dive & Feature Matrix

## 5.1 Agent Harnesses & IDE Integrations

The agent harness is the foundational runtime that empowers AI with terminal, filesystem, and tool access.

- **Claude Code**: A developer-centric CLI that excels in "skill" extensibility. It supports complex multi-agent workflows (e.g., `claude-cybersecurity`) and integrates deeply with the local shell.
- **GitHub Copilot Workspace**: Provides a high-level agentic experience focused on "Plan → Implement → Review" cycles within the GitHub ecosystem.
- **Cursor / Windsurf**: IDE-first harnesses that provide superior real-time context management through shadow-git diffs and continuous workspace indexing.
- **Gemini CLI / Code Assist**: Enterprise-focused harness with deep Google Cloud integration, particularly useful for teams using Vertex AI and Firebase.

## 5.2 Static & Dynamic Security Testing Tools (SAST, SCA, DAST, IaC)

Traditional DevSecOps tools remain the deterministic "backbone" of the AI-native pipeline.

### 5.2.1 SAST (Static Application Security Testing)

- **CodeQL**: The industry standard for semantic analysis. Used by `devsecops-actions` to detect complex vulnerability patterns across 10+ languages.
- **Semgrep**: A lightweight, fast, and highly customizable scanner. Ideal for custom security rules and "guardrail" patterns in monorepos.

### 5.2.2 SCA (Software Composition Analysis)

- **OWASP Dependency-Check**: Scans project dependencies against the NVD. `devsecops-actions` uses this as a primary build-fail gate (CVSS ≥ 7.0).
- **OSV-Scanner**: Google's scanner for open-source vulnerabilities, optimized for Go, Rust, and Python ecosystems.
- **Renovate Bot**: Automates dependency updates. Crucial in AI-native workflows to ensure agents aren't generating code against outdated or vulnerable library versions.

### 5.2.3 IaC & Container Scanning

- **Trivy**: A comprehensive scanner for container images, filesystems, and Git repositories. It detects vulnerabilities and misconfigurations in Docker, Kubernetes, and Terraform.
- **Checkov**: Focused on Infrastructure-as-Code (IaC) security, scanning Terraform, CloudFormation, and ARM templates for compliance violations.

## 5.3 Supply Chain Security Stack

As AI agents dynamically select dependencies, supply chain integrity becomes paramount.

- **Syft**: A powerful CLI tool for generating **CycloneDX 1.5** and SPDX SBOMs. It provides the "ground truth" for every build.
- **Sigstore/Cosign**: Facilitates keyless signing of container images and blobs. It ensures that only artifacts produced by an authorized CI pipeline can be deployed.
- **Safe-Chain / SLSA**: A framework for supply-chain levels for software artifacts. It uses **Attestations** to prove the provenance and integrity of the build process.

## 5.4 Monorepo & CI Orchestration

Efficient orchestration is required to manage the increased volume of AI-generated changes.

- **Nx**: The "Nx-native" build system provides the Project Graph and Task Graph necessary for **Affected Scanning**. Its **Self-Healing CI** capabilities allow AI agents to autonomously repair deterministic build failures.
- **GitHub Actions**: The primary CI platform for the `devsecops-actions` framework. It utilizes **Composite Actions** to create modular, reusable security gates.
- **GitLab CI / Azure DevOps**: Alternatives that can implement similar patterns using reusable templates and job-level security policies.

## 5.5 AI Security & Governance Tools

A new class of tools designed specifically to govern the AI reasoning loop.

- **ruflo-aidefence**: Implements the **3-Gate Pattern** (PII, Sanitization, Prompt Injection). It acts as a runtime firewall for agentic tool calls.
- **claude-cybersecurity**: An AI security skill that spawns 8 parallel specialist agents to perform context-aware audits that traditional SAST cannot (e.g., business logic flaws).
- **ruflo-jujutsu**: A diff-analysis tool that performs **Risk Scoring** on agent-proposed changes, allowing humans to focus their review on high-impact diffs.
- **MCP Gateway (IBM Pattern)**: A security proxy for the Model Context Protocol that enforces tool allowlists and monitors for "Excessive Agency" patterns.

## 5.6 Comparative Feature Matrix & Maturity Tiers

| Feature                 | Deterministic SAST (CodeQL) | AI Security Skill (Claude-Cybersecurity) | supply-chain-actions (MoJ) |
| :---------------------- | :-------------------------- | :--------------------------------------- | :------------------------- |
| **Maturity Tier**       | **Tier 1: Enterprise**      | **Tier 3: Experimental**                 | **Tier 2: Active OSS**     |
| **Primary Strength**    | CWE Pattern Matching        | Business Logic & Design                  | Supply Chain Integrity     |
| **False Positive Rate** | Low (Rule-based)            | Variable (Context-aware)                 | Very Low (Hash-based)      |
| **Language Support**    | Fixed (10+)                 | Universal (LLM-based)                    | Multi-stack                |
| **Integration Model**   | CI Gate                     | Agent Skill / PR Bot                     | GitHub Composite Action    |
| **Cost**                | High (Enterprise)           | Low (Bundled with AI)                    | Open Source                |

## 5.7 Tool Selection Decision Tree

To select the optimal stack, teams should follow this decision logic:

1.  **Is the team using AI Agents (Claude Code, Cursor)?**
    - _Yes_: Deploy **ruflo-aidefence** and **CLAUDE.md** constraints.
2.  **Is the codebase a Monorepo?**
    - _Yes_: Use **Nx** for affected scanning and task orchestration.
3.  **Are you in a Regulated Industry (SOC2, PCI)?**
    - _Yes_: Implement **Syft (SBOM)** + **Cosign (Signing)** + **Safe-Chain (Provenance)**.
4.  **Team Size < 50 Developers?**
    - _Yes_: Prioritize **Zero-Config** tools like `devsecops-actions/sca`.
5.  **Team Size > 200 Developers?**
    - _Yes_: Deploy a centralized **MCP Gateway** and **Policy-as-Code (OPA)** gates.
