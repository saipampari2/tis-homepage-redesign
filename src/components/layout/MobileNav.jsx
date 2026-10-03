import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_ITEMS, CONTACT } from '../../data/content'
import Button from '../ui/Button'

const listVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }

/** Full-screen menu for viewports below xl. Locks page scroll and closes on Escape. */
export default function MobileNav({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-bg px-6 pb-10 pt-28 xl:hidden"
        >
          <motion.ul variants={listVariants} initial="hidden" animate="visible" className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <motion.li key={item.href} variants={itemVariants}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-ink/10 py-4 font-display text-3xl font-bold text-ink transition-colors hover:text-muted"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <Button href={CONTACT.applyUrl} arrow>
              Apply Now
            </Button>
            <Button href="#enquire" variant="outline" onClick={onClose}>
              Enquire Now
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
