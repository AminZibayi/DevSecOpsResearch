---
layout: cover
background: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop
---

# Introduction & Definitions

The transition towards AI-Native DevSecOps.

---
layout: default
---

# The Evolution of Software Engineering

The trajectory has been defined by reducing friction between ideation and production.

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg" data-id="devops">
    <div class="text-xl font-bold text-[var(--slidev-theme-accents-teal)] mb-4">DevOps (circa 2009)</div>
    <ul class="text-sm space-y-2">
      <li>Broke silos between development and operations.</li>
      <li>Emphasized automation, CI, and CD.</li>
      <li>Led to increased velocity, making security a bottleneck.</li>
    </ul>
  </div>
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg" data-id="devsecops">
    <div class="text-xl font-bold text-[var(--slidev-theme-accents-blue)] mb-4">DevSecOps</div>
    <ul class="text-sm space-y-2">
      <li>Introduced "shifting left".</li>
      <li>Integrated security controls (SAST, SCA, DAST) directly into the pipeline.</li>
      <li>Treated security as a continuous process, not an external gate.</li>
    </ul>
  </div>
</div>

<FancyArrow x1="480" y1="310" x2="520" y2="310" color="var(--slidev-theme-accents-teal)" width="3" />

---
layout: default
---

# The Rise of AI-Native Development

By 2024-2026, a fundamental shift began with LLMs and autonomous agents.

<div class="mt-4 space-y-4">
  <div class="flex items-start">
    <div class="text-[var(--slidev-theme-accents-yellow)] text-2xl mr-4">⚙️</div>
    <div>
      <h3 class="font-bold text-lg">Active Participants in the SDLC</h3>
      <p class="text-sm mt-1">Unlike traditional tools, AI agents possess reasoning capabilities. They generate features, refactor architecture, and suggest security fixes directly.</p>
    </div>
  </div>
  
  <div class="flex items-start">
    <div class="text-[var(--slidev-theme-accents-red)] text-2xl mr-4">⚠️</div>
    <div>
      <h3 class="font-bold text-lg">The Documented Risk Profile</h3>
      <p class="text-sm mt-1">AppSec Santa's 2026 study (534 samples) revealed <strong>25.1% of AI-generated code contains vulnerabilities</strong>.</p>
      <ul class="text-sm mt-2 ml-6 list-disc text-gray-400">
        <li>Prevalent risks: Injection (A03:2021) and SSRF (A10:2021).</li>
        <li>GPT-5.2 shows improvement (19.1% rate).</li>
        <li>Other agents like Llama 4 Maverick exhibit up to 29.2% rate.</li>
      </ul>
    </div>
  </div>
</div>

---
layout: default
---

# AI-Native DevSecOps: A Critical Paradox

It is not merely using AI to scan code; it is a fundamental re-architecting of the SDLC.

<div class="grid grid-cols-2 gap-5 mt-6">
  <div class="border-l-4 border-[var(--slidev-theme-accents-teal)] pl-4">
    <h3 class="font-bold text-lg text-[var(--slidev-theme-accents-teal)]">The Acceleration</h3>
    <p class="text-sm mt-2">AI can accelerate security through automated triage, code review, and autonomous remediation.</p>
  </div>
  <div class="border-l-4 border-[var(--slidev-theme-accents-red)] pl-4">
    <h3 class="font-bold text-lg text-[var(--slidev-theme-accents-red)]">The Non-Deterministic Risk</h3>
    <p class="text-sm mt-2">Agents introduce hallucinated dependencies, prompt injection vulnerabilities, and unpredictable behavior.</p>
  </div>
</div>

<div class="mt-6 text-center text-sm italic text-gray-400">
  This report investigates how to harness this power while maintaining the rigor of modern DevSecOps.
</div>

---
layout: default
---

# Key Definitions: Agents & Frameworks

Ensuring clarity based on OWASP and NIST emerging standards.

<div class="space-y-4 mt-4 text-sm">
  <div>
    <span class="font-bold text-[var(--slidev-theme-accents-lightblue)] text-lg">Agentic Development</span>
    <p class="mt-1 text-gray-300">A pattern where autonomous AI agents (Claude Code, GitHub Copilot Workspace) perform multi-step tasks by interacting with the filesystem and running terminal commands.</p>
  </div>
  
  <div>
    <span class="font-bold text-[var(--slidev-theme-accents-lightblue)] text-lg">AI-Native</span>
    <p class="mt-1 text-gray-300">Systems or workflows designed to be operated by/with AI agents. Repositories include structures optimized for agentic consumption (e.g., `agents.md`, Nx).</p>
  </div>
  
  <div>
    <span class="font-bold text-[var(--slidev-theme-accents-lightblue)] text-lg">AI-Augmented</span>
    <p class="mt-1 text-gray-300">The use of AI as a supportive tool (autocomplete) without giving the AI autonomy to execute complex workflows.</p>
  </div>
