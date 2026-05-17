---
layout: cover
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop
---

# Chapter 6
Practical Implementation: The Adoption Roadmap

Transitioning from traditional DevOps to AI-Native.

---
layout: default
---

# 6.1 The Foundation & 6.2 Hardening

**Phase 1: Foundation (Structure & Shift-Left)**
- Monorepo consolidation (`nx init`).
- Conventional & Signed commits.
- Pre-commit hooks (`Husky`, `Gitleaks`, `ESLint`).

**Phase 2: Hardening the Pipeline (CI/CD)**
- Deterministic SCA/SAST (`OWASP`, `CodeQL`).
- SBOM Generation (`Syft`) & SLSA verifications.
- Policy-as-Code (OPA to block PRs).

---
layout: default
---

# 6.3 AI-Native Integration & 6.4 Maturity Model

**Phase 3: AI-Native Integration**
- Rollout `Claude Code`/`Cursor` with `CLAUDE.md` constraints.
- Agentic PR Reviews (`claude-cybersecurity`).
- Self-Healing CI (`nx fix-ci`).

<div class="mt-6 border border-[var(--slidev-theme-code-border)] rounded-lg overflow-hidden">
  <table class="w-full text-sm">
    <tr class="bg-[var(--slidev-theme-code-background)] text-left">
      <th class="p-2">Level</th>
      <th class="p-2">Characteristics</th>
    </tr>
    <tr><td class="p-2 font-bold">1. Ad-hoc</td><td class="p-2">Autocomplete AI only.</td></tr>
    <tr><td class="p-2 font-bold">2. Repeatable</td><td class="p-2">Deterministic CI SAST, pre-commits.</td></tr>
    <tr><td class="p-2 font-bold">3. Defined</td><td class="p-2">Nx Monorepo, SBOM, OPA.</td></tr>
    <tr><td class="p-2 font-bold">4. Managed</td><td class="p-2">Agent PR reviews, signed provenance.</td></tr>
    <tr class="bg-[var(--slidev-theme-code-background)]"><td class="p-2 font-bold text-[var(--slidev-theme-accents-teal)]">5. Optimizing</td><td class="p-2 text-[var(--slidev-theme-accents-teal)]">Self-healing CI, 3-gate runtime.</td></tr>
  </table>
</div>