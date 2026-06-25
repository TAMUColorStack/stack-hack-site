# Assets

Drop the brand assets here. Filenames must match what the HTML/CSS expect.

## Fonts → `assets/fonts/`
The Figma uses these display/body families. Add the matching files (woff2
preferred). Until they're present, the site falls back to Oswald + Inter.

| Family (CSS)      | Expected file                        | Used for                          |
| ----------------- | ------------------------------------ | --------------------------------- |
| Les Flos Sans     | `LesFlosSans-Regular.woff2`          | "STACK / HACK" hero wordmark      |
| Les Flos Sage     | `LesFlosSage-Regular.woff2`          | Section headings                  |
| Les Flos Chaos    | `LesFlosChaos-Regular.woff2`         | "Top Prize" badge                 |
| Barlow Condensed  | `BarlowCondensed-Black.woff2`        | "Become a Sponsor" button         |
| Metropolis        | `Metropolis-Bold.woff2`, `Metropolis-Regular.woff2` | Card titles, hero subtitle |

(If you only have `.ttf`/`.otf`, either convert to woff2 or update the
`@font-face` `src`/`format` in `../style.css`.)

## Images → `assets/img/`
| File                   | Used for                                  |
| ---------------------- | ----------------------------------------- |
| `logo.png`             | Hero top-left mark + footer logo          |
| `colorstack-mark.png`  | "Powered by ColorStack" About card icon   |

Add sponsor logos here too once available, then swap them into the dashed
"Your Logo Here" / "Sponsor" placeholder tiles in `index.html`.
