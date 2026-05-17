---
layout: cover
background: https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop
---

# The AI-Native DevSecOps Workflow

A High-Velocity Feedback Loop from spec to production.

---
layout: default
---

# Workflow Overview: Spec to Production

Transforming linear SDLC into a **High-Velocity Feedback Loop**.

<div class="flex justify-center mt-16 mb-12">
  <div class="flex items-center space-x-2">
    <div class="bg-[var(--slidev-theme-code-background)] px-4 py-3 rounded-lg border border-[var(--slidev-theme-code-border)]" data-id="w-plan">Plan</div>
    <div class="text-[var(--slidev-theme-accents-teal)] text-xl">→</div>
    <div class="bg-[var(--slidev-theme-code-background)] px-4 py-3 rounded-lg border border-[var(--slidev-theme-code-border)]" data-id="w-local">Local</div>
    <div class="text-[var(--slidev-theme-accents-teal)] text-xl">→</div>
    <div class="bg-[var(--slidev-theme-code-background)] px-4 py-3 rounded-lg border border-[var(--slidev-theme-code-border)]" data-id="w-ci">CI</div>
    <div class="text-[var(--slidev-theme-accents-teal)] text-xl">→</div>
    <div class="bg-[var(--slidev-theme-code-background)] px-4 py-3 rounded-lg border border-[var(--slidev-theme-code-border)]" data-id="w-build">Build</div>
    <div class="text-[var(--slidev-theme-accents-teal)] text-xl">→</div>
    <div class="bg-[var(--slidev-theme-code-background)] px-4 py-3 rounded-lg border border-[var(--slidev-theme-code-border)]" data-id="w-deploy">Deploy</div>
  </div>
</div>

<FancyArrow x1="750" y1="250" x2="250" y2="250" color="var(--slidev-theme-accents-yellow)" width="3" bowing="0.3" arc="0.5">
  <template #tail>
    <div class="text-sm absolute mt-4 ml-40 font-bold bg-gray-800 px-2 py-1 rounded">Feedback & Self-Healing</div>
  </template>
</FancyArrow>

---
layout: default
---

# Planning & Threat Modeling

In AI-native development, the "Plan" is the agent's absolute source of truth. Security must be injected here to prevent "vulnerable-by-design" code generation.

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <h3 class="text-xl font-bold text-[var(--slidev-theme-accents-teal)]">4-Step Threat Modeling</h3>
    <ol class="text-sm mt-4 space-y-3 text-gray-300 list-decimal pl-4">
      <li><strong>Scoping:</strong> Identify Entry Points, Exit Points, and Assets.</li>
      <li><strong>Threat Identification:</strong> AI-assisted STRIDE review of trust boundaries.</li>
      <li><strong>Countermeasure Mapping:</strong> Eliminate, Mitigate, Accept, Transfer.</li>
      <li><strong>Verification:</strong> Assure the <code>threat-model.md</code> is accurate.</li>
    </ol>
  </div>
  
  <div class="space-y-4">
    <div>
      <h3 class="text-lg font-bold">AI-Assisted Architecture Review</h3>
      <p class="text-sm mt-2 text-gray-300">Agents (e.g., <code>cybersecurity</code> skill) perform reconnaissance of proposed designs, mapping trust boundaries before implementation begins.</p>
    </div>
    
    <div class="border-l-4 border-[var(--slidev-theme-accents-yellow)] pl-4">
      <h3 class="text-lg font-bold text-[var(--slidev-theme-accents-yellow)]">Secure Prompt Templates</h3>
      <p class="text-sm mt-2 italic text-gray-400">"Implement a login function using Argon2id for hashing, enforcing a minimum entropy of 60 bits, and integrating with the existing rate-limit middleware..."</p>
    </div>
  </div>
</div>

---
layout: default
---

# Local Development

Providing the "Security Spellchecker" effect to catch hallucinations before they hit the repo.

<div class="grid grid-cols-2 gap-5 mt-6">
  <div>
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-blue)] mb-4 border-b border-gray-600 pb-2">Agent Constraints</h3>
    <ul class="text-sm space-y-4">
      <li><strong>CLAUDE.md:</strong> Hard instructions loaded into the harness.</li>
      <li><strong>Linter Enforcement:</strong> Forcing `npm run lint` post-edit.</li>
      <li><strong>Type Safety:</strong> Strict TypeScript usage blocks coercion flaws.</li>
      <li><strong>Real-time IDE SAST:</strong> Snyk/SonarLint provide instant feedback for self-correction.</li>
    </ul>
  </div>
  
  <div>
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-blue)] mb-4 border-b border-gray-600 pb-2">Pre-commit Security Gates</h3>
    <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg text-sm space-y-4 border border-[var(--slidev-theme-code-border)]">
      <p><strong>1. Secret Scan:</strong> `Gitleaks` / `TruffleHog`</p>
      <p><strong>2. Lint & Format:</strong> `ESLint` / `Prettier`</p>
      <p><strong>3. Type Check:</strong> `tsc` validation on all changed files</p>
    </div>
  </div>
</div>

---
layout: default
---

# Pre-Merge CI (The Security Gate)

A 9-step "Layered Audit" upon Pull Request creation.

