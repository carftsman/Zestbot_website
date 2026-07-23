# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing/landing website for ZestBot (a delivery/vendor/customer app platform), built with React 19 + Vite + Tailwind CSS v4. There is no backend in this repo — it's a static, client-rendered site with analytics/tag-manager integrations and a few marketing pages (home, services, policies, blog placeholder).

## Commands

- `npm run dev` — start the Vite dev server with HMR.
- `npm run build` — production build (output to `dist/`).
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint over the whole project (flat config in `eslint.config.js`).

There is no test suite/framework configured in this repo.

## Architecture

- **Entry point**: [src/main.jsx](src/main.jsx) mounts `<App />` inside `BrowserRouter` and calls `initializeGTM()` / `initGA()` on load (see `src/utils/gtm.js`, `src/utils/analytics.js`). GTM container ID and GA4 measurement ID are hardcoded there.
- **Routing**: [src/routes/AppRoutes.jsx](src/routes/AppRoutes.jsx) defines all routes, wrapped in a single `MainLayout` route (shared Navbar/Footer). Add new pages here.
- **Layout**: [src/layouts/MainLayout.jsx](src/layouts/MainLayout.jsx) renders `Navbar` + `<Outlet />` + `Footer`, and injects global reset CSS via an inline `<style>` tag. The footer background swaps color specifically on the home route (`isHome` check).
- **Pages vs components**: `src/pages/**` are route-level screens (e.g. `Home`, `Services`, `Services/CustomerApp`, `Services/VendorApp`, `Services/DeliveryPartner`, `Blog`, `ComingSoon`) that compose components. `src/components/home/**` holds the home-page section components (Hero, Cards, DeliveryShowcase, WhyChoose, DownloadApp, FAQs, Cities, Partners, policy pages, cookie consent, etc). `src/components/common/**` holds the shared `Navbar`, `Footer`, and `Button`.
- **Styling convention is inconsistent by design across the codebase** — most components import a CSS file from the top-level `src/styles/` directory (e.g. `Hero.css`, `DownloadApp.css`, `Cities.css`), but a few newer components (`WhyChoose`, `Services`) co-locate their CSS next to the `.jsx` file. When editing an existing component, match its existing pattern rather than introducing a third convention; when adding a global/reusable style, put it in `src/styles/`.
- **Analytics/tag-tracking**: three parallel page-view trackers are mounted per page (not globally) — `src/Gtm/PageTracker.jsx` (pushes to `window.dataLayer` for GTM), `src/Gtm/MetaPageTracker.jsx` (calls `window.fbq` if the Meta Pixel is present), and `src/Gtm/AnalyticsPageTracker.jsx` (calls `trackPageView` from `src/utils/analytics.js` for GA4). All three currently only get mounted on the `Home` page ([src/pages/Home/Home.jsx](src/pages/Home/Home.jsx)) — if adding tracking to other pages, mount the same trio there.
- **Routing edge cases**: several nav links use `react-router-hash-link`'s `HashLink` to scroll to in-page anchors on the home route (e.g. `/#about`, `/#contact`) with a custom `scrollWithOffset` in `Navbar.jsx`; plain route links manually intercept clicks to scroll-to-top when already on the target route instead of relying on default router behavior.
- **Vite plugins**: `@vitejs/plugin-react` and `@tailwindcss/vite` (Tailwind v4's Vite plugin, no `tailwind.config.js` needed) — see [vite.config.js](vite.config.js).
