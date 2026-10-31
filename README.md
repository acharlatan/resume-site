# Geovanni Hernandez — Marketing, with perspective

An interactive editorial portfolio about marketing operations, reporting, campaign coordination, and community. The project previews use fictional demo data.

## Run and build

Run `npm install` followed by `npm run build`. Serve the `dist` directory over HTTP for a local preview. The page is static; `src/scenes.js` contains the Three.js source and the build creates `dist/scenes.bundle.js`.

## Deploy

The site is configured for the `resume-site` Cloudflare Worker in `wrangler.jsonc`. With an authenticated Cloudflare account, run `npm run deploy`. A GitHub push does not automatically deploy unless a Cloudflare build connection is configured.

The scenes respect reduced-motion preferences and include a Canvas2D fallback where WebGL is unavailable. The generated celestial hero artwork is `dist/assets/horizon-editorial.webp`.
