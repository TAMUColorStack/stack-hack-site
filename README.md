# Stack Hack 2026 — Landing Page

Static HTML replica of the [Figma design](https://www.figma.com/design/MEh4oenB01cyzPXBfogxgp/stack-hack-draft)
for **Stack Hack 2026**, a 48-hour hackathon powered by TAMU ColorStack
(November 7–8, Texas A&M University).

## Tech
- Plain HTML + [Tailwind CSS via CDN](https://tailwindcss.com) (no build step)
- `style.css` — `@font-face` rules, caution-stripe pattern, hero blobs, FAQ accordion
- `script.js` — FAQ accordion toggle

## View it
Open `index.html` directly, or serve locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

The layout is built **desktop-exact** to the 1459px Figma frame; responsive
breakpoints are a planned follow-up.

## Add fonts & photos
Brand fonts and images are not committed. Drop them into `assets/fonts/` and
`assets/img/` using the filenames in [`assets/README.md`](assets/README.md).
Until then the page uses fallback fonts and shows broken image icons / dashed
placeholder tiles.

## Notes
- Prize cards, the schedule, and sponsor tiles are intentionally **vague
  placeholders** ("To be announced", "Your Logo Here") matching the draft.
- FAQ answers are placeholder copy to be finalized.
