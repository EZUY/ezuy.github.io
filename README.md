# Ze Yu — Personal Website

Static personal/academic website for Ze Yu, Computational Biologist at UT Southwestern Medical Center.

- **`index.html`** — page content
- **`styles.css`** — styling (light/dark theme)
- **`script.js`** — theme toggle, publication filter
- **`netlify.toml`** — Netlify config (no build step; publishes the repo root)

No build tools or dependencies — it's plain HTML/CSS/JS.

## Preview locally

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to Netlify

**Option A — drag & drop (fastest):**
1. Go to <https://app.netlify.com/drop>.
2. Drag this project folder onto the page.

**Option B — connect the Git repo (auto-deploy on push):**
1. In Netlify, "Add new site" → "Import an existing project".
2. Pick this GitHub repository.
3. Leave the build command empty and set the publish directory to `.` (already set in `netlify.toml`).
4. Deploy.

## Updating

Edit publications in `index.html` (the `.pub-list` section). Commit and push —
Netlify redeploys automatically if using Option B.
