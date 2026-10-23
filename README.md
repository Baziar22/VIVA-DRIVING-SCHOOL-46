# VIVA Driving School website (flat version)

All 11 files sit in ONE folder. There are no subfolders.

| File | What it is |
|---|---|
| index.html | The page |
| style.css | All styling and animations |
| script.js | All settings (top of file, "VIVA_CONFIG") and all behaviour |
| hero.png | Hero image |
| viva-logo.jpg | Logo |
| instructor.jpg | Instructor photograph |
| student-1.jpg to student-4.jpg | Student pass photographs |

## Run it locally
Double-click `index.html`. Or in a terminal inside the folder: `python3 -m http.server 8000` and open http://localhost:8000

## Edit things (all in the VIVA_CONFIG block at the top of script.js)
- **Prices:** in `prices`, change `price: null` to e.g. `price: "£40", detail: "per hour"`. `null` shows "Contact us for prices".
- **Services:** edit `title`/`text`; set `status` to `"confirmed"` when sure (otherwise "Ask if available" is shown).
- **Photos:** replace a file with a new one of the SAME name, or change the file name in `script.js`.
- **Add a student photo:** put `student-5.jpg` next to index.html and add `{ src: "student-5.jpg", alt: "..." },` under `students`.
- **Add an instructor:** copy the `{ ... }` block under `instructors`, add a comma, and edit it. Put their photo in the same folder.
- **Areas / test centres:** edit `areas`; add verified centres to `testCentres` (empty = section hidden).

## GitHub (new repository)
1. github.com > New repository > Create.
2. "uploading an existing file" > drag in all 11 files (not the zip) so `index.html` is at the top > Commit.
Optional GitHub Pages: Settings > Pages > Deploy from a branch > main / root.

## Vercel
Vercel > Add New > Project > import the repository > Framework "Other", leave build settings empty > Deploy.
