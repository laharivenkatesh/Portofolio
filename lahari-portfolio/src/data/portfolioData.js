export const profile = {
  name: 'Lahari Venkatesh Yegi',
  roles: [
    'Full-Stack Developer',
    'Data & ML Enthusiast',
    'B.Tech CSE · Class of 2027',
    'Building Scalable Web Apps',
  ],
  tagline:
    "I'm a Computer Science undergraduate who likes building software end to end — full-stack web apps, real-time systems and data pipelines. I've shipped a workshop booking platform and a live chat app, and cleaned and modelled 50K+ records as a data science intern. I'm looking for full-time and Intern roles where I can keep solving harder problems.",
  email: 'vegilaven@gmail.com',
  phone: '8074532585',
  location: 'Chennai, Tamil Nadu',
  linkedin: 'https://www.linkedin.com/in/lahariyegi',
  github: 'https://github.com/laharivenkatesh',
  resume: '/assets/Lahari_Venkatesh_Yegi_Resume.pdf',
}

export const strengths = [
  {
    title: 'Full-Stack Systems',
    detail:
      'Next.js and Node.js apps with REST APIs, auth and booking flows — ArtyFacets handles 100+ events with sub-200 ms API responses.',
  },
  {
    title: 'Real-Time Engineering',
    detail:
      'WebSocket-driven chat with 5-minute self-destructing messages, built to handle many simultaneous sessions with low latency.',
  },
  {
    title: 'Data & ML',
    detail:
      'Cleaned 50K+ records with Pandas and NumPy, ran EDA, and built and evaluated models in Scikit-learn during my NetworkGeek internship.',
  },
  {
    title: 'AI & Cloud',
    detail:
      'Smart Connect drafts LinkedIn outreach with an LLM. Certified in Aviatrix multicloud networking and Oracle Database SQL.',
  },
]

export const stats = [
  { label: 'CGPA', value: 9.32, suffix: '', decimals: 2 },
  { label: 'Records Cleaned', value: 50, suffix: 'K+' },
  { label: 'Projects', value: 4, suffix: '+' },
  { label: 'Certifications', value: 3, suffix: '+' },
]

export const about = {
  heading: 'I like building things that work end to end.',
  paragraphs: [
    "I'm a Computer Science undergrad at Saveetha Engineering College, graduating in May 2027 with a 9.32 CGPA. Most of what I know came from shipping things — a workshop booking platform with server-side rendering and sub-200 ms APIs, a real-time chat app where messages disappear after five minutes, and a Chrome extension that reads a LinkedIn profile and writes the outreach for you.",
    "On the data side, I interned as a Data Scientist at NetworkGeek, where I cleaned 50K+ records, ran exploratory analysis, and trained models in Scikit-learn. I enjoy working in agile, cross-functional teams and turning messy problems into clean, dependable software.",
  ],
  education: [
    {
      school: 'Saveetha Engineering College',
      degree: 'B.Tech, Computer Science & Engineering',
      period: 'Anticipated May 2027',
      detail: 'CGPA 9.32',
    },
  ],
}

export const skills = [
  {
    category: 'Core Expertise',
    items: [
      'Software Development',
      'Data Structures & Algorithms',
      'Exploratory Data Analysis',
      'Backend Development',
      'RESTful APIs',
      'Database Management',
      'Software Testing',
    ],
  },
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'WebSockets',
    ],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'Oracle Database'],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'Microsoft Azure (Azure AI)',
      'Multicloud Networking',
      'CI/CD Concepts',
      'Application Resiliency',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Postman',
      'Jupyter Notebook',
      'Google Colab',
      'VS Code',
      'Android Studio',
    ],
  },
]

