import { motion } from 'framer-motion'
import { IndexMarker } from './Reveal'

export default function PageHeader({ code, title, sub, children }) {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-32 md:px-8 md:pt-40">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <IndexMarker code={code} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 max-w-5xl text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl"
      >
        {title}
      </motion.h1>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-lg text-mist md:text-xl"
        >
          {sub}
        </motion.p>
      )}
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
