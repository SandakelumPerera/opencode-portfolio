import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-5 pt-28 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono text-xs tracking-widest text-mist">// ERROR 404 · PAGE NOT FOUND</p>
        <h1 className="mt-6 text-balance text-6xl font-bold uppercase leading-[0.95] tracking-tight md:text-8xl">
          Lost in the grid
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mist">
          The page you are looking for drifted off the baseline. Let's get you back to the work.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-85"
          >
            ← Back home
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-snow transition-colors hover:border-accent hover:bg-surface"
          >
            See the work
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
