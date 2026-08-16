import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { whispers } from '../data'
import { IndexMarker } from '../components/Reveal'

export default function WhisperDetail() {
  const { slug } = useParams()
  const index = whispers.findIndex((w) => w.slug === slug)
  const post = whispers[index]

  if (!post) return <Navigate to="/whispers" replace />

  const prev = whispers[(index - 1 + whispers.length) % whispers.length]
  const next = whispers[(index + 1) % whispers.length]

  return (
    <div className="mx-auto max-w-7xl px-5 pt-28 md:px-8 md:pt-32">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link
          to="/whispers"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-mist transition-colors hover:text-snow"
        >
          ← ALL WHISPERS
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 max-w-3xl"
      >
        <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface mb-8">
          <img
            src={post.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br" style={{ background: post.tint, opacity: 0.4 }} />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <IndexMarker code={`// ${post.id}`} />
          <span className="font-mono text-xs uppercase tracking-widest text-mist">{post.date}</span>
          <span className="font-mono text-xs uppercase tracking-widest text-mist">{post.readTime}</span>
        </div>
        <h1 className="mt-6 text-balance text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-mist md:text-xl">{post.excerpt}</p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-14 max-w-3xl"
      >
        {post.body.map((paragraph, i) => (
          <p key={i} className={`leading-relaxed text-mist ${i === 0 ? 'text-lg md:text-xl text-snow' : 'mt-6 text-base md:text-lg'}`}>
            {paragraph}
          </p>
        ))}

        <div className="mt-12 border-t border-line pt-6">
          <p className="font-mono text-xs uppercase tracking-widest text-mist">// Signed — the studio</p>
          <p className="mt-2 text-sm text-mist">
            Written by the YR team. Read more field notes on{' '}
            <Link to="/whispers" className="border-b border-line-strong text-snow transition-colors hover:border-accent">
              /whispers
            </Link>
            .
          </p>
        </div>
      </motion.article>

      <nav className="mt-20 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        <Link
          to={`/whispers/${prev.slug}`}
          className="group border border-line bg-surface p-6 backdrop-blur-sm transition-colors hover:border-line-strong"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-mist">← Previous</p>
          <p className="mt-2 text-base font-semibold tracking-tight transition-colors group-hover:text-mist">{prev.title}</p>
        </Link>
        <Link
          to={`/whispers/${next.slug}`}
          className="group border border-line bg-surface p-6 text-right backdrop-blur-sm transition-colors hover:border-line-strong"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-mist">Next →</p>
          <p className="mt-2 text-base font-semibold tracking-tight transition-colors group-hover:text-mist">{next.title}</p>
        </Link>
      </nav>
    </div>
  )
}