export const projects = [
  {
    featured: true,
    title: 'ArtyFacets — Music Workshop Booking Platform',
    description:
      'A full-stack platform where users discover and book music workshops across 100+ events, backed by RESTful APIs for booking, authentication and workshop management.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Figma',
      'Postman',
    ],
    highlights: [
      'Booking across 100+ events with 99% data consistency',
      'RESTful APIs for booking, auth and workshops with sub-200 ms response times',
      'Server-side rendered Next.js frontend — 35% faster page loads than client-side rendering',
      'Modular architecture supporting CRUD, scheduling, and future payments and admin dashboards',
    ],
    demo: 'https://www.artyfacets.com/',
    github: 'https://github.com/laharivenkatesh/ArtyFactes',
  },
  {
    title: 'CampusWhisper — Real-Time College Chat',
    description:
      'A college-based real-time chat platform for college-specific and cross-college conversations, where every message self-destructs after five minutes.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WebSockets'],
    highlights: [
      'Event-driven WebSocket architecture for low-latency, high-concurrency messaging',
      '5-minute message self-destruction — zero long-term data retention',
      'MERN stack supporting college-specific and cross-college chat',
      'Cloud-deployed with production environment variables and session controls',
    ],
    demo: 'https://campus-whisper.vercel.app/',
    github: 'https://github.com/laharivenkatesh/CampusWhisper',
  },
  {
    title: 'Smart Connect — LinkedIn Networking Assistant',
    description:
      'A Chrome extension that reads a LinkedIn profile straight off the page and drafts a personalized outreach or referral message using an LLM.',
    tech: ['JavaScript', 'Chrome Extensions API', 'OpenRouter API'],
    highlights: [
      'Content scripts extract profile data directly from the DOM',
      'Chrome runtime messaging bridges popup and content scripts',
      'OpenRouter-powered messages tailored to networking goals',
    ],
    demo: null,
    demoNote: 'Chrome extension — not web-hosted',
    demoVideo: '/assets/smart-connect-demo.mp4',
  },
]

export const experience = [
  {
    role: 'Data Scientist Intern',
    org: 'NetworkGeek',
    location: 'Chennai',
    period: 'Aug 2025 – Oct 2025',
    points: [
      'Processed and cleaned large real-world datasets (50K+ records) using Python, Pandas and NumPy, improving data reliability and enabling accurate statistical analysis and model development.',
      'Conducted Exploratory Data Analysis (EDA) and built data visualizations to identify trends, correlations and anomalies, supporting data-driven product and business decisions.',
      'Developed and evaluated machine learning models using Scikit-learn, gaining practical experience with Neural Networks, Transformers and Large Language Models (LLMs) for predictive and analytical tasks.',
      'Automated repetitive data preprocessing and feature engineering workflows using Python, reducing manual processing effort and improving overall analysis efficiency.',
      'Collaborated with cross-functional teams to analyze datasets, interpret model outputs and generate actionable insights, improving decision-making and technical troubleshooting.',
    ],
  },
]

export const certifications = [
  {
    title: 'Machine Learning — Certificate of Merit',
    issuer: 'Summer Analytics 2026 · Consulting & Analytics Club, IIT Guwahati',
    detail: 'Top 25 percentile in a 6-week program.',
    link: 'https://certificate.givemycertificate.com/c/782302b5-5a5e-4df1-81bb-768a922925db',
  },
  {
    title: 'Aviatrix Certified: Multicloud Network Associate',
    issuer: 'Aviatrix',
    link: 'https://www.credly.com/badges/d41a976e-9ff4-4a2b-ba81-44139077f694/public_url',
  },
  {
    title: 'Oracle Database SQL Certified Expert',
    issuer: 'Oracle',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=591ECC9A26DA45EBB53B2DF9065D9A5E36D7AFD0E342255B614630C1042C4F75',
  },
]

export const approach = [
  {
    title: 'Analyze',
    text: 'I start with the problem and the data behind it. At NetworkGeek that meant cleaning 50K+ records and letting exploratory analysis show what actually mattered before choosing a model or a schema.',
  },
  {
    title: 'Build',
    text: 'I build products end to end: Next.js and React in front, Node, Express and MongoDB behind them, with clean REST APIs and a modular structure so payments or admin dashboards can slot in later.',
  },
  {
    title: 'Refine',
    text: 'I measure, then tighten. Server-side rendering made ArtyFacets load 35% faster, API responses stay under 200 ms, and I test and iterate on how things behave with real users.',
  },
]

export const explore = {
  statement: 'I build to learn, then watch how it all holds up with real users.',
  highlightLast: 3,
  text: 'From a real-time chat where messages vanish after five minutes to a Chrome extension that drafts LinkedIn outreach with an LLM, I like small experiments that grow into working products.',
}
