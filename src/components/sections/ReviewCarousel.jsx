import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const ROTATE_MS = 6000

const arrowClass =
  'grid size-12 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-accent hover:text-navy'

const initialsOf = (name) =>
  name
    .replace(/^Mrs\s/, '')
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

/** Auto-rotating parent reviews. Pauses on hover/focus and when reduced motion is requested. */
export default function ReviewCarousel({ reviews }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const total = reviews.length
  const review = reviews[index]

  useEffect(() => {
    if (paused || reduceMotion) return undefined
    const timer = setInterval(() => setIndex((current) => (current + 1) % total), ROTATE_MS)
    return () => clearInterval(timer)
  }, [paused, reduceMotion, total])

  const go = (step) => setIndex((current) => (current + step + total) % total)

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative rounded-[2rem] bg-surface p-8 shadow-xl sm:p-12"
    >
      <Quote aria-hidden="true" className="size-12 text-accent" />
      <div aria-live={paused ? 'polite' : 'off'} className="min-h-[15rem] sm:min-h-[12rem]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <blockquote className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              {review.text}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="grid size-12 place-items-center rounded-full bg-navy font-bold text-accent"
              >
                {initialsOf(review.name)}
              </span>
              <span>
                <span className="block font-semibold text-ink">{review.name}</span>
                <span className="block text-sm text-muted">{review.relation}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1" role="group" aria-label="Choose a review">
          {reviews.map((item, dotIndex) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show review ${dotIndex + 1} of ${total}`}
              aria-current={dotIndex === index}
              onClick={() => setIndex(dotIndex)}
              className="grid size-6 place-items-center"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  dotIndex === index ? 'w-6 bg-accent' : 'w-2 bg-ink/25'
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <button type="button" aria-label="Previous review" onClick={() => go(-1)} className={arrowClass}>
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button type="button" aria-label="Next review" onClick={() => go(1)} className={arrowClass}>
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
