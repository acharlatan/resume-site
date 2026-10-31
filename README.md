# Geovanni Hernandez — Marketing in Orbit

An interactive marketing portfolio featuring case studies across impact reporting, influencer marketing, and affordable housing. The PULSE and Marketing Insights screenshots show demo data.

## Develop and deploy

Run `npm install` and `npm run build`, then serve `dist` over HTTP. Run `npm run deploy` to build and deploy to the configured Cloudflare Worker with Wrangler. `src/scenes.js` contains the Three.js scenes; the rest of the site and its assets are in `dist`.

The scenes respect reduced-motion preferences and include a Canvas2D fallback when WebGL is unavailable.
