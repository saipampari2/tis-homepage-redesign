import Badge from './Badge'
import Reveal from '../animation/Reveal'

/** Eyebrow + title + optional description, aligned left or centred. */
export default function SectionHeading({ id, eyebrow, title, children, align = 'left', invert = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      <Badge className={invert ? '!border-white/25 !bg-white/10 !text-white' : ''}>{eyebrow}</Badge>
      <h2
        id={id}
        className={`mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl ${invert ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-lg leading-relaxed ${invert ? 'text-white/80' : 'text-muted'}`}>{children}</p>
      )}
    </Reveal>
  )
}
