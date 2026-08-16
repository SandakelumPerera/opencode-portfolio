import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroWords } from '../data'

export default function CyclingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return
    const id = setInterval(() => setIndex((i) => (i + 1) % heroWords.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-block overflow-hidden align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroWords[index].word}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block italic"
          style={{ color: heroWords[index].tone }}
        >
          {heroWords[index].word}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
