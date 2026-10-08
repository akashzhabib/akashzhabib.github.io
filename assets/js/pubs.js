/* =====================================================================
   PUBLICATIONS — edit this list to add or update papers.
   The home page shows entries with  selected: true ;
   the Publications page shows everything, grouped by year.

   Fields
     title, authors (array), venue, year, label (short venue tag),
     color      label colour (hex)
     selected   true → appears on home page
     thumb      image path, e.g. "assets/img/pubs/medtec.png" (leave "" for placeholder)
     note       small highlighted line, e.g. "Poster"
     tldr       one-sentence summary (optional)
     links      any of: website, arxiv, pdf, openreview, doi, code, data, codeSoon
     bibtex     citation shown by the BIB button
   ===================================================================== */

const ME = ["Ahsan Habib Akash", "A. H. Akash"];

const PUBS = [
  {
    id: "medtec",
    title: "When Medical VLMs Stop Understanding: MedTEC-Bench for Probing Semantic Specificity",
    authors: ["Ahsan Habib Akash", "Alina Devkota", "Donald A. Adjeroh", "Binod Bhattarai", "Prashnna K. Gyawali"],
    venue: "Advances in Neural Information Processing Systems (NeurIPS), Evaluations & Datasets Track, 2026",
    year: 2026, label: "NeurIPS 2026", color: "#6f42c1", selected: true,
    thumb: "assets/img/pubs/medtec.svg", note: "Poster",
    tldr: "A five-level probing benchmark (domain → modality → anatomy → finding → negation) across 11 VLMs and 6 imaging modalities: specialist models fail even at telling a chest X-ray from everyday objects, and no model handles negation.",
    links: {
      website: "https://machine-intelligence-lab-wvu.github.io/MedTEC-Bench/",
      code: "https://github.com/machine-intelligence-lab-wvu/MedTEC-Bench",
      data: "https://github.com/machine-intelligence-lab-wvu/MedTEC-Bench/tree/main/data"
    },
    bibtex: `@inproceedings{akash2026medtec,
  title     = {When Medical VLMs Stop Understanding: MedTEC-Bench for Probing Semantic Specificity},
  author    = {Akash, Ahsan Habib and Devkota, Alina and Adjeroh, Donald A. and Bhattarai, Binod and Gyawali, Prashnna Kumar},
  booktitle = {Advances in Neural Information Processing Systems (Evaluations and Datasets Track)},
  year      = {2026}
}`
  },
  {
    id: "circa",
    title: "Two is Better than One: A Collapse-free Multi-Reward RLIF Training Framework",
    authors: ["Shourov Joarder", "Diganta Sikdar", "Ahsan Habib Akash", "Binod Bhattarai", "Prashnna K. Gyawali"],
    venue: "Advances in Neural Information Processing Systems (NeurIPS), Main Track, 2026",
    year: 2026, label: "NeurIPS 2026", color: "#6f42c1", selected: true,
    thumb: "assets/img/pubs/circa.svg", note: "Poster",
    tldr: "CIRCA combines two complementary intrinsic rewards with targeted KL-Cov regularization, keeping verifier-free RL post-training stable where single-signal rewards collapse.",
    links: { website: "https://shourovj.github.io/projects-sites/unsupervised-rl/", arxiv: "https://arxiv.org/abs/2605.22620", codeSoon: true },
    bibtex: `@inproceedings{joarder2026two,
  title     = {Two is Better than One: A Collapse-free Multi-Reward RLIF Training Framework},
  author    = {Joarder, Shourov and Sikdar, Diganta and Akash, Ahsan Habib and Bhattarai, Binod and Gyawali, Prashnna},
  booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
  year      = {2026}
}`
  },
  {
    id: "glaucoma",
    title: "Addressing Bias in VLMs for Glaucoma Detection Without Protected Attribute Supervision",
    authors: ["Ahsan Habib Akash", "Greg Murray", "Annahita Amireskandari", "Joel Palko", "Carol Laxson", "Binod Bhattarai", "Prashnna K. Gyawali"],
    venue: "3rd Workshop on Data Engineering in Medical Imaging (DEMI), MICCAI 2025",
    year: 2025, label: "MICCAI 2025 W", color: "#0f766e", selected: true,
    thumb: "assets/img/pubs/glaucoma.svg",
    tldr: "Label-free debiasing for CLIP-style VLMs: infer proxy subgroups by clustering embeddings, then up-weight the worst-performing clusters during contrastive training.",
    links: { website: "projects/glaucoma-fairness/", arxiv: "https://arxiv.org/abs/2508.09087" },
    bibtex: `@inproceedings{akash2025addressing,
  title     = {Addressing Bias in VLMs for Glaucoma Detection Without Protected Attribute Supervision},
  author    = {Akash, Ahsan Habib and Murray, Greg and Amireskandari, Annahita and Palko, Joel and Laxson, Carol and Bhattarai, Binod and Gyawali, Prashnna},
  booktitle = {3rd Workshop on Data Engineering in Medical Imaging (DEMI), MICCAI},
  year      = {2025},
  eprint    = {2508.09087},
  archivePrefix = {arXiv}
}`
  },
  {
    id: "swvit",
    title: "SW-ViT: A Spatio-Temporal Vision Transformer Network with Post Denoiser for Sequential Multi-Push Ultrasound Shear Wave Elastography",
    authors: ["Ahsan Habib Akash", "Md. Jahin Alam", "Md. Kamrul Hasan"],
    venue: "arXiv preprint arXiv:2505.18865, 2025",
    year: 2025, label: "Preprint", color: "#b5179e", selected: false,
    thumb: "assets/img/pubs/swvit.svg",
    links: { arxiv: "https://arxiv.org/abs/2505.18865" },
    bibtex: `@article{akash2025swvit,
  title   = {SW-ViT: A Spatio-Temporal Vision Transformer Network with Post Denoiser for Sequential Multi-Push Ultrasound Shear Wave Elastography},
  author  = {Akash, Ahsan Habib and Alam, Md. Jahin and Hasan, Md. Kamrul},
  journal = {arXiv preprint arXiv:2505.18865},
  year    = {2025}
}`
  },
  {
    id: "pmb",
    title: "Robust CNN Multi-Nested-LSTM Framework with Compound Loss for Patch-Based Multi-Push Ultrasound Shear Wave Imaging and Segmentation",
    authors: ["Md. Jahin Alam", "Ahsan Habib Akash", "Muyinatu A. Lediju Bell", "Md. Kamrul Hasan"],
    venue: "Physics in Medicine & Biology, vol. 71, no. 1, 015030, 2026 · Early Career Researcher Focus Collection 2025",
    year: 2026, label: "PMB 2026", color: "#2f7d32", selected: false,
    thumb: "assets/img/pubs/pmb.svg",
    tldr: "Two-stage framework: a 3D ResNet encoder with nested CNN–LSTM modules reconstructs elasticity maps from multi-push shear-wave data, then a dual-decoder network denoises them and segments the inclusion.",
    links: { doi: "https://doi.org/10.1088/1361-6560/ae2db8", arxiv: "https://arxiv.org/abs/2407.20558" },
    bibtex: `@article{alam2026robust,
  title   = {Robust CNN Multi-Nested-LSTM Framework with Compound Loss for Patch-Based Multi-Push Ultrasound Shear Wave Imaging and Segmentation},
  author  = {Alam, Md. Jahin and Akash, Ahsan Habib and Bell, Muyinatu A. Lediju and Hasan, Md. Kamrul},
  journal = {Physics in Medicine \& Biology},
  volume  = {71},
  number  = {1},
  pages   = {015030},
  doi     = {10.1088/1361-6560/ae2db8},
  eprint  = {2407.20558},
  archivePrefix = {arXiv},
  year    = {2026}
}`
  },
  {
    id: "ecg",
    title: "Study of Multi-class Arrhythmia Detection and Classification from ECG Data using Deep Learning",
    authors: ["Ahsan Habib Akash", "R. Ahamed"],
    venue: "26th International Conference on Computer and Information Technology (ICCIT), Cox’s Bazar, Bangladesh, 2023",
    year: 2023, label: "ICCIT 2023", color: "#1f5fa8", selected: false,
    thumb: "assets/img/pubs/ecg.svg",
    links: { doi: "https://doi.org/10.1109/ICCIT60459.2023.10441043" },
    bibtex: `@inproceedings{akash2023study,
  title     = {Study of Multi-class Arrhythmia Detection and Classification from ECG Data using Deep Learning},
  author    = {Akash, Ahsan Habib and Ahamed, R.},
  booktitle = {26th International Conference on Computer and Information Technology (ICCIT)},
  year      = {2023},
  doi       = {10.1109/ICCIT60459.2023.10441043}
}`
  },
  {
    id: "signbd",
    title: "SignBD-Word: Video-Based Bangla Word-Level Sign Language and Pose Translation",
    authors: ["A. Sams", "A. H. Akash", "S. M. M. Rahman"],
    venue: "14th International Conference on Computing, Communication and Networking Technologies (ICCCNT), Delhi, India, 2023",
    year: 2023, label: "ICCCNT 2023", color: "#1f5fa8", selected: false,
    thumb: "assets/img/pubs/signbd.svg",
    links: { doi: "https://doi.org/10.1109/ICCCNT56998.2023.10306914" },
    bibtex: `@inproceedings{sams2023signbd,
  title     = {SignBD-Word: Video-Based Bangla Word-Level Sign Language and Pose Translation},
  author    = {Sams, A. and Akash, A. H. and Rahman, S. M. M.},
  booktitle = {14th International Conference on Computing, Communication and Networking Technologies (ICCCNT)},
  year      = {2023},
  doi       = {10.1109/ICCCNT56998.2023.10306914}
}`
  },
  {
    id: "activity",
    title: "Activity Classification from First-Person Office Videos with Visual Privacy Protection",
    authors: ["Partho Ghosh", "Md Abrar Istiak", "Nayeeb Rashid", "Ahsan Habib Akash", "Ridwan Abrar", "Ankan Ghosh Dastider", "Asif Shahriyar Sushmit", "Taufiq Hasan"],
    venue: "The Fourth Industrial Revolution and Beyond, Springer Nature, Singapore, pp. 157–169, 2022",
    year: 2022, label: "Springer 2022", color: "#c2410c", selected: false,
    thumb: "assets/img/pubs/activity.svg",
    links: {},
    bibtex: `@incollection{ghosh2022activity,
  title     = {Activity Classification from First-Person Office Videos with Visual Privacy Protection},
  author    = {Ghosh, Partho and Istiak, Md Abrar and Rashid, Nayeeb and Akash, Ahsan Habib and Abrar, Ridwan and Dastider, Ankan Ghosh and Sushmit, Asif Shahriyar and Hasan, Taufiq},
  booktitle = {The Fourth Industrial Revolution and Beyond},
  pages     = {157--169},
  publisher = {Springer Nature},
  address   = {Singapore},
  year      = {2022}
}`
  }
];

/* ===================== rendering (no need to edit) ===================== */

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function authorsHTML(list) {
  const fmt = a => ME.includes(a) ? `<span class="me">${esc(a)}</span>` : esc(a);
  const MAX = 5;
  if (list.length <= MAX) {
    return list.length > 1
      ? list.slice(0, -1).map(fmt).join(", ") + ", and " + fmt(list[list.length - 1])
      : fmt(list[0]);
  }
  // keep enough authors visible to always show mine
  const myIdx = list.findIndex(a => ME.includes(a));
  const shown = Math.max(3, myIdx + 1);
  if (shown >= list.length - 1) return list.slice(0, -1).map(fmt).join(", ") + ", and " + fmt(list[list.length - 1]);
  const hidden = list.slice(shown);
  const full = list.slice(0, -1).map(fmt).join(", ") + ", and " + fmt(list[list.length - 1]);
  return `<span class="short">${list.slice(0, shown).map(fmt).join(", ")}, and <span class="more-btn" role="button" tabindex="0">${hidden.length} more authors</span></span><span class="full" hidden>${full}</span>`;
}

function pubHTML(p, base) {
  const L = p.links || {};
  const rel = u => /^https?:/.test(u) ? u : base + u;
  const ext = u => /^https?:/.test(u) ? ' target="_blank" rel="noopener"' : "";
  const btn = (key, text, cls = "") => L[key] ? `<a class="${cls}" href="${esc(rel(L[key]))}"${ext(L[key])}>${text}</a>` : "";
  const thumb = p.thumb
    ? `<img src="${esc(rel(p.thumb))}" alt="" loading="lazy">`
    : `<div class="ph">${esc(p.label)}</div>`;
  return `
  <div class="pub" data-search="${esc((p.title + " " + p.authors.join(" ") + " " + p.venue + " " + p.year).toLowerCase())}">
    <div class="thumb"><span class="label" style="background:${p.color}">${esc(p.label)}</span><div class="img">${thumb}</div></div>
    <div>
      <p class="title">${esc(p.title)}</p>
      <p class="authors">${authorsHTML(p.authors)}</p>
      <p class="venue">${esc(p.venue)}</p>
      ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
      ${p.tldr ? `<p class="tldr">${esc(p.tldr)}</p>` : ""}
      <div class="btns">
        ${btn("website", "Website", "web")}
        ${btn("arxiv", "arXiv")}
        ${btn("pdf", "PDF")}
        ${btn("openreview", "OpenReview")}
        ${btn("doi", "DOI")}
        ${btn("code", "Code")}
        ${btn("data", "Data")}
        ${!L.code && L.codeSoon ? `<span class="soon">Code soon</span>` : ""}
        ${p.bibtex ? `<button type="button" class="bib-btn">Bib</button>` : ""}
      </div>
      ${p.bibtex ? `<pre class="bib">${esc(p.bibtex)}</pre>` : ""}
    </div>
  </div>`;
}

function renderPubs(el, { selectedOnly = false, byYear = false, base = "" } = {}) {
  const list = PUBS.filter(p => !selectedOnly || p.selected).sort((a, b) => b.year - a.year);
  let html = "", year = null;
  for (const p of list) {
    if (byYear && p.year !== year) { year = p.year; html += `<div class="year-head" data-year="${year}">${year}</div>`; }
    html += pubHTML(p, base);
  }
  el.innerHTML = html;

  el.addEventListener("click", e => {
    const b = e.target.closest(".bib-btn");
    if (b) b.closest(".pub").querySelector("pre.bib").classList.toggle("open");
    const m = e.target.closest(".more-btn");
    if (m) {
      const a = m.closest(".authors");
      a.querySelector(".short").hidden = true;
      a.querySelector(".full").hidden = false;
    }
  });
}

function attachFilter(input, el) {
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    el.querySelectorAll(".pub").forEach(p => { p.hidden = q && !p.dataset.search.includes(q); });
    el.querySelectorAll(".year-head").forEach(h => {
      let n = h.nextElementSibling, any = false;
      while (n && !n.classList.contains("year-head")) { if (!n.hidden) any = true; n = n.nextElementSibling; }
      h.hidden = !any;
    });
  });
}
