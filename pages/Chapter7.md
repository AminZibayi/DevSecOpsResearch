---
layout: cover
background: https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop
---

# Chapter 7
Governance, Compliance, and Auditability

Managing agents as first-class SDLC participants.

---
layout: default
---

# 7.1 IAM, 7.2 Audit, 7.3 Compliance

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

**7.1 Agent Identity (IAM)**:
- Unique Agent IDs (Service Accounts).
- Short-Lived, Scoped Tokens.
- Human-in-the-Loop for high-risk actions.

**7.2 Auditability (GDPR Art 39)**:
- "Intent-to-Artifact" Chain (Prompt logging).
- Reasoning Metadata stored in PRs.
- `Co-authored-by: Claude` labels.
- Non-repudiation via Signed Commits.

</div>
<div>

**7.3 Compliance Mapping**:
- **PCI DSS 4.0.1**: Automated AI reviews (Req 6.2.3), centralized logs (Req 10.2.1).
- **HIPAA**: Unique IDs, TLS 1.2+ default, no-plain-text PII rules via `agents.md`.
- **GDPR**: Data Portability endpoints, Data Minimization prompts, 3-Gate PII detection.

</div>
</div>

---
layout: default
---

# 7.4 Policy-as-Code & 7.5 KPIs

**Hard Constraints via OPA/Rego**:
- *Auth/Crypto*: Block modifications without manual approval.
- *Infrastructure*: Restrict IAM modifications.
- *Tool Abuse*: MCP Gateway allowlists.

<div class="grid grid-cols-2 gap-6 mt-8">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="font-bold text-[var(--slidev-theme-accents-lightblue)]">DORA Metrics</h3>
    <ul class="text-sm mt-2">
      <li>Deployment Frequency</li>
      <li>Lead Time for Changes</li>
      <li>Change Failure Rate (CFR)</li>
      <li>Time to Restore Service</li>
    </ul>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="font-bold text-[var(--slidev-theme-accents-teal)]">Security KPIs</h3>
    <ul class="text-sm mt-2">
      <li><strong>Time to Green (TTG)</strong></li>
      <li>Vulnerability Resolution Rate</li>
      <li>Hallucination Rate (Slopsquatting)</li>
    </ul>
  </div>
</div>