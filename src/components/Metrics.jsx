import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { metrics, logos } from '../data'
import Reveal, { IndexMarker } from './Reveal'

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    const handler = (e) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])
  return reducedMotion
}

function Counter({ value, suffix, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reducedMotion) {
      setDisplay(value)
      return
    }
    const duration = 1600
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, reducedMotion])

  return (
    <Reveal delay={delay} className="border border-line bg-surface p-6 backdrop-blur-sm md:p-8">
      <div ref={ref} className="font-mono text-4xl font-bold tabular-nums text-snow md:text-6xl">
        {display}
        <span className="text-mist">{suffix}</span>
      </div>
      <p className="mt-3 text-sm uppercase tracking-widest text-mist">{label}</p>
    </Reveal>
  )
}

export default function Metrics() {
  return (
    <section id="studio" className="border-y border-line bg-page-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Reveal>
          <IndexMarker code="// 00.02 · THE NUMBERS" />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Counter key={m.label} {...m} delay={i * 0.08} />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-line py-8 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="flex items-center gap-3 font-mono text-xl tracking-[0.2em] text-snow/30 transition-colors hover:text-snow/60"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-snow/20" />
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
