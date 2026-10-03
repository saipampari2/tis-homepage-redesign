import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

/** Thin reading-progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const scaleX = useScrollProgress()

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-accent via-amber-400 to-orange-400"
    />
  )
}
