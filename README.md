# PicInfiniti.net

The PicInfiniti website, based on [PicInfiniti/template-vite](https://github.com/PicInfiniti/template-vite), using vanilla JavaScript, Sass, and Vite 8.

Use Node.js 24 (see `.nvmrc`), or Node.js 22 starting at 22.13:

```bash
nvm use
npm ci
npm run dev
```

The site includes the home page, the Persian appreciation page at `/pages/pay.html`, and the logarithm cheat sheet at `/pages/logarithm.html`. Existing artwork, fonts, social links, and the `picinfiniti.net` custom domain are preserved.

| Command                | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| `npm run dev`          | Start the development server                                          |
| `npm run build`        | Build all pages into `dist/`                                          |
| `npm run preview`      | Preview the production build                                          |
| `npm run lint`         | Check JavaScript                                                      |
| `npm run format`       | Format source and configuration                                       |
| `npm run format:check` | Check formatting                                                      |
| `npm test`             | Run deployment integration tests against temporary local repositories |
| `npm run check`        | Run lint, formatting, tests, and the build                            |
| `npm run deploy`       | Run checks and publish to `gh-pages`                                  |

Additional HTML files under `pages/` are discovered automatically. Page scripts live in `src/pages/`; shared navigation, clock, and date behavior initializes through `src/core/App.js`. The `@` alias resolves to `src/`. Existing indented Sass and third-party files under `static/` are excluded from formatting; vendored JavaScript is excluded from linting.

Copy `.env.example` to `.env` or `.env.production` for optional configuration. `BASE_PATH` defaults to `/` for this root site and custom domain. For a project URL, set it to `/repository-name/` and use `%BASE_URL%` in HTML navigation and public asset links. Only `VITE_*` variables are exposed to browser code.

GitHub Actions runs `npm ci` and `npm run check` on pushes and pull requests. Deployment is a separate, explicit command:

```bash
npm run deploy
```

The template's deployment utility uses existing Git authentication to publish only `dist/` to `origin`'s `gh-pages` branch, without checking out another branch or force-pushing. It preserves deployment history, copies `public/CNAME` through Vite, adds `.nojekyll`, and skips commits for identical builds. Configure GitHub Pages to deploy from the `gh-pages` branch's root. Set `DEPLOY_REMOTE` and `DEPLOY_BRANCH` in `.env.production` to override these defaults.