</div>

---
layout: default
---

# Key Definitions: Security & Orchestration

<div class="space-y-4 mt-4 text-sm">
  <div>
    <span class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg">Model Context Protocol (MCP)</span>
    <p class="mt-1 text-gray-300">An open standard allowing AI agents to securely connect to external data sources and tools, acting as the "USB-C" for the agentic ecosystem.</p>
  </div>
  
  <div>
    <span class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg">Agentic Development Life Cycle (ADLC)</span>
    <p class="mt-1 text-gray-300">An evolution of the SDLC that includes automated spec-to-code transformation, agent-led testing, and AI-driven self-healing CI/CD.</p>
  </div>
  
  <div>
    <span class="font-bold text-[var(--slidev-theme-accents-yellow)] text-lg">Slopsquatting</span>
    <p class="mt-1 text-gray-300">A supply-chain attack vector where attackers publish malicious packages matching names frequently "hallucinated" by LLMs.</p>
  </div>
</div>

---
layout: default
---

# Key Definitions: Validation

<div class="space-y-4 mt-4 text-sm">
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <span class="font-bold text-[var(--slidev-theme-accents-teal)] text-lg">The RAG Triad</span>
    <p class="mt-2 text-gray-300">A framework for evaluating the quality of Retrieval-Augmented Generation outputs:</p>
    <ul class="mt-2 ml-6 list-disc">
      <li><strong>Context Relevance:</strong> Is the retrieved info useful?</li>
      <li><strong>Groundedness:</strong> Is the answer based strictly on the context?</li>
      <li><strong>Answer Relevance:</strong> Does it answer the query?</li>
    </ul>
  </div>
  
  <div class="bg-[var(--slidev-theme-code-background)] p-4 rounded-lg">
    <span class="font-bold text-[var(--slidev-theme-accents-teal)] text-lg">Safe-Chain</span>
    <p class="mt-2 text-gray-300">A security pattern for validating package integrity in the supply chain, often requiring a minimum "package age" (e.g., 72 hours) and hash verification before installation.</p>
  </div>
</div>

---
layout: default
---

# Audience & Methodology

<div class="grid grid-cols-2 gap-5 mt-4">
  <div>
    <h3 class="font-bold text-lg mb-4 text-[var(--slidev-theme-accents-blue)]">Target Audience</h3>
    <ul class="text-sm space-y-4">
      <li><strong>Researchers & Architects:</strong> Theoretical frameworks, threat models, and architectural justification.</li>
      <li><strong>DevSecOps & Platform Engineers:</strong> Building and securing pipelines, focusing on configuration and workflow implementation.</li>
    </ul>
  </div>
  <div>
    <h3 class="font-bold text-lg mb-4 text-[var(--slidev-theme-accents-blue)]">Methodology</h3>
    <ul class="text-sm space-y-2">
      <li><strong>Systematic Literature Review (SLR)</strong></li>
      <li><strong>Reference Architecture Design</strong> (cross-referenced with Nx and MoJ UK patterns)</li>
      <li><strong>Structured Threat Modeling</strong> (4-step OWASP framework applied to agentic trust boundaries)</li>
    </ul>
  </div>
</div>

---
layout: default
---

# Source Trust Hierarchy

Every recommendation is validated against rigorous industry standards.

<div class="mt-4 space-y-4 text-sm">
  <div class="border-l-2 border-[var(--slidev-theme-accents-teal)] pl-4">
    <span class="font-bold text-[var(--slidev-theme-accents-teal)]">Tier 1: Standards & Primary Docs</span>
    <p class="mt-1">OWASP Top 10 for LLM Applications 2025, NIST SSDF, MITRE CWE, GDPR, HIPAA, PCI DSS 4.0.1, GitHub, Anthropic, Sigstore.</p>
  </div>
  
  <div class="border-l-2 border-[var(--slidev-theme-accents-yellow)] pl-4 mt-6">
    <span class="font-bold text-[var(--slidev-theme-accents-yellow)]">Tier 2: Tooling & Practitioner Frameworks</span>
    <p class="mt-1">Snyk, Semgrep, Checkmarx, TruffleHog, SLSA, OpenSSF technical documentation.</p>
  </div>
  
  <div class="border-l-2 border-[var(--slidev-theme-accents-blue)] pl-4 mt-6">
    <span class="font-bold text-[var(--slidev-theme-accents-blue)]">Tier 3: Academic & Expert Analysis</span>
    <p class="mt-1">Peer-reviewed research (IEEE, ACM), security conferences (Black Hat, DEF CON), Trail of Bits, Project Zero.</p>
  </div>
</div>