import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { LEADERS, PERSONALITIES } from '../../data/content'
import Photo from '../ui/Photo'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'
import { Stagger, StaggerItem } from '../animation/Stagger'

const initialsOf = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

const arrowClass =
  'grid size-12 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-accent hover:text-navy'

export default function Community() {
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (track) track.scrollBy({ left: direction * 320, behavior: 'smooth' })
  }

  return (
    <section id="community" aria-labelledby="community-title" className="section-pad">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="community-title" eyebrow="Influential Personalities On Campus" title="Sports Person / Social Media Influencers" />
          <div className="flex gap-3">
            <button type="button" aria-label="Previous personalities" onClick={() => scrollByCard(-1)} className={arrowClass}>
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button type="button" aria-label="Next personalities" onClick={() => scrollByCard(1)} className={arrowClass}>
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <Reveal>
        <ul
          ref={trackRef}
          tabIndex={0}
          aria-label="Influential personalities, scrollable"
          className="scrollbar-hidden mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {PERSONALITIES.map((person) => (
            <li
              key={person.name}
              className="w-[78vw] max-w-[20rem] shrink-0 snap-start overflow-hidden rounded-3xl border border-ink/10 bg-surface shadow-sm sm:w-80"
            >
              <Photo src={person.photo} alt={person.name} fallback={initialsOf(person.name)} className="aspect-[4/5] w-full" />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink">{person.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{person.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="container-page mt-20">
        <h3 className="font-display text-3xl font-bold text-ink">Leaders of India</h3>
        <Stagger as="ul" className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LEADERS.map((leader) => (
            <StaggerItem
              as="li"
              key={leader.name}
              className="rounded-2xl border border-ink/10 bg-surface p-6 transition-colors duration-300 hover:border-accent"
            >
              <p className="font-semibold text-ink">{leader.name}</p>
              <p className="mt-1 text-sm leading-snug text-muted">{leader.role}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
