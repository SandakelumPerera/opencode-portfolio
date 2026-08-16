import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data'
import { IndexMarker } from '../components/Reveal'
import ProjectVisual from '../components/ProjectVisual'
import Reveal from '../components/Reveal'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) return <Navigate to="/work" replace />

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-28 md:px-8 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-mist transition-colors hover:text-snow"
          >
            ← ALL PROJECTS
          </Link>
        </motion.div>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <IndexMarker code={`// ${project.id} · CASE STUDY`} />
            <h1 className="mt-4 text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-mist">{project.blurb}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-x-10 gap-y-4 border border-line bg-surface p-5 backdrop-blur-sm md:grid-cols-4"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-mist">Client</p>
              <p className="mt-1 text-sm text-snow">{project.client}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-mist">Role</p>
              <p className="mt-1 text-sm text-snow">{project.role}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-mist">Duration</p>
              <p className="mt-1 text-sm text-snow">{project.duration}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-mist">Year</p>
              <p className="mt-1 text-sm text-snow">{project.year}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ProjectVisual
            tint={project.tint}
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            label={project.category.toUpperCase()}
            code={project.year}
            className="mt-10 aspect-[16/8] border border-line"
          />
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {[
            { title: 'Overview', body: project.overview },
            { title: 'Challenge', body: project.challenge },
            { title: 'Solution', body: project.solution },
          ].map((block, i) => (
            <Reveal key={block.title} delay={i * 0.08}>
              <div className="border-t border-line pt-5">
                <h3 className="font-mono text-xs uppercase tracking-widest text-mist">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">{block.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <section className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.results.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.06}>
              <div className="border border-line bg-surface p-6 backdrop-blur-sm">
                <p className="font-mono text-3xl font-bold tabular-nums text-snow md:text-4xl">{r.value}</p>
                <p className="mt-2 text-sm uppercase tracking-widest text-mist">{r.label}</p>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="mt-20 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="border-t border-line pt-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-mist">Tech Stack</h3>
              <div className="mt-5 space-y-5">
                {project.stack.map((group) => (
                  <div key={group.group}>
                    <p className="text-sm font-semibold uppercase tracking-widest text-snow">{group.group}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="glass rounded-full px-3 py-1 font-mono text-[11px] tracking-widest text-snow">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-t border-line pt-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-mist">Timeline</h3>
              <div className="mt-5 space-y-0">
                {project.timeline.map((step, i) => (
                  <div key={step.phase} className="relative flex gap-5 pb-6 last:pb-0">
                    {i < project.timeline.length - 1 && (
                      <span className="absolute left-[5px] top-3 h-full w-px bg-line" />
                    )}
                    <span className="relative mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border border-line-strong bg-page" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-widest text-snow">{step.phase}</p>
                      <p className="mt-1 text-sm text-mist">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mt-20">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-mist">Services Delivered</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span key={s} className="border border-line-strong px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-mist">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mt-20">
          <Reveal>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-mist">// Visuals</h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.gallery.map((g, i) => (
              <Reveal key={g.label} delay={i * 0.06}>
                <ProjectVisual
                  tint={g.tint}
                  src={g.image}
                  alt={`${project.title} — ${g.label}`}
                  label={g.label}
                  code={project.id}
                  className="aspect-[4/3] border border-line"
                />
              </Reveal>
            ))}
          </div>
        </section>

        <nav className="mt-20 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          <Link
            to={`/work/${prev.slug}`}
            className="group border border-line bg-surface p-6 backdrop-blur-sm transition-colors hover:border-line-strong"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-mist">← Previous</p>
            <p className="mt-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-mist">{prev.title}</p>
          </Link>
          <Link
            to={`/work/${next.slug}`}
            className="group border border-line bg-surface p-6 text-right backdrop-blur-sm transition-colors hover:border-line-strong"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-mist">Next →</p>
            <p className="mt-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-mist">{next.title}</p>
          </Link>
        </nav>
      </div>
    </>
  )
}
