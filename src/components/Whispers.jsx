import { Link } from 'react-router-dom'
import { whispers } from '../data'
import Reveal, { SectionHeading } from './Reveal'

export default function Whispers() {
  const featured = whispers.slice(0, 3)

  return (
    <section id="whispers" className="border-y border-line bg-page-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
        <SectionHeading
          code="// 00.06 · FIELD NOTES"
          title="Whispers"
          sub="Short observations on product, craft and the web. Published monthly."
        />

        <div className="divide-y divide-line border-y border-line">
          {featured.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.06}>
              <Link
                to={`/whispers/${w.slug}`}
                className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tracking-widest text-mist">{w.id}</span>
                  <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-mist md:text-xl">
                    {w.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6 sm:shrink-0">
                  <span className="font-mono text-xs uppercase tracking-widest text-mist">{w.date}</span>
                  <span className="text-mist transition-all duration-300 group-hover:translate-x-1 group-hover:text-snow">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            to="/whispers"
            className="mt-8 inline-flex items-center gap-2 border-b border-line-strong pb-1 text-sm text-mist transition-colors hover:border-accent hover:text-snow"
          >
            Read all whispers
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
