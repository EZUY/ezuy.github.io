# Ze Yu — Personal Website

A minimal single-page landing site for Ze Yu that links out to external
profiles (Google Scholar, ORCID, LinkedIn). No detailed personal info is
published on the page itself.

- **`index.html`** — the page
- **`styles.css`** — styling (auto light/dark)
- **`netlify.toml`** — Netlify config (no build step; publishes the repo root)

No build tools or dependencies — plain HTML/CSS.

## Preview locally

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy

The repo is connected to Netlify for continuous deployment. Push to the
default branch on GitHub and Netlify redeploys automatically. To edit the
links, change the `href`s in the `.links` section of `index.html`.
