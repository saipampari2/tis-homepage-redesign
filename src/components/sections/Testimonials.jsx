import { REVIEWS, STUDENT_VOICES } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import { Stagger, StaggerItem } from '../animation/Stagger'
import Reveal from '../animation/Reveal'
import ReviewCarousel from './ReviewCarousel'

export default function Testimonials() {
  return (
    <section id="voices" aria-labelledby="voices-title" className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeading id="voices-title" eyebrow="From The Parents" title="Voices from our community">
          We have seen a remarkable improvement in our child’s confidence and skills since joining Tulas. The teachers here are genuinely dedicated to bringing out the best in every student, nurturing their strengths and helping them grow in all aspects of life.
        </SectionHeading>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-2">
          {STUDENT_VOICES.map((voice) => (
            <StaggerItem as="figure" key={voice.quote} className="rounded-3xl bg-navy p-8 text-white sm:p-10">
              <blockquote className="font-display text-3xl font-bold leading-snug">“{voice.quote}”</blockquote>
              <figcaption className="mt-5 leading-relaxed text-white/75">{voice.body}</figcaption>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20">
          <Reveal>
            <h3 className="mb-8 font-display text-3xl font-bold text-ink">Google Reviews</h3>
          </Reveal>
          <Reveal delay={0.1}>
            <ReviewCarousel reviews={REVIEWS} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
