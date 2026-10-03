import { RANKINGS } from '../../data/content'
import Counter from '../ui/Counter'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'
import { Stagger, StaggerItem } from '../animation/Stagger'

export default function Recognition() {
  return (
    <section id="recognition" aria-labelledby="recognition-title" className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeading id="recognition-title" eyebrow="Awards" title="Celebrating the best">
          We believe in celebrating the hard work and perseverance of the best!
        </SectionHeading>

        <Stagger as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RANKINGS.map((item) => (
            <StaggerItem
              as="li"
              key={`${item.rank}-${item.place}`}
              className="rounded-3xl border border-ink/10 bg-bg p-8 transition-shadow duration-300 hover:shadow-xl"
            >
              <p className="font-display text-7xl font-bold text-ink">{item.rank}</p>
              <p className="mt-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy">
                {item.place}
              </p>
              <p className="mt-5 leading-snug text-muted">{item.title}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl bg-navy px-8 py-8 text-white sm:flex-row">
          <p className="font-display text-6xl font-bold text-accent">
            <Counter value={12} suffix="+" />
          </p>
          <p className="text-center text-sm font-semibold uppercase tracking-widest sm:text-right">
            Collaborations with universities and programmes
          </p>
        </Reveal>
      </div>
    </section>
  )
}
