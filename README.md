# Carecogni website

De publieke website van Carecogni. De site wordt bij iedere wijziging op
`main` automatisch gebouwd en via GitHub Pages gepubliceerd.

## Lokaal ontwikkelen

Vereist Node.js 22 of nieuwer.

```bash
npm install
npm run dev
```

## Controleren

```bash
npm test
npm run export:github-pages
```

De statische export wordt lokaal in `github-pages/` geplaatst. Deze map wordt
door de GitHub Actions-workflow gepubliceerd en hoeft niet handmatig te worden
toegevoegd aan de repository.
