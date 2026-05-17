---
layout: cover
background: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop
---

# The AI-Native Development Paradigm

Agents as first-class SDLC participants.

---
layout: default
---

# Agent Roles: Planning and Design

Agents move beyond scripted automation to perform reasoning tasks early in the cycle.

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg" data-id="c1-design">
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-teal)] mb-4">Threat Modeling</h3>
    <p class="text-sm">Using frameworks like <strong>STRIDE</strong>, agents analyze trust boundaries and data flows before any code is written.</p>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-teal)] mb-4">Secure Requirements</h3>
    <p class="text-sm">Agents generate functional and non-functional specifications that include security constraints by default (e.g., enforcing `auth` middleware).</p>
  </div>
</div>

---
layout: default
---

# Agent Roles: Code Generation & Testing

<div class="space-y-4 mt-4">
  <div>
    <h3 class="text-lg font-bold text-[var(--slidev-theme-accents-blue)]">Code Generation & Refactoring</h3>
    <ul class="text-sm mt-2 space-y-2">
      <li><strong>Refinement-Phase Ownership:</strong> Tools like `ruflo-jujutsu` perform diff-aware refactoring, suggesting safer architectural patterns (e.g., replacing `execSync`).</li>
      <li><strong>Scaffolding:</strong> Generating "secure-by-default" boilerplates with pre-configured linters and hooks.</li>
    </ul>
  </div>

  <div>
    <h3 class="text-lg font-bold text-[var(--slidev-theme-accents-blue)]">Automated Testing and TDD</h3>
    <ul class="text-sm mt-2 space-y-2">
      <li><strong>Coverage-Aware Routing:</strong> `ruflo-testgen` identifies test gaps and routes agents to cover them.</li>
      <li><strong>Agentic TDD:</strong> Following a mock-first pattern to iterate until code passes a rigid "test contract".</li>
    </ul>
  </div>
</div>

---
layout: default
---

# Agent Roles: Review and Project Memory

<div class="grid grid-cols-2 gap-5 mt-4">
  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg mb-4">AI-Powered Security Review</h3>
    <ul class="text-sm space-y-3">
      <li><strong>The GARE Model:</strong> (Gather, Analyze, Recommend, Execute) Orchestrators spawn specialist agents simultaneously (e.g., Auth Reviewer, Secret Scanner).</li>
      <li><strong>Context-Aware Reasoning:</strong> Unlike SAST, AI reviewers detect complex attack-path chaining and business logic flaws.</li>
    </ul>
  </div>
  <div>
    <h3 class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg mb-4">Documentation & Memory</h3>
    <ul class="text-sm space-y-3">
      <li><strong>ADR Synthesis:</strong> Generating Architecture Decision Records for design tracking.</li>
      <li><strong>AgentDB Namespaces:</strong> Preserving context across sessions (e.g., `security-findings`, `test-gaps`) ensuring vulnerabilities are not "forgotten".</li>
    </ul>
  </div>
</div>

---
layout: default
---

# The Agent Harness

The runtime environment bridging the LLM and the local dev environment.

<div class="mt-3 p-3 bg-[var(--slidev-theme-code-background)] rounded-lg">
  <h3 class="font-bold text-[var(--slidev-theme-accents-teal)] mb-2">Primary Harnesses</h3>
  <ul class="text-sm space-y-2">
    <li><strong>Claude Code:</strong> A specialized CLI emphasizing skill-based extensibility, allowing developers to mount security skills and MCP plugins.</li>
    <li><strong>GitHub Copilot & Gemini CLI:</strong> Deep IDE integration focusing on "autofix" capabilities integrated natively with cloud-native workflows.</li>
  </ul>
</div>

<div class="mt-4 p-3 border border-[var(--slidev-theme-code-border)] rounded-lg">
  <h3 class="font-bold text-white mb-1">Config Bundles (e.g., `everything-claude-code`)</h3>
  <p class="text-sm text-gray-300">Reduce "prompt engineering fatigue" by pre-loading Personas, Allowed Tools, and Safety Guards.</p>
</div>

---
layout: default
---

# Context Architecture

Without structured context, agents suffer from "context drift" and hallucinations.

<div class="grid grid-cols-3 gap-4 mt-4">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg text-center" data-id="ctx-sys">
    <div class="text-lg font-bold text-white mb-2">1. System Layer</div>
    <div class="text-sm text-gray-400">The base persona and safety rules defined by the harness.</div>
  </div>
  
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg text-center" data-id="ctx-proj">
    <div class="text-lg font-bold text-[var(--slidev-theme-accents-teal)] mb-2">2. Project Layer</div>
    <div class="text-sm text-gray-400">Constraints stored in `CLAUDE.md` or `agents.md` defining tech stack and "hard" rules.</div>
  </div>
  
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg text-center" data-id="ctx-task">
    <div class="text-lg font-bold text-white mb-2">3. Task Layer</div>
    <div class="text-sm text-gray-400">The immediate prompt or spec defining the current session goal.</div>
  </div>
