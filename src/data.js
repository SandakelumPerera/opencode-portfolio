export const heroWords = [
  { word: 'we listen', tone: '#ffffff' },
  { word: 'we imagine', tone: '#9ca3af' },
  { word: 'we create', tone: '#d4d4d4' },
  { word: 'beautiful things', tone: '#ffffff' },
]

export const projects = [
  {
    slug: 'aether-commerce',
    id: '01',
    title: 'Aether Commerce',
    year: '2025',
    category: 'E-Commerce / WebGL',
    tint: 'from-indigo-500/40 to-fuchsia-500/30',
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'WebGL'],
    blurb: 'Headless storefront rebuilt around motion and conversion.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    client: 'Aether Goods',
    role: 'Lead Full-Stack Engineer',
    duration: '12 weeks',
    overview:
      'Aether sells premium homeware through a legacy monolithic store. We rebuilt their storefront on a headless stack to match the craft of their products with an equally crafted digital experience.',
    challenge:
      'Catalog of 4,000+ SKUs, sub-second page transitions, and 60fps product interactions on mid-tier mobile hardware. The old theme loaded 2.3MB of JS and scored 38 on Lighthouse.',
    solution:
      'We shipped a Next.js + Shopify Storefront API architecture, server-rendered PLPs, and a WebGL product viewer. Motion was budgeted explicitly — every animation maps to a design intent, and heavy 3D only mounts when a product is in view.',
    results: [
      { value: '128%', label: 'Increase in mobile conversion' },
      { value: '0.9s', label: 'Largest Contentful Paint' },
      { value: '99', label: 'Lighthouse performance score' },
      { value: '+32%', label: 'Average order value' },
    ],
    stack: [
      { group: 'Frontend', items: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { group: '3D & Media', items: ['Three.js', 'React Three Fiber', 'Cloudinary'] },
      { group: 'Commerce', items: ['Shopify Storefront API', 'GraphQL', 'Stripe'] },
    ],
    timeline: [
      { phase: 'Discovery', desc: 'UX audit, analytics review, shopping-path mapping.' },
      { phase: 'Design & Build', desc: 'Design system, storefront rebuild, WebGL product viewer.' },
      { phase: 'Launch & Grow', desc: 'A/B test rollout, CWV monitoring, post-launch conversion tuning.' },
    ],
    services: ['Development', 'Design', 'SEO'],
    gallery: [
      {
        label: 'Storefront',
        tint: 'from-indigo-500/40 to-fuchsia-500/30',
        image:
          'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Product Viewer',
        tint: 'from-violet-500/40 to-indigo-500/30',
        image:
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Checkout',
        tint: 'from-fuchsia-500/40 to-rose-500/30',
        image:
          'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80',
      },
    ],
    live: 'https://aether.example.com',
  },
  {
    slug: 'pulse-financial',
    id: '02',
    title: 'Pulse Financial',
    year: '2024',
    category: 'Fintech / Web App',
    tint: 'from-emerald-500/40 to-cyan-500/30',
    tech: ['Next.js', 'TypeScript', 'tRPC', 'Tailwind'],
    blurb: 'Real-time analytics dashboard for a modern digital bank.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    client: 'Pulse Financial',
    role: 'Frontend Architect',
    duration: '16 weeks',
    overview:
      'Pulse needed a control room for treasury teams monitoring millions of transactions daily. We designed and built a real-time analytics platform with sub-second data visualizations.',
    challenge:
      'Streaming transaction data at 50k events/second, with dashboards that had to stay responsive and correct while multiple users shared the same live views.',
    solution:
      'A Next.js + tRPC + PostgreSQL stack with WebSocket-backed live views, an in-house charting layer on Canvas for performance, and optimistic UI updates. Role-based workspaces keep compliance teams and traders on separate planes.',
    results: [
      { value: '50k/s', label: 'Events streamed without jank' },
      { value: '2.1s', label: 'Time-to-interactive' },
      { value: '-40%', label: 'Treasury team query time' },
      { value: '24/7', label: 'Uptime across 3 regions' },
    ],
    stack: [
      { group: 'Frontend', items: ['Next.js', 'React 18', 'TypeScript', 'Tailwind CSS'] },
      { group: 'Data', items: ['tRPC', 'WebSockets', 'PostgreSQL', 'ClickHouse'] },
      { group: 'Infra', items: ['Vercel', 'Fly.io', 'Sentry'] },
    ],
    timeline: [
      { phase: 'Discovery', desc: 'Stakeholder interviews, data-model audits.' },
      { phase: 'Design & Build', desc: 'Dashboard system, streaming charts, RBAC.' },
      { phase: 'Launch & Grow', desc: 'Beta with 3 pilot teams, hardening, scaling.' },
    ],
    services: ['Development', 'Strategy', 'Design'],
    gallery: [
      {
        label: 'Executive View',
        tint: 'from-emerald-500/40 to-cyan-500/30',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Live Charts',
        tint: 'from-cyan-500/40 to-teal-500/30',
        image:
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Workspaces',
        tint: 'from-teal-500/40 to-emerald-500/30',
        image:
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      },
    ],
    live: 'https://pulse.example.com',
  },
  {
    slug: 'orbit-studio',
    id: '03',
    title: 'Orbit Studio',
    year: '2024',
    category: 'Creative / Portfolio',
    tint: 'from-amber-500/40 to-rose-500/30',
    tech: ['Next.js', 'Framer Motion', 'Three.js'],
    blurb: 'Award-winning portfolio with cinematic transitions.',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80',
    client: 'Orbit Studio (self-initiated)',
    role: 'Creative Developer',
    duration: '8 weeks',
    overview:
      'A motion-first portfolio for a 3D art studio. Every scroll tells a story — projects, process and people unfold through cinematic, physics-based transitions.',
    challenge:
      'Heavy 3D scenes competing with narrative pacing. We had to keep the filmic feel without turning the site into a slideshow or wrecking performance.',
    solution:
      'We built on Next.js with Three.js scenes that only mount on intersection, plus Framer Motion’s spring physics for the timeline choreography. Each case study is a self-contained route with its own canvas.',
    results: [
      { value: '24', label: 'Awwwards honorable mentions' },
      { value: '0.75', label: 'Average bounce rate reduction' },
      { value: '4×', label: 'Inquiries in the first 90 days' },
      { value: '95+', label: 'Lighthouse performance' },
    ],
    stack: [
      { group: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
      { group: 'Motion', items: ['Framer Motion', 'Three.js', 'GSAP'] },
      { group: 'CMS', items: ['Sanity', 'Vercel'] },
    ],
    timeline: [
      { phase: 'Discovery', desc: 'Portfolio audit, motion design language.' },
      { phase: 'Design & Build', desc: 'Cinematic system, 3D scenes, case studies.' },
      { phase: 'Launch & Grow', desc: 'Award submissions, SEO, ongoing polish.' },
    ],
    services: ['Design', 'Development'],
    gallery: [
      {
        label: 'Home Scene',
        tint: 'from-amber-500/40 to-rose-500/30',
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Case Studies',
        tint: 'from-rose-500/40 to-orange-500/30',
        image:
          'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'About',
        tint: 'from-orange-500/40 to-amber-500/30',
        image:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      },
    ],
    live: 'https://orbit.example.com',
  },
  {
    slug: 'northwind-ai',
    id: '04',
    title: 'Northwind AI',
    year: '2025',
    category: 'AI Systems / SaaS',
    tint: 'from-sky-500/40 to-violet-500/30',
    tech: ['Next.js', 'Tailwind', 'RAG', 'Python'],
    blurb: 'Intelligent agent console for enterprise teams.',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80',
    client: 'Northwind Labs',
    role: 'Full-Stack Engineer',
    duration: '14 weeks',
    overview:
      'Northwind gives support teams an AI copilot that drafts, triages and resolves tickets from the company knowledge base. We built the agent runtime and the console UI.',
    challenge:
      'Hallucination-prone responses in a high-stakes domain, plus a console that non-technical agents had to trust and steer without a PhD in prompt engineering.',
    solution:
      'A RAG pipeline over the client’s docs with citation-aware grounding, human-in-the-loop approval flows, and evaluation harnesses that gate model rollouts. The console streamed agent reasoning so humans always saw the "why".',
    results: [
      { value: '38%', label: 'Tickets resolved without human touch' },
      { value: '2.4×', label: 'Faster median resolution time' },
      { value: '99.2%', label: 'Citation accuracy on evals' },
      { value: '41', label: 'Hours saved per support rep / week' },
    ],
    stack: [
      { group: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
      { group: 'AI', items: ['LangChain', 'OpenAI', 'pgvector', 'Weights & Biases'] },
      { group: 'Infra', items: ['Supabase', 'Vercel', 'Resend'] },
    ],
    timeline: [
      { phase: 'Discovery', desc: 'Support workflow mapping, data readiness.' },
      { phase: 'Design & Build', desc: 'RAG pipeline, console, eval harness.' },
      { phase: 'Launch & Grow', desc: 'Pilot with 5 teams, guardrail tuning.' },
    ],
    services: ['AI Systems', 'Development', 'Strategy'],
    gallery: [
      {
        label: 'Agent Console',
        tint: 'from-sky-500/40 to-violet-500/30',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Streaming Reasoning',
        tint: 'from-violet-500/40 to-purple-500/30',
        image:
          'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Analytics',
        tint: 'from-indigo-500/40 to-sky-500/30',
        image:
          'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80',
      },
    ],
    live: 'https://northwind.example.com',
  },
  {
    slug: 'lucida-docs',
    id: '05',
    title: 'Lucida Docs',
    year: '2024',
    category: 'Developer Platform',
    tint: 'from-cyan-500/40 to-blue-500/30',
    tech: ['Next.js', 'MDX', 'Tailwind', 'Algolia'],
    blurb: 'API documentation platform used by 40k+ developers.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
    client: 'Lucida API',
    role: 'Platform Developer',
    duration: '10 weeks',
    overview:
      'Lucida’s API had great SDKs and terrible docs. We rebuilt the documentation into an interactive playground where developers could read, run and inspect calls without leaving the page.',
    challenge:
      'Dozens of SDKs across languages, versioned endpoints, and a search experience that had to be fast enough to feel native.',
    solution:
      'A Next.js + MDX docs platform with versioned routes, interactive code runners (WebContainer), and Algolia-powered search tuned to API terms. Every example block is also a live test harness.',
    results: [
      { value: '40k+', label: 'Monthly developer sessions' },
      { value: '-62%', label: 'Support tickets mentioning docs' },
      { value: '11s', label: 'Average time to first API call' },
      { value: '0.45s', label: 'Median search response' },
    ],
    stack: [
      { group: 'Frontend', items: ['Next.js', 'MDX', 'TypeScript', 'Tailwind CSS'] },
      { group: 'Search', items: ['Algolia', 'Indexing pipeline'] },
      { group: 'DX', items: ['WebContainer', 'OpenAPI', 'Sentry'] },
    ],
    timeline: [
      { phase: 'Discovery', desc: 'Docs audit, developer interviews.' },
      { phase: 'Design & Build', desc: 'Platform, playground, search, versioning.' },
      { phase: 'Launch & Grow', desc: 'Migration, docs CI, analytics.' },
    ],
    services: ['Development', 'SEO', 'Design'],
    gallery: [
      {
        label: 'Interactive Docs',
        tint: 'from-cyan-500/40 to-blue-500/30',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Playground',
        tint: 'from-blue-500/40 to-indigo-500/30',
        image:
          'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Search',
        tint: 'from-sky-500/40 to-cyan-500/30',
        image:
          'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      },
    ],
    live: 'https://lucida.example.com',
  },
  {
    slug: 'haven-health',
    id: '06',
    title: 'Haven Health',
    year: '2023',
    category: 'Healthtech / Booking',
    tint: 'from-teal-500/40 to-emerald-500/30',
    tech: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL'],
    blurb: 'Patient booking and records portal for 12 clinics.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    client: 'Haven Health Group',
    role: 'Full-Stack Engineer',
    duration: '18 weeks',
    overview:
      'Twelve clinics ran booking, billing and records across six disconnected tools. We unified everything into a single HIPAA-minded web portal for patients and staff.',
    challenge:
      'Sensitive health data, complex multi-clinic scheduling rules, and staff who needed to learn the system in under a day.',
    solution:
      'A Next.js + tRPC + Prisma stack with a rules engine for clinic schedules, granular role permissions, and end-to-end encryption in transit. Patient-facing flows were ruthlessly simplified to a three-step booking.',
    results: [
      { value: '2.1×', label: 'Booking completion rate' },
      { value: '9.1k', label: 'Appointments / month via portal' },
      { value: '-55%', label: 'No-show rate with reminders' },
      { value: 'SOC 2', label: 'Ready infrastructure' },
    ],
    stack: [
      { group: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
      { group: 'Backend', items: ['tRPC', 'Prisma', 'PostgreSQL', 'BullMQ'] },
      { group: 'Ops', items: ['Vercel', 'Supabase', 'Sentry'] },
    ],
    timeline: [
      { phase: 'Discovery', desc: 'Clinic workflow audits, data mapping.' },
      { phase: 'Design & Build', desc: 'Portal, scheduling engine, migration.' },
      { phase: 'Launch & Grow', desc: 'Phased clinic rollout, training, support.' },
    ],
    services: ['Development', 'Design', 'Strategy'],
    gallery: [
      {
        label: 'Patient Portal',
        tint: 'from-teal-500/40 to-emerald-500/30',
        image:
          'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Scheduling',
        tint: 'from-emerald-500/40 to-teal-500/30',
        image:
          'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Staff View',
        tint: 'from-cyan-500/40 to-teal-500/30',
        image:
          'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80',
      },
    ],
    live: 'https://haven.example.com',
  },
  {
    slug: 'mono-ui',
    id: '07',
    title: 'Mono UI',
    year: '2024',
    category: 'Open Source / Library',
    tint: 'from-violet-500/40 to-indigo-500/30',
    tech: ['React', 'TypeScript', 'Radix', 'Vite'],
    blurb: 'Headless React component library, 11k+ GitHub stars.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
    client: 'Open Source (self-initiated)',
    role: 'Creator & Maintainer',
    duration: 'Ongoing',
    overview:
      'Mono is a headless, accessible React component library with 11,000+ GitHub stars. It ships unstyled primitives that teams theme with their own design tokens.',
    challenge:
      'Accessibility is the product. Every primitive needed full WAI-ARIA support, keyboard navigation, and zero lock-in — while staying small enough to tree-shake to nothing.',
    solution:
      'A Radix-powered core with a token-first theming layer, exhaustive testing with Testing Library and axe, and a docs site built in React that dogfoods every component. Contributors are guided by a strict CONTRIBUTING contract.',
    results: [
      { value: '11k+', label: 'GitHub stars' },
      { value: '2.4k', label: 'Weekly npm downloads' },
      { value: '96%', label: 'Axe accessibility passes' },
      { value: '38', label: 'Community contributors' },
    ],
    stack: [
      { group: 'Core', items: ['React 18', 'TypeScript', 'Radix UI'] },
      { group: 'Tooling', items: ['Vite', 'Vitest', 'Testing Library', 'Storybook'] },
      { group: 'Docs', items: ['Next.js', 'MDX', 'Shiki'] },
    ],
    timeline: [
      { phase: 'Discovery', desc: 'Audit of 9 popular libraries; pain-point research.' },
      { phase: 'Design & Build', desc: 'Primitives, theming system, docs, CI.' },
      { phase: 'Launch & Grow', desc: 'v1 release, community onboarding, RFCs.' },
    ],
    services: ['Development', 'AI Systems'],
    gallery: [
      {
        label: 'Primitives',
        tint: 'from-violet-500/40 to-indigo-500/30',
        image:
          'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Theming',
        tint: 'from-indigo-500/40 to-blue-500/30',
        image:
          'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Docs',
        tint: 'from-purple-500/40 to-violet-500/30',
        image:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      },
    ],
    live: 'https://mono.example.com',
  },
  {
    slug: 'verbana',
    id: '08',
    title: 'Verbana',
    year: '2023',
    category: 'Editorial / Media',
    tint: 'from-orange-500/40 to-amber-500/30',
    tech: ['Next.js', 'Sanity', 'Tailwind', 'Algolia'],
    blurb: 'Modern news platform publishing 200 stories a day.',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80',
    client: 'Verbana Media',
    role: 'Web Developer',
    duration: '12 weeks',
    overview:
      'Verbana’s CMS was from 2015 and its ad-heavy front-end was killing reader retention. We rebuilt the platform as a blazing-fast editorial engine.',
    challenge:
      'Editorial teams publishing 200 stories daily need a CMS that feels instant, while readers needed an article experience with zero layout shift and no paywall rage.',
    solution:
      'A Sanity-powered editorial workflow with previews in real time, and a Next.js front-end with streaming, lazy-loaded ads and a reader-first article template. Search was rebuilt on Algolia for instant topic discovery.',
    results: [
      { value: '200', label: 'Stories published daily' },
      { value: '-58%', label: 'Bounce rate' },
      { value: '+74%', label: 'Time on page' },
      { value: '0.3s', label: 'Article paint time' },
    ],
    stack: [
      { group: 'Frontend', items: ['Next.js', 'React', 'Tailwind CSS'] },
      { group: 'CMS', items: ['Sanity', 'Live Previews'] },
      { group: 'Search', items: ['Algolia', 'InstantSearch'] },
    ],
    timeline: [
      { phase: 'Discovery', desc: 'Editorial workflow mapping, page-speed audit.' },
      { phase: 'Design & Build', desc: 'CMS, reader template, search.' },
      { phase: 'Launch & Grow', desc: 'Content migration, training, monitoring.' },
    ],
    services: ['Development', 'SEO', 'Design'],
    gallery: [
      {
        label: 'Homepage',
        tint: 'from-orange-500/40 to-amber-500/30',
        image:
          'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Article',
        tint: 'from-amber-500/40 to-yellow-500/30',
        image:
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      },
      {
        label: 'Topics',
        tint: 'from-red-500/40 to-orange-500/30',
        image:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
      },
    ],
    live: 'https://verbana.example.com',
  },
]

export const metrics = [
  { value: 86, suffix: '+', label: 'Projects' },
  { value: 80, suffix: '%', label: 'Repeat Collaborations' },
  { value: 32, suffix: '', label: 'Awards' },
  { value: 89, suffix: '%', label: 'Retention Rate' },
]

export const logos = [
  'AETHER',
  'PULSE',
  'ORBIT',
  'NORTHWIND',
  'LUCIDA',
  'HAVEN',
  'MONO',
  'VERBANA',
  'SIGNAL',
  'KINETIC',
]

export const services = [
  {
    id: '01',
    title: 'Brand Identity',
    blurb: 'Distinct identities engineered to be remembered.',
    features: ['Naming & voice', 'Visual systems', 'Design tokens', 'Brand guidelines'],
    tint: 'from-rose-500/30 to-orange-500/20',
  },
  {
    id: '02',
    title: 'Strategy',
    blurb: 'Positioning that turns attention into retention.',
    features: ['Research & audits', 'Positioning', 'Roadmaps', 'Growth models'],
    tint: 'from-amber-500/30 to-yellow-500/20',
  },
  {
    id: '03',
    title: 'Design',
    blurb: 'Interface craft at the edge of the possible.',
    features: ['UX architecture', 'Interaction design', 'Prototyping', 'Design systems'],
    tint: 'from-emerald-500/30 to-teal-500/20',
  },
  {
    id: '04',
    title: 'AI Systems',
    blurb: 'Human-in-the-loop products that ship and scale.',
    features: ['RAG pipelines', 'Agent workflows', 'Fine-tuning', 'Evaluation harnesses'],
    tint: 'from-sky-500/30 to-cyan-500/20',
  },
  {
    id: '05',
    title: 'SEO',
    blurb: 'Technical foundations that compound visibility.',
    features: ['Technical SEO', 'Content systems', 'Core Web Vitals', 'Analytics'],
    tint: 'from-violet-500/30 to-purple-500/20',
  },
  {
    id: '06',
    title: 'Development',
    blurb: 'Production-grade builds, obsessed with performance.',
    features: ['React / Next.js', 'WebGL & 3D', 'API design', 'CI/CD & monitoring'],
    tint: 'from-indigo-500/30 to-blue-500/20',
  },
]

export const processSteps = [
  {
    id: '01',
    title: 'Discovery',
    desc: 'Deep-dive sessions, stakeholder interviews and technical audits.',
  },
  {
    id: '02',
    title: 'Strategy',
    desc: 'Positioning, architecture and a concrete plan of attack.',
  },
  {
    id: '03',
    title: 'Design & Build',
    desc: 'High-fidelity design, engineering and weekly demos in lockstep.',
  },
  {
    id: '04',
    title: 'Launch & Grow',
    desc: 'Deployment, monitoring, SEO foundations and iteration loops.',
  },
]

export const pricing = [
  {
    name: 'Core',
    price: '$2,800',
    tagline: 'For focused launches',
    delivery: '2–4 week delivery',
    discount: null,
    features: ['Brand identity essentials', 'Landing page build', '3 content blocks', 'On-page SEO', 'Launch support'],
    featured: false,
  },
  {
    name: 'Studio',
    price: '$6,500',
    tagline: 'For full product teams',
    delivery: '6–10 week delivery',
    discount: 'Most popular',
    features: ['Full brand system', 'Multi-page product build', 'Design system', 'Motion & interactions', 'Technical SEO', 'Priority support'],
    featured: true,
  },
  {
    name: 'Scale',
    price: '$12,000',
    tagline: 'For platforms in motion',
    delivery: '10–16 week delivery',
    discount: '10% off annual',
    features: ['Everything in Studio', 'AI systems integration', 'Headless commerce', 'WebGL experiences', 'Performance SLA', 'Growth roadmap'],
    featured: false,
  },
]

export const whispers = [
  {
    slug: 'motion-budgets',
    id: 'W-014',
    date: 'Mar 2025',
    readTime: '6 min read',
    title: 'Motion budgets are the new loading spinners',
    excerpt:
      'Performance budgets kept our bundles lean. It is time we give animation the same discipline, or our sites will pay for it in engagement.',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80',
    tint: 'from-indigo-500/40 to-fuchsia-500/30',
    body: [
      'We have spent a decade obsessing over JavaScript budgets, image weight and Core Web Vitals. And rightly so — every kilobyte costs a user real attention. But animation, the very thing that makes a site feel alive, has escaped the same scrutiny.',
      'In a recent audit we found a single "subtle" reveal library adding 92KB of JS and forcing a repaint on every scroll frame. Nobody asked for it. It was installed because it was easy. That is the pattern we need to break.',
      'A motion budget works exactly like a performance budget: a hard number, agreed with the team, that every animation must fit within. Set one per interaction, measure with the Performance API, and make "we will add easing later" a review-blocking sentence.',
      'The reward is not just a faster site. Constraint breeds craft. When you can only afford two or three moments of motion, you choose them carefully — and users feel the difference.',
    ],
  },
  {
    slug: 'ai-interface-strategy',
    id: 'W-013',
    date: 'Feb 2025',
    readTime: '7 min read',
    title: 'Why every brand needs an AI interface strategy',
    excerpt:
      'Adding a chat box is not a strategy. Deciding what your AI may and may not claim is.',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    tint: 'from-sky-500/40 to-violet-500/30',
    body: [
      'Every SaaS company is bolting a chat widget onto its product and calling it an AI strategy. The widget is the easy part. The hard part is deciding what the AI is allowed to assert, and how the interface communicates that boundary.',
      'In our agent work, the single biggest trust lever was transparency: showing the user the reasoning, the sources, and the confidence — before they commit to an action. Interfaces that hide that lose users faster than the AI loses accuracy.',
      'A usable AI interface strategy answers three questions. What can the model confidently do? What happens when it is unsure? And how does the UI make both states legible at a glance?',
      'Start there. Add the chat box after, not before.',
    ],
  },
  {
    slug: 'webgl-where-it-pays',
    id: 'W-012',
    date: 'Jan 2025',
    readTime: '5 min read',
    title: 'WebGL without the hype: where 3D actually pays off',
    excerpt:
      'Ninety percent of sites do not need WebGL. The ten percent that do can use it to win.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    tint: 'from-emerald-500/40 to-teal-500/30',
    body: [
      'WebGL is the fastest way to add wow, and the fastest way to add 40 megabytes of jank. The correct question is not "can we add 3D?" but "does 3D change the outcome?"',
      'It pays off in exactly three places: products you can only understand in three dimensions, brand moments where the craft of the object is the story, and interactive data that lives in space. Everywhere else, a well-timed 2D transition does more with less.',
      'When we do use it, we treat the canvas as a progressive enhancement. The experience must be complete on a mid-tier phone with a low-power mode, and glorious only when the device can afford it.',
      'If your 3D exists because you wanted a scrolling gimmick, delete it and ship the marketing page you were avoiding.',
    ],
  },
  {
    slug: 'empty-states-are-interfaces',
    id: 'W-011',
    date: 'Dec 2024',
    readTime: '4 min read',
    title: 'Empty states are interfaces too',
    excerpt:
      'The first screen your new user sees is usually a blank grid. Treat it like a feature.',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    tint: 'from-amber-500/40 to-orange-500/30',
    body: [
      'When a product launches, the team obsesses over the dashboard, the onboarding, the first-run flow. Meanwhile the empty state — that dead-gray grid — quietly becomes the first thing a new user actually sees.',
      'An empty state is a conversation. "Nothing here" tells the user this product is broken. "Add your first project to see your metrics live" turns a blank canvas into a promise and a next step.',
      'We build empty states with the same budget as primary screens: an illustration or 3D accent, a single clear action, and a sentence that explains value, not absence.',
      'Measure how many users complete that first action. It predicts retention better than any dashboard metric you will ship later.',
    ],
  },
  {
    slug: 'design-token-batteries',
    id: 'W-010',
    date: 'Nov 2024',
    readTime: '6 min read',
    title: 'Design tokens are a battery, not a wiring diagram',
    excerpt:
      'Semantic tokens pay off when they store decisions, not colors. Here is how we structure them.',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80',
    tint: 'from-violet-500/40 to-purple-500/30',
    body: [
      'Teams copy Tailwind’s palette into a tokens file, rename a few keys, and call it a day. Six months later the codebase has 400 color variables and nobody knows which one is the "real" surface color.',
      'The fix is a two-layer model. Primitive tokens hold the raw values — the 500 shades, the 12s durations. Semantic tokens hold the decisions: what "surface" means in light mode, what "danger" resolves to on hover.',
      'Builders write against semantics. Only the theme layer ever touches primitives. That single rule makes theming, dark mode and rebrands into config changes instead of archaeology expeditions.',
      'Your tokens are a battery: they store energy the whole system can draw on. But only if the wiring is clean.',
    ],
  },
  {
    slug: 'resume-sites-are-corporate',
    id: 'W-009',
    date: 'Oct 2024',
    readTime: '5 min read',
    title: 'Portfolio sites should not look like resumes',
    excerpt:
      'A resume lists skills. A portfolio proves them. Build the second one.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    tint: 'from-rose-500/40 to-pink-500/30',
    body: [
      'The most common brief we get is "make my portfolio feel premium" — which usually means "like a big tech careers page." The result is a sterile grid of project cards that all say the same thing: I can build a card grid.',
      'A portfolio that works is a series of case studies, not a list of projects. Show the problem, the constraint, the trade-off you made, and the number that moved. That is what a hiring team or client is actually screening for.',
      'The site itself should demonstrate the craft. If you claim to love motion, the portfolio should move well. If you claim performance, it should be fast. The medium is the evidence.',
      'You are not a collection of skills. You are a set of judgment calls. Present them.',
    ],
  },
]

export const studio = {
  mission:
    'An independent studio building fast, beautiful, measurable products. We pair disciplined engineering with editorial design — and we only ship work we would put our own name on.',
  values: [
    {
      title: 'Craft over cargo',
      desc: 'We would rather ship one considered screen than ten half-baked ones. Every pixel earns its place.',
    },
    {
      title: 'Measured motion',
      desc: 'Animation is budgeted like bandwidth. We move only what moves the outcome.',
    },
    {
      title: 'Humans in the loop',
      desc: 'AI is a tool on our teams, not a replacement for them. Judgment stays human.',
    },
    {
      title: 'Radical candor',
      desc: 'We tell clients what they need to hear, not what they want to hear. Early.',
    },
  ],
  capabilities: [
    { label: 'React / Next.js', level: 96 },
    { label: 'TypeScript', level: 92 },
    { label: 'WebGL / Three.js', level: 84 },
    { label: 'Design Systems', level: 90 },
    { label: 'Node / tRPC / APIs', level: 88 },
    { label: 'Performance / SEO', level: 91 },
  ],
  team: [
    {
      name: 'Maya Chen',
      role: 'Founder · Creative Director',
      initials: 'MC',
      tint: 'from-rose-500/40 to-orange-500/20',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&w=600&q=80',
    },
    {
      name: 'Jonas Reyes',
      role: 'Engineering Lead',
      initials: 'JR',
      tint: 'from-sky-500/40 to-cyan-500/20',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=600&q=80',
    },
    {
      name: 'Priya Nair',
      role: 'Product Designer',
      initials: 'PN',
      tint: 'from-violet-500/40 to-purple-500/20',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&crop=faces&w=600&q=80',
    },
    {
      name: 'Sam Okafor',
      role: 'Full-Stack Developer',
      initials: 'SO',
      tint: 'from-emerald-500/40 to-teal-500/20',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&crop=faces&w=600&q=80',
    },
  ],
  office: {
    address: '844 Seward Street, Los Angeles, CA 90038',
    coords: '34.0907° N, 118.3267° W',
  },
}

export const footerCols = [
  {
    heading: 'Sitemap',
    links: ['Work', 'Studio', 'Whispers', 'Process', 'Pricing', 'Contact'],
  },
  {
    heading: 'Social',
    links: ['Instagram', 'Twitter / X', 'Dribbble', 'LinkedIn', 'Github'],
  },
  {
    heading: 'Office',
    links: ['Los Angeles, CA', 'hello@studio.co', '+1 (310) 555-0192'],
  },
]
