import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { footerCols } from '../data'
import Reveal from './Reveal'

const routeMap = {
  Work: '/work',
  Studio: '/studio',
  Whispers: '/whispers',
  Process: '/#process',
  Pricing: '/#pricing',
  Contact: '/contact',
}

function CharacterGraphic() {
  return (
    <div className="relative mx-auto h-56 w-56 md:h-64 md:w-64">
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-indigo-500/40 to-violet-500/20 blur-2xl" />
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full border border-accent/25 bg-accent/10 shadow-[inset_0_0_30px_var(--card-blend)]" />
          <div className="absolute left-1/2 top-16 h-36 w-16 -translate-x-1/2 rounded-t-[50%] border border-accent/20 bg-gradient-to-b from-accent/10 to-accent/5" />
          <div className="absolute left-1/2 top-40 flex -translate-x-1/2 gap-5">
            <div className="h-20 w-10 rounded-t-full border border-accent/20 bg-gradient-to-b from-accent/10 to-accent/5" />
            <div className="h-20 w-10 rounded-t-full border border-accent/20 bg-gradient-to-b from-accent/10 to-accent/5" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(50% 40% at 50% 100%, rgba(255,255,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-32">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface px-4 py-2 font-mono text-xs uppercase tracking-widest text-mist backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Next availability · Aug 2026
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
                Have an idea? Let's build something people remember.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="mailto:hello@studio.co"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-85"
                >
                  Book a 15-min call
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </a>
                <a
                  href="mailto:hello@studio.co?subject=Booking"
                  className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-snow transition-colors hover:border-accent hover:bg-surface"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="3" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Check calendar
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="hidden shrink-0 lg:block">
            <CharacterGraphic />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-20 select-none text-center md:mt-24">
            <p className="text-[18vw] font-bold uppercase leading-none tracking-tighter text-snow/[0.05] transition-colors duration-500 hover:text-snow/[0.1] md:text-[10rem]">
              STUDIO™
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative border-t border-line bg-page/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center border border-line-strong font-mono text-xs">
                  YR
                </span>
                <span className="font-mono text-xs tracking-widest text-mist">YR/2025</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
                Independent digital studio crafting experiences that connect, scale and perform.
              </p>
              <p className="mt-6 font-mono text-xs tracking-widest text-mist">
                © {year} YR Studio · Los Angeles
              </p>
            </div>

            {footerCols.map((col) => (
              <div key={col.heading}>
                <h4 className="font-mono text-xs uppercase tracking-widest text-mist">{col.heading}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) =>
                    routeMap[link] ? (
                      <li key={link}>
                        <Link to={routeMap[link]} className="text-sm text-snow/80 transition-colors hover:text-snow">
                          {link}
                        </Link>
                      </li>
                    ) : (
                      <li key={link}>
                        <a href="#contact" className="text-sm text-snow/80 transition-colors hover:text-snow">
                          {link}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            <p className="font-mono text-[11px] tracking-widest text-mist">
              MADE WITH REACT · TAILWIND · FRAMER MOTION
            </p>
            <a href="#top" className="font-mono text-[11px] tracking-widest text-mist transition-colors hover:text-snow">
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
