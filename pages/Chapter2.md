---
layout: cover
background: https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop
---

# Chapter 2
Threat Model for AI-Native Systems

Adapting OWASP and STRIDE for agentic autonomy.

---
layout: default
---

# 2.1 The Structured Threat Modeling Process

Iterative process adapted for AI-native autonomy.

1. **Scope the Work**: Map Entry Points, Exit Points, and Trust Levels.
2. **Determine Threats**: STRIDE methodology.
3. **Determine Countermeasures**:
   - Eliminate
   - Mitigate
   - Accept
   - Transfer
4. **Assess the Work**: Verification of diagrams and controls.

---
layout: default
---

# 2.2 STRIDE in Agentic Workflows

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

| Threat | Example Scenario |
| --- | --- |
| **Spoofing** | Compromised agent scoped token. |
| **Tampering** | Indirect Prompt Injection via README. |
| **Repudiation** | Lack of audit for AI-originated changes. |

</div>
<div>

| Threat | Example Scenario |
| --- | --- |
| **Info Disclosure** | Ingesting unmasked `.env` files. |
| **DoS** | MCP stdin buffer exhaustion. |
| **EoP** | Agent running `chmod +s /bin/bash`. |

</div>
</div>

---
layout: default
---

# 2.3 OWASP Top 10 for LLMs (2025)

The definitive baseline for securing agentic systems:

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">
  <ul>
    <li><span class="text-[var(--slidev-theme-accents-red)]">LLM01:</span> Prompt Injection</li>
    <li><span class="text-[var(--slidev-theme-accents-red)]">LLM02:</span> Sensitive Info Disclosure</li>
    <li><span class="text-[var(--slidev-theme-accents-red)]">LLM03:</span> Supply Chain (Slopsquatting)</li>
    <li><span class="text-[var(--slidev-theme-accents-red)]">LLM04:</span> Data & Model Poisoning</li>
    <li><span class="text-[var(--slidev-theme-accents-red)]">LLM05:</span> Improper Output Handling</li>
  </ul>
  <ul>
    <li><span class="text-[var(--slidev-theme-accents-red)]">LLM06:</span> Excessive Agency</li>
    <li><span class="text-[var(--slidev-theme-accents-red)]">LLM07:</span> System Prompt Leakage</li>
    <li><span class="text-[var(--slidev-theme-accents-red)]">LLM08:</span> Vector/Embedding Weaknesses</li>
    <li><span class="text-[var(--slidev-theme-accents-red)]">LLM09:</span> Misinformation (Hallucinations)</li>
    <li><span class="text-[var(--slidev-theme-accents-red)]">LLM10:</span> Unbounded Consumption</li>
  </ul>
</div>

---
layout: default
---

# 2.4 AI-Specific Attack Vectors

1. **Prompt Injection via "Data-as-Code"**: e.g., `/* system: ignore all previous instructions */` embedded in source files.
2. **MCP Server Compromise**: Tool-Description Poisoning (e.g., altering `read_file` to perform destructive acts).
3. **Slopsquatting**: Attackers publishing malware using hallucinated package names frequently suggested by LLMs.
4. **Non-Deterministic Security Posture Drift**: The same fix prompt yields different, sometimes insecure, results across sessions.

---
layout: section
---

# 2.5 Trust Boundaries

Human → Agent → Tool (MCP) → Infrastructure. Data → Agent (Injection Boundary).

---
layout: default
---

# 2.6 Traditional vs AI-Native SDLC

<div class="grid grid-cols-2 gap-8 mt-4">
<div>
<v-clicks>

- **Actor**: Human (High Trust, Low Speed) ➜ Agent (Variable Trust, Extreme Speed).
- **Vuln Source**: Human Error ➜ AI Hallucination + Injection.
- **Scanning**: Deterministic (SAST) ➜ Hybrid (SAST + Agentic).

</v-clicks>
</div>
<div>
<v-clicks>

- **Supply Chain**: Typosquatting ➜ Slopsquatting.
- **Audit Trail**: Clear Commits ➜ Complex Prompts/Proposals.
- **Threat Surface**: Static Code ➜ Prompts, MCP Descriptions, Project Memory.

</v-clicks>
</div>
</div>