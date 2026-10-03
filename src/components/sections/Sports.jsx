import { motion } from 'framer-motion'
import { SPORTS } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import { Stagger, StaggerItem } from '../animation/Stagger'

export default function Sports() {
  return (
    <section id="sports" aria-labelledby="sports-title" className="section-pad">
      <div className="container-page">
        <SectionHeading id="sports-title" eyebrow="Beyond Academics" title="Sports?" align="center">
          It’s not just a facility. At Tulas it’s the foundation! 16+ sports curated to bring joy and discipline to your life.
        </SectionHeading>

        <Stagger as="ul" className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {SPORTS.map((sport) => (
            <StaggerItem as="li" key={sport.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex h-full flex-col items-center gap-3 rounded-3xl border border-ink/10 bg-surface px-4 py-7 text-center shadow-sm transition-colors duration-300 hover:border-accent"
              >
                <span aria-hidden="true" className="text-4xl">
                  {sport.emoji}
                </span>
                <span className="font-semibold text-ink">{sport.name}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
