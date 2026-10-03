import { useEffect, useState } from 'react'
import { useMotionValue } from 'framer-motion'

/**
 * Tracks the pointer without re-rendering on every move: coordinates live in
 * motion values, and React state only flips when the pointer enters/leaves the window.
 */
export function useMousePosition() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
      setVisible(true)
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [x, y])

  return { x, y, visible }
}
