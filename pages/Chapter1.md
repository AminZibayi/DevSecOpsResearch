---
layout: cover
background: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop
---

# Chapter 1
The AI-Native Development Paradigm

Agents as first-class SDLC participants.

---
layout: default
---

# 1.1 Agent Roles Across the SDLC

Agents evolve from "tools" into "semi-autonomous contributors".

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

- **Planning & Design**: Automated threat modeling (STRIDE) & secure requirements.
- **Code Generation**: Refinement-phase ownership, secure scaffolding.
- **Testing**: Agentic TDD, coverage-aware routing.

</div>
<div>

- **Security Review**: Gather, Analyze, Recommend, Execute (GARE) parallel specialist agents.
- **Documentation**: ADR synthesis, Project Memory (AgentDB namespaces).
- **Compliance**: Real-time regulatory mapping, evidence collection for audits.

</div>
</div>

---
layout: default
---

# 1.2 The Agent Harness & Config Bundles

The runtime environment bridging the LLM and the local environment.

**Primary Harnesses**:
- **Claude Code**: CLI focused on skill-based extensibility (e.g., `cybersecurity`).
- **GitHub Copilot & Gemini CLI**: Deep IDE integration with "autofix" features.

**Config Bundles** (e.g., `everything-claude-code`):
Reduce "prompt fatigue" by pre-loading:
- System Prompts (Personas)
- Allowed Tools
- Safety Guards

---
layout: default
---

# 1.3 Context Architecture

Organized context prevents "drift" and hallucinations.

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

**Three-Layer Instruction Framework**:
1. **System**: Persona & safety rules.
2. **Project**: `CLAUDE.md`, `agents.md` (Tech stack, hard rules).
3. **Task**: Immediate prompt/spec.

</div>
<div>

**AgentDB & Namespaces**:
Persistent memory layers.
- `security-patterns`
- `test-gaps`
- `claude-memories`

*Deduplication & Ranking via `grep` and `glob`.*

</div>
</div>

---
layout: section
---

# 1.4 Spec-Driven vs Prompt-Driven

Moving from conversational prompts to durable, version-controlled artifacts (`spec.md`).

---
layout: default
---

# 1.5 Non-Determinism & Repeatability

LLMs are non-deterministic, posing risks to secure, repeatable builds.

<div class="grid grid-cols-2 gap-6 mt-8">
  <div>
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-red)]">Determinism Gates</h3>
    <ul class="mt-4">
      <li><strong>Linter Enforcement:</strong> Pass security linters before commit.</li>
      <li><strong>Smoke Tests:</strong> Verify against signed manifests.</li>
    </ul>
  </div>
  <div>
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-teal)]">Clamping Behavior</h3>
    <ul class="mt-4">
      <li><strong>Type Systems:</strong> TypeScript/Mypy prevents hallucinated types.</li>
      <li><strong>Policy-as-Code:</strong> OPA blocks violations regardless of AI "confidence".</li>
    </ul>
  </div>
</div>

---
layout: default
---

# 1.6 MCP: The New "USB-C"

**Model Context Protocol**: Unified extensibility, but new attack surfaces.

**Opportunities**: Tool reuse across harnesses, contextual richness (Slack, Jira, Docs).

**Risks**:
- **Excessive Agency**: Indirect Prompt Injection via 3rd-party code.
- **Numeric Input DoS**: Unsanitized inputs (e.g., `1; rm -rf /`).

**The 3-Gate Mitigation Pattern**:
1. Pre-storage PII Gate
2. Sanitization Gate
3. Prompt-Injection Gate