# MC CUTEX v15 — Steel Business Management Software

Developed by M Corporation. This package is based on the existing MC CutPro v14 source and keeps the original calculation engine and saved-calculation storage key intact.

## Included
- Rebranded header, page title, footer, About Us content, quotation branding, and silver/blue I-beam logo assets.
- Customer quotation preview and generated PNG include party, product/size, quantity, cut length, estimated weight, customer rate, additional charges, and total payment.
- Help page covering current usage, theoretical weight density (7,850 kg/m³), cutting/price estimation caveats, sharing, FAQ, and contact-detail limitation.
- Settings for main theme color, page-specific colors, and English/Bangla interface text preferences. Preferences use localStorage; calculation input IDs, numeric values, formulas, units, and saved data are not translated or intentionally altered.
- PWA manifest, 192px/512px icons, Install MC CUTEX button, install-prompt fallback instructions, and lightweight versioned app-shell service worker.
- Relative manifest/service-worker/icon URLs for deployment in the existing GitHub Pages repository subdirectory.

## Deploy
Upload the ZIP contents to the repository root, preserving the `icons/` folder, `manifest.json`, `sw.js`, `.nojekyll`, and `index.html`. Test in a separate GitHub repository first, then publish to the live site after confirming the commercial calculations and saved estimates.

## Test summary
- ZIP integrity: checked.
- JavaScript syntax: checked with Node.js.
- Manifest JSON: validated.
- Required quotation fields and single Help/Settings/About pages: checked in source.
- Source comparison: existing calculation functions and saved-calculation storage key were retained; no formula changes were intentionally made.
- Browser end-to-end testing could not be completed in this environment because Chromium navigation was blocked by the execution environment. Verify install prompt, image rendering, calculations, language/color persistence, and offline launch on the target Android Chrome/GitHub Pages deployment before live release.
- The provided MC CUTEX poster/logo reference was not present among the files available for this build; a new silver/blue I-beam emblem was created from the written design description. Replace `icons/mc-cutex-logo.svg` and app icons with the approved reference-derived assets if you provide the original image.
- No verified developer email or phone number was present in the source, so the Help page does not invent contact details.


## v15 follow-up update — supplied logo and home cleanup
- Cropped the supplied MC CUTEX poster to the central silver/blue MC + I-beam emblem; excluded poster title, tagline, feature icons, and background scene.
- Added `icons/mc-cutex-logo.png` as a transparent cropped emblem for the header, install button, and About Us page.
- Rebuilt `icon-192.png` and `icon-512.png` on a dark navy square background from the extracted emblem.
- Removed the duplicate Normal Calculator tile from the Home dashboard and removed its click handler. The header Normal Calculator popup remains.
- Updated the manifest and service-worker cache version; paths remain relative for GitHub Pages subdirectory deployment.
- Browser/Android end-to-end tests remain pending; follow the test checklist before live deployment.


### Home page install-row cleanup (v15 follow-up)
- Install card is hidden by default and appears only when the browser fires `beforeinstallprompt` (a real native install prompt is available).
- If the browser does not support the prompt, or the app is already installed, the install button and its entire row remain hidden; no fallback text row is shown.
- Added SVG logo fallback for header, home intro, and About page if the PNG asset fails to load.
- When deploying to GitHub Pages, upload the complete ZIP contents, including the `icons/` folder, `manifest.json`, and `sw.js`; uploading only `index.html` will cause broken image assets.


## v15.1 — Navigation, logo path and green/white theme fix
- Fixed the global navigation so each Home tile, Home/back button, and bottom-nav item switches to its matching `.tool-page` view and resets to the top of that view rather than scrolling through Home content.
- Removed the duplicate click handler that could trigger navigation twice. Browser Back/Forward now follows the page hash.
- Restored a clean green-and-white palette while retaining the v15 layout and card arrangement.
- Normalized logo, manifest, and icon references to explicit relative paths suitable for the repository subdirectory. Existing SVG fallback remains in place.
- Updated manifest theme/background colors and service-worker cache version. Calculation functions and saved-data key were not intentionally modified.

### Validation
- ZIP integrity and JavaScript syntax checked. Manifest JSON parsed successfully.
- Source-level checks confirmed the seven page views and navigation targets exist.
- Automated Android Chrome/GitHub Pages end-to-end testing is not available in this environment; use the concrete manual test checklist before publishing.
