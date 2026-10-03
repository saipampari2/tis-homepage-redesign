import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { CONTACT, HERO_PHOTOS } from '../../data/content'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Photo from '../ui/Photo'
import { Stagger, StaggerItem } from '../animation/Stagger'

export default function Hero() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const liftUp = useTransform(scrollYProgress, [0, 1], [0, -70])
  const dropDown = useTransform(scrollYProgress, [0, 1], [0, 70])
  const [karate, polo, swimming, dance] = HERO_PHOTOS

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-44 lg:pb-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-accent/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/2 size-[28rem] rounded-full bg-brand/10 blur-3xl" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Stagger>
          <StaggerItem>
            <Badge>Dehradun · Established 2012</Badge>
          </StaggerItem>
          <StaggerItem as="h1" className="mt-6 font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl xl:text-7xl">
            <span id="hero-title">
              Welcome to{' '}
              <span className="box-decoration-clone bg-[linear-gradient(transparent_62%,rgb(var(--accent)/0.55)_62%)]">
                Tulas International School
              </span>{' '}
              (TIS)
            </span>
          </StaggerItem>
          <StaggerItem as="p" className="mt-6 max-w-xl text-lg font-semibold text-ink">
            TIS is one of India’s top boarding and day schools in Dehradun, India.
          </StaggerItem>
          <StaggerItem as="p" className="mt-3 max-w-xl text-lg leading-relaxed text-muted">
            Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.
          </StaggerItem>
          <StaggerItem className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={CONTACT.applyUrl} arrow>
              Apply Now
            </Button>
            <Button href="#enquire" variant="outline">
              Enquire Now
            </Button>
          </StaggerItem>
          <StaggerItem className="mt-10 flex items-center gap-4 border-t border-ink/10 pt-6">
            <p className="font-display text-5xl font-bold text-ink">#1</p>
            <p className="max-w-[16rem] text-sm leading-snug text-muted">
              Co-Educational Boarding School in Dehradun by Education Today
            </p>
          </StaggerItem>
        </Stagger>

        <div className="relative mx-auto grid w-full max-w-lg grid-cols-2 gap-4 sm:gap-5" aria-label="Life at TIS">
          <motion.div style={reduceMotion ? undefined : { y: dropDown }} className="space-y-4 pt-10 sm:space-y-5 sm:pt-14">
            <Photo {...polo} eager className="aspect-[3/4] w-full rounded-[2rem] shadow-xl" />
            <Photo {...swimming} eager className="aspect-square w-full rounded-[2rem] shadow-xl" />
          </motion.div>
          <motion.div style={reduceMotion ? undefined : { y: liftUp }} className="space-y-4 sm:space-y-5">
            <Photo {...karate} eager className="aspect-square w-full rounded-[2rem] shadow-xl" />
            <Photo {...dance} eager className="aspect-[3/4] w-full rounded-[2rem] shadow-xl" />
          </motion.div>
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-2 bottom-8 rounded-2xl bg-navy px-5 py-4 text-white shadow-2xl sm:-left-8"
          >
            <p className="font-display text-3xl font-bold text-accent">22 acre</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Pollution-free campus</p>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About TIS"
        className="absolute bottom-6 left-1/2 hidden size-11 -translate-x-1/2 place-items-center rounded-full border border-ink/20 text-ink lg:grid"
      >
        <motion.span animate={reduceMotion ? undefined : { y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown aria-hidden="true" className="size-5" />
        </motion.span>
      </a>
    </section>
  )
}
