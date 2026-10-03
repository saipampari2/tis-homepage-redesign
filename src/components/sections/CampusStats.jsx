import { HeartPulse, Trees, Trophy, Users } from 'lucide-react'
import { CAMPUS_STATS } from '../../data/content'
import Counter from '../ui/Counter'
import SectionHeading from '../ui/SectionHeading'
import { Stagger, StaggerItem } from '../animation/Stagger'

const ICONS = { trees: Trees, trophy: Trophy, heart: HeartPulse, users: Users }

export default function CampusStats() {
  return (
    <section id="campus" aria-labelledby="campus-title" className="section-pad bg-brand">
      <div className="container-page">
        <SectionHeading id="campus-title" eyebrow="Boarding Life" title="A campus built around every student" invert>
          Learning feels like an adventure here—curiosity leads, creativity thrives, and every day brings something new to discover.
        </SectionHeading>

        <Stagger as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAMPUS_STATS.map((stat) => {
            const Icon = ICONS[stat.icon]
            return (
              <StaggerItem
                as="li"
                key={stat.label}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors duration-300 hover:bg-white/10"
              >
                <Icon aria-hidden="true" className="size-8 text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                <p className="mt-6 font-display text-6xl font-bold text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/70">{stat.label}</p>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
