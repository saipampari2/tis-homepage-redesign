const REPEATS = 6

function Phrase() {
  return (
    <span className="flex shrink-0 items-center gap-10">
      <span className="font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">Let&apos;s do it</span>
      <span className="font-display text-3xl font-bold italic text-accent sm:text-4xl">with Tulas</span>
      <span aria-hidden="true" className="text-2xl text-accent">✦</span>
    </span>
  )
}

/** Infinite ticker. Content is duplicated so a -50% translate loops seamlessly. */
export default function Marquee() {
  return (
    <div role="presentation" className="overflow-hidden bg-navy py-6 text-white">
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {Array.from({ length: REPEATS * 2 }, (_, index) => (
          <Phrase key={index} />
        ))}
      </div>
    </div>
  )
}
