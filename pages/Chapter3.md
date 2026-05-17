---
layout: cover
background: https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop
---

# The Reference Architecture

Balancing agentic speed with enterprise security rigor.

---
layout: default
---

# Architectural Principles

The AI-native DevSecOps architecture is built on four core principles.

<div class="grid grid-cols-2 gap-5 mt-6">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-teal)] mb-2">1. Defense-in-Depth</h3>
    <p class="text-sm">Multiple overlapping layers (Local → CI → Build → Runtime). If an agent bypasses one control, others catch it.</p>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-blue)] mb-2">2. Least Privilege by Default</h3>
    <p class="text-sm">Agents and tools receive minimum necessary permissions, enforced via scoped tokens and isolated MCPs.</p>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-yellow)] mb-2">3. Reproducibility & Determinism</h3>
    <p class="text-sm">LLMs are non-deterministic, but the process must be. Enforced via strict linting, types, and Smoke Tests.</p>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-red)] mb-2">4. Continuous Observability</h3>
    <p class="text-sm">Every agent action, tool invocation, and prompt is logged to provide a clear audit trail.</p>
  </div>
</div>

---
layout: default
---

# Developer Environment & Source Control

Security begins where code is generated.

<div class="mt-4 space-y-4">
  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-lightblue)] text-lg border-b border-gray-700 pb-2 mb-4">Developer Environment (IDE)</h3>
    <ul class="text-sm space-y-2 text-gray-300">
      <li><strong>Local Agent Constraints:</strong> `CLAUDE.md` and `.cursorrules` enforce secure coding standards locally.</li>
      <li><strong>Pre-commit Hooks:</strong> Automated hooks run `Gitleaks`/`TruffleHog` (secrets) and ESLint/Prettier (quality).</li>
      <li><strong>Real-time SAST/SCA:</strong> IDE plugins flag vulnerable dependencies as agents type them.</li>
    </ul>
  </div>

  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-teal)] text-lg border-b border-gray-700 pb-2 mb-4">Source Control Governance</h3>
    <ul class="text-sm space-y-2 text-gray-300">
      <li><strong>Branch Protection:</strong> Critical branches require passing status checks and signed commits.</li>
      <li><strong>CODEOWNERS Enforcement:</strong> Human review mandated for `/infra` or `/auth` regardless of who generated the change.</li>
      <li><strong>Commit Signing:</strong> All AI-generated commits must be cryptographically signed (GPG/SSH).</li>
    </ul>
  </div>
</div>

---
layout: default
---

# Monorepo Build & CI/CD Pipeline

Orchestrating tasks with maximum efficiency and security.

<div class="mt-4 space-y-4">
  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg border-b border-gray-700 pb-2 mb-4">Task Orchestration (Nx)</h3>
    <ul class="text-sm space-y-2 text-gray-300">
      <li><strong>Affected Commands:</strong> `nx affected` limits CI noise and token usage for AI reviewers.</li>
      <li><strong>Module Boundaries:</strong> Tag-based enforcement prevents illegal imports (e.g., client app importing server secrets).</li>
      <li><strong>Self-Healing CI:</strong> AI agents automatically repair deterministic linting or formatting failures.</li>
    </ul>
  </div>

  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-blue)] text-lg border-b border-gray-700 pb-2 mb-4">CI/CD Pipeline (GitHub Actions)</h3>
    <ul class="text-sm space-y-2 text-gray-300">
      <li><strong>Composite Actions:</strong> Modular, reusable components for SCA and SAST (`devsecops-actions`).</li>
      <li><strong>SARIF Unified Visibility:</strong> CodeQL, Trivy outputs are centralized in a "Single Pane of Glass".</li>
      <li><strong>Version Pinning:</strong> Pipeline actions are pinned to specific Commit SHAs to prevent supply-chain compromise.</li>
    </ul>
  </div>
</div>

---
layout: default
---

# Artifact Integrity & Runtime Security

Ensuring provenanced output and protected execution.

<div class="mt-4 space-y-4">
  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-teal)] text-lg border-b border-gray-700 pb-2 mb-4">Artifact Integrity</h3>
    <ul class="text-sm space-y-2 text-gray-300">
      <li><strong>SBOM Generation:</strong> Automatic CycloneDX 1.5 generation using `Syft` for transparent inventory.</li>
      <li><strong>SLSA Provenance:</strong> The Safe-Chain model links final artifacts back to specific builds and commits.</li>
      <li><strong>Container Signing:</strong> Sigstore/Cosign ensures only verified images enter production.</li>
    </ul>
  </div>

  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-red)] text-lg border-b border-gray-700 pb-2 mb-4">Runtime & Production Security</h3>
    <ul class="text-sm space-y-2 text-gray-300">
      <li><strong>Admission Controllers:</strong> Kubernetes validates image signatures and SBOMs before execution.</li>
      <li><strong>AI Anomaly Detection:</strong> Tools like Falco detect unusual system calls indicating "Excessive Agency" exploits.</li>
    </ul>
  </div>
</div>

---
layout: default
---

# AI Governance & Knowledge Security

Governing the agents and their reasoning context.

<div class="mt-4 space-y-4">
  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-blue)] text-lg border-b border-gray-700 pb-2 mb-4">AI Governance Layer</h3>
    <ul class="text-sm space-y-2 text-gray-300">
      <li><strong>Agent Identity (IAM):</strong> Unique identities authenticated via short-lived, scoped tokens.</li>
      <li><strong>The 3-Gate Pattern:</strong> 1) PII Redaction, 2) Token Sanitization, 3) Injection Scanning.</li>
      <li><strong>Prompt Logging & Audit:</strong> Centralized logs recording every intent (Prompt) and action (Tool Call).</li>
    </ul>
  </div>

  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg border-b border-gray-700 pb-2 mb-4">Knowledge & Vector Security (RAG)</h3>
    <ul class="text-sm space-y-2 text-gray-300">
      <li><strong>Permission-Aware Retrieval:</strong> Fine-grained access control preventing context leakage.</li>
      <li><strong>Groundedness Verification:</strong> The RAG Triad filters poisoned knowledge entries before LLM generation.</li>
    </ul>
  </div>
</div>

---
layout: default
---

# Continuous Compliance

Automating regulatory artifacts as part of the SDLC.

<div class="bg-[var(--slidev-theme-code-background)] p-5 rounded-lg mt-6 border border-[var(--slidev-theme-code-border)]">
  <h3 class="font-bold text-[var(--slidev-theme-accents-lightblue)] text-xl mb-6">Compliance & Audit Layer</h3>
  <ul class="text-sm space-y-4 text-gray-300">
    <li><strong>Policy-as-Evidence:</strong> Mapping OPA/Rego passes directly to PCI DSS 4.0.1 and SOC 2 requirements.</li>
    <li><strong>Immutable Evidence Store:</strong> Automated archiving of signed SBOMs, SLSA provenance, and agent reasoning logs in a write-once repository.</li>
    <li><strong>Compliance-as-Code (CaC):</strong> Agents maintain a "Compliance Graph" linking architecture to GDPR, HIPAA, and NIST controls.</li>
  </ul>
</div>