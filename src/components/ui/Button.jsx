import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const VARIANTS = {
  primary: 'bg-accent text-navy shadow-lg shadow-accent/30 hover:brightness-105',
  secondary: 'bg-navy text-white hover:bg-navy/90',
  outline: 'border-2 border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/5',
}

/** Link-or-button with a consistent 48px touch target and press feedback. */
export default function Button({ href, variant = 'primary', arrow = false, className = '', children, ...rest }) {
  const classes = `inline-flex min-h-12 items-center whitespace-nowrap justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-200 ${VARIANTS[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <ArrowUpRight aria-hidden="true" className="size-4" />}
    </>
  )

  if (href) {
    const external = href.startsWith('http')
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" whileTap={{ scale: 0.97 }} className={classes} {...rest}>
      {content}
    </motion.button>
  )
}
