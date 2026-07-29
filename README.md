# Insight Health Partners Ltd website

A responsive multi-page website built with Next.js and Tailwind CSS, configured to export as static files for GitHub Pages.

## Pages

- Home
- About
- Services
- Clinical Governance
- Founding Team
- Contact

## Run locally

Install Node.js 20 or later, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build static files

```bash
npm run build
```

The static website is created in the `out` folder.

## Deploy to GitHub Pages

1. Create a GitHub repository and upload this project.
2. In the repository, open **Settings → Pages**.
3. Choose **GitHub Actions** as the source.
4. Add the workflow at `.github/workflows/deploy.yml`, commit it, and push.
5. The site will publish after the workflow completes.

The build automatically detects the repository name in GitHub Actions, so both `username.github.io` and `username.github.io/repository-name` addresses are supported.

## Before launch

- Replace the placeholder enquiry email if required.
- Connect the contact form to an approved secure form service; the current form is a front-end demonstration.
- Replace image placeholders with licensed imagery.
- Add final registered office, company number and privacy/cookie content.
- Review all clinical and regulatory wording.
