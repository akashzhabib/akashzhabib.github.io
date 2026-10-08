/* =====================================================================
   PHOTOGRAPHY — edit this file to update the Photography page.

   1) External gallery (optional): set the link to your Flickr / Instagram /
      500px / Google Photos album. Leave "" to hide the button.
   2) Photos hosted on this site: put image files in assets/img/photos/
      and add one line per photo below (thumb = 900px-wide copy in thumbs/, optional). Use JPGs about 2000px on the long
      side (~300–600 KB) so the page stays fast.
   ===================================================================== */

const GALLERY_LINK = { url: "", label: "View full gallery" };

const PHOTOS = [
  { src: "assets/img/photos/chattanooga-night.jpg", thumb: "assets/img/photos/thumbs/chattanooga-night.jpg", title: "Blue Hour Reflections", place: "Chattanooga, TN" },
  { src: "assets/img/photos/smokies-valley.jpg", thumb: "assets/img/photos/thumbs/smokies-valley.jpg", title: "Into the Valley", place: "Great Smoky Mountains" },
  { src: "assets/img/photos/misty-gorge.jpg", thumb: "assets/img/photos/thumbs/misty-gorge.jpg", title: "Into the Clouds", place: "West Virginia" },
  { src: "assets/img/photos/payphone.jpg", thumb: "assets/img/photos/thumbs/payphone.jpg", title: "50¢ Anywhere", place: "Gatlinburg, TN" },
  { src: "assets/img/photos/nashville-bridge.jpg", thumb: "assets/img/photos/thumbs/nashville-bridge.jpg", title: "Night Barge", place: "Nashville, TN" },
  { src: "assets/img/photos/vegas-night.jpg", thumb: "assets/img/photos/thumbs/vegas-night.jpg", title: "Neon Pause", place: "Las Vegas, NV" },
  { src: "assets/img/photos/milky-way.jpg", thumb: "assets/img/photos/thumbs/milky-way.jpg", title: "Milky Way", place: "West Virginia" },
  { src: "assets/img/photos/red-barn.jpg", thumb: "assets/img/photos/thumbs/red-barn.jpg", title: "The Red Barn", place: "West Virginia" },
  { src: "assets/img/photos/lake-mead-overlook.jpg", thumb: "assets/img/photos/thumbs/lake-mead-overlook.jpg", title: "Desert Harbor", place: "Lake Mead, NV" },
  { src: "assets/img/photos/rose.jpg", thumb: "assets/img/photos/thumbs/rose.jpg", title: "After the Rain", place: "" },
  { src: "assets/img/photos/nashville-skyline.jpg", thumb: "assets/img/photos/thumbs/nashville-skyline.jpg", title: "Downtown After Dark", place: "Nashville, TN" },
  { src: "assets/img/photos/cat.jpg", thumb: "assets/img/photos/thumbs/cat.jpg", title: "Curious", place: "" },
  { src: "assets/img/photos/smoky-ridges.jpg", thumb: "assets/img/photos/thumbs/smoky-ridges.jpg", title: "Ridgelines", place: "Great Smoky Mountains" },
  { src: "assets/img/photos/phone-booth.jpg", thumb: "assets/img/photos/thumbs/phone-booth.jpg", title: "The Village", place: "Gatlinburg, TN" },
  { src: "assets/img/photos/foggy-cup.jpg", thumb: "assets/img/photos/thumbs/foggy-cup.jpg", title: "Tea Above the Fog", place: "West Virginia" },
  { src: "assets/img/photos/skater.jpg", thumb: "assets/img/photos/thumbs/skater.jpg", title: "Downhill", place: "Morgantown, WV" },
  { src: "assets/img/photos/nashville-riverfront.jpg", thumb: "assets/img/photos/thumbs/nashville-riverfront.jpg", title: "Riverfront Lights", place: "Nashville, TN" },
  { src: "assets/img/photos/boardwalk.jpg", thumb: "assets/img/photos/thumbs/boardwalk.jpg", title: "Walking Through History", place: "" },
  { src: "assets/img/photos/crows.jpg", thumb: "assets/img/photos/thumbs/crows.jpg", title: "Overlook Regulars", place: "Great Smoky Mountains" },
  { src: "assets/img/photos/chattanooga-dusk.jpg", thumb: "assets/img/photos/thumbs/chattanooga-dusk.jpg", title: "Under the Bridge", place: "Chattanooga, TN" },
  { src: "assets/img/photos/desert-shelter.jpg", thumb: "assets/img/photos/thumbs/desert-shelter.jpg", title: "Framed Desert", place: "Lake Mead, NV" },
  { src: "assets/img/photos/elys-mill.jpg", thumb: "assets/img/photos/thumbs/elys-mill.jpg", title: "Ely’s Mill", place: "Great Smoky Mountains" },
  { src: "assets/img/photos/moon.jpg", thumb: "assets/img/photos/thumbs/moon.jpg", title: "Full Moon", place: "" },
  { src: "assets/img/photos/forest-path.jpg", thumb: "assets/img/photos/thumbs/forest-path.jpg", title: "The Way In", place: "" },
  { src: "assets/img/photos/rooftops.jpg", thumb: "assets/img/photos/thumbs/rooftops.jpg", title: "Summer Sky", place: "Morgantown, WV" },
  { src: "assets/img/photos/farmhouse.jpg", thumb: "assets/img/photos/thumbs/farmhouse.jpg", title: "Valley Farmhouse", place: "" },
  { src: "assets/img/photos/lake-mead-marina.jpg", thumb: "assets/img/photos/thumbs/lake-mead-marina.jpg", title: "Marina from Above", place: "Lake Mead, NV" },
];

/* ===================== rendering (no need to edit) ===================== */
(function () {
  const grid = document.getElementById("gallery");
  const link = document.getElementById("gallery-link");
  if (GALLERY_LINK.url) { link.href = GALLERY_LINK.url; link.lastChild.textContent = GALLERY_LINK.label; link.hidden = false; }

  if (!PHOTOS.length) {
    grid.outerHTML = `<div class="empty">Photos coming soon.</div>`;
    return;
  }
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const cap = p => [p.title, [p.place, p.year].filter(Boolean).join(", ")].filter(Boolean).join(" — ");
  grid.innerHTML = PHOTOS.map((p, i) =>
    `<button class="ph-item" data-i="${i}" aria-label="${esc(cap(p) || "Open photo")}"><img src="${esc(p.thumb || p.src)}" alt="${esc(p.title || "")}" loading="lazy"></button>`).join("");

  // Lightbox
  const lb = document.getElementById("lightbox"), img = lb.querySelector("img"), txt = lb.querySelector(".cap");
  let cur = 0;
  const show = i => { cur = (i + PHOTOS.length) % PHOTOS.length; img.src = PHOTOS[cur].src; img.alt = PHOTOS[cur].title || ""; txt.textContent = cap(PHOTOS[cur]); };
  grid.addEventListener("click", e => { const b = e.target.closest(".ph-item"); if (b) { show(+b.dataset.i); lb.hidden = false; } });
  lb.querySelector(".close").onclick = () => (lb.hidden = true);
  lb.querySelector(".prev").onclick = e => { e.stopPropagation(); show(cur - 1); };
  lb.querySelector(".next").onclick = e => { e.stopPropagation(); show(cur + 1); };
  lb.addEventListener("click", e => { if (e.target === lb) lb.hidden = true; });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") lb.hidden = true;
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
})();
