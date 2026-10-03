import { useState } from 'react'
import { CheckCircle2, Phone } from 'lucide-react'
import { CLASSES, CONTACT, STATES } from '../../data/content'
import Button from '../ui/Button'
import Field, { INPUT_CLASS } from '../ui/Field'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Enquire() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="enquire" aria-labelledby="enquire-title" className="section-pad bg-brand">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <SectionHeading id="enquire-title" eyebrow="Admission" title="Enquire Now!" invert>
            Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.
          </SectionHeading>
          <Reveal delay={0.1} className="mt-10 space-y-4">
            <a
              href={CONTACT.helpline}
              className="inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-white transition-colors hover:bg-white/10"
            >
              <Phone aria-hidden="true" className="size-6 text-accent" />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-white/70">Admission Helpline No.</span>
                <span className="block font-display text-2xl font-bold">{CONTACT.helplineDisplay}</span>
              </span>
            </a>
            <div>
              <Button href={CONTACT.applyUrl} arrow>
                Apply Now
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="rounded-[2rem] bg-surface p-6 shadow-2xl sm:p-10">
          {submitted ? (
            <div role="status" className="py-10 text-center">
              <CheckCircle2 aria-hidden="true" className="mx-auto size-14 text-accent" />
              <p className="mt-4 font-display text-3xl font-bold text-ink">Thank you!</p>
              <p className="mt-2 text-muted">Our admissions team will get in touch with you shortly.</p>
              <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                Send another enquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field label="Student / Parent name">
                  <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={INPUT_CLASS} />
                </Field>
              </div>
              <Field label="Mobile number">
                <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="+91" className={INPUT_CLASS} />
              </Field>
              <Field label="Email">
                <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={INPUT_CLASS} />
              </Field>
              <Field label="Class">
                <select name="class" required defaultValue="" className={INPUT_CLASS}>
                  <option value="" disabled>
                    Select Class
                  </option>
                  {CLASSES.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <Field label="State">
                <select name="state" required defaultValue="" className={INPUT_CLASS}>
                  <option value="" disabled>
                    Select State
                  </option>
                  {STATES.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <label className="flex items-start gap-3 text-sm text-muted sm:col-span-2">
                <input name="consent" type="checkbox" required className="mt-1 size-5 shrink-0 accent-[#F5B800]" />
                I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun
              </label>
              <div className="sm:col-span-2">
                <Button type="submit" className="w-full">
                  Enquire Now
                </Button>
                <p className="mt-3 text-center text-xs text-muted">Demo form for this redesign: submissions are not sent anywhere.</p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
