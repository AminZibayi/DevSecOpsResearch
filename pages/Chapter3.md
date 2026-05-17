---
layout: cover
background: https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop
---

# Chapter 3
The Reference Architecture

Balancing agentic speed with enterprise security rigor.

---
layout: default
---

# 3.1 Architectural Principles

1. **Defense-in-Depth**: Multiple overlapping layers (Local → CI → Runtime).
2. **Least Privilege by Default**: Scoped tokens and isolated MCP environments.
3. **Reproducibility & Determinism**: Strict linting, type-checking, and "Smoke Test" contracts to counter LLM non-determinism.
4. **Continuous Observability**: Every agent action and prompt is logged.

---
layout: default
---

# 3.2 to 3.5 Core Layers

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

**Layer 1: Developer Environment**
- `.cursorrules` / `CLAUDE.md`
- Pre-commit secret scanning & linting.
- Real-time SAST/SCA feedback.

**Layer 2: Source Control**
- Branch protection (signed commits).
- `CODEOWNERS` enforcement for critical paths.

</div>
<div>

**Layer 3: Monorepo Orchestration (Nx)**
- Project/Task Graphs.
- `nx affected` limits CI noise.
- Module boundaries & Self-healing CI.

**Layer 4: CI/CD Pipeline (GitHub Actions)**
- Composite actions.
- SARIF unified visibility.
- Pinned Commit SHAs.

</div>
</div>

---
layout: default
---

# 3.6 to 3.10 Advanced Layers

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

**Layer 5: Artifact Integrity**
- CycloneDX 1.5 SBOMs.
- SLSA Provenance & Sigstore signing.

**Layer 6: Runtime & Prod**
- Kubernetes admission controllers.
- AI-augmented anomaly detection.

**Layer 7: AI Governance**
- Agent IAM & Audit logging.
- **3-Gate Pattern** for untrusted data.

</div>
<div>

**Layer 8: Knowledge Security (RAG)**
- Permission-aware retrieval.
- Groundedness verification.

**Layer 9: Continuous Compliance**
- Policy-as-Evidence (OPA/Rego).
- Immutable evidence store for SOC 2/PCI.
- Compliance-as-Code.

</div>
</div>