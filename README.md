# Ahmed — SEG3125 Portfolio

Built with **React + Vite + Bootstrap 5**.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build & deploy

```bash
npm run build    # outputs to /dist
```

### Deploying to Netlify
1. Push this folder to a GitHub repo
2. Netlify → "Add new site" → "Import from Git"
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy — done.

### Deploying to GitHub Pages
1. In `vite.config.js`, set: `base: '/your-repo-name/'`
2. `npm run build`
3. Push the `dist/` folder to the `gh-pages` branch
   (or use the `gh-pages` npm package)

### React Router on Netlify
Create a `public/_redirects` file with:
```
/*  /index.html  200
```
This ensures client-side routing works on page refresh.

## File structure
```
src/
├── main.jsx          # Entry point, imports Bootstrap
├── App.jsx           # Router setup
├── index.css         # Design tokens + custom styles
└── pages/
    ├── Home.jsx      # Full portfolio (3 required sections)
    └── ComingSoon.jsx # Placeholder for each design
```
