import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '', y = 28, once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function IndexMarker({ code }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-mist">
      <span className="h-px w-6 bg-mist/50" />
      {code}
    </span>
  )
}

export function SectionHeading({ code, title, sub, center = false }) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      <Reveal>
        <IndexMarker code={code} />
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-6xl">{title}</h2>
      </Reveal>
      {sub ? (
        <Reveal delay={0.16}>
          <p className={`mt-4 max-w-xl text-base text-mist md:text-lg ${center ? 'mx-auto' : ''}`}>{sub}</p>
        </Reveal>
      ) : null}
    </div>
  )
}