</div>

<FancyArrow x1="340" y1="310" x2="380" y2="310" color="var(--slidev-theme-accents-teal)" width="2" />
<FancyArrow x1="620" y1="310" x2="660" y2="310" color="var(--slidev-theme-accents-teal)" width="2" />

<div class="mt-4 text-sm" data-id="ctx-gov">
  <strong>Context Governance:</strong> Agents must use deduplication and ranking tools (`grep`, `glob`) to prevent context window saturation.
</div>

---
layout: default
---

# Spec-Driven vs. Prompt-Driven Development

<div class="grid grid-cols-2 gap-5 mt-4">
  <div>
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-red)] mb-4">Prompt-Driven</h3>
    <ul class="text-sm space-y-3 text-gray-300">
      <li>Conversational and exploratory.</li>
      <li>Fast for prototyping, but non-deterministic.</li>
      <li>Security rigor is often skipped.</li>
      <li>Intent is buried in chat history, making it difficult to audit.</li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-teal)] mb-4">Spec-Driven</h3>
    <ul class="text-sm space-y-3 text-gray-300">
      <li>Grounded in durable, version-controlled artifacts (e.g., `spec.md`).</li>
      <li>The agent treats the spec as a "source of truth".</li>
      <li>Implementations are verified against automated test contracts.</li>
    </ul>
  </div>
</div>

---
layout: default
---

# The Non-Determinism Problem

The inherent non-determinism of LLMs poses a risk to **Repeatability Engineering** (producing the same secure build from the same source).

<div class="mt-4 space-y-4">
  <div class="p-4 border-l-4 border-[var(--slidev-theme-accents-blue)] bg-[var(--slidev-theme-code-background)]">
    <h3 class="font-bold text-lg mb-2">Deterministic Gates</h3>
    <ul class="text-sm list-disc ml-6">
      <li><strong>Linter Enforcement:</strong> Forcing agents to pass strict rules (ESLint security plugins) before commits.</li>
      <li><strong>Smoke Tests:</strong> Verifying generated outputs match signed manifests or "smoke tests" defining minimum safety.</li>
    </ul>
  </div>

  <div class="p-4 border-l-4 border-[var(--slidev-theme-accents-yellow)] bg-[var(--slidev-theme-code-background)]">
    <h3 class="font-bold text-lg mb-2">Clamping Agent Behavior</h3>
    <ul class="text-sm list-disc ml-6">
      <li><strong>Type Systems:</strong> TypeScript/Mypy prevents agents from hallucinating incorrect data types.</li>
      <li><strong>Policy-as-Code:</strong> Open Policy Agent (OPA) blocks policy violations regardless of AI "confidence".</li>
    </ul>
  </div>
</div>

---
layout: default
---

# MCP: The New "USB-C" for Agents

The **Model Context Protocol (MCP)** unified tool integration, introducing both opportunities and critical new attack surfaces.

<div class="grid grid-cols-2 gap-5 mt-4">
  <div>
    <h3 class="font-bold text-lg text-[var(--slidev-theme-accents-teal)] mb-3">Opportunities</h3>
    <ul class="text-sm space-y-2 text-gray-300">
      <li><strong>Tool Reuse:</strong> Write an MCP server once, use it across Claude, Copilot, and custom agents.</li>
      <li><strong>Contextual Richness:</strong> Ingest live API docs, Slack history, and Jira tickets.</li>
    </ul>
  </div>
  
  <div>
    <h3 class="font-bold text-lg text-[var(--slidev-theme-accents-red)] mb-3">Risks</h3>
    <ul class="text-sm space-y-2 text-gray-300">
      <li><strong>Excessive Agency:</strong> Indirect prompt injection via 3rd-party dependencies tricking an agent to execute commands.</li>
      <li><strong>Numeric Input DoS:</strong> Insecure inputs (e.g., `prNumber: "1; rm -rf /"`) leading to RCE if unsanitized.</li>
    </ul>
  </div>
</div>

<div class="mt-4 bg-[var(--slidev-theme-code-background)] p-4 rounded text-sm">
  <strong>The 3-Gate Mitigation Pattern (ruflo-aidefence):</strong>
  1. Pre-storage PII Gate → 2. Sanitization Gate → 3. Prompt-Injection Gate
</div>