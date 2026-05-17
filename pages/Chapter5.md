---
layout: cover
background: https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop
---

# Tooling Deep-Dive & Feature Matrix

The ecosystem powering AI-Native DevSecOps pipelines.

---
layout: default
---

# Agent Harnesses & IDE Integrations

The foundational runtime that empowers AI with terminal, filesystem, and tool access.

<div class="grid grid-cols-2 gap-4 mt-4">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-t-4 border-[var(--slidev-theme-accents-teal)]">
    <h3 class="font-bold text-lg text-white">Claude Code</h3>
    <p class="text-sm text-gray-300 mt-2">Developer-centric CLI excelling in "skill" extensibility. Supports complex multi-agent workflows (`claude-cybersecurity`).</p>
  </div>
  
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-t-4 border-[var(--slidev-theme-accents-blue)]">
    <h3 class="font-bold text-lg text-white">GitHub Copilot Workspace</h3>
    <p class="text-sm text-gray-300 mt-2">Provides a high-level agentic experience focused on "Plan → Implement → Review" cycles directly within the GitHub ecosystem.</p>
  </div>
  
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-t-4 border-[var(--slidev-theme-accents-yellow)]">
    <h3 class="font-bold text-lg text-white">Cursor / Windsurf</h3>
    <p class="text-sm text-gray-300 mt-2">IDE-first harnesses providing superior real-time context management via shadow-git diffs and workspace indexing.</p>
  </div>

  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border-t-4 border-[var(--slidev-theme-accents-red)]">
    <h3 class="font-bold text-lg text-white">Gemini CLI / Code Assist</h3>
    <p class="text-sm text-gray-300 mt-2">Enterprise-focused harness with deep Google Cloud integration (Vertex AI, Firebase).</p>
  </div>
</div>

---
layout: default
---

# Static & Dynamic Security Testing

The deterministic "backbone" of the AI-native pipeline.

<div class="mt-3 space-y-3">
  <div>
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-teal)] border-b border-gray-700 pb-2 mb-2">SAST (Static Analysis)</h3>
    <ul class="text-sm space-y-2">
      <li><strong>CodeQL:</strong> Industry standard for semantic analysis across 10+ languages. Uncovers complex path chaining.</li>
      <li><strong>Semgrep:</strong> Lightweight, fast scanner ideal for custom "guardrail" patterns in monorepos.</li>
    </ul>
  </div>

  <div>
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-blue)] border-b border-gray-700 pb-2 mb-2">SCA (Software Composition)</h3>
    <ul class="text-sm space-y-2">
      <li><strong>OWASP Dependency-Check:</strong> The primary build-fail gate against the NVD.</li>
      <li><strong>OSV-Scanner:</strong> Optimized for Go, Rust, and Python.</li>
      <li><strong>Renovate Bot:</strong> Automates updates. Critical to prevent AI from generating code against stale dependencies.</li>
    </ul>
  </div>

  <div>
    <h3 class="font-bold text-xl text-[var(--slidev-theme-accents-yellow)] border-b border-gray-700 pb-2 mb-2">IaC & Container Scanning</h3>
    <p class="text-sm"><strong>Trivy</strong> for container vulnerabilities and misconfigurations; <strong>Checkov</strong> for Terraform/CloudFormation compliance violations.</p>
  </div>
</div>

---
layout: default
---

# Supply Chain & Monorepo Orchestration

Managing dynamic AI dependencies and high-volume changes.

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border border-[var(--slidev-theme-code-border)]">
    <h3 class="font-bold text-lg text-[var(--slidev-theme-accents-teal)] mb-4">Supply Chain Security</h3>
    <ul class="text-sm space-y-4">
      <li><strong>Syft:</strong> Generates CycloneDX 1.5 SBOMs. Provides ground-truth.</li>
      <li><strong>Sigstore/Cosign:</strong> Keyless signing of container images and blobs.</li>
      <li><strong>Safe-Chain / SLSA:</strong> Attestations to prove provenance and block Slopsquatting.</li>
    </ul>
  </div>

  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg border border-[var(--slidev-theme-code-border)]">
    <h3 class="font-bold text-lg text-[var(--slidev-theme-accents-blue)] mb-4">Orchestration & CI</h3>
    <ul class="text-sm space-y-4">
      <li><strong>Nx:</strong> Project/Task graphs for <em>Affected Scanning</em> and autonomous <em>Self-Healing CI</em> capability.</li>
      <li><strong>GitHub Actions:</strong> Uses Composite Actions for reusable security gates (like `devsecops-actions`).</li>
    </ul>
  </div>
</div>

---
layout: default
zoom: 0.92
---

# AI Security & Governance Tools

A new class of tools designed specifically to govern the AI reasoning loop.

