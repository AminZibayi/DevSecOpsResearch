# AI-Native DevSecOps — Presentation Outline

## Presentation Info

- **Audience**: CE Students
- **Format**: Slidev

---

## Section 1: Foundations

### Slide 1: Title Slide

- Title, presenter, date

### Slide 2: Why DevSecOps

- Software supply chain attacks up 742% since 2019
- 70-90% of modern code is third-party dependencies
- "Scan at the end" fails at modern velocity
- Security must be automated, continuous, embedded

### Slide 3: The Evolution

- DevOps (2009) — velocity, CI/CD, Dev + Ops collaboration
- DevSecOps (2015+) — shift-left, security as code
- AI-Native (2024+) — agents as pipeline participants
- Each step: more automation, more speed, new risks

### Slide 4: Core Vocabulary

- SAST, SCA, DAST, IaC scanning
- SBOM, SLSA, Provenance
- Agent, Harness, MCP, RAG
- Deterministic vs non-deterministic

### Slide 5: Standards Landscape

- Application Security: OWASP Top 10, CWE Top 25
- AI/ML Security: OWASP LLM Top 10, NIST AI RMF, MITRE ATLAS
- Supply Chain: SLSA, SBOM mandates, EO 14028
- Framework: NIST CSF 2.0
- Adversary Modeling: MITRE ATT&CK

---

## Section 2: Concepts & Tools

### Slide 6: Concept — Software Composition Analysis (SCA)

- What: scanning third-party dependencies for known CVEs
- Why: 70-90% of your codebase is not yours
- What can go wrong: vulnerable transitive dependencies, license violations

### Slide 7: SCA — Tools by Environment

- **Local/IDE**: Snyk plugin (real-time inline), OSV-Scanner (local scan)
- **CI**: OWASP Dependency-Check (CVSS gating), Snyk CI, Grype (SBOM-native), Trivy
- Note: These overlap. Pick one primary, others as cross-check.

### Slide 8: Concept — Secret Scanning

- What: detecting hardcoded credentials in source code
- Why: secrets in git = permanent exposure, even after deletion
- Two approaches: regex patterns (known formats) vs entropy (randomness detection)

### Slide 9: Secret Scanning — Tools by Environment

- **Local/IDE**: Gitleaks (pre-commit hook, most common for local use)
- **CI**: TruffleHog (entropy, 700+ detectors), MOJ Scanner (custom regex)
- Note: Local catches before commit. CI catches what slips through. Complementary.

### NARRATIVE SLIDE 10: Prevention > Detection

- "The cheapest vulnerability to fix is the one you never write"
- Shifting left means catching issues at authoring, not at merge
- Deterministic controls (linters, type systems) prevent entire classes of bugs
- AI agents should generate secure code, not generate vulnerable code for scanners to catch
- The pipeline is a safety net, not a crutch
- Implication: invest in IDE/local controls first, CI as defense-in-depth

### Slide 11: Concept — Static Application Security Testing (SAST)

- What: analyzing source code for vulnerability patterns without execution
- Why: catches bugs at authoring, before runtime
- Two approaches: semantic analysis (deep, slow) vs pattern matching (fast, shallow)

### Slide 12: SAST — Tools by Environment

- **Local/IDE**: Semgrep (pattern-based, fast, custom rules, 30+ langs), ESLint security plugins, SonarLint
- **CI**: CodeQL (semantic, dataflow + taint tracking, 10+ languages), Semgrep CI
- Note: Semgrep is 10-50x faster than CodeQL but can't track taint across functions. Complementary.

### Slide 13: Concept — Software Bill of Materials (SBOM)

- What: machine-readable inventory of every component
- Why: can't protect what you can't see; required for compliance
- Two formats: CycloneDX (OWASP) vs SPDX (Linux Foundation)

### Slide 14: SBOM — Tools

- **CI**: Syft (dedicated, CycloneDX 1.5 + SPDX), Trivy (also generates SBOMs as side feature)
- **Deploy**: Admission controllers verify SBOM before pod creation
- Note: Syft is dedicated. Trivy is multi-purpose. Use one for SBOM.

### Slide 15: Concept — Supply Chain Integrity

- What: ensuring dependencies and artifacts haven't been tampered with
- Why: typosquatting, dependency confusion, compromised base images
- SLSA framework: 4 levels of supply chain security

### Slide 16: Supply Chain Integrity — Tools

- **Local**: Safe-Chain (72hr package age + hash, blocks malicious packages at install time)
- **CI/Build**: Syft (SBOM generation), SLSA provenance attestation
- **Deploy**: Cosign/Sigstore (keyless artifact signing), admission controllers verify signatures
- Note: Safe-Chain protects install time. Cosign protects deploy time. Different stages.

### Slide 17: Concept — Dependency Management

- What: automating updates to keep dependencies current
- Why: outdated = known vulns; AI agents generate code against stale versions

### Slide 18: Dependency Management — Tools

- **CI**: Renovate (automated PRs, configurable release age), Dependabot (GitHub-native, zero-setup)
- Note: Renovate is more configurable. Dependabot is simpler.

### Slide 19: Concept — Repository Posture Assessment

- What: evaluating whether a repo follows security best practices
- Why: individual scans find vulns; posture finds process gaps

### Slide 20: Posture Assessment — Tools

- **CI (scheduled)**: OpenSSF Scorecard (18+ checks: branch protection, signed commits, pinned deps, token permissions)
- Note: Run weekly, not per-PR. Expensive but comprehensive.

### NARRATIVE SLIDE 21: Deterministic > Non-Deterministic

- Linters and type systems are deterministic: same input → same output, every time
- LLMs are non-deterministic: same prompt → different output across sessions
- For security, determinism is non-negotiable
- Implication: hard constraints (ESLint, TypeScript strict, OPA) must be the backbone
- AI adds context-aware reasoning on top, but can never replace the deterministic layer
- "Soft prompts instruct. Hard constraints enforce."

### Slide 22: Concept — Infrastructure as Code (IaC) Scanning

- What: detecting misconfigurations in Terraform, CloudFormation, K8s manifests
- Why: cloud misconfigs are the #1 cause of data breaches

### Slide 23: IaC Scanning — Tools

- **Local/IDE**: Checkov (1000+ policies, Terraform/CloudFormation/ARM)
- **CI**: Checkov, tfsec (Terraform-specific, fast), Conftest (OPA/Rego for IaC plans)
- Note: Checkov covers broadest scope. tfsec is Terraform-focused.

### Slide 24: Concept — Container Scanning

- What: scanning container images for vulns and misconfigs
- Why: containers bundle OS packages + app deps, both can be vulnerable

### Slide 25: Container Scanning — Tools

- **CI**: Trivy (most popular, vulns + IaC + SBOM in one binary), Grype (SBOM-native, 8 advisory sources)
- **Deploy**: Admission controllers verify image signatures
- Note: Trivy is multi-purpose. Grype is SBOM-native cross-check.

### Slide 26: Concept — Dynamic Application Security Testing (DAST)

- What: testing running application from the outside
- Why: finds runtime issues SAST can't (auth flaws, business logic, SSRF)

### Slide 27: DAST — Tools

- **CI/Stage**: OWASP ZAP (open-source, intercepting proxy, automated scanning), Burp Suite (commercial, industry standard)
- Note: DAST is typically a separate pipeline stage, not inline with SAST/SCA.

### Slide 28: Concept — Policy Enforcement (Policy-as-Code)

- What: defining security rules as code, evaluated automatically
- Why: eliminates manual review bottlenecks, consistent enforcement across repos

### Slide 29: Policy Enforcement — Tools

- **CI/Deploy**: OPA/Rego (general-purpose, works across K8s, CI, API gateways), Conftest (OPA for IaC)
- **CI**: Nx module boundary enforcement (tag-based import rules)
- Note: OPA is the industry standard for policy-as-code.

### Slide 30: Concept — Artifact Signing & Provenance

- What: cryptographic proof that an artifact came from a specific pipeline and source
- Why: prevents tampering between build and deploy

### Slide 31: Artifact Signing — Tools

- **Build**: SLSA provenance attestation (links artifact → build → commit)
- **Deploy**: Cosign/Sigstore (keyless, OIDC-based, no key management)
- Note: SLSA proves provenance. Cosign proves integrity. Both needed.

### Slide 32: Concept — Runtime Security & Monitoring

- What: detecting anomalies in production
- Why: security doesn't stop at deploy

### Slide 33: Runtime Security — Tools

- **Runtime**: Falco (syscall monitoring, anomaly detection)
- **Runtime (AI)**: 3-Gate Pattern (PII → Sanitize → Injection scan for agent inputs)
- Note: Runtime is outside CI/CD scope. Separate systems.

---

## Section 3: AI-Native DevSecOps

### NARRATIVE SLIDE 34: The Agent Trust Problem

- Agents are fast but non-deterministic
- They can write code, run commands, modify infrastructure
- Without constraints, one bad prompt → one bad commit → production breach
- The question is not "can agents write code?" but "how do we constrain them?"
- Implication: agents need the same security controls humans do, plus more

