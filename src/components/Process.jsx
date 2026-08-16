import { motion } from 'framer-motion'
import { processSteps } from '../data'
import { SectionHeading } from './Reveal'

export default function Process() {
  return (
    <section id="process" className="border-y border-line bg-page-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          code="// 00.04 · METHOD"
          title="How we work"
          sub="A tight, opinionated four-step loop. You always know what shipped this week and what ships next."
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {i < processSteps.length - 1 && (
                <span className="absolute -right-5 top-6 hidden h-px w-6 bg-gradient-to-r from-snow/40 to-transparent lg:block" />
              )}
              <span className="font-mono text-5xl font-bold text-snow/10 transition-colors duration-300 group-hover:text-snow/25">
                {step.id}
              </span>
              <h3 className="mt-4 text-xl font-semibold uppercase tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