<div class="mt-2 space-y-2">
  <div class="flex items-start">
    <div class="bg-[var(--slidev-theme-accents-red)] p-2 rounded mr-4">🛡️</div>
    <div>
      <h3 class="font-bold text-lg text-white">ruflo-aidefence</h3>
      <p class="text-sm mt-1 text-gray-400">Implements the 3-Gate Pattern. Acts as a runtime firewall for agentic tool calls against PII and Prompt Injection.</p>
    </div>
  </div>

  <div class="flex items-start">
    <div class="bg-[var(--slidev-theme-accents-teal)] p-2 rounded mr-4"></div>
    <div>
      <h3 class="font-bold text-lg text-white">claude-cybersecurity</h3>
      <p class="text-sm mt-1 text-gray-400">An AI skill that spawns 8 parallel specialist agents for context-aware audits (detects business logic flaws traditional SAST cannot).</p>
    </div>
  </div>

  <div class="flex items-start">
    <div class="bg-[var(--slidev-theme-accents-blue)] p-2 rounded mr-4">⚖️</div>
    <div>
      <h3 class="font-bold text-lg text-white">ruflo-jujutsu</h3>
      <p class="text-sm mt-1 text-gray-400">Performs Risk Scoring on AI-proposed changes, allowing human reviewers to focus only on high-impact diffs.</p>
    </div>
  </div>

  <div class="flex items-start">
    <div class="bg-[var(--slidev-theme-accents-yellow)] p-2 rounded mr-4"></div>
    <div>
      <h3 class="font-bold text-lg text-white">MCP Gateway (IBM Pattern)</h3>
      <p class="text-sm mt-1 text-gray-400">A security proxy enforcing tool allowlists and preventing "Excessive Agency" across the organization.</p>
    </div>
  </div>
</div>

---
layout: default
---

# Comparative Feature Matrix

Understanding the maturity and strength of parallel testing strategies.

<div class="mt-3 overflow-hidden rounded-lg border border-[var(--slidev-theme-code-border)]">
  <table class="w-full text-sm text-left">
    <thead class="bg-[var(--slidev-theme-code-background)]">
      <tr>
        <th class="p-3">Feature</th>
        <th class="p-3 text-[var(--slidev-theme-accents-blue)]">Deterministic SAST (CodeQL)</th>
        <th class="p-3 text-[var(--slidev-theme-accents-yellow)]">AI Security Skill (Claude)</th>
        <th class="p-3 text-[var(--slidev-theme-accents-teal)]">Supply-Chain Actions</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-[var(--slidev-theme-code-border)]">
      <tr>
        <td class="p-3 font-bold text-white">Maturity</td>
        <td class="p-3">Tier 1: Enterprise</td>
        <td class="p-3 font-bold">Tier 3: Experimental</td>
        <td class="p-3">Tier 2: Active OSS</td>
      </tr>
      <tr>
        <td class="p-3 font-bold text-white">Strength</td>
        <td class="p-3">CWE Pattern Matching</td>
        <td class="p-3">Business Logic & Design</td>
        <td class="p-3">Supply Chain Integrity</td>
      </tr>
      <tr>
        <td class="p-3 font-bold text-white">False Positives</td>
        <td class="p-3 text-green-400">Low (Rule-based)</td>
        <td class="p-3 text-yellow-400">Variable (Context-aware)</td>
        <td class="p-3 text-green-400">Very Low (Hash-based)</td>
      </tr>
      <tr>
        <td class="p-3 font-bold text-white">Language Support</td>
        <td class="p-3">Fixed (10+)</td>
        <td class="p-3">Universal (LLM-based)</td>
        <td class="p-3">Multi-stack</td>
      </tr>
      <tr>
        <td class="p-3 font-bold text-white">Integration</td>
        <td class="p-3">CI Gate</td>
        <td class="p-3">Agent Skill / PR Bot</td>
        <td class="p-3">Composite Action</td>
      </tr>
    </tbody>
  </table>
</div>

---
layout: default
---

# Tool Selection Decision Tree

Optimizing the stack based on team maturity and constraints.

<div class="mt-4 space-y-4 pl-4 border-l-4 border-[var(--slidev-theme-accents-teal)]">
  
  <div class="text-sm">
    <span class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg">1. Using AI Agents (Claude Code, Cursor)?</span><br/>
    <span class="text-gray-300 ml-4 mt-1 block">↳ Yes: Deploy <strong>ruflo-aidefence</strong> and <strong>CLAUDE.md</strong> constraints.</span>
  </div>

  <div class="text-sm">
    <span class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg">2. Is the codebase a Monorepo?</span><br/>
    <span class="text-gray-300 ml-4 mt-1 block">↳ Yes: Use <strong>Nx</strong> for affected scanning and orchestration.</span>
  </div>

  <div class="text-sm">
    <span class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg">3. Regulated Industry (SOC2, PCI)?</span><br/>
    <span class="text-gray-300 ml-4 mt-1 block">↳ Yes: Implement <strong>Syft</strong> + <strong>Cosign</strong> + <strong>Safe-Chain</strong>.</span>
  </div>

  <div class="text-sm">
    <span class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg">4. Team Size < 50 Developers?</span><br/>
    <span class="text-gray-300 ml-4 mt-1 block">↳ Yes: Prioritize Zero-Config tools like <strong>devsecops-actions/sca</strong>.</span>
  </div>

  <div class="text-sm">
    <span class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg">5. Team Size > 200 Developers?</span><br/>
    <span class="text-gray-300 ml-4 mt-1 block">↳ Yes: Deploy a centralized <strong>MCP Gateway</strong> and <strong>OPA</strong>.</span>
  </div>

</div>