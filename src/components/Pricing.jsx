import { Link } from 'react-router-dom'
import { pricing } from '../data'
import Reveal, { SectionHeading } from './Reveal'

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        code="// 00.05 · ENGAGEMENTS"
        title="Transparent pricing"
        sub="Flat, predictable scopes. No hourly surprises, no hidden line items."
      />

      <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        {pricing.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.08}>
            <div
              className={`relative flex h-full flex-col border p-6 backdrop-blur-sm transition-colors duration-300 md:p-8 ${
                tier.featured
                  ? 'border-accent/40 bg-surface-strong lg:-translate-y-3'
                  : 'border-line bg-surface hover:border-line-strong'
              }`}
            >
              {tier.discount && (
                <span
                  className={`absolute -top-3 right-6 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-widest ${
                    tier.featured ? 'bg-accent text-on-accent' : 'border border-line-strong bg-page text-snow'
                  }`}
                >
                  {tier.discount}
                </span>
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-mist">{tier.name}</h3>
                <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
                  {tier.delivery}
                </span>
              </div>

              <p className="mt-5 font-mono text-5xl font-bold tabular-nums tracking-tight md:text-6xl">
                {tier.price}
              </p>
              <p className="mt-2 text-sm text-mist">{tier.tagline}</p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-mist">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border text-[11px] ${
                        tier.featured
                          ? 'border-accent bg-accent text-on-accent'
                          : 'border-line-strong text-snow'
                      }`}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                  tier.featured
                    ? 'bg-accent text-on-accent hover:opacity-85'
                    : 'border border-line-strong text-snow hover:border-accent hover:bg-surface'
                }`}
              >
                Book {tier.name}
                <span>→</span>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
