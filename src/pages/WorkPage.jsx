import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data'
import PageHeader from '../components/PageHeader'
import ProjectVisual from '../components/ProjectVisual'
import Reveal from '../components/Reveal'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category.split(' / ')[0])))]

export default function WorkPage() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category.split(' / ')[0] === filter)

  return (
    <>
      <PageHeader
        code="// 01 · SELECTED WORK — YR/2023–2025"
        title="Projects we are proud of"
        sub="Eight case studies, one operating principle: engineering decisions are design decisions. Filter by discipline to see the range."
      />

      <div className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <Reveal>
          <div className="flex flex-wrap gap-2 border-y border-line py-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 font-mono text-xs tracking-widest transition-colors ${
                  filter === cat
                    ? 'bg-accent text-on-accent'
                    : 'border border-line-strong text-mist hover:border-accent hover:text-snow'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto hidden self-center font-mono text-xs tracking-widest text-mist sm:block">
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            </span>
          </div>
        </Reveal>
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
        <motion.div layout className="grid gap-x-6 gap-y-12 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={`/work/${p.slug}`} className="group block">
                  <ProjectVisual
                    tint={p.tint}
                    src={p.image}
                    alt={`${p.title} — ${p.category}`}
                    label={`${p.id} / ${p.category.toUpperCase()}`}
                    code={p.year}
                    className="aspect-[16/10] border border-line"
                  />
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-mist md:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-1 max-w-md text-sm text-mist">{p.blurb}</p>
                    </div>
                    <span className="shrink-0 pt-1 font-mono text-xs text-mist transition-all duration-300 group-hover:translate-x-1 group-hover:text-snow">
                      ↗
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  )
}
