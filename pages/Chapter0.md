---
layout: cover
background: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop
---

# Introduction & Definitions

The transition towards AI-Native DevSecOps.

---
layout: two-cols-header
---

# The Evolution of Software Engineering

The trajectory has been defined by reducing friction between ideation and production.

::left::

**DevOps (circa 2009)**

- Broke silos between development and operations.
- Emphasized automation, CI, and CD.
- Led to increased velocity, making security a bottleneck.

::right::

**DevSecOps**

- Introduced "shifting left".
- Integrated security controls (SAST, SCA, DAST) directly into the pipeline.
- Treated security as a continuous process, not an external gate.

---
layout: two-cols-header
---

# The Rise of AI-Native Development

::left::

⚙️ **Active Participants in the SDLC**

Unlike traditional tools, AI agents possess reasoning capabilities. They generate features, refactor architecture, and suggest security fixes directly.

::right::

⚠️ **The Documented Risk Profile**

AppSec Santa's 2026 study (534 samples) revealed **25.1% of AI-generated code contains vulnerabilities**.

- Prevalent risks: Injection (A03:2021) and SSRF (A10:2021).
- GPT-5.2 shows improvement (19.1% rate).
- Other agents like Llama 4 Maverick exhibit up to 29.2% rate.

---
layout: two-cols-header
---

# AI-Native DevSecOps: A Critical Paradox

Not merely using AI to scan code — a fundamental re-architecting of the SDLC.

::left::

**The Acceleration**

AI can accelerate security through automated triage, code review, and autonomous remediation.

::right::

**The Non-Deterministic Risk**

Agents introduce hallucinated dependencies, prompt injection vulnerabilities, and unpredictable behavior.

<div class="mt-6 text-center text-sm italic text-gray-400">
This report investigates how to harness this power while maintaining the rigor of modern DevSecOps.
</div>

---
layout: two-cols-header
---

# Agents & Frameworks

Ensuring clarity based on OWASP and NIST emerging standards.

::left::

**Agentic Development** <span class="text-[var(--slidev-theme-accents-lightblue)]">↗</span>

A pattern where autonomous AI agents (Claude Code, GitHub Copilot Workspace) perform multi-step tasks by interacting with the filesystem and running terminal commands.

**AI-Native** <span class="text-[var(--slidev-theme-accents-lightblue)]">↗</span>

Systems or workflows designed to be operated by/with AI agents. Repositories include structures optimized for agentic consumption (e.g., `agents.md`, Nx).

**AI-Augmented** <span class="text-[var(--slidev-theme-accents-lightblue)]">↗</span>

The use of AI as a supportive tool (autocomplete) without giving the AI autonomy to execute complex workflows.

::right::

**Model Context Protocol (MCP)** <span class="text-[var(--slidev-theme-accents-yellow)]">↗</span>

An open standard allowing AI agents to securely connect to external data sources and tools, acting as the "USB-C" for the agentic ecosystem.

**Agentic Development Life Cycle (ADLC)** <span class="text-[var(--slidev-theme-accents-yellow)]">↗</span>

An evolution of the SDLC that includes automated spec-to-code transformation, agent-led testing, and AI-driven self-healing CI/CD.

**Slopsquatting** <span class="text-[var(--slidev-theme-accents-yellow)]">↗</span>

A supply-chain attack vector where attackers publish malicious packages matching names frequently "hallucinated" by LLMs.

---

# Validation & Integrity

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="border border-[var(--slidev-theme-custom)] p-4 rounded-lg">

**The RAG Triad** <span class="text-[var(--slidev-theme-accents-teal)]">↗</span>

A framework for evaluating the quality of Retrieval-Augmented Generation outputs:

- **Context Relevance:** Is the retrieved info useful?
- **Groundedness:** Is the answer based strictly on the context?
- **Answer Relevance:** Does it answer the query?

</div>

<div class="border border-[var(--slidev-theme-custom)] p-4 rounded-lg">

**Safe-Chain** <span class="text-[var(--slidev-theme-accents-teal)]">↗</span>

A security pattern for validating package integrity in the supply chain, often requiring a minimum "package age" (e.g., 72 hours) and hash verification before installation.

</div>

</div>

---
layout: two-cols-header
---

# Audience & Methodology

::left::

**Target Audience**

- **Researchers & Architects:** Theoretical frameworks, threat models, and architectural justification.
- **DevSecOps & Platform Engineers:** Building and securing pipelines, focusing on configuration and workflow implementation.

::right::

**Methodology**

- **Systematic Literature Review (SLR)**
- **Reference Architecture Design** (cross-referenced with Nx and MoJ UK patterns)
- **Structured Threat Modeling** (4-step OWASP framework applied to agentic trust boundaries)

---

# Source Trust Hierarchy

Every recommendation is validated against rigorous industry standards.

<div class="space-y-5 mt-4">

<div class="border-l-4 border-[var(--slidev-theme-accents-teal)] pl-4">

**Tier 1: Standards & Primary Docs**

OWASP Top 10 for LLM Applications 2025, NIST SSDF, MITRE CWE, GDPR, HIPAA, PCI DSS 4.0.1, GitHub, Anthropic, Sigstore.

</div>

<div class="border-l-4 border-[var(--slidev-theme-accents-yellow)] pl-4 mt-5">

**Tier 2: Tooling & Practitioner Frameworks**

Snyk, Semgrep, Checkmarx, TruffleHog, SLSA, OpenSSF technical documentation.

</div>

<div class="border-l-4 border-[var(--slidev-theme-accents-blue)] pl-4 mt-5">

**Tier 3: Academic & Expert Analysis**

Peer-reviewed research (IEEE, ACM), security conferences (Black Hat, DEF CON), Trail of Bits, Project Zero.

</div>

</div>
