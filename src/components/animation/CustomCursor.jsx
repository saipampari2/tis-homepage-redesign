import { useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useMousePosition } from '../../hooks/useMousePosition'
import { useHoverTarget } from '../../hooks/useHoverTarget'

const RING_SPRING = { stiffness: 450, damping: 38, mass: 0.4 }

function CursorLayers() {
  const { x, y, visible } = useMousePosition()
  const hovering = useHoverTarget()
  const ringX = useSpring(x, RING_SPRING)
  const ringY = useSpring(y, RING_SPRING)

  useEffect(() => {
    document.documentElement.classList.add('custom-cursor')
    return () => document.documentElement.classList.remove('custom-cursor')
  }, [])

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[100]"
      >
        <motion.div
          animate={{ scale: hovering ? 1.8 : 1, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`-ml-[18px] -mt-[18px] size-9 rounded-full border-2 border-accent transition-colors duration-200 ${
            hovering ? 'bg-accent/20' : 'bg-transparent'
          }`}
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[100]"
      >
        <motion.div
          animate={{ scale: hovering ? 0 : 1, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="-ml-[3px] -mt-[3px] size-1.5 rounded-full bg-accent"
        />
      </motion.div>
    </>
  )
}

/** Ring-and-dot cursor that grows over interactive elements. Mounts only for fine pointers. */
export default function CustomCursor() {
  const hasFinePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  return hasFinePointer ? <CursorLayers /> : null
}