<div class="grid grid-cols-2 gap-x-8 gap-y-4 mt-4 text-sm">
  <div class="bg-[var(--slidev-theme-code-background)] p-3 rounded border-l-2 border-gray-500">1. Repository Checkout (fetch-depth: 0)</div>
  <div class="bg-[var(--slidev-theme-code-background)] p-3 rounded border-l-2 border-gray-500">2. Dependency Review (PR-native scanning)</div>
  <div class="bg-[var(--slidev-theme-code-background)] p-3 rounded border-l-2 border-[var(--slidev-theme-accents-red)] font-bold">3. OWASP Dependency-Check (Fail ≥ 7.0)</div>
  <div class="bg-[var(--slidev-theme-code-background)] p-3 rounded border-l-2 border-gray-500">4. Renovate Integration (Hygiene check)</div>
  <div class="bg-[var(--slidev-theme-code-background)] p-3 rounded border-l-2 border-[var(--slidev-theme-accents-red)]">5. Multi-Engine Secret Scanning (Regex + Entropy)</div>
  <div class="bg-[var(--slidev-theme-code-background)] p-3 rounded border-l-2 border-[var(--slidev-theme-accents-blue)]">6. CodeQL SAST (Semantic analysis for A03)</div>
  <div class="bg-[var(--slidev-theme-code-background)] p-3 rounded border-l-2 border-gray-500">7. OpenSSF Scorecard (Branch protection check)</div>
  <div class="bg-[var(--slidev-theme-code-background)] p-3 rounded border-l-2 border-[var(--slidev-theme-accents-teal)] font-bold">8. Agentic Security Audit (`ruflo-jujutsu` diff scoring)</div>
  <div class="bg-[var(--slidev-theme-code-background)] p-3 rounded border-l-2 border-[var(--slidev-theme-accents-yellow)]">9. SBOM & Policy Gate (CycloneDX/OPA)</div>
</div>

---
layout: default
zoom: 0.9
---

# Build & Artifact Integrity

Producing a fully secured and provenanced output.

<div class="mt-3 space-y-3">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-teal)]">
    <h3 class="text-lg font-bold text-white">Deterministic Builds with Nx</h3>
    <p class="text-sm mt-1 text-gray-400">Nx Computation Hashing ensures that unchanged source and dependencies yield identical build output, preventing AI-induced "build drift".</p>
  </div>
  
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-teal)]">
    <h3 class="text-lg font-bold text-white">SBOM Generation</h3>
    <p class="text-sm mt-1 text-gray-400">`Syft` creates a CycloneDX 1.5 JSON artifact, acting as the verifiable ground truth for all AI-selected dependencies in the build.</p>
  </div>

  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-l-4 border-[var(--slidev-theme-accents-teal)]">
    <h3 class="text-lg font-bold text-white">SLSA Attestation & Container Signing</h3>
    <p class="text-sm mt-1 text-gray-400">The Safe-Chain model links the artifact to specific GitHub Actions. The final image is signed via Sigstore/Cosign to ensure trust at runtime.</p>
  </div>
</div>

---
layout: default
---

# Deployment & Runtime

<div class="grid grid-cols-2 gap-3 mt-3">
  <div class="bg-[var(--slidev-theme-code-background)] p-3 rounded-lg">
    <h3 class="text-base font-bold text-[var(--slidev-theme-accents-lightblue)] mb-1">Admission Controllers</h3>
    <p class="text-sm text-gray-300">Kubernetes validates the SBOM and cryptographic signatures. Images missing pipeline signatures are completely blocked from execution.</p>
  </div>
  
  <div class="bg-[var(--slidev-theme-code-background)] p-3 rounded-lg">
    <h3 class="text-base font-bold text-[var(--slidev-theme-accents-yellow)] mb-1">The 3-Gate Pattern</h3>
    <p class="text-sm text-gray-300 mb-1">Runtime protection against MCP exploits via `ruflo-aidefence`:</p>
    <ol class="text-sm list-decimal ml-4 text-gray-300">
      <li>Pre-storage PII detection</li>
      <li>Token sanitization</li>
      <li>Prompt-injection scanning</li>
    </ol>
  </div>
</div>

<div class="mt-3 p-3 bg-[var(--slidev-theme-code-background)] rounded-lg">
  <h3 class="font-bold text-[var(--slidev-theme-accents-blue)]">RAG Quality Gates</h3>
  <p class="text-sm mt-1">The RAG Triad verifies Context Relevance, Groundedness (mitigating hallucinations), and Answer Relevance before responses reach the user.</p>
</div>

---
layout: default
---

# Feedback & Self-Healing

Treating pipeline failures as learning opportunities for the AI system.

<div class="mt-6 space-y-4">
  <div class="border-l-4 border-[var(--slidev-theme-accents-teal)] pl-4">
    <h3 class="font-bold text-xl mb-2">Nx Self-Healing CI</h3>
    <p class="text-sm mb-3 text-gray-300">Triggered via `nx fix-ci` on deterministic test or lint failure:</p>
    <ul class="text-sm ml-6 list-disc text-gray-400">
      <li><strong>Analyze:</strong> Agent reads the CI failure log.</li>
      <li><strong>Diagnose:</strong> Identifies root cause (e.g. missing import, broken test).</li>
      <li><strong>Repair:</strong> Proposes PR or auto-applies if confidence matches `.nx/SELF_HEALING.md`.</li>
    </ul>
  </div>

  <div class="border-l-4 border-[var(--slidev-theme-accents-blue)] pl-4">
    <h3 class="font-bold text-xl mb-2">Failure-Driven Improvement Loops</h3>
    <p class="text-sm text-gray-300">Confirmed vulnerabilities are logged to `AgentDB` (`security-findings` namespace). Future agents consult this database to avoid repeating security mistakes, perpetually hardening development patterns.</p>
  </div>
</div>