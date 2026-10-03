import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerItem } from './variants'

/** Parent that staggers its <StaggerItem> children into view as it enters the viewport. */
export function Stagger({ as = 'div', className, children, ...rest }) {
  const reduceMotion = useReducedMotion()
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      variants={staggerContainer}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ as = 'div', className, children }) {
  const Tag = motion[as]

  return (
    <Tag className={className} variants={staggerItem}>
      {children}
    </Tag>
  )
}
