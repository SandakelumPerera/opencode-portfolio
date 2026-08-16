import { useState } from 'react'

export default function ProjectVisual({ tint, src, alt = '', label, code, className = '' }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-br" style={{ background: tint }}>
          <div className="absolute inset-0 flex items-center justify-center text-mist/60">
            ⊘
          </div>
        </div>
      )}
      {src && !error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => { setError(true); setLoaded(false); }}
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      {loaded && (
        <div
          className="absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25) 0 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      )}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent" />
      {label && (
        <div className="absolute left-4 top-4 font-mono text-[11px] tracking-widest text-white/90">
          {label}
        </div>
      )}
      {code && (
        <div className="absolute bottom-4 right-4 font-mono text-xs tracking-widest text-white/90">
          {code}
        </div>
      )}
    </div>
  )
}
