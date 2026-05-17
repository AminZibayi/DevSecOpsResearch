---
layout: cover
background: https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop
---

# Research Frontiers & Open Questions

The future of AI-Native DevSecOps.

---
layout: default
---

# Visual vs. Textual Architecture Representation

Currently, AI agents primarily consume architectural intent through text (e.g., `agents.md`, markdown specs). However, secure system design—particularly threat modeling—is inherently spatial and relational (e.g., data flow diagrams, C4 models).

<div class="mt-6 space-y-4">
  <div class="p-4 bg-[var(--slidev-theme-code-background)] rounded-lg border-l-4 border-[var(--slidev-theme-accents-teal)]">
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-teal)] mb-3">The Research Frontier</h3>
    <p class="text-sm text-gray-300">Can multimodal LLMs parse and reason about security boundaries better when provided with visual diagrams (C4, UML) rather than textual descriptions?</p>
  </div>

  <div class="p-4 bg-[var(--slidev-theme-code-background)] rounded-lg border-l-4 border-[var(--slidev-theme-accents-yellow)]">
    <h4 class="font-bold text-xl text-[var(--slidev-theme-accents-yellow)] mb-3">Open Question</h4>
    <p class="text-sm text-gray-300">What is the optimal intermediate representation (IR) that both humans can visually verify and agents can deterministically process? Research into Graph-based representations (similar to Nx's Project Graph) as an input prompt is a promising direction.</p>
  </div>
</div>

---
layout: default
---

# The Optimal Spec-to-Code Ratio

As organizations adopt Spec-Driven Development to combat non-determinism, a new friction point emerges: how detailed must a specification be to guarantee a secure, correct implementation?

<div class="mt-6 space-y-4">
  <div class="p-4 bg-[var(--slidev-theme-code-background)] rounded-lg border-l-4 border-[var(--slidev-theme-accents-blue)]">
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-blue)] mb-3">The Research Frontier</h3>
    <p class="text-sm text-gray-300">Defining the mathematical or empirical boundary where writing a specification becomes more expensive than writing the code itself.</p>
  </div>

  <div class="p-4 bg-[var(--slidev-theme-code-background)] rounded-lg border-l-4 border-[var(--slidev-theme-accents-yellow)]">
    <h4 class="font-bold text-xl text-[var(--slidev-theme-accents-yellow)] mb-3">Open Question</h4>
    <p class="text-sm text-gray-300">Can we quantify the "Optimal Spec-to-Code Ratio"? Are there specific domains (cryptography vs. UI) where the ratio differs? Furthermore, can we use AI to auto-generate the test suite <em>from</em> the spec to enforce the contract before code generation?</p>
  </div>
</div>

---
layout: default
---

# Revisiting Model-Driven Development with LLMs

Model-Driven Architecture (MDA) historically failed due to brittle transformation engines. LLMs offer a flexible, semantic transformation engine that could revitalize MDD.

<div class="mt-6 space-y-4">
  <div class="p-4 bg-[var(--slidev-theme-code-background)] rounded-lg border-l-4 border-[var(--slidev-theme-accents-teal)]">
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-teal)] mb-3">The Research Frontier</h3>
    <p class="text-sm text-gray-300">Structuring agentic workflows to formally step through CIM (Computation Independent) → PIM (Platform Independent) → PSM (Platform Specific) transformations.</p>
  </div>

  <div class="p-4 bg-[var(--slidev-theme-code-background)] rounded-lg border-l-4 border-[var(--slidev-theme-accents-yellow)]">
    <h4 class="font-bold text-xl text-[var(--slidev-theme-accents-yellow)] mb-3">Open Question</h4>
    <p class="text-sm text-gray-300">If an agent first defines a PIM (a secure abstract architecture) and then a second agent transforms it into a PSM (e.g., Rust or Go implementation), does this multi-step transformation yield a fundamentally more secure artifact than direct code generation?</p>
  </div>
</div>

---
layout: default
---

# Hard Constraints vs. Soft Prompts

There is a growing disparity between "soft constraints" (system prompts) and "hard constraints" (linters, type systems). Agents often ignore soft prompts when context windows become saturated.

<div class="mt-6 space-y-4">
  <div class="p-4 bg-[var(--slidev-theme-code-background)] rounded-lg border-l-4 border-[var(--slidev-theme-accents-red)]">
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-red)] mb-3">The Research Frontier</h3>
    <p class="text-sm text-gray-300">Despite the proven efficacy of hard constraints, many agent ecosystems rely heavily on soft prompting to steer behavior ("do not use `execSync`").</p>
  </div>

  <div class="p-4 bg-[var(--slidev-theme-code-background)] rounded-lg border-l-4 border-[var(--slidev-theme-accents-yellow)]">
    <h4 class="font-bold text-xl text-[var(--slidev-theme-accents-yellow)] mb-3">Open Question</h4>
    <p class="text-sm text-gray-300">Why is there a lack of native integration between LLM generation loops and AST-based linters? Research is needed into <strong>"Linter-Guided Generation"</strong>, where LLM probability distributions are constrained in real-time so rule violations are impossible to generate.</p>
  </div>
</div>

---
layout: default
---

# Evaluation Architectures for Pipelines

Traditional DevSecOps relies on deterministic testing. AI-native pipelines (Self-Healing CI, PR reviewers) introduce non-determinism into the build process.

<div class="mt-6 space-y-4">
  <div class="p-4 bg-[var(--slidev-theme-code-background)] rounded-lg border-l-4 border-[var(--slidev-theme-accents-blue)]">
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-blue)] mb-3">The Research Frontier</h3>
    <p class="text-sm text-gray-300">Developing frameworks to continuously evaluate the safety and efficacy of the agents themselves in a live pipeline.</p>
  </div>

  <div class="p-4 bg-[var(--slidev-theme-code-background)] rounded-lg border-l-4 border-[var(--slidev-theme-accents-yellow)]">
    <h4 class="font-bold text-xl text-[var(--slidev-theme-accents-yellow)] mb-3">Open Question</h4>
    <p class="text-sm text-gray-300">How do we benchmark non-deterministic security agents? Can we deploy <strong>"Adversarial CI"</strong> pipelines that intentionally inject vulnerabilities (e.g., prompt injection markers) into Pull Requests to continuously test detection rates?</p>
  </div>
</div>

---
layout: default
---

# Federated Learning & Multimodal Security

<div class="grid grid-cols-2 gap-5 mt-6">
  <div>
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-teal)] mb-3 border-b border-gray-600 pb-2">Federated Learning</h3>
    <p class="text-sm text-gray-300 mb-4">Sharing AI-specific threat intelligence across organizational boundaries without exposing proprietary code.</p>
    <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded text-sm text-gray-300">
      <strong class="text-[var(--slidev-theme-accents-yellow)]">Open Question:</strong> Can we implement Privacy-Preserving aggregations to share "Agent Vulnerability Signatures"? If Team A discovers novel Slopsquatting, how quickly can it federate to Team B's firewall?
    </div>
  </div>

  <div>
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-teal)] mb-3 border-b border-gray-600 pb-2">Multimodal Agent Security</h3>
    <p class="text-sm text-gray-300 mb-4">The rise of multimodal LLMs introduces unique cross-modal prompt injection risks (LLM01:2025) via images, diagrams, or audio.</p>
    <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded text-sm text-gray-300">
      <strong class="text-[var(--slidev-theme-accents-yellow)]">Open Question:</strong> Do we need a "Visual Sanitization Gate" similar to textual redaction, or dedicated vision-based models trained specifically to detect steganographic prompt injection?
    </div>
  </div>
</div>