import { useCallback, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { CONTACT, NAV_ITEMS } from '../../data/content'
import { useScrolled } from '../../hooks/useScrolled'
import Button from '../ui/Button'
import ThemeToggle from '../animation/ThemeToggle'
import MobileNav from './MobileNav'

export default function Navbar({ theme, onToggleTheme }) {
  const scrolled = useScrolled(24)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="hidden bg-navy text-xs font-semibold tracking-wide text-white sm:block">
          <div className="container-page flex h-9 items-center justify-between">
            <span className="uppercase text-white/70">CBSE Co-Ed Boarding &amp; Day School · Class IV–XII</span>
            <a href={CONTACT.helpline} className="inline-flex items-center gap-2 hover:text-accent">
              <Phone aria-hidden="true" className="size-3.5" />
              Admissions Helpline No. {CONTACT.helplineDisplay}
            </a>
          </div>
        </div>

        <nav
          aria-label="Primary"
          className={`transition-all duration-300 ${
            scrolled || menuOpen ? 'bg-bg/85 shadow-sm backdrop-blur-xl' : 'bg-transparent'
          }`}
        >
          <div className="container-page flex h-[72px] items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
              <span className="grid size-11 place-items-center rounded-2xl bg-navy font-display text-lg font-bold text-accent">
                TIS
              </span>
              <span className="hidden whitespace-nowrap leading-tight sm:block xl:hidden 2xl:block">
                <span className="block font-display text-lg font-bold text-ink">Tulas International School</span>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-muted">Dehradun</span>
              </span>
            </a>

            <ul className="hidden items-center gap-1 xl:flex">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative block whitespace-nowrap px-2.5 py-2 text-sm font-semibold text-ink/80 transition-colors hover:text-ink"
                  >
                    {item.label}
                    <span className="absolute inset-x-2.5 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              <Button href={CONTACT.applyUrl} arrow className="hidden md:inline-flex">
                Apply Now
              </Button>
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen((open) => !open)}
                className="grid size-11 place-items-center rounded-full border border-ink/15 bg-surface/80 text-ink xl:hidden"
              >
                {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <MobileNav open={menuOpen} onClose={closeMenu} />
    </>
  )
}