### Slide 35: What is an AI Agent (in SDLC context)

- Not autocomplete, not a chatbot
- Autonomous actor: reads files, runs commands, iterates based on feedback
- Participates in: planning, coding, testing, review, documentation
- Key difference from traditional tools: reasoning capability + multi-step execution

### Slide 36: Agent Harnesses — The Runtime Environment

- What a harness provides: tools, identity, context, constraints

### Slide 37: Agent Harnesses — Config & Constraints

- Config Bundles: pre-loaded system prompts, allowed tools, safety guards
- Constraint files: `CLAUDE.md`, `.cursorrules`, `agents.md`
- Purpose: define what the agent CAN and CANNOT do
- Example: "Never run `rm -rf`. Never modify `/libs/crypto/`. Always run lint after edit."

### NARRATIVE SLIDE 38: Secure-by-Design > Scan-and-Fix

- Traditional: write code → scan → find vulns → fix → rescan
- AI-native: constrain the agent → agent generates secure code → deterministic verification

### NARRATIVE SLIDE 39: Why Prevention is Cheaper

- Scanning catches known patterns. Design prevents entire categories.
- Fixing vulns after generation is expensive. Preventing them is free.
- Deterministic gates (linters, type systems) are cheaper than SAST runs.
- The shift: move security INTO the agent's constraints, not just AFTER its output

### NARRATIVE SLIDE 40: The Two Layers

- Prevention layer: `CLAUDE.md` + TypeScript strict + ESLint security rules
- Verification layer: CodeQL / Semgrep (defense-in-depth, not primary defense)
- Example: ESLint `no-eval` rule prevents eval injection. CodeQL catches what ESLint misses.
- Both needed, but prevention comes first.

### Slide 41: Context Architecture — 3-Layer Instructions

- System Layer: base persona, safety rules (harness-level)
- Project Layer: tech stack, coding standards, security requirements (`CLAUDE.md`)
- Task Layer: immediate prompt or spec for current session
- Without structured context → "context drift" → hallucinations

### Slide 42: Spec-Driven vs Prompt-Driven Development

- **Prompt-Driven**: conversational, exploratory, non-deterministic
  - Fast for prototyping, bad for security
  - Intent buried in chat history, hard to audit
- **Spec-Driven**: durable, version-controlled specs (`spec.md`)
  - Agent treats spec as source of truth
  - Implementation verified against spec via tests
  - Security requirements preserved through implementation

### Slide 43: The Non-Determinism Problem

- Same prompt → different output across sessions
- Example: Session A fixes SQL injection correctly. Session B uses insecure string-escape.
- Impact: inconsistent security posture, evades deterministic SAST rules
- Mitigation: deterministic gates (linters, type systems, OPA) clamp agent output

### Slide 44: MCP — Model Context Protocol

- "USB-C for agents": unified interface for tool integration
- Created by Anthropic, donated to Linux Foundation (Dec 2025)
- Supported by: Anthropic, OpenAI, Google, Microsoft, GitHub, Cursor
- Opportunities: tool reuse, contextual richness (Slack, Jira, APIs)
- Risks: excessive agency, prompt injection via tool descriptions, input injection
- Mitigation: 3-Gate Pattern (PII → Sanitize → Injection scan)

### Slide 45: MCP Registries & Directories

- **Official MCP Registry** (registry.modelcontextprotocol.io): authoritative source of truth, backed by Anthropic/GitHub/Microsoft. REST API for discovery. Downstream registries sync from here.
- **Glama** (glama.ai): ~29,700 servers, curated with security scorecards, quality scoring, vulnerability checks. Best for production use.
- **Smithery** (smithery.ai): ~7-8k servers, package-manager approach, installability focus, manual review.
- **ClawHub** (clawhub.ai): OpenClaw's skill registry, ~10,700 skills. Had the **ClawHavoc** incident (2026): 341-1,184 malicious skills with keyloggers, malware, exfiltration. Lesson: open publishing + no vetting = supply chain attack.

### NARRATIVE SLIDE 46: Agents Need the Same Controls as Humans

- Human developers: constrained by branch protection, code review, CI gates
- AI agents: must be constrained by the SAME controls, plus additional ones
- Agent-specific controls:
  - Unique identity (not sharing human credentials)
  - Scoped tokens (minimum permissions per task)
  - Audit trail (prompt → reasoning → action → approval)
  - Deterministic gates > soft prompts
- Principle: if a human can't bypass the gate, neither can the agent

### Slide 47: AI Governance — Agent IAM

- Unique Agent IDs: separate service accounts, not shared human creds
- Short-lived tokens: scoped to specific tasks, auto-expire
- Automatic logoff: invalidate sessions after inactivity
- Human-in-the-Loop (HITL): mandatory approval for privilege-elevating actions

### Slide 48: AI Governance — Audit Trail

- Prompt logging: capture all system/user prompts, immutable
- Reasoning metadata: chain of thought stored with PR
- Commit labeling: `Co-authored-by: Claude`, `ai-generated`, `ai-remediated`
- Non-repudiation: signed commits for all agent-originated changes

### Slide 47: AI Governance — Policy-as-Code for Agents

- Auth/Crypto: block agent modifications to security-critical code without human approval
- Infrastructure: prevent agents from modifying IAM/Security Groups unless task labeled
- Tool Abuse: disallow `rm -rf`, `curl` unless verified against allowlist
- Enforcement: OPA/Rego gates, MCP Gateway

### Slide 48: AI Governance — RAG Security

- Permission-aware retrieval: agents only see data they're authorized to access
- Namespace isolation: multi-tenant environments must isolate embedding namespaces
- RAG Triad: Context Relevance, Groundedness, Answer Relevance
- Groundedness verification: filter hallucinations before they reach output

### Slide 51: Concept — Skills for AI Agents

- What: reusable, structured instructions that teach agents domain-specific workflows
- Why: agents need more than generic prompts — they need expert knowledge
- Skill anatomy: YAML frontmatter (name, description, domain, tags, framework mappings) + Markdown body (workflow, verification, prerequisites)
- Skills are composable: an agent can load multiple skills for a complex task
- Example: a "SAST" skill teaches the agent how to run Semgrep, interpret results, and file findings

### Slide 52: Skill Directories & Libraries

- Anthropic Cybersecurity Skills: 754 open-source skills across 26 security domains
- claude-cybersecurity: single skill, spawns 8 parallel specialist agents for code audit
  - Vulnerability Scanner, Authorization Reviewer, Secret Scanner, Dependency Auditor, IaC Scanner,
- ruflo plugins: ruflo-aidefence, ruflo-security-audit, ruflo-jujutsu, ruflo-testgen

---

## Section 4: Pipeline Assembly

### Slide 50: The Pipeline — Station Overview

- Visual: 6 stations, what happens at each, which concept applies
- Dependencies → IDE → CI → Build → Deploy → Audit
- Each station adds a security control
- Product can't leave a station without passing inspection

### Slide 51: The Pipeline — CI Order (9 Steps)

1. Checkout
2. Dependency Review
3. OWASP Dep-Check (fail at CVSS ≥ 7.0)
4. Renovate
5. Secret Scanning (regex + entropy)
6. SAST (CodeQL / Semgrep)
7. OpenSSF Scorecard
8. Agentic Security Audit (AI review)
9. SBOM + Policy Gate

### Slide 52: Reference Implementation

- One slide: example of a working pipeline (devsecops-actions or similar)
- What it covers: SCA, SAST, secrets, SBOM, supply chain, posture
- Not the only way, but a concrete working example

### Slide 53: Concept — Monorepo Orchestration

- What: managing multiple projects in a single repository with shared tooling
- Why: shared code, consistent tooling, deep dependency analysis across services
- Challenge: as codebase grows, running all tests/scans on every PR becomes slow and expensive

### Slide 54: Monorepo Orchestration — Tools

- **Nx**: build system and task runner for monorepos
  - Project Graph: auto-discovers dependencies between projects
  - Affected Commands: `nx affected -t test` — only scans projects impacted by a PR
  - Module Boundaries: tag-based rules prevent illegal imports (e.g., client app importing server secrets)
  - Computation Hashing: identical source + deps = identical build output (prevents build drift)

### Slide 55: Concept — Self-Healing CI

- What: AI automatically detects and proposes fixes for CI failures
- Why: reduces "Time to Green" — no more manual PR babysitting for lint/format errors
- Key insight: deterministic failures (formatting, imports, lint) can be fixed automatically. Security failures need human review.

### Slide 56: Self-Healing CI — Tools

- **Nx Self-Healing CI**: `npx nx fix-ci` added to pipeline with `if: always()`
  - AI analyzes failure using project graph context
  - Proposes fixes as PR comments with diff views
  - Auto-apply for deterministic checks (format, sync, conformance)
  - Configurable via `.nx/SELF_HEALING.md`: off-limits areas, confidence rules
- **Off-limits**: `/libs/crypto/`, `/infra/` — never auto-fix, require human review

