# Tulas International School Homepage Redesign

A Vite + React landing page for Tulas International School, built as a single-page homepage with motion effects, responsive navigation, and a dark/light theme switcher.

## Live Demo

- Website: https://tis-homepage-redesign-omega.vercel.app/
- Repository: https://github.com/saipampari2/tis-homepage-redesign

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS
- Framer Motion
- Lucide React

## Highlights

- Custom cursor on devices with a fine pointer; touch devices keep the native cursor.
- Scroll-triggered section reveals and staggered card entrances.
- Persistent light/dark theme toggle.
- Animated reading-progress bar.
- Responsive navigation, keyboard dismissal, reduced-motion support, and an accessible skip link.

## Actual Project Structure Used

```bash
src/
├── App.jsx
├── main.jsx
├── data/
│   └── content.js
├── hooks/
│   ├── useTheme.js
│   ├── useScrolled.js
│   ├── useMediaQuery.js
│   ├── useMousePosition.js
│   ├── useHoverTarget.js
│   └── useScrollProgress.js
├── components/
│   ├── animation/
│   │   ├── CustomCursor.jsx
│   │   ├── Reveal.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── Stagger.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── variants.js
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── MobileNav.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── CampusStats.jsx
│   │   ├── Sports.jsx
│   │   ├── Recognition.jsx
│   │   ├── Community.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ReviewCarousel.jsx
│   │   └── Enquire.jsx
│   └── ui/
│       ├── Badge.jsx
│       ├── Button.jsx
│       ├── Counter.jsx
│       ├── Field.jsx
│       ├── Marquee.jsx
│       ├── Photo.jsx
│       └── SectionHeading.jsx
├── styles/
│   └── index.css
```

## What the app actually uses

- `App.jsx` composes the homepage and renders the main landing-page sections.
- `content.js` stores the school text, stats, rankings, testimonials, and contact data.
- `useTheme.js` handles the persisted light/dark mode.
- `Navbar` and `MobileNav` power the responsive navigation.
- `CustomCursor`, `ScrollProgress`, `Reveal`, and `Stagger` add motion and scroll-based animation effects.
- `Hero`, `About`, `CampusStats`, `Sports`, `Recognition`, `Community`, `Testimonials`, and `Enquire` are the main homepage sections.
- `Button`, `SectionHeading`, `Counter`, `Badge`, `Photo`, `Field`, and `Marquee` are used in the UI.

## Getting Started

```bash
npm install
npm run dev
```

The development server is configured to use port `3000`:

```bash
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploying to Vercel

1. Push this repository to GitHub and import it in [Vercel](https://vercel.com/new).
2. Keep the project root as the repository root and select **Vite** if Vercel does not detect it automatically.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy. No environment variables are required.

For a local production check, run `npm run build` and then `npm run preview`.

## Notes

This is a frontend-only redesign. The enquiry form prepares an email addressed to the school contact in the visitor's configured email app. Visitors review the message and send it themselves; this site does not transmit or store their details. A backend email service would be needed for automatic submission.
