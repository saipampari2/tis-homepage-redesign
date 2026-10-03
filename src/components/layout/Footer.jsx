import { MapPin, Mail, Phone } from 'lucide-react'
import { CONTACT, FOOTER_LINKS, SOCIALS } from '../../data/content'

const linkClass = 'transition-colors hover:text-accent'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-2xl bg-accent font-display text-xl font-bold text-navy">
              TIS
            </span>
            <p className="font-display text-xl font-bold">Tulas International School</p>
          </div>
          <address className="mt-6 space-y-3 text-sm not-italic text-white/80">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {CONTACT.address}
              </a>
            </p>
            <p className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                Landline No.{' '}
                {CONTACT.landlines.map((line, index) => (
                  <span key={line.href}>
                    {index > 0 && ', '}
                    <a href={line.href} className={linkClass}>
                      {line.label}
                    </a>
                  </span>
                ))}
              </span>
            </p>
            <p className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={CONTACT.helpline} className={linkClass}>
                Admission Helpline No. {CONTACT.helplineDisplay}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`mailto:${CONTACT.email}`} className={linkClass}>
                {CONTACT.email}
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Follow TIS</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {SOCIALS.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-4 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-6 text-xs text-white/60">
          Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
