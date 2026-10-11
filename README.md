# Trust Hub bilingual UI prototype

## Online preview

Team preview: https://bavarianboy.github.io/trust-hub-ui/

Repository: https://github.com/bavarianboy/trust-hub-ui

GitHub Pages publishes the root of the `main` branch automatically after each push.
The repository and preview are public. Login and portal actions are demonstration-only.

To update from this folder:

```powershell
node build-data.mjs
node validate.mjs
git add .
git commit -m "Update UI preview"
git push
```

Canonical page and service content is in `data/`. No external packages are required.

Responsive Arabic/English UI for all public and authenticated portal pages documented in the SIMAH roadmap.

## Run

From this folder, start any static server. For example:

```powershell
node serve.mjs
```

Then open `http://localhost:4173`.

## Coverage

- Public landing and login
- Dashboard, readiness, packages, projects, documents, notifications, invoices, quotations, team, support, account, messages and new-service catalog
- All 60 services with detailed preview dialogs from the captured service data
- Arabic RTL and English LTR layouts
- Desktop, tablet and mobile navigation
- Preview-only actions; no request, message, payment or account change is submitted

## Brand

Identity palette: navy `#172247`, blush pink `#F4A5B8`, white `#FFFFFF`, rose-gold accent `#C78D7C`. The supplied Trust Hub logo is stored in `assets/trust-hub-logo.jpg`.
