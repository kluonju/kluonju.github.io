# Luo's Theory Lab

Research group website for **Luo's Theory Lab** (Nanjing University of Science and Technology), built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Site URL: <https://kluonju.github.io/>

## Deploy (GitHub Pages)

This site is built with Astro via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). In the repo on GitHub:

1. **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions** (not “Deploy from a branch”).
2. Push to `master`/`main`, or run the **Deploy Astro site to GitHub Pages** workflow manually.

If Source is set to a branch, GitHub runs the legacy Jekyll “pages build and deployment” job on the Astro source tree and that build will fail.

Content lives in `src/content/` (people, publications, research, teaching, talks, posts). Static assets (photos, PDFs, bib files) are in `public/`.

## Protected teaching notes

The Fall 2026 teaching **page** is passcode-gated. Lecture/homework PDFs in `public/teaching/fall-2026/` are ordinary files — anyone with the URL can open them.

Edit `src/content/teaching/fall-2026.md` as usual. `npm run dev` and `npm run build` encrypt the page HTML automatically. Commit PDFs plus `content.bin.enc` / `gate.json`.

Passcode: `TEACHING_PASSCODE` in `.env`, or the default `mathphys2026`.

