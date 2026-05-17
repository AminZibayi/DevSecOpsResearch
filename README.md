# DevSecOps Research

This repository contains the research, chapters, and documentation for the **AI-Native DevSecOps** project. It is designed to manage structured content across multiple chapters and automate the generation of a comprehensive merged report.

## Project Structure

The workspace is organized as follows:

- **`content/`**: Contains the core research material divided into chapters (`Chapter0.md` to `Chapter8.md`) and `Appendices.md`.
- **`scripts/`**: Automation tools for the project.
- **`AI_Native_DevSecOps.md`**: The generated final report (output of the merge script).

## Merge and Automation

The project uses **pnpm** for package management and script execution.

### Prerequisites

- Node.js
- pnpm

### Generating the Merged Report

To combine all chapters into the final `AI_Native_DevSecOps.md` report, run:

```bash
pnpm merge
```

## Slides

To start the slide show:

- `pnpm run dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.
