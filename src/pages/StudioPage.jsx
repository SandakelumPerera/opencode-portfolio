import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { studio } from '../data'
import PageHeader from '../components/PageHeader'
import Reveal, { IndexMarker } from '../components/Reveal'

function SkillBar({ label, level, index }) {
  return (
    <div>
      <div className="flex items-center justify-between font-mono text-xs tracking-widest">
        <span className="text-snow">{label}</span>
        <span className="text-mist">{level}%</span>
      </div>
      <div className="mt-2 h-1 w-full bg-surface">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.1, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-accent"
        />
      </div>
    </div>
  )
}

export default function StudioPage() {
  return (
    <>
      <PageHeader
        code="// 02 · THE STUDIO"
        title="Small team. Sharp focus."
        sub="Four people, one warehouse in Los Angeles, zero bloat. We partner with teams to design, build and scale digital products end to end."
      >
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-85"
        >
          Work with us
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </Link>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <IndexMarker code="// The Warehouse" />
              <div className="mt-6 relative aspect-[4/3] overflow-hidden border border-line bg-surface">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="YR Studio warehouse workspace in Los Angeles"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              {studio.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="border border-line bg-surface p-5 backdrop-blur-sm">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-mist">
                      /{String(i + 1).padStart(2, '0')} · {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line bg-page-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <Reveal>
            <IndexMarker code="// CAPABILITIES" />
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
            {studio.capabilities.map((cap, i) => (
              <SkillBar key={cap.label} {...cap} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal>
          <IndexMarker code="// THE PEOPLE" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {studio.team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06}>
              <div className="group border border-line bg-surface p-6 backdrop-blur-sm transition-colors hover:border-line-strong">
                <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${member.tint}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{member.name}</h3>
                <p className="mt-1 text-sm text-mist">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 border border-line bg-surface p-8 backdrop-blur-sm md:flex-row md:items-center md:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-mist">// The Warehouse</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{studio.office.address}</p>
              <p className="mt-1 font-mono text-xs tracking-widest text-mist">{studio.office.coords}</p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 border-b border-line-strong pb-1 text-sm text-mist transition-colors hover:border-accent hover:text-snow"
            >
              Get directions
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
