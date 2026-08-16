import { Link } from 'react-router-dom'
import { whispers } from '../data'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

export default function WhispersPage() {
  return (
    <>
      <PageHeader
        code="// 03 · FIELD NOTES"
        title="Whispers"
        sub="Short, practical writing on product, motion, AI and the business of the web. Published monthly, never sponsored."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
        <div className="divide-y divide-line border-y border-line">
          {whispers.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.04}>
              <Link to={`/whispers/${w.slug}`} className="group grid gap-3 py-8 transition-colors md:grid-cols-12 md:items-center md:gap-6">
                <div className="md:col-span-4">
                  <div className="relative aspect-[4/3] overflow-hidden border border-line bg-surface">
                    <img
                      src={w.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br" style={{ background: w.tint }} />
                  </div>
                </div>
                <div className="flex items-center gap-4 md:col-span-2">
                  <span className="font-mono text-xs tracking-widest text-mist">{w.id}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-mist">{w.date}</span>
                </div>
                <div className="md:col-span-6">
                  <h2 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-mist md:text-2xl">
                    {w.title}
                  </h2>
                  <p className="mt-2 text-sm text-mist md:max-w-2xl">{w.excerpt}</p>
                </div>
                <div className="flex items-center gap-4 md:col-span-2 md:justify-end">
                  <span className="font-mono text-xs tracking-widest text-mist">{w.readTime}</span>
                  <span className="text-mist transition-all duration-300 group-hover:translate-x-1 group-hover:text-snow">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
