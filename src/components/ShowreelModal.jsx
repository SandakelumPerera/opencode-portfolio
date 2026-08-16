import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SAMPLE = 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

export default function ShowreelModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-overlay p-4 backdrop-blur-xl md:p-10"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl overflow-hidden border border-line bg-surface-strong shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="font-mono text-xs tracking-widest text-mist">// SHOWREEL · YR/2025</span>
              <button
                onClick={onClose}
                aria-label="Close showreel"
                className="flex h-8 w-8 items-center justify-center border border-line-strong text-sm text-snow transition-colors hover:border-accent"
              >
                ✕
              </button>
            </div>
            <video
              src={SAMPLE}
              poster=""
              controls
              autoPlay
              playsInline
              className="aspect-video w-full bg-black object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
