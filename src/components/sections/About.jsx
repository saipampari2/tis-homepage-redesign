import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading id="about-title" eyebrow="About TIS" title="Boarding and Day School Excellence">
            We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally.
          </SectionHeading>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
              Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.
            </p>
            <blockquote className="mt-10 border-l-4 border-accent pl-6 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
              Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.
            </blockquote>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="self-center rounded-[2rem] bg-navy p-8 text-white shadow-2xl sm:p-12">
          <p className="font-display text-3xl font-bold leading-snug sm:text-4xl">
            At Tulas, we always ask, “What’s the secret to making school awesome?”
          </p>
          <p className="mt-6 leading-relaxed text-white/80">
            The secret to making one’s school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.
          </p>
          <p className="mt-6 font-display text-2xl font-bold italic text-accent">There, we cracked it!</p>
        </Reveal>
      </div>
    </section>
  )
}
