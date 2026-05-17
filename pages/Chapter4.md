---
layout: cover
background: https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop
---

# Chapter 4
The AI-Native DevSecOps Workflow

A High-Velocity Feedback Loop from spec to production.

---
layout: default
---

# 4.1 Workflow Overview

Transforming linear SDLC into a **High-Velocity Feedback Loop** with self-healing.

<div class="flex justify-center mt-10">
  <div class="flex items-center space-x-2">
    <div class="bg-[var(--slidev-theme-code-background)] p-2 rounded">Plan (A)</div>
    <div class="text-[var(--slidev-theme-accents-teal)]">→</div>
    <div class="bg-[var(--slidev-theme-code-background)] p-2 rounded">Local (B)</div>
    <div class="text-[var(--slidev-theme-accents-teal)]">→</div>
    <div class="bg-[var(--slidev-theme-code-background)] p-2 rounded">CI (C)</div>
    <div class="text-[var(--slidev-theme-accents-teal)]">→</div>
    <div class="bg-[var(--slidev-theme-code-background)] p-2 rounded">Build (D)</div>
    <div class="text-[var(--slidev-theme-accents-teal)]">→</div>
    <div class="bg-[var(--slidev-theme-code-background)] p-2 rounded">Deploy (E)</div>
  </div>
</div>

<FancyArrow from="(700, 300)" to="(180, 270)" color="var(--slidev-theme-accents-yellow)" width="2" bowing="0.2" arc="0.5">
  <template #tail>
    <div class="text-sm absolute -mt-6">Feedback (F)</div>
  </template>
</FancyArrow>

---
layout: default
---

# 4.2 Phase A: Planning & Threat Modeling

"Secure-by-design" code generation.

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

**4-Step Threat Modeling**:
1. Scoping (Decomposition)
2. Threat ID (STRIDE)
3. Countermeasures
4. Verification

**AI-Assisted Reconnaissance**:
- Map Trust Boundaries.
- STRIDE Analysis.

</div>
<div>

**Secure Prompt Templates**:
*Instead of:* "Write a login function"
*Use:*
> "Implement a login function using Argon2id for hashing, enforcing a minimum entropy of 60 bits, and integrating with `rate-limit` middleware in `libs/shared/auth`."

</div>
</div>

---
layout: default
---

# 4.3 Phase B & 4.4 Phase C

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

**4.3 Phase B: Local Development**
*The "Security Spellchecker" effect.*

**Agent Constraints (`CLAUDE.md`)**:
- Linter enforcement (`npm run lint`)
- Type Safety (`strict: true`)

**Real-time SAST/SCA**:
- Inline IDE annotations (Snyk)

**Pre-commit Gates**:
1. Secret Scan (Gitleaks, TruffleHog)
2. Lint & Format (ESLint, Prettier)
3. Type Check (`tsc`)

</div>
<div>

**4.4 Phase C: Pre-Merge CI**
*The 9-step "Defense in Depth" pipeline:*

<v-clicks>

1. Repo Checkout
2. Dependency Review
3. OWASP Dependency-Check (fail ≥ 7.0)
4. Renovate Integration
5. Multi-Engine Secret Scan
6. CodeQL SAST
7. OpenSSF Scorecard
8. **Agentic Security Audit (ruflo-jujutsu)**
9. SBOM & Policy Gate (OPA/Rego)

</v-clicks>

</div>
</div>

---
layout: default
---

# 4.5 Phase D & 4.6 Phase E

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

**4.5 Phase D: Build, Sign, SBOM**
*Producing a secured artifact.*

**Deterministic Builds**:
Nx Computation Hashing prevents "build drift".

**SBOM & Provenance**:
- `Syft` for CycloneDX 1.5 JSON.
- SLSA Attestation via Safe-Chain.

**Container Signing**:
- Sigstore/Cosign.

</div>
<div>

**4.6 Phase E: Runtime**

**Environment Policies**:
K8s admission controllers verify SBOM and signature.

**3-Gate Pattern**:
1. Pre-storage PII detection.
2. Token sanitization.
3. Prompt-injection scanning.

**RAG Triad Gate**:
Context Relevance, Groundedness, Answer Relevance.

</div>
</div>

---
layout: section
---

# 4.7 Phase F: Feedback & Self-Healing

Failures in CI are learning opportunities.

- `nx fix-ci`: Agent analyzes, diagnoses, and repairs deterministic failures.
- **Improvement Loops**: Store findings in `AgentDB` (`security-findings` namespace).