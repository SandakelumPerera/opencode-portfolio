import { services } from '../data'
import Reveal, { SectionHeading } from './Reveal'

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        code="// 00.03 · CAPABILITIES"
        title="What we do"
        sub="Six disciplines, one operating system. Each engagement is threaded through brand, build and growth."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 0.08}>
            <div className="group flex h-full flex-col border border-line bg-surface p-6 backdrop-blur-sm transition-colors duration-300 hover:border-line-strong hover:bg-surface-strong md:p-8">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-widest text-mist">/{s.id}</span>
                <span className="h-8 w-8 transition-transform duration-500 group-hover:rotate-45">
                  <svg viewBox="0 0 32 32" fill="none" className="text-snow/30 transition-colors group-hover:text-snow">
                    <rect x="2" y="2" width="28" height="28" rx="14" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M16 10v12M10 16h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </div>

              <div
                className={`mt-6 aspect-[3/2] bg-gradient-to-br ${s.tint} relative overflow-hidden opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
              >
                <div className="absolute inset-0 flex items-center justify-center font-mono text-5xl font-bold text-ink/50">
                  {s.id}
                </div>
                <div
                  className="absolute inset-0 mix-blend-overlay"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0 2px, transparent 2px)',
                    backgroundSize: '28px 28px',
                  }}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold uppercase tracking-tight md:text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-mist">{s.blurb}</p>

              <ul className="mt-6 space-y-2 border-t border-line pt-5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-mist">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-mist" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
