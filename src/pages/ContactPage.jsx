import { useState } from 'react'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { studio } from '../data'

const MAP_EMBED =
  'https://www.google.com/maps?q=844%20Seward%20Street%20Los%20Angeles%2C%20CA&z=15&output=embed'

const initialForm = {
  name: '',
  email: '',
  budget: 'Studio · $6,500',
  project: 'Web App / SaaS',
  message: '',
  messageLength: 0,
}

const budgets = ['Core · $2,800', 'Studio · $6,500', 'Scale · $12,000', 'Custom scope']
const projectTypes = [
  'Marketing Site',
  'Web App / SaaS',
  'E-Commerce',
  'AI Integration',
  'Brand + Design',
  'Something else',
]

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const update = (field) => (e) => {
    const value = e.target.value
    let messageLength = value.length
    if (field === 'message') {
      messageLength = Math.min(value.length, 500)
    }
    setForm({ ...form, [field]: value, messageLength })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <>
      <PageHeader
        code="// 04 · CONTACT"
        title="Let's build something people remember"
        sub="Tell us where you are, what you are building and when you need it. We reply within one business day — usually faster."
      >
        <span className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface px-4 py-2 font-mono text-xs uppercase tracking-widest text-mist">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Now booking · Aug 2026
        </span>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="border border-line bg-surface p-6 backdrop-blur-sm md:p-8">
                <AnimatePresence mode="wait">
                  {status === 'sent' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex min-h-[420px] flex-col items-center justify-center text-center"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl text-on-accent">
                        ✓
                      </span>
                      <h3 className="mt-6 text-2xl font-bold uppercase tracking-tight md:text-3xl">Message received</h3>
                      <p className="mt-3 max-w-sm text-mist">
                        Thanks, {form.name.split(' ')[0] || 'friend'}. We will reply to{' '}
                        <span className="text-snow">{form.email}</span> within one business day.
                      </p>
                      <button
                        onClick={() => {
                          setForm(initialForm)
                          setStatus('idle')
                        }}
                        className="mt-8 border-b border-line-strong pb-1 font-mono text-xs uppercase tracking-widest text-mist transition-colors hover:border-accent hover:text-snow"
                      >
                        Send another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={onSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field label="Name" hint="// 01" inputId="field-name" hintId="hint-name">
                          <input
                            required
                            value={form.name}
                            onChange={update('name')}
                            placeholder="Jane Doe"
                            className="input-field"
                          />
                        </Field>
                        <Field label="Email" hint="// 02" inputId="field-email" hintId="hint-email">
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={update('email')}
                            placeholder="jane@company.com"
                            className="input-field"
                          />
                        </Field>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field label="Budget" hint="// 03" inputId="field-budget" hintId="hint-budget">
                          <select value={form.budget} onChange={update('budget')} className="input-field">
                            {budgets.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Project type" hint="// 04" inputId="field-project" hintId="hint-project">
                          <select value={form.project} onChange={update('project')} className="input-field">
                            {projectTypes.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </Field>
                      </div>

                      <Field label="Project details" hint="// 05" inputId="field-message" hintId="hint-message">
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={update('message')}
                          placeholder="What are you building, who is it for, and when does it need to ship?"
                          className="input-field resize-none"
                        />
                        <p className="mt-2 text-xs text-mist/70">
                          {form.messageLength}/500 characters
                        </p>
                      </Field>

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-on-accent transition-opacity hover:opacity-85 disabled:opacity-60"
                      >
                        {status === 'sending' ? 'Sending…' : 'Send message'}
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="border border-line bg-surface p-6 backdrop-blur-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-mist">// Studio</p>
                <p className="mt-2 text-lg font-semibold tracking-tight">{studio.office.address}</p>
                <p className="mt-1 font-mono text-xs tracking-widest text-mist">{studio.office.coords}</p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="border border-line bg-surface p-6 backdrop-blur-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-mist">// Direct</p>
                <a href="mailto:hello@studio.co" className="mt-2 block text-lg font-semibold tracking-tight transition-colors hover:text-mist">
                  hello@studio.co
                </a>
                <a href="tel:+13105550192" className="mt-1 block font-mono text-xs tracking-widest text-mist transition-colors hover:text-snow">
                  +1 (310) 555-0192
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border border-line bg-surface p-6 backdrop-blur-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-mist">// Hours</p>
                <div className="mt-3 space-y-1.5 font-mono text-xs tracking-widest text-mist">
                  <p className="flex justify-between"><span>Mon – Fri</span><span className="text-snow">9:00 – 18:00 PST</span></p>
                  <p className="flex justify-between"><span>Sat</span><span className="text-snow">By appointment</span></p>
                  <p className="flex justify-between"><span>Sun</span><span className="text-snow">Closed</span></p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden border border-line bg-surface">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="font-mono text-xs tracking-widest text-mist">// GOOGLE MAPS · LOS ANGELES</span>
              <a
                href="https://maps.google.com/?q=844+Seward+Street+Los+Angeles"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-widest text-mist transition-colors hover:text-snow"
              >
                OPEN ↗
              </a>
            </div>
            <iframe
              title="YR Studio location — Los Angeles"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full grayscale-[0.2] contrast-[1.05] md:h-[440px]"
            />
          </div>
        </Reveal>
      </section>

      <style>{`
        .input-field {
          width: 100%;
          border: 1px solid var(--line-strong);
          background: var(--surface);
          color: var(--text-primary);
          padding: 0.8rem 1rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s ease;
          border-radius: 0;
        }
        .input-field::placeholder { color: var(--text-secondary); opacity: 0.7; }
        .input-field:focus { border-color: var(--primary); }
        select.input-field option { background: var(--page); color: var(--text-primary); }
      `}</style>
    </>
  )
}

function Field({ label, hint, children, inputId, hintId }) {
  const id = inputId || `field-${label.toLowerCase().replace(/\s+/g, '-')}`
  const describedBy = hintId || `hint-${label.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <label className="block">
      <span className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-mist">
        {label}
        <span id={describedBy}>{hint}</span>
      </span>
      <span className="mt-2 block">
        {React.isValidElement(children) ? React.cloneElement(children, { id, 'aria-describedby': describedBy }) : children}
      </span>
    </label>
  )
}
