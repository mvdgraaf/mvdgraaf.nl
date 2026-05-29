# MVDGRAAF site (Vue + Vite)

De originele single-file pagina is opgesplitst in:

- `index.html` (app entry)
- `src/App.vue` (HTML-structuur in een Vue component)
- `src/styles/site.css` (alle styling)
- `src/scripts/site.js` (interacties: reveal animaties, nav highlight, contactformulier)

## Lokaal draaien

```bash
npm install
npm run dev
```

## Productie build

```bash
npm run build
npm run preview
```

## Docker (self-hosted)

Build image:

```bash
docker build -t mvdgraaf-site .
```

Run container:

```bash
docker run --rm -p 8080:80 mvdgraaf-site
```

Open daarna `http://localhost:8080`.

### Matomo (self-hosted analytics)

Een eenvoudige Matomo-installatie (MariaDB + Matomo) is opgenomen als voorbeeld in `docker-compose.matomo.yml`.

Start Matomo + site met:

```powershell
docker compose -f docker-compose.matomo.yml up -d --build
```

De compose file start drie services: `db` (MariaDB), `matomo` en `site` (bouwt jouw website via de aanwezige `Dockerfile`).

Matomo zal beschikbaar zijn op `http://localhost:8081` en de website op `http://localhost:8080` (standaard). Voeg in het Matomo dashboard een site toe en gebruik het siteId in je tracking-config. De site code laadt standaard Matomo op `http://localhost:8081/` en gebruikt `siteId=1` — pas dit aan in `src/scripts/site.js` als je een andere siteId of URL gebruikt.


