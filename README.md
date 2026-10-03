# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness. Copy, contact details, statistics, rankings and parent reviews are retained from [tis.edu.in](https://tis.edu.in/).

## 🚀 Live Demo
- **Live URL:** _add your Vercel / Netlify link here after deploying_
- **Repository:** _add your GitHub repo link here_

## 🛠️ Tech Stack
- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3 (design tokens as CSS variables)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify / GitHub Pages (static build, no server needed)

## ✨ Standout Features Implemented
All four optional features are implemented:

1. **Custom Cursor** (`components/animation/CustomCursor.jsx`): a spring-smoothed ring plus a dot. The ring scales up and tints over links, buttons and form controls. It mounts only on `(hover: hover) and (pointer: fine)` devices, so touch screens never get it. Pointer position lives in motion values, so mouse movement causes zero React re-renders.
2. **Scroll-Triggered Reveals** (`Reveal.jsx`, `Stagger.jsx`): `whileInView` with `viewport={{ once: true }}`. Entrance durations are 0.45–0.5s, and card grids stagger by 80ms.
3. **Animated Dark/Light Theme Switcher** (`ThemeToggle.jsx`, `hooks/useTheme.js`): a sliding-knob switch with a rotating sun/moon swap. The choice is saved in `localStorage` and defaults to the system preference. An inline script in `index.html` applies the theme before first paint, so there is no flash.
4. **Scroll Progress Bar** (`ScrollProgress.jsx`, `hooks/useScrollProgress.js`): `useScroll` smoothed with `useSpring`, driving a `scaleX` transform.

Also: parallax photo collage in the hero, count-up stats (`Counter.jsx`, driven by motion values), an infinite marquee, an auto-rotating review carousel that pauses on hover/focus, and a scroll-snap personalities rail.

All motion respects `prefers-reduced-motion`.

## 📦 Getting Started Locally

Requires Node.js 18+.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser.

Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## 🌍 Deployment

- **Vercel:** import the repo. Framework preset "Vite", build command `npm run build`, output directory `dist`.
- **Netlify:** build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.js`, run `npm run build`, and publish `dist/` (for example with the `gh-pages` branch or a Pages workflow).

## Component Architecture Overview

```
src/
├── components/
│   ├── ui/          # Button, Badge, SectionHeading, Photo, Counter, Field, Marquee
│   ├── layout/      # Navbar, MobileNav, Footer
│   ├── sections/    # Hero, About, CampusStats, Sports, Recognition, Community,
│   │                # Testimonials (+ ReviewCarousel), Enquire
│   └── animation/   # CustomCursor, ScrollProgress, ThemeToggle, Reveal, Stagger, variants
├── hooks/           # useTheme, useScrolled, useMediaQuery, useMousePosition,
│                    # useHoverTarget, useScrollProgress
├── data/            # content.js - nav items, stats, sports, rankings, reviews, contact
└── styles/          # index.css - Tailwind layers, theme tokens
```

Notes for review:
- **Theme tokens** are RGB CSS variables (`--bg`, `--ink`, `--brand`, ...) mapped in `tailwind.config.js`, so every utility such as `bg-surface` or `text-ink/60` flips with the `.dark` class.
- **Performance:** scroll- and pointer-driven values (progress bar, cursor, parallax, counters) use Framer Motion motion values, so they animate without re-rendering React components. `useScrolled` only re-renders when its boolean flips.
- **Accessibility:** semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), skip link, labelled controls, `aria-*` on the switch, menu and carousel, 44–48px touch targets, Escape closes the mobile menu.

## Brand Identity Retained

- Navy and gold palette, school name, tagline copy, statistics (22 acre campus, 16+ sports, 24×7 medical, 6:1 ratio), rankings, notable alumni/visitors, parent reviews, contact details and policy links from the official site.

## Known limitations

- The enquiry form is a front-end demo. It validates but does not send data anywhere (the original uses OTP verification, which needs a backend).
- Photos are loaded from tis.edu.in; if they fail to load, branded fallback tiles are shown. For production, download and self-host them.
