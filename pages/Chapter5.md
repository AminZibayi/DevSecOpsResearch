---
layout: cover
background: https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop
---

# Chapter 5
Tooling Deep-Dive & Feature Matrix

The ecosystem powering AI-Native pipelines.

---
layout: default
---

# 5.1 & 5.2 Harnesses & Testing

<div class="grid grid-cols-2 gap-4 mt-8">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-teal)]">Agent Harnesses</h3>
    <ul class="mt-2 text-sm">
      <li><strong>Claude Code</strong>: CLI, multi-agent skills.</li>
      <li><strong>GitHub Copilot</strong>: Plan → Implement → Review.</li>
      <li><strong>Cursor/Windsurf</strong>: Shadow-git diffs.</li>
      <li><strong>Gemini CLI</strong>: Enterprise Google Cloud focus.</li>
    </ul>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-blue)]">Testing (SAST/SCA/IaC)</h3>
    <ul class="mt-2 text-sm">
      <li><strong>CodeQL/Semgrep</strong>: Semantic & guardrail SAST.</li>
      <li><strong>OWASP/OSV/Renovate</strong>: Dependency hygiene.</li>
      <li><strong>Trivy/Checkov</strong>: Container & IaC compliance.</li>
    </ul>
  </div>
</div>

---
layout: default
---

# 5.3 to 5.5 Supply Chain, Orchestration, AI Gov

<v-clicks>

**5.3 Supply Chain**:
`Syft` (SBOMs), `Sigstore/Cosign` (Signing), `SLSA` (Provenance).

**5.4 Monorepo Orchestration**:
`Nx` (Affected graphs, Self-healing), `GitHub Actions` (Composite actions).

**5.5 AI Security & Governance Tools**:
- `ruflo-aidefence`: 3-Gate firewall.
- `claude-cybersecurity`: Context-aware audits.
- `ruflo-jujutsu`: Diff-aware risk scoring.
- `MCP Gateway`: Centralized tool allowlist proxy.

</v-clicks>

---
layout: default
---

# 5.6 Feature Matrix & 5.7 Decision Tree

| Feature | Deterministic SAST | AI Security Skill | Supply-Chain Actions |
| --- | --- | --- | --- |
| **Primary Strength** | CWE Pattern Matching | Business Logic & Design | Supply Chain Integrity |
| **False Positives** | Low | Variable | Very Low |

<div class="mt-8 bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-yellow)]">
  <div class="font-bold mb-2">Tool Selection Logic:</div>
  <ul class="text-sm">
    <li>AI Agents? ➜ <strong>ruflo-aidefence</strong></li>
    <li>Monorepo? ➜ <strong>Nx</strong></li>
    <li>Regulated? ➜ <strong>Syft + Cosign + SLSA</strong></li>
    <li>Large Team (>200)? ➜ <strong>MCP Gateway + OPA</strong></li>
  </ul>
</div>