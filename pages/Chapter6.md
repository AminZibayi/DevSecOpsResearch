---
layout: cover
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop
---

# Practical Implementation

The Adoption Roadmap for transitioning to AI-Native DevSecOps.

---
layout: default
---

# Phase 1: The Foundation

Establishing structural rigor and shifting security to the local developer environment.

<div class="mt-4 space-y-4">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-blue)]">
    <h3 class="font-bold text-white text-lg mb-2">Monorepo Consolidation & Nx Setup</h3>
    <p class="text-sm text-gray-400">Migrate fragmented repositories into a single monorepo (`npx nx init`) to enable deep project graph analysis, allowing security tools to understand relationships.</p>
  </div>

  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-blue)]">
    <h3 class="font-bold text-white text-lg mb-2">"Source of Truth" Governance</h3>
    <p class="text-sm text-gray-400">Implement conventional commits (`devsecops-actions/github/commit`), mandate GPG/SSH commit signing for non-repudiation, and enforce branch protections.</p>
  </div>

  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-blue)]">
    <h3 class="font-bold text-white text-lg mb-2">Shift-Left Local Security</h3>
    <p class="text-sm text-gray-400">Deploy Husky pre-commit hooks for `Gitleaks` and `TruffleHog` to prevent local credential leaks, and configure `eslint-plugin-security` to catch simple flaws.</p>
  </div>
</div>

---
layout: default
---

# Phase 2: Hardening the Pipeline

Introducing deterministic security scanning and supply chain integrity.

<div class="mt-4 space-y-4">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-teal)]">
    <h3 class="font-bold text-white text-lg mb-2">Deterministic Security Scanning</h3>
    <p class="text-sm text-gray-400">Integrate `devsecops-actions/sca`. Deploy OWASP Dependency-Check (fail ≥ 7.0), Multi-Engine Secret Scans (Regex + Entropy), and CodeQL for SAST.</p>
  </div>

  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-teal)]">
    <h3 class="font-bold text-white text-lg mb-2">Supply Chain Integrity (SBOM & SLSA)</h3>
    <p class="text-sm text-gray-400">Generate CycloneDX SBOMs via Syft and implement Safe-Chain/SLSA patterns to verify package integrity and detect malicious holding packages.</p>
  </div>

  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-teal)]">
    <h3 class="font-bold text-white text-lg mb-2">Policy-as-Code Gates</h3>
    <p class="text-sm text-gray-400">Deploy Open Policy Agent (OPA) to categorically block PRs violating architectural boundaries (e.g., Nx `enforce-module-boundaries`) or introducing vulnerabilities.</p>
  </div>
</div>

---
layout: default
---

# Phase 3: AI-Native Integration

Introducing agentic reasoning and autonomous remediation to the workflow.

<div class="mt-4 space-y-4">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-yellow)]">
    <h3 class="font-bold text-white text-lg mb-2">Agent Harness Rollout</h3>
    <p class="text-sm text-gray-400">Deploy Claude Code or Cursor. Commit `CLAUDE.md` and `.nx/SELF_HEALING.md` to the root to provide the agent with hard project constraints.</p>
  </div>

  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-yellow)]">
    <h3 class="font-bold text-white text-lg mb-2">Agentic PR Reviews</h3>
    <p class="text-sm text-gray-400">Integrate an AI security skill (`claude-cybersecurity`). AI audits diffs for business logic flaws and auth bypasses post-SAST completion.</p>
  </div>

  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-yellow)]">
    <h3 class="font-bold text-white text-lg mb-2">Self-Healing CI Experiments</h3>
    <p class="text-sm text-gray-400">Enable `nx fix-ci` in the pipeline (`if: always()`). When builds fail due to lint/test breakage, agents autonomously propose fix PRs to reduce "Time to Green".</p>
  </div>
</div>

---
layout: default
---

# Maturity Model

The 5 Levels of AI-Native DevSecOps capability.

<div class="mt-4 overflow-hidden rounded-lg border border-[var(--slidev-theme-code-border)]">
  <table class="w-full text-sm text-left">
    <thead class="bg-[var(--slidev-theme-code-background)]">
      <tr>
        <th class="p-4 w-24">Level</th>
        <th class="p-4 w-40">Name</th>
        <th class="p-4">Characteristics</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-[var(--slidev-theme-code-border)]">
      <tr>
        <td class="p-4 font-bold">Level 1</td>
        <td class="p-4 font-bold">Ad-hoc</td>
        <td class="p-4 text-gray-400">Manual security reviews, fragmented repos, AI used only for autocomplete.</td>
      </tr>
      <tr>
        <td class="p-4 font-bold">Level 2</td>
        <td class="p-4 font-bold">Repeatable</td>
        <td class="p-4 text-gray-400">Deterministic SAST/SCA in CI, pre-commit hooks, basic linting rules.</td>
      </tr>
      <tr>
        <td class="p-4 font-bold">Level 3</td>
        <td class="p-4 font-bold">Defined</td>
        <td class="p-4 text-gray-400">Monorepo (Nx) adoption, SBOM generation, centralized policy-as-code.</td>
      </tr>
      <tr>
        <td class="p-4 font-bold text-[var(--slidev-theme-accents-teal)]">Level 4</td>
        <td class="p-4 font-bold text-[var(--slidev-theme-accents-teal)]">Managed</td>
        <td class="p-4 text-gray-300">Agentic PR reviews, diff-aware risk scoring, signed provenance for artifacts.</td>
      </tr>
      <tr class="bg-[var(--slidev-theme-code-background)]">
        <td class="p-4 font-bold text-[var(--slidev-theme-accents-yellow)]">Level 5</td>
        <td class="p-4 font-bold text-[var(--slidev-theme-accents-yellow)]">Optimizing</td>
        <td class="p-4 text-gray-200"><strong>AI-Native:</strong> Self-healing CI, autonomous incident response, 3-gate runtime.</td>
      </tr>
    </tbody>
  </table>
</div>