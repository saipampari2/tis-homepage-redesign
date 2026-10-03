import { useEffect, useState } from 'react'

const INTERACTIVE = 'a, button, [role="button"], [role="switch"], input, select, textarea, label'

/** True while the pointer is over an interactive element (single delegated listener). */
export function useHoverTarget(selector = INTERACTIVE) {
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onOver = (event) => setHovering(Boolean(event.target.closest?.(selector)))
    document.addEventListener('mouseover', onOver, { passive: true })
    return () => document.removeEventListener('mouseover', onOver)
  }, [selector])

  return hovering
}
