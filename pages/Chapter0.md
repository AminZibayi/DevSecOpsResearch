---
layout: cover
background: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop
---

# Chapter 0
Introduction & Definitions

The transition towards AI-Native DevSecOps.

---
layout: default
---

# 0.1 The Evolution: DevOps → DevSecOps → AI-Native

The trajectory of software engineering towards frictionless development.

<div class="grid grid-cols-3 gap-4 text-center mt-10">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <div class="text-xl font-bold text-[var(--slidev-theme-accents-teal)]">DevOps</div>
    <div class="text-sm mt-2">Broke silos, emphasized automation, CI/CD.</div>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <div class="text-xl font-bold text-[var(--slidev-theme-accents-blue)]">DevSecOps</div>
    <div class="text-sm mt-2">Shifted left, integrating SAST/SCA/DAST early.</div>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <div class="text-xl font-bold text-[var(--slidev-theme-accents-yellow)]">AI-Native</div>
    <div class="text-sm mt-2">LLMs & Agents as first-class SDLC participants.</div>
  </div>
</div>

<FancyArrow from="(300, 300)" to="(450, 300)" color="var(--slidev-theme-accents-teal)" width="3" />
<FancyArrow from="(600, 300)" to="(750, 300)" color="var(--slidev-theme-accents-blue)" width="3" />

<!--
AppSec Santa's 2026 study revealed 25.1% of AI-generated code contains vulnerabilities.
AI accelerates security but introduces non-deterministic risks.
-->

---
layout: default
---

# 0.2 Key Definitions

Emerging industry standards for AI-Native DevSecOps.

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

- **Agentic Development**: Autonomous AI agents executing multi-step tasks.
- **AI-Native**: Systems designed for AI collaboration from the ground up.
- **AI-Augmented**: AI as a supportive tool (e.g., autocomplete).
- **Model Context Protocol (MCP)**: The "USB-C" for connecting AI to external tools securely.

</div>
<div>

- **ADLC**: Agentic Development Life Cycle.
- **Slopsquatting**: Supply-chain attack via hallucinated packages.
- **RAG Triad**: Context Relevance, Groundedness, and Answer Relevance.
- **Safe-Chain**: Validating package integrity before installation.

</div>
</div>

---
layout: section
---

# 0.3 Audience & Structure

For **Researchers & Architects** (threat models, theory) and **DevSecOps Engineers** (practical pipelines).

Structured as a **Layered Defense**.

---
layout: default
---

# 0.4 Research Methodology

Synthesized from three distinct data tiers for practical and theoretical soundness.

1. **Tier 1: Standards & Primary Docs**
   OWASP Top 10 for LLMs 2025, NIST, MITRE, GDPR, HIPAA, GitHub, Anthropic.
2. **Tier 2: Tooling & Frameworks**
   Snyk, Semgrep, Checkmarx, SLSA, OpenSSF.
3. **Tier 3: Academic & Expert Analysis**
   IEEE, ACM, Black Hat, DEF CON, Trail of Bits.

**Methodology**: Systematic Literature Review (SLR) + Reference Architecture Design + Structured Threat Modeling.