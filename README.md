# Tulas International School Homepage Redesign

A Vite + React landing page for Tulas International School, built as a single-page homepage with motion effects, responsive navigation, and a dark/light theme switcher.

## Live Demo

- Website: https://tis-homepage-redesign-omega.vercel.app/
- Repository: https://github.com/saipampari2/tis-homepage-redesign

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

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
└──
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

Then open the Vite URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Production Build

```bash
npm run build
npm run preview
```

## Notes

This is a front-end homepage redesign and not a full backend application. The design is content-driven and structured around reusable section components and shared motion utilities.
