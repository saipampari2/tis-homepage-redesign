/** Small pill used for eyebrows and quick facts. */
export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-ink/15 bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink backdrop-blur ${className}`}
    >
      <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
      {children}
    </span>
  )
}