---

## Section 5: Standards Deep-Dive

### Slide 55: OWASP Top 10 (2025) — Overview

- What it is, why it matters, updated annually
- Each item maps to pipeline station + tool

### Slide 56: OWASP Top 10 — A01 to A03

- A01: Broken Access Control → IAM, RBAC
- A02: Cryptographic Failures → TLS, KMS
- A03: Injection → CodeQL, Semgrep, ZAP

### Slide 57: OWASP Top 10 — A04 to A06

- A04: Insecure Design → Threat modeling, STRIDE
- A05: Security Misconfiguration → Checkov, CIS Benchmarks
- A06: Vulnerable Components → Trivy, Grype, Snyk, Renovate

### Slide 58: OWASP Top 10 — A07 to A10

- A07: Auth Failures → IAM scanners, MFA
- A08: Integrity Failures → Cosign, SLSA
- A09: Logging Failures → SIEM, Sigma rules
- A10: SSRF → ZAP, URL allowlisting

### Slide 59: OWASP LLM Top 10 (2025) — Overview

- What it is, first published 2025, AI-specific risks
- Why traditional OWASP doesn't cover these

### Slide 60: OWASP LLM Top 10 — LLM01 to LLM03

- LLM01: Prompt Injection → 3-Gate Pattern, input sanitization
- LLM02: Sensitive Info Disclosure → PII redaction, log filtering
- LLM03: Supply Chain → Slopsquatting, package age verification

### Slide 61: OWASP LLM Top 10 — LLM04 to LLM06

- LLM04: Data & Model Poisoning → training data validation
- LLM05: Improper Output Handling → deterministic post-processing
- LLM06: Excessive Agency → scoped tokens, least privilege, HITL

### Slide 62: OWASP LLM Top 10 — LLM07 to LLM10

- LLM07: System Prompt Leakage → prompt isolation
- LLM08: Vector/Embedding Weaknesses → permission-aware RAG
- LLM09: Misinformation → groundedness verification, RAG Triad
- LLM10: Unbounded Consumption → rate limiting, Denial of Wallet

### Slide 63: SLSA Framework

- Levels 1-4 explained
- What each level requires in practice

### Slide 64: SBOM Mandates & Formats

- EO 14028, EU CRA
- CycloneDX vs SPDX
- Minimum elements

### Slide 65: NIST CSF 2.0

- 5 functions: Identify, Protect, Detect, Respond, Recover
- Mapped to pipeline concepts

---

## Section 6: Adoption & Closing

### Slide 66: Adoption Roadmap

- Phase 1: Foundation (pre-commit, SAST, SCA)
- Phase 2: Hardening (SBOM, signing, policy gates)
- Phase 3: AI-Native (agents, self-healing)

### Slide 67: Maturity Model (5 Levels)

- L1 Ad-hoc: Manual reviews, no automation
- L2 Repeatable: SAST/SCA in CI, pre-commit hooks
- L3 Defined: Monorepo, SBOM, policy-as-code
- L4 Managed: Agentic reviews, signed provenance
- L5 Optimizing: Self-healing CI, autonomous remediation

### Slide 68: Summary & Q&A

---

## Appendix (separate, shown on demand)

### Appendix A: Regulatory Mapping

- PCI DSS 4.0.1 — Req 6.2.3, 6.2.4, 10.2.1
- HIPAA §164.312 — unique user ID, emergency access, transmission security
- GDPR Art. 25 & 32 — privacy by design, data minimization, 3-gate PII

### Appendix B: Reference Configurations

- GitHub Actions pipeline YAML
- nx.json module boundaries
- .nx/SELF_HEALING.md

### Appendix C: SBOM Risk Scoring

- Component risk formula, blast radius metrics, thresholds

### Appendix D: Glossary

- Full term definitions

---

## Narrative Slides Summary

| Slide | Title                                   | Argument                                                                                           |
| ----- | --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 10    | Prevention > Detection                  | Catch issues at authoring, not at merge. Invest in IDE/local first.                                |
| 21    | Deterministic > Non-Deterministic       | Hard constraints enforce. Soft prompts instruct. Determinism is non-negotiable for security.       |
| 34    | The Agent Trust Problem                 | Agents need the same controls as humans, plus more. One bad prompt = production breach.            |
| 38    | Secure-by-Design > Scan-and-Fix         | Move security INTO agent constraints, not just AFTER output. Prevention is cheaper than detection. |
| 43    | Agents Need the Same Controls as Humans | If a human can't bypass the gate, neither can the agent. Same controls + agent-specific ones.      |
