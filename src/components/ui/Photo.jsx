import { useState } from 'react'

/** Image that degrades to a branded tile if the remote asset fails to load. */
export default function Photo({ src, alt, fallback = 'TIS', eager = false, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative grid place-items-center overflow-hidden bg-gradient-to-br from-navy via-brand to-navy font-display text-3xl font-bold text-accent ${className}`}
      >
        <span aria-hidden="true" className="absolute -right-8 -top-8 size-32 rounded-full bg-accent/20" />
        <span aria-hidden="true" className="absolute -bottom-10 -left-6 size-28 rounded-full border-[14px] border-accent/15" />
        <span className="relative">{fallback}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}
