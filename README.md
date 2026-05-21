# KdK Event Finder

A simple React app for browsing Karneval der Kulturen festival events by day, time, type, name, and stage.

The app is static and designed for GitHub Pages. Event data is bundled into the frontend from the official festival page.

## Features

- Event cards grouped by day and time
- Filters for day, type, time range, name, and stage
- Multi-select filters for types and stages
- Static build with Vite and React
- GitHub Pages deployment workflow

## Local Development

```bash
npm install
npm run dev
```

The local app runs at `http://localhost:5173/` by default.

## Refresh Event Data

```bash
npm run generate:events
```

The generator reads `https://karneval.berlin/fest/` and updates `src/data/events.ts`.

To generate from a local HTML file:

```bash
npm run generate:events -- --source=/path/to/fest.html
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Disclaimer

Created independently by Andre Lopes. This app is not affiliated with, endorsed by, or officially related to the Karneval der Kulturen organization.

## License

MIT
