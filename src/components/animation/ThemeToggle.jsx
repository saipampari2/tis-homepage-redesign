import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

/** Switch-style dark/light toggle with a sliding knob and a rotating icon swap. */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={onToggle}
      className="relative flex h-11 w-[78px] shrink-0 items-center rounded-full border border-ink/15 bg-surface/80 p-1 backdrop-blur transition-colors duration-300"
    >
      <Sun aria-hidden="true" className="absolute left-3 size-4 text-muted" />
      <Moon aria-hidden="true" className="absolute right-3 size-4 text-muted" />
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className={`relative z-10 grid size-9 place-items-center rounded-full bg-accent text-navy shadow-md ${
          isDark ? 'ml-auto' : ''
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <Moon aria-hidden="true" className="size-4" /> : <Sun aria-hidden="true" className="size-4" />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  )
}
