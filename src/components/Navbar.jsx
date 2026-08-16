import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import useTheme from '../hooks/useTheme'

const navLinks = [
  { label: 'Work', to: '/work', badge: null },
  { label: 'Studio', to: '/studio', badge: null },
  { label: 'Whispers', to: '/whispers', badge: 12 },
  { label: 'Contact', to: '/contact', badge: null },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-page/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center border border-line-strong font-mono text-xs text-snow transition-colors group-hover:border-accent">
            YR
          </span>
          <span className="font-mono text-xs tracking-widest text-mist">YR/2025</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `group relative flex items-center gap-1.5 px-4 py-2 text-sm transition-colors ${
                    isActive ? 'text-snow' : 'text-mist hover:text-snow'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {link.badge !== null && (
                      <span
                        className={`flex h-5 min-w-5 items-center justify-center rounded-full border px-1.5 font-mono text-[10px] ${
                          isActive
                            ? 'border-accent bg-accent text-on-accent'
                            : 'border-line-strong text-snow'
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                    <span
                      className={`absolute inset-x-4 bottom-0 h-px origin-left bg-snow transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-on-accent transition-opacity hover:opacity-85 md:inline-flex"
          >
            Let's Create
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>

          <ThemeToggle theme={theme} onToggle={toggle} />

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-line-strong md:hidden"
          >
            <span className={`h-px w-5 bg-snow transition-transform ${open ? 'translate-y-1 rotate-45' : ''}`} />
            <span className={`h-px w-5 bg-snow transition-transform ${open ? '-translate-y-1 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-line bg-page/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line py-4 text-lg text-snow"
                  >
                    {link.label}
                    {link.badge !== null && (
                      <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-line-strong px-2 font-mono text-xs">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-on-accent"
                >
                  Let's Create →
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
