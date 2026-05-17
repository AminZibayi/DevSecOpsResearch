# Chapter 0: Introduction & Definitions

## 0.1 The Evolution from DevOps → DevSecOps → AI-Native DevSecOps

The trajectory of software engineering has been defined by a continuous effort to reduce friction between ideation and production. The **DevOps** movement (circa 2009) broke the silos between development and operations, emphasizing automation, continuous integration (CI), and continuous delivery (CD). However, as velocity increased, security often became a bottleneck, leading to the **DevSecOps** paradigm. DevSecOps introduced the concept of "shifting left"—integrating security controls (SAST, SCA, DAST) directly into the automated pipeline rather than treating them as a final, external gate.

By 2024-2026, a new shift began: the rise of **AI-Native development**. Large Language Models (LLMs) and autonomous agents started participating directly in the Software Development Life Cycle (SDLC). Unlike traditional tools, these agents possess reasoning capabilities, enabling them to generate entire features, refactor complex architectures, and even suggest security fixes.

However, this increased velocity comes with a documented risk profile. **AppSec Santa's 2026 study** (534 samples) revealed that **25.1% of AI-generated code contains confirmed vulnerabilities**, with "Injection" (A03:2021) and "Server-Side Request Forgery (SSRF)" (A10:2021) being the most prevalent. While newer models like GPT-5.2 have improved the safety baseline (vulnerability rate of 19.1%), other widely used agents like Llama 4 Maverick still exhibit rates as high as 29.2% (Tier 3 Source).

**AI-Native DevSecOps** represents the convergence of these trends. It is not merely using AI to scan code; it is a fundamental re-architecting of the SDLC where AI agents are first-class participants. This evolution introduces a critical paradox: while AI can accelerate security (e.g., automated triage and remediation), it also introduces non-deterministic risks (e.g., hallucinated dependencies and prompt injection). This report investigates how to harness this power while maintaining the rigor of modern DevSecOps.

## 0.2 Key Definitions

To ensure clarity throughout this report, the following terms are defined based on emerging industry standards (OWASP, NIST) and practitioner consensus:

- **Agentic Development**: A software development pattern where autonomous AI agents (e.g., Claude Code, GitHub Copilot Workspace) perform multi-step tasks—such as feature implementation or bug fixing—by interacting with the filesystem, running terminal commands, and iterating based on feedback.
- **AI-Native**: Systems or workflows designed from the ground up to be operated by or in collaboration with AI agents. In an AI-native repo, documentation (e.g., `agents.md`), project structure, and task orchestration (e.g., Nx) are optimized for agentic consumption.
- **AI-Augmented**: The use of AI as a supportive tool for human developers (e.g., autocomplete, simple chat queries) without giving the AI autonomy to execute complex, multi-tool workflows.
- **Model Context Protocol (MCP)**: An open standard (introduced by Anthropic) that allows AI agents to securely connect to external data sources and tools (e.g., Google Drive, Slack, GitHub, local databases) through a standardized interface, acting as the "USB-C" for the agentic ecosystem.
- **Agentic Development Life Cycle (ADLC)**: An evolution of the SDLC that explicitly includes agentic phases: automated spec-to-code transformation, agent-led testing, and AI-driven self-healing CI/CD.
- **Slopsquatting**: A supply-chain attack vector (coined by Seth Larson) specific to AI-native development, where attackers publish malicious packages that match the names of non-existent or "hallucinated" libraries frequently suggested by LLMs.
- **RAG Triad**: A framework for evaluating the quality of Retrieval-Augmented Generation outputs based on three metrics: **Context Relevance** (is the retrieved info useful?), **Groundedness** (is the answer based strictly on the context?), and **Answer Relevance** (does it answer the query?).
- **Safe-Chain**: A security pattern for validating package integrity in the supply chain, often requiring a minimum "package age" (e.g., 72 hours) and hash verification before installation.

## 0.3 Audience & How to Read This Report

This report is designed for two primary stakeholders:

1.  **Researchers & Architects**: For those interested in the theoretical frameworks, threat models, and the "why" behind AI-native security. Use the **[Researcher's Note]** sidebars to find academic citations and open research questions.
2.  **DevSecOps & Platform Engineers**: For those tasked with building and securing these pipelines. Focus on the **[Engineer's Note]** sidebars and the configuration snippets provided in Chapters 3 and 4.

The report follows a "Layered Defense" structure. We recommend reading Chapters 1-3 sequentially to understand the paradigm and threat model before diving into the practical workflow implementation in Chapter 4.

## 0.4 Research Methodology & Source Hierarchy

The findings in this report are synthesized from a systematic review of three distinct data tiers, ensuring that every recommendation is both practically viable and theoretically sound.

### Source Trust Hierarchy

- **Tier 1: Standards & Primary Docs**: Documentation from standards bodies (**OWASP Top 10 for LLM Applications 2025**, NIST SSDF, MITRE CWE), legal regulations (**GDPR**, **HIPAA**, **PCI DSS 4.0.1**), and core technology providers (GitHub, Anthropic, Nx, Sigstore).
- **Tier 2: Tooling & Practitioner Frameworks**: Official documentation and technical blogs from security vendors (Snyk, Semgrep, Checkmarx, TruffleHog) and open-source supply chain projects (SLSA, OpenSSF).
- **Tier 3: Academic & Expert Analysis**: Peer-reviewed research (IEEE, ACM), major security conference briefings (Black Hat, DEF CON), and deep-dive analyses from reputable security research firms (Trail of Bits, Project Zero).

### Methodology

We employed a **Systematic Literature Review (SLR)** combined with **Reference Architecture Design** and **Structured Threat Modeling**. Claims about AI-native risks were validated against the OWASP Top 10 for LLM Applications (2025). Architectural patterns were cross-referenced with Nx's official documentation and the Ministry of Justice UK's `devsecops-actions` patterns. The threat modeling process follows the 4-step OWASP framework (Scope, Determine, Mitigate, Assess) applied to agentic trust boundaries.
