---
layout: cover
background: https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop
---

# Appendices

Glossary, Configurations, and Bibliography.

---
layout: default
---

# Appendix A: Glossary of Terms (1/2)

<div class="mt-4 space-y-4 text-sm text-gray-300">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <strong class="text-white text-lg">Agentic Development</strong>
    <p class="mt-1">A software engineering paradigm where autonomous AI agents perform multi-step tasks (planning, coding, testing, reviewing) by interacting with tools and environments, rather than just generating text.</p>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <strong class="text-white text-lg">AI-Native</strong>
    <p class="mt-1">Systems, repositories, or pipelines designed from the ground up to be primarily operated by or in deep collaboration with AI agents.</p>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <strong class="text-white text-lg">HitL (Human-in-the-Loop)</strong>
    <p class="mt-1">A design pattern where an autonomous process requires explicit human approval before executing a high-risk action (e.g., merging to production, modifying infrastructure).</p>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <strong class="text-white text-lg">MCP (Model Context Protocol)</strong>
    <p class="mt-1">An open standard enabling secure, standardized communication between AI agents and local/remote tools or data sources.</p>
  </div>
</div>

---
layout: default
---

# Appendix A: Glossary of Terms (2/2)

<div class="mt-4 space-y-4 text-sm text-gray-300">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <strong class="text-white text-lg">RAG (Retrieval-Augmented Generation)</strong>
    <p class="mt-1">A technique enhancing LLM responses by fetching relevant context from an external database before generating an answer.</p>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <strong class="text-white text-lg">SAST / SCA</strong>
    <p class="mt-1">Static Application Security Testing (analyzing source code patterns) / Software Composition Analysis (identifying CVEs in third-party dependencies).</p>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <strong class="text-white text-lg">Slopsquatting</strong>
    <p class="mt-1">An AI-era supply chain attack where malicious actors register package names that LLMs frequently hallucinate.</p>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <strong class="text-white text-lg">Spec-Driven Development</strong>
    <p class="mt-1">A workflow where developers define rigid specifications (functional, security constraints) which are used as the unalterable source of truth for an AI agent to generate code.</p>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <strong class="text-white text-lg">Three-Gate Pattern</strong>
    <p class="mt-1">A runtime defense mechanism: 1) Pre-storage PII detection, 2) Data Sanitization, 3) Prompt-Injection detection.</p>
  </div>
</div>

---
layout: default
---

# Appendix B: Reference Configurations

<div class="grid grid-cols-2 gap-5 mt-4">
  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-teal)] mb-4 text-lg border-b border-gray-600 pb-2">nx.json (Module Boundaries)</h3>
    <div class="text-sm">
```json
"conformance": {
  "rules": [{
    "rule": "@nx/conformance/enforce-project-boundaries",
    "options": {
      "depConstraints": [
        { "sourceTag": "scope:shared", "onlyDependOn": ["scope:shared"] },
        { "sourceTag": "scope:admin", "onlyDependOn": ["scope:shared", "scope:admin"] }
      ]
    }
  }]
}
```
    </div>
  </div>

  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-yellow)] mb-4 text-lg border-b border-gray-600 pb-2">.nx/SELF_HEALING.md</h3>
    <div class="text-sm">
```markdown
# Self-Healing Configuration
## Confidence Rules
- SAST/SCA failures require HIGH confidence and Human Approval.
- Formatting/Linting fixes applied with MEDIUM confidence.

## Off-Limits Areas
- `/libs/crypto/` - Do not automatically remediate.
- `/infra/` - Requires explicit security review.
```
    </div>
  </div>
</div>

---
layout: default
---

# Appendix C: SLSA Level 3/4 Checklist

For AI-Native workflows ensuring Supply Chain Integrity.

<div class="mt-4 grid grid-cols-2 gap-5 text-sm">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="font-bold text-white text-lg mb-4">Source Integrity</h3>
    <ul class="space-y-3 text-gray-300">
      <li>✅ <strong>Version Controlled:</strong> Prompts, `agents.md`, configs in Git.</li>
      <li>✅ <strong>Verified History:</strong> All commits (human & AI) are signed.</li>
      <li>✅ <strong>Retained Indefinitely:</strong> Repo history is immutable.</li>
    </ul>
  </div>

  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="font-bold text-white text-lg mb-4">Build Integrity</h3>
    <ul class="space-y-3 text-gray-300">
      <li>✅ <strong>Scripted Build:</strong> Defined via Nx Task Graph.</li>
      <li>✅ <strong>Ephemeral Environment:</strong> Runners destroyed after run.</li>
      <li>✅ <strong>Isolated:</strong> Agents restricted from parallel pipeline state.</li>
    </ul>
  </div>

  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg col-span-2">
    <h3 class="font-bold text-white text-lg mb-4">Provenance Integrity</h3>
    <ul class="space-y-3 text-gray-300 flex justify-between">
      <li>✅ <strong>Available:</strong> CycloneDX 1.5 SBOM generated via `Syft`.</li>
      <li>✅ <strong>Authenticated:</strong> Provenance signed via `Sigstore/Cosign`.</li>
      <li>✅ <strong>Non-Falsifiable:</strong> Safe-Chain validation blocks malicious holding packages.</li>
    </ul>
  </div>
</div>

---
layout: default
---

# Appendix D: Bibliography

<div class="mt-4 space-y-4 text-sm text-gray-300 border-l-4 border-[var(--slidev-theme-accents-teal)] pl-6">
  <p>1. <strong>OWASP.</strong> <em>Top 10 for Large Language Model Applications</em> (2025).</p>
  <p>2. <strong>Anthropic.</strong> <em>Model Context Protocol (MCP) Specification</em> (2025).</p>
  <p>3. <strong>Nx / nrwl.</strong> <em>Official Nx Documentation: Monorepos, Task Graphs, and Self-Healing CI</em>.</p>
  <p>4. <strong>Ministry of Justice UK.</strong> <em>devsecops-actions — Enterprise GitHub Actions for Security Automation</em>.</p>
  <p>5. <strong>AgriciDaniel.</strong> <em>claude-cybersecurity — AI-Powered Code Security Audit Skill</em> (2026).</p>
  <p>6. <strong>ruvnet.</strong> <em>ruflo — Safety, Test Generation, and Audit Plugins for Claude Code</em> (2026).</p>
  <p>7. <strong>Google/OpenSSF.</strong> <em>SLSA Framework (Supply-chain Levels for Software Artifacts)</em>.</p>
  <p>8. <strong>Sigstore.</strong> <em>Keyless Artifact Signing framework</em>.</p>
  <p>9. <strong>CISA/G7.</strong> <em>SBOM Minimum Elements for AI Applications</em> (2025).</p>
  <p>10. <strong>MITRE.</strong> <em>CWE Top 25 Most Dangerous Software Weaknesses</em> (2024).</p>
</div>