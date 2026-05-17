---
layout: cover
background: https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop
---

# Appendices

Glossary, Configurations, and References.

---
layout: default
---

# Appendix A: Glossary

- **Agentic Development**: AI agents performing multi-step tasks.
- **HitL**: Human-in-the-Loop approval for high-risk actions.
- **MCP**: Model Context Protocol, the AI "USB-C".
- **Slopsquatting**: Malicious package registration for hallucinated names.
- **Three-Gate Pattern**: PII detection, Sanitization, Injection detection.

# Appendix C: SLSA Level Checklist

<div class="text-sm columns-2 mt-4">
  <ul>
    <li>✅ Source: Version Controlled</li>
    <li>✅ Source: Verified History</li>
    <li>✅ Build: Scripted Build</li>
    <li>✅ Build: Ephemeral Environment</li>
    <li>✅ Build: Isolated & Parameterless</li>
    <li>✅ Provenance: Available (CycloneDX)</li>
    <li>✅ Provenance: Authenticated (Cosign)</li>
  </ul>
</div>

---
layout: default
---

# Appendix B: Reference Configurations

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

**nx.json (Module Boundaries)**
```json
"conformance": {
  "rules": [{
    "rule": "@nx/conformance/enforce-project-boundaries",
    "options": {
      "depConstraints": [
        { "sourceTag": "scope:shared", "onlyDependOn": ["scope:shared"] }
      ]
    }
  }]
}
```

</div>
<div>

**.nx/SELF_HEALING.md**
```markdown
# Self-Healing Configuration
## Confidence Rules
- SAST/SCA failures require HIGH confidence and Human Approval.
- Formatting/Linting fixes applied with MEDIUM confidence.

## Off-Limits Areas
- `/libs/crypto/`
- `/infra/`
```

</div>
</div>

---
layout: center
---

# Appendix D: Bibliography

1. OWASP Top 10 for LLM Applications (2025).
2. Anthropic Model Context Protocol (2025).
3. Nx Documentation: Monorepos, Task Graphs, Self-Healing.
4. MoJ UK devsecops-actions.
5. SLSA Framework & Sigstore.
6. CISA/G7 SBOM Elements for AI.