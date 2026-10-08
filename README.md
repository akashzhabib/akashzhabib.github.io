# akashzhabib.github.io

Personal academic site of Ahsan Habib Akash. Plain HTML/CSS/JS — no build step; GitHub Pages serves it as-is.

## Structure

```
index.html              About, News, Selected Publications
publications.html       All publications (grouped by year, with filter)
experience.html         Research experience, education, awards, skills
Ahsan_Habib_Akash_CV.pdf
assets/css/style.css    Main site styles
assets/css/project.css  Styles for paper project pages
assets/js/pubs.js       ← PUBLICATION LIST (edit this to add/update papers)
assets/img/             Images (profile photo, paper thumbnails)
projects/<name>/        One project page per paper
```

## Common edits

- **Add a paper:** copy an entry in `assets/js/pubs.js`, edit the fields. Set `selected: true` to show it on the home page.
- **Paper thumbnail:** save an image to `assets/img/pubs/` and set `thumb: "assets/img/pubs/<file>.png"`.
- **Add code link:** in the paper's `links`, replace `codeSoon: true` with `code: "https://github.com/..."`.
- **News:** edit the `<table class="news">` in `index.html`.
- **Profile photo:** replace `assets/img/profile.jpg` (square, ~640px).
- **New project page:** copy `projects/glaucoma-fairness/` to `projects/<new-name>/` and edit; link it via `website:` in `pubs.js`.
- **Photography:** put photos in `assets/img/photos/` and list them in `assets/js/photos.js`; set `GALLERY_LINK` there to link an outside album.
- **Update CV:** replace `Ahsan_Habib_Akash_CV.pdf` (keep the same file name).

## Preview locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.
