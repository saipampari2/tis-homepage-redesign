import { motion, useReducedMotion } from 'framer-motion'
import { revealVariants } from './variants'

/** Fades and lifts its children into view once, when scrolled into the viewport. */
export default function Reveal({ as = 'div', delay = 0, className, children }) {
  const reduceMotion = useReducedMotion()
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      variants={revealVariants}
      custom={delay}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </Tag>
  )
}
