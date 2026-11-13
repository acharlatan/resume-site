# Geovanni Hernandez — Digital Marketing, Operations & Websites

Geovanni's resume and editorial portfolio, deployed on the existing `resume-site` Cloudflare Worker. The site foregrounds five independently built projects, professional experience, and a downloadable PDF of the supplied professional profile.

## Run and build

Run `npm ci` followed by `npm run build`. Serve `dist/` over HTTP. The site is static HTML, CSS, and JavaScript; the existing Three.js source remains in `src/scenes.js`, but the current CSS-based editorial design does not load its hidden scenes.

`dist/portfolio.css` extends the existing visual system with the project gallery and resume. `dist/resume/geovanni-hernandez-resume.pdf` is the unmodified supplied resume. The four WebP project previews in `dist/assets/projects/` are captures of the deployed websites; PULSE and Waddle Dash display fictional demo workspaces.

## Featured projects

| Project | Deployment | Access |
| --- | --- | --- |
| PULSE | https://pulse.icareaboutyoufam.workers.dev/ | Public |
| The Idea Shelf | https://the-idea-shelf.icareaboutyoufam.workers.dev/ | Public |
| Waddle Dash | https://waddle-dash.icareaboutyoufam.workers.dev/ | Public |
| FINAL CHECK | https://final-check-geo-beta.jesusmerchglobal.chatgpt.site/ | Owner-only private beta |
| JENEVEV | https://jenevev.icareaboutyoufam.workers.dev/ | Public |

The FINAL CHECK card uses a labeled workflow overview; no private campaign screenshot is published. Linking to its deployment does not change access.

## Deploy

The existing target is `resume-site` in `wrangler.jsonc`, in the `icareaboutyoufam` Cloudflare account. With an authenticated local Cloudflare connection, run `npm run deploy`. A GitHub push does not automatically deploy unless a Cloudflare build connection is configured. Preserve existing bindings, compatibility date, and access when deploying.
