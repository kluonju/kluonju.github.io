---
title: "Direct minimization on the complex Stiefel manifold (CPC, 2025)"
date: 2025-09-01
description: "Riemannian minimization for Kohn–Sham theory when iterative diagonalization is fragile."
hidemeta: false
comments: false
showtoc: true
disableAnchoredHeadings: true
cover:
  image: /images/news/stiefel-cpc-figure.png
  alt: "Figure from the CPC manuscript on Stiefel-manifold minimization in Kohn–Sham theory."
  caption: "From the CPC (2025) manuscript."
  hiddenInSingle: true
---

<p class="pub-highlights-nav"><a href="/news/">← News</a> · <a href="/publications/#stiefel-cpc">Publication list</a></p>

<figure class="lab-news-figure">
  <img
    src="/images/news/stiefel-cpc-figure.png"
    alt="Figure from the CPC manuscript on Stiefel-manifold direct minimization."
    width="910"
    height="1213"
    loading="lazy"
    decoding="async"
  />
  <figcaption>
    Figure from Luo, Wang &amp; Ren, <em>Comput. Phys. Commun.</em> 312, 109596 (2025).
    <a href="/publications/Luo2025_CPC.pdf">Full-resolution PDF</a>.
  </figcaption>
</figure>

<p>
  <strong>K. Luo, T. Wang, and X. Ren</strong>,
  <em>Computer Physics Communications</em> 312, 109596 (2025).
  <a href="https://doi.org/10.1016/j.cpc.2025.109596">DOI</a>
  ·
  <a href="https://arxiv.org/abs/2412.18807">arXiv:2412.18807</a>
  ·
  <a href="/publications/Luo2025_CPC.pdf">PDF (local)</a>
</p>

<p>
  Self-consistent Kohn–Sham calculations usually rely on repeated diagonalization of the
  Hamiltonian in an orthogonal or non-orthogonal basis. When the Aufbau picture is a poor
  guide—common in metals, warm dense matter, or difficult spectral gaps—alternating
  diagonalization and density updates can stall or converge to wrong occupations.
</p>

<p>
  This work formulates <strong>direct energy minimization on the complex Stiefel manifold</strong>
  so that finite and extended (k-point) systems are treated in one geometric framework.
  Riemannian conjugate-gradient and a tentative Broyden–Fletcher–Goldfarb–Shanno variant are
  implemented in a localized basis; benchmarks show where quasi-Newton steps pay off and how
  cost scales with Brillouin-zone sampling for extended systems.
</p>

<ul class="lab-list-compact">
  <li>Unified Stiefel geometry for finite and periodic Kohn–Sham problems.</li>
  <li>Riemannian CG / quasi-Newton minimization with localized orbitals.</li>
  <li>Practical guidance when diagonalization-driven SCF is fragile.</li>
</ul>
