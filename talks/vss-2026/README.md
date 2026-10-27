# Vertical Software Summit 2026 talk deck

"AI writes the code. You still own the decisions." A 15-minute fill-in session for the Vertical Software Summit (Rubell Museum, Miami, November 4 and 5, 2026), 13 slides.

`vss-2026-deck.html` is the deck: one self-contained file with its font, screenshots and QR code inlined. Double-click it. It needs no network and loads nothing from outside the file. Docusaurus does not build this folder, so it never ships with the site.

## Presenting

| Key | Does |
|-----|------|
| → ↓ Space PageDown | Next slide, or the next step on the replay slide |
| ← ↑ Shift+Space PageUp | Back |
| Home / End | First / last slide |
| G | Go to a slide: click it, or type its number and press Enter |
| F | Fullscreen |
| T | Timer: the first press shows and starts it, later presses pause and resume. It counts up to 15:00, turns green at 13:00 and inverts at 15:00 |
| Shift+T | Reset the timer |
| N | Speaker notes: the spoken text, the planned start time and the next slide. Off on every load, so a mirrored projector never shows them |
| D | Dark or light theme (light is the default; the choice is remembered) |
| B or . | Black screen; any key brings the slide back |
| ? / Esc | Help / close |

Swipe left and right on a phone. A clicker's PageUp and PageDown work, and its F5 does not reload the page. The address keeps the slide (`#/6.2` is the replay slide's second step), so a reload comes back to the same place. `?theme=dark` opens in the dark theme for one load.

The replay slide (6) steps through three decisions from the October 2026 grilling and then the tally, one press each.

## Printing

Print the page, or save it as a PDF, for a fallback: one 16:9 slide per page (13.333 × 7.5 in), 13 pages. The replay slide prints with all its steps at once, and the speaker notes and the on-screen controls are left out.

## Editing

Edit `deck.src.html`, then rebuild:

```sh
node talks/vss-2026/build.mjs
```

`build.mjs` inlines everything in `assets/` into `vss-2026-deck.html`, and fails if any placeholder is left unfilled.

Each slide's notes are the spoken text of the approved script (`docs/superpowers/talk/script.md`, which is local and gitignored), copied word for word. When the script changes, update the slide's `<aside class="notes">` to match.

## Assets

- `besley-latin-wght-normal.woff2`: Besley Variable, Latin subset, from `@fontsource-variable/besley` 5.3.0, under the SIL Open Font License (`besley-OFL.txt`).
- `videoarchiver-home.jpg`, `videoarchiver-needs-attention.jpg` and `videoarchiver-storage.jpg`: the poster of `static/img/showcase/videoarchiver.mp4`, plus frames at 0:35.5 and 0:42 from the same recording, cropped to the app and saved as JPEG at quality 72. The recording uses the dashboard's demo mode, with made-up cameras and clips.
- `qr-summit26.svg`: version 5 with error correction M, made with segno 1.6.6. It encodes:

  ```
  https://mrkannah.com/vsaas/?utm_source=summit26&utm_medium=talk&utm_campaign=vsaas
  ```

  On 2026-10-27 `/vsaas` was not live yet: both the slashed and the unslashed URL returned 404. Once it is live, check that the slashed form does not redirect (`curl -sIL`). If it does, regenerate the QR with the form that doesn't, then rebuild and decode the rendered close slide to confirm:

  ```sh
  python -m pip install segno zxing-cpp pillow
  python -c "import segno; segno.make('<url>', error='m').save('talks/vss-2026/assets/qr-summit26.svg', kind='svg', border=4, dark='#000', light='#fff', omitsize=True, xmldecl=False, svgclass='qr', lineclass=None, title='QR code: mrkannah.com/vsaas')"
  ```

## Design

The deck uses the site's design system (`DESIGN.md`) with settings for a weak, washed-out projector. `DESIGN.md` ("Talk deck") records where it departs from the site.
