# Swipe Right: Recruiter Edition

A tiny swipe game about Tomasz Stokłosa, Full-Stack Software Engineer. Every candidate card is Tomasz in a different disguise, and the game does not accept "no" for an answer. It ends with a summary, a contact button and a CV download.

Built with React, TypeScript and Tailwind CSS, with Claude Code as a pair programmer. Hosted on Azure Static Web Apps (Free).

## Run locally

```bash
npm install
npm run dev
```

## Edit the content

All texts (PL and EN), profiles, summary traits and contact links live in [`src/content.ts`](src/content.ts). The CV file is `public/Tomasz_Stoklosa_EN.pdf`.

## Deploy

Pushing to `main` runs `.github/workflows/azure-static-web-apps.yml`, which builds the app and uploads `dist` to Azure Static Web Apps. It needs the repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN` (the deployment token of the Static Web App). Without it the build still runs and the deploy step is skipped.
