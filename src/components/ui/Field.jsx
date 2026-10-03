export const INPUT_CLASS =
  'block min-h-12 w-full rounded-xl border border-ink/15 bg-bg px-4 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40'

/** Label wrapper for form controls (wraps the control so the label is implicitly associated). */
export default function Field({ label, children }) {
  return (
    <label className="block text-sm font-semibold text-ink">
      <span className="mb-1.5 block">{label}</span>
      {children}
    </label>
  )
}
