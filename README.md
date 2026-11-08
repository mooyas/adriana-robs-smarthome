# House Lights

A mobile-first dashboard for running website routines for your house lights. The app does not display or track on/off status.

## Setup

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

## Configure lights

Edit `src/lights.ts` and add one entry per light. Use the display name and the absolute URL for that light's toggle control:

```ts
export const houseLights: HouseLight[] = [
  { displayName: "Your light name", toggleUrl: "https://your-control-link.example/" },
  { displayName: "Kitchen", onUrl: "https://your-on-link.example/", offUrl: "https://your-off-link.example/" },
];
```

Use `toggleUrl` for a single routine, or `onUrl` and `offUrl` to show separate On and Off buttons. Replace the example values with your own; links must use `http://` or `https://`. Missing or invalid action URLs are shown as disabled controls with a configuration hint. Configured routines are requested in a temporary hidden frame, so the dashboard stays on the same page and no new tab opens.

Build the production app with `npm run build`.

## Publish

The site is published at <https://mooyas.github.io/adriana-robs-smarthome/> using GitHub Pages. Push changes to `main` to build and deploy automatically through `.github/workflows/deploy.yml`.

The links in `src/lights.ts` are included in the public site and repository source. Keep in mind that anyone who can access the site can inspect those routine URLs.

The hero photo is stored in `src/assets/hero-photo.jpg`.
