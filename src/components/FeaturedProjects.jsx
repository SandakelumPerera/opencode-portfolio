import { Link } from 'react-router-dom'
import { projects } from '../data'
import Reveal, { SectionHeading } from './Reveal'
import ProjectVisual from './ProjectVisual'

function ProjectCard({ project }) {
  return (
    <Reveal className="group">
      <Link to={`/work/${project.slug}`} className="block">
        <div className="relative">
          <ProjectVisual
            tint={project.tint}
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            label={`${project.id} / ${project.year}`}
            code={project.category.toUpperCase()}
            className="aspect-[16/10] border border-line"
          />

          <div className="absolute inset-0 z-10 flex flex-wrap items-end gap-2 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100 pointer-events-none">
            {project.tech.map((t) => (
              <span
                key={t}
                className="glass rounded-full px-3 py-1 font-mono text-[11px] tracking-widest text-snow"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-snow transition-colors group-hover:text-mist md:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-mist">{project.blurb}</p>
          </div>
          <span className="shrink-0 border border-line-strong px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-mist">
            {project.category}
          </span>
        </div>
      </Link>
    </Reveal>
  )
}

export default function FeaturedProjects() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          code="// 00.01 · SELECTED WORK"
          title="Featured Projects"
          sub="A curated slice of what we ship. Every engagement is measured against business outcomes, not decoration."
        />
        <Reveal delay={0.2}>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 border-b border-line-strong pb-1 text-sm text-mist transition-colors hover:border-accent hover:text-snow"
          >
            View all projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>

      <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
