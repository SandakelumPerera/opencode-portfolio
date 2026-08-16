import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IndexMarker } from './Reveal'
import CyclingText from './CyclingText'
import ShowreelModal from './ShowreelModal'
import useLAClock from '../hooks/useLAClock'

export default function Hero() {
  const clock = useLAClock()
  const [showreel, setShowreel] = useState(false)

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40 grain">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.03,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div {...fadeUp} className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <IndexMarker code="// 00.00 · LA, CA — 34.0522°N / 118.2437°W" />
          <span className="font-mono text-xs tracking-widest text-mist">EST. 2019</span>
          <span className="font-mono text-xs tracking-widest text-mist">NOW BOOKING Q3 2025</span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
          className="mt-8 max-w-6xl text-balance text-fluid-4xl font-bold uppercase tracking-tight"
        >
          Digital experiences that connect, scale and{' '}
          <span className="relative inline-block">
            perform
            <span className="absolute inset-x-0 -bottom-2 h-[3px] origin-left bg-snow md:-bottom-3" />
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.16 }}
          className="mt-8 max-w-2xl text-lg text-mist md:text-xl"
        >
          We are an independent studio turning ambitious ideas into fast, beautiful, measurable
          products.
        </motion.p>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-85"
              >
                See Work
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-snow transition-colors hover:border-accent hover:bg-surface"
              >
                Let's Chat
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.32 }}
              className="mt-10 flex max-w-md items-center justify-between gap-4 border-t border-line pt-5"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-mist">Los Angeles</p>
                <p className="mt-1 font-mono text-2xl tabular-nums text-snow md:text-3xl">{clock.time}</p>
                <p className="mt-1 font-mono text-xs text-mist">{clock.date} · LOCAL</p>
              </div>
              <span className="hidden h-12 w-px bg-line sm:block" />
              <div className="text-right">
                <p className="font-mono text-xs uppercase tracking-widest text-mist">Now</p>
                <p className="mt-1 text-sm text-snow">
                  <CyclingText />
                </p>
              </div>
            </motion.div>
          </div>

          <motion.button
            onClick={() => setShowreel(true)}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="group relative block w-full overflow-hidden border border-line text-left lg:col-span-5"
            aria-label="Play showreel"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Showreel thumbnail — design studio in Los Angeles"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-violet-500/20 to-transparent mix-blend-multiply" />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    'repeating-linear-gradient(45deg, transparent 0 12px, rgba(255,255,255,0.08) 12px 24px)',
                }}
              />
              <span className="absolute left-4 top-4 font-mono text-xs tracking-widest text-white/70">
                // SHOWREEL_2025.mov
              </span>
              <span className="absolute right-4 top-4 font-mono text-xs tracking-widest text-white/70">
                [ 00:58 ]
              </span>

              <span className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-snow">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              <span className="absolute bottom-0 inset-x-0 flex items-center justify-between border-t border-line bg-page/60 px-4 py-3 backdrop-blur-md">
                <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
                  Watch our 2025 showreel
                </span>
                <span className="font-mono text-xs text-snow transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </span>
            </div>
          </motion.button>
        </div>
      </div>

      <ShowreelModal open={showreel} onClose={() => setShowreel(false)} />
    </section>
  )
}
