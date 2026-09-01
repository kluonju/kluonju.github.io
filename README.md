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

Fall 2026 course PDFs are encrypted. Cleartext files stay in `private/teaching/fall-2026/` (gitignored). The public site only has ciphertext under `public/teaching/fall-2026/`.

To update notes:

1. Edit files in `private/teaching/fall-2026/`.
2. Set `TEACHING_PASSCODE` (or use the default `mathphys2026`).
3. Run `npm run encrypt:teaching`.
4. Commit the new `public/teaching/fall-2026/` artifacts (`gate.json` and `*.enc`).

