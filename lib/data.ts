export const NAV_ITEMS = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'research',   label: 'Research & Open Source' },
]

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/GauriSP10',
    icon: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>`,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/gauri-prabhakar',
    icon: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>`,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/GauriPrabhakar/',
    icon: `<path d="M16 8.5l-4-4-4 4M8 15.5l4 4 4-4M4 12h16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
]

export const EMAIL = 'gprabhakar1820@gmail.com'

export const EXPERIENCE = [
  {
    date: 'Oct 2024 — Jun 2025',
    title: 'Machine Learning Engineer',
    company: 'AYU',
    href: '#',
    intro: 'Early-stage wellness startup building conversational AI for mood tracking, journaling and coaching. Small team, shared ownership across the stack.',
    bullets: [
      'Led design of the conversational AI system covering conversation flow, prompt engineering, custom NLP pipelines and sentiment analysis - boosting user session retention by 30%.',
      'Integrated OpenAI GPT and Hugging Face models for context-aware, emotionally adaptive responses. Reduced average response latency by 40% through async FastAPI architecture, model response caching, API call batching and prompt optimization.',
      'Built a personalization layer that adapted responses to real-time sentiment signals, improving user engagement by 25%.',
      'Designed the FastAPI backend and MongoDB schema to support scalable, asynchronous chatbot interactions.',
    ],
    tags: [
      { label: 'Prompt Engineering', color: 'teal' },
      { label: 'Sentiment Analysis',  color: 'teal' },
      { label: 'OpenAI API',          color: 'blue' },
      { label: 'Hugging Face',        color: 'blue' },
      { label: 'FastAPI',             color: 'amber' },
    ],
  },
  {
    date: 'Sep 2022 — Sep 2024',
    title: 'Software Engineer',
    company: 'SLB (Schlumberger)',
    href: '#',
    intro: 'SLB is one of the world\'s largest oil and gas companies. I was part of the engineering team responsible for a large portfolio of internal APIs powering rig equipment scheduling and maintenance across global operations.',
    bullets: [
      'Built a .NET API endpoint with a custom query parser and SDK-level implementation that mapped requests directly to MongoDB aggregation pipelines. Response times dropped from several seconds to under a second, an 80% improvement serving both engineers and rig operators.',
      'Wrote a shared APIGEE flow policy fixing broken href links in API metadata. Downstream consumers had scripts trained on those links and were silently breaking across 50+ integrations. One fix, everything unblocked.',
      'Executed a zero-downtime migration of 327,000+ hierarchical MongoDB records across a full schema redesign and platform restructure.',
      'Scripted database correction pipelines that resolved daily inconsistencies causing message pile-ups and operational slowdowns on the rig.',
      'Identified a gap, built a RAG-style chatbot on internal engineering docs, wiki pages and meeting transcripts entirely on own initiative, and pitched it to leadership as a proof of concept for bringing AI into the team.',
    ],
    tags: [
      { label: '.NET / C#', color: 'blue' },
      { label: 'MongoDB',   color: 'blue' },
      { label: 'APIGEE',    color: 'amber' },
      { label: 'REST APIs', color: 'teal' },
      { label: 'Azure',     color: 'blue' },
      { label: 'RabbitMQ',  color: 'amber' },
    ],
  },
  {
    date: 'Feb 2022 — Aug 2022',
    title: 'Machine Learning Engineer',
    company: 'iSchoolConnect',
    href: 'https://ischoolconnect.com/',
    intro: 'iSchoolConnect is an ed-tech platform helping students find universities, courses and scholarships globally. Worked on the core recommendation system as part of a 3-person team.',
    bullets: [
      'Shipped an internal Streamlit tool that gave admissions counselors, sales and client-facing teams direct access to the recommendation system without routing through engineering. Cut cross-team dependency by 85% and directly contributed to onboarding 2 enterprise clients.',
      'Improved recommendation accuracy through feature engineering on student profiles across GPA, test scores, budget and geography preferences.',
      'Rebuilt the MongoDB schema from scratch and scripted a Python pipeline to normalize and restructure 20,000+ data points into a clean, analysis-ready database.',
      'Scraped, cleaned and ingested 2,000+ external data points from university and education sources to expand the recommendation corpus.',
      'Deployed an automated discrepancy detection pipeline that caught database errors daily and triggered developer alerts, replacing a fully manual process and reducing production incidents.',
    ],
    tags: [
      { label: 'Recommendation Systems', color: 'teal' },
      { label: 'Feature Engineering',    color: 'teal' },
      { label: 'MongoDB',                color: 'blue' },
      { label: 'Python',                 color: 'blue' },
      { label: 'Streamlit',              color: 'amber' },
    ],
  },
]

export const PROJECTS = [
  {
    title: 'GPU Scheduler with Multi-Agent RL',
    desc: 'Built a system where GPU nodes negotiate workload allocation through multi-agent reinforcement learning using MAPPO. Each GPU acts as an independent agent learning scheduling policies through interaction. Benchmarked against a standard Kubernetes baseline across simulated cluster environments to measure throughput and fairness.',
    date: 'Dec 2025 — Present',
    href: 'https://github.com/GauriSP10/multi-agent-gpu-scheduler',
    github: 'https://github.com/GauriSP10/multi-agent-gpu-scheduler',
    tags: [
      { label: 'Reinforcement Learning', color: 'teal' },
      { label: 'Multi-Agent Systems',    color: 'teal' },
      { label: 'Ray RLlib',              color: 'blue' },
      { label: 'Kubernetes',             color: 'blue' },
      { label: 'Distributed Computing',  color: 'amber' },
    ],
  },
  {
    title: 'Cryptographic Model Fingerprinting',
    desc: 'Built a system that embeds cryptographic signatures directly into neural network weights to trace the origins of AI-generated content. The fingerprint survives model compression, adversarial perturbations and fine-tuning - making it viable for real-world attribution of outputs from diffusion models and LLMs.',
    date: 'Aug 2025 — Sep 2025',
    href: 'https://github.com/GauriSP10/cryptographic-model-fingerprinting',
    github: 'https://github.com/GauriSP10/cryptographic-model-fingerprinting',
    tags: [
      { label: 'Adversarial ML',   color: 'teal' },
      { label: 'Deep Learning',    color: 'teal' },
      { label: 'Generative AI',    color: 'blue' },
      { label: 'LLMs',             color: 'blue' },
      { label: 'Model Security',   color: 'amber' },
    ],
  },
  {
    title: 'Identifying RL Algorithms from Agent Behavior',
    desc: 'Given only behavioral observations from a deployed agent - no weights, no logs - can you tell which RL algorithm trained it? Built a supervised classifier across DQN, PPO and A2C on LunarLander-v2, extracting behavioral features per episode, and benchmarking five classifiers on separating style from performance.',
    date: 'Jan 2026 — Present',
    href: '#',
    github: 'https://github.com/GauriSP10',
    tags: [
      { label: 'Reinforcement Learning', color: 'teal' },
      { label: 'Supervised Learning',    color: 'teal' },
      { label: 'Feature Engineering',    color: 'blue' },
      { label: 'scikit-learn',           color: 'blue' },
      { label: 'Behavioral Analysis',    color: 'amber' },
    ],
  },
  {
    title: 'Automatic Legal Document Simplification',
    desc: 'Legal documents are precise by design and unreadable by consequence. Built an NLP system that transforms dense legal text - contracts, terms of service, court rulings - into plain English without losing meaning. Comparing a rule-based pipeline against a fine-tuned pretrained language model, evaluated via SARI scores, Flesch-Kincaid readability and human judgment.',
    date: 'Jan 2026 — Present',
    href: '#',
    github: 'https://github.com/GauriSP10',
    tags: [
      { label: 'NLP',          color: 'teal' },
      { label: 'LLMs',         color: 'teal' },
      { label: 'Hugging Face', color: 'blue' },
      { label: 'Fine-tuning',  color: 'blue' },
      { label: 'PyTorch',      color: 'amber' },
    ],
  },
]

export const RESEARCH = [
  {
    venue: 'IEEE',
    year: '2022',
    title: 'Algorithm Visualizer: An Interactive Data Structures Education Tool',
    desc: 'Interactive GUI tool for visualizing sorting algorithms and data structures in real time. Distributed as a standalone executable with no dependency installation required.',
    href: 'https://ieeexplore.ieee.org/document/9753906',
    tags: [
      { label: 'Python',          color: 'teal' },
      { label: 'tkinter',         color: 'blue' },
      { label: 'Algorithm Design', color: 'amber' },
    ],
  },
  {
    venue: 'PyPI Library',
    year: '2022',
    title: 'streamlit-login-auth-ui',
    desc: '30,000+ downloads. Open-source library adding a complete authentication layer to any Streamlit app - email verification, cookie-based sessions and a clean login/signup UI out of the box. Acknowledged by the Streamlit team.',
    href: 'https://pypi.org/project/streamlit-login-auth-ui/',
    tags: [
      { label: 'Python',       color: 'teal' },
      { label: 'Streamlit',    color: 'blue' },
      { label: 'Open Source',  color: 'amber' },
    ],
  },
  {
    venue: 'VS Code Extension',
    year: '2024',
    title: 'Backlog Manager',
    desc: 'VS Code extension for in-editor task tracking. Log tasks from selected code, auto-prioritize by severity, jump to the exact line a task was created from, and export your backlog. Built to stay out of your way - no pop-ups, no context switching.',
    href: 'https://marketplace.visualstudio.com/items?itemName=GauriPrabhakar.backlog-manager',
    tags: [
      { label: 'TypeScript',   color: 'teal' },
      { label: 'VS Code API',  color: 'blue' },
      { label: 'Open Source',  color: 'amber' },
    ],
  },
]

export const SKILLS = {
  Languages: ['Python', 'C++', 'Rust', 'C#', 'Java'],
  'AI / ML':  ['PyTorch', 'TensorFlow', 'Hugging Face', 'Ray RLlib', 'LLMs · NLP'],
  Infra:      ['FastAPI · Flask', 'Docker · K8s', 'MongoDB · Redis', 'Azure · CI/CD', 'Pinecone'],
}