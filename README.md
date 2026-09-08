# MotiLayer website

Official product and documentation website for MotiLayer's UI Animation & Workflow Toolkit, designed for GitHub Pages.

## Content structure

- `index.html` contains the stable page structure and product-level copy.
- `tools-data.js` is the source of truth for tool names, categories, summaries, workflows, limitations, source paths, and PDF links.
- `app.js` renders the searchable tool reference and PDF index from that data.
- `docs/` contains the English PDF guides shipped with the Unity package.
- `styles.css` contains the text-first responsive design.

To add a tool later, add one entry to `tools-data.js` and place its PDF under `docs/`. The tool reference, category filters, result count, and PDF index update automatically.

## Publishing

This is the existing `hermityin/motilayer-tools` repository. Review changes and push to its configured publishing branch; do not create or rename the repository. Verify the GitHub Pages deployment before reporting that an update is live.

## Editorial checks

Keep source-backed functionality, requirements and destructive-operation warnings consistent with the store listing. An upload version is not proof of testing. Do not claim universal render-pipeline support, automatic backups, full Photoshop fidelity or runtime expression linking. Keep MatKeyframer described as one UGUI shader-property animation component. Check every PDF link and run `node --check app.js` and `node --check tools-data.js` before publishing.
