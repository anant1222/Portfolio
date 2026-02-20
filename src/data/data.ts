import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const personalData = {
  name: "Anant Kumar Yadav",
  initials: "AKY",
  url: "https://www.anantyadav.dev/",
  location: "Noida, UP, India",
  locationLink: "https://www.google.com/maps/place/noida",
  description: "Senior Backend Engineer at W3villa Technology.",
  summary:
    "I'm a **Senior Backend Engineer** with **5+ years of experience**, currently working at W3villa Technology. I specialize in building **scalable backend systems**, **microservices architecture**, **AI/LLM integrations**, **blockchain-based systems**, and **high-throughput real-time systems**. I'm passionate about solving complex technical challenges and optimizing system performance.",
  avatarUrl: "/me.jpg",
} as const;

export const skillsData = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "Python", icon: "logos:python" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "FastAPI", icon: "logos:fastapi" },
      { name: "Express.js", icon: "logos:express" },
      { name: "NestJS", icon: "logos:nestjs" },
      { name: "Sails.js", icon: "logos:sails" },
      { name: "WebSockets", icon: "material-symbols:webhook" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Neo4j", icon: "logos:neo4j" },
      { name: "Qdrant", icon: "material-symbols:database-outline" },
      { name: "SQLite", icon: "logos:sqlite" },
    ],
  },
  {
    category: "AI / LLM",
    skills: [
      { name: "OpenAI API", icon: "logos:openai-icon" },
      { name: "Groq AI", icon: "material-symbols:psychology-alt" },
      { name: "LangChain", icon: "material-symbols:link" },
      { name: "Semantic Router", icon: "material-symbols:route" },
      { name: "RAG", icon: "material-symbols:auto-awesome" },
      { name: "MCP", icon: "material-symbols:model-training" },
      { name: "Google Vision", icon: "logos:google-cloud" },
      { name: "Function Calling", icon: "material-symbols:functions" },
      { name: "Multi-Agent", icon: "material-symbols:smart-toy" },
      { name: "OCR", icon: "material-symbols:document-scanner" },
      { name: "Prompt Engineering", icon: "material-symbols:edit-document" },
    ],
  },
  {
    category: "Blockchain",
    skills: [
      { name: "ERC-3643", icon: "material-symbols:account-balance-wallet" },
      { name: "Tokenization", icon: "material-symbols:token" },
      { name: "Base L2", icon: "material-symbols:layers" },
      { name: "Smart Contracts", icon: "material-symbols:code-blocks" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "PM2", icon: "material-symbols:settings" },
      { name: "CI/CD", icon: "material-symbols:sync" },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "Microservices", icon: "material-symbols:account-tree" },
      { name: "Distributed Systems", icon: "material-symbols:cloud" },
      { name: "Event-Driven", icon: "lucide:share-2" },
      { name: "Async Processing", icon: "material-symbols:sync-alt" },
      { name: "High-throughput Systems", icon: "material-symbols:speed" },
    ],
  },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  // { href: "https://dev.to/ben04rogers", icon: NotebookIcon, label: "Blog" },
] as const;

export const contactData = {
  email: "anydec22@gmail.com",
  tel: "+919795897359",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/anant1222",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anant1222",
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: "Email",
      url: "/#contact",
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "W3villa Technology",
    href: "https://www.w3villa.com/",
    location: "Noida, UP",
    title: "Senior Backend Engineer",
    logoUrl: "/w3villa.jpeg",
    start: "Aug 2023",
    end: "Present",
    description: [
      "Led backend development for multiple high-impact projects including ATOM (Real Estate Tokenization Platform), Tech Translate (AI + OCR Document Platform), Ruv AI (Multi-Agent AI System), and Super One (High-throughput MLM system).",
      "Designed and implemented microservices-based backend architecture for blockchain-based real estate investment platform using ERC-3643 tokens on Base L2, including Identity Registry, compliance workflows, and USDC-based investment flows.",
      "Built multi-agent AI orchestrator system with Open Interpreter integration, Neo4j knowledge graph, semantic routing engine, and validator/miner communication protocols for decentralized AI validation.",
      "Developed high-throughput backend systems handling 30k–40k concurrent users with optimized task queues, Neo4j graph database, and async processing patterns.",
      "Implemented AI/LLM integrations including OpenAI API, Function Calling, LangChain, OCR (Google Vision), and prompt engineering for document processing and translation platforms.",
      "Architected scalable data layers using MySQL, PostgreSQL, MongoDB, Redis, Neo4j, Qdrant, and SQLite with Prisma ORM for optimal performance.",
      "Designed async job pipelines using Bull queues for background processing, cron-based workflows, and event-driven systems.",
      "Optimized system performance achieving 30% improvement through Redis caching strategies and async Node.js patterns.",
      "Managed AWS infrastructure including EC2, S3, RDS, IAM, and deployed applications using Docker, PM2, and CI/CD pipelines (GitHub Actions, Jenkins).",
      "Conducted internal Node.js & Redis training sessions and led GenAI workshop, contributing to team knowledge sharing.",
      "Awarded Best Team of the Year 2024 for exceptional project delivery and technical excellence.",
    ],
  },
  {
    company: "Tout & Own Pvt Ltd",
    href: "#",
    location: "Gurgaon, HR",
    title: "Backend Engineer",
    logoUrl: "/cachy_logo.jpeg",
    start: "Feb 2021",
    end: "July 2023",
    description: [
      "Developed RESTful APIs and backend services using Node.js, Express.js, NestJS, and Sails.js frameworks.",
      "Built social media platform backend (Cachy) with admin dashboard, CRM features, and in-app purchase integrations.",
      "Implemented Redis caching strategies resulting in significant performance improvements for high-traffic endpoints.",
      "Designed and optimized database schemas using MySQL, PostgreSQL, and MongoDB for various applications.",
      "Developed role-based authentication and authorization systems for admin panels and user management.",
      "Integrated third-party APIs including Google APIs for various platform features.",
      "Implemented trending algorithms, group management, and engagement features for social media platform.",
      "Managed AWS cloud infrastructure and deployments ensuring high availability and scalability.",
      "Collaborated with frontend teams to ensure seamless API integration and optimal data flow.",
      "Optimized database queries and implemented efficient data access patterns for improved response times.",
    ],
  },
] as const;

export const educationData = [
  {
    school: "Integral University",
    href: "https://www.iul.ac.in/",
    degree: "Master of Computer Application (MCA)",
    logoUrl: "/integral_university_logo.png",
    start: "May 2025",
    end: "Present",
    description: [
      "Pursuing Master's degree in Computer Applications",
      "Focus on advanced software engineering and system design",
    ],
  },
  {
    school: "DDU Gorakhpur University",
    href: "https://www.ddugu.ac.in/",
    degree: "Bachelor of Computer Application (BCA)",
    logoUrl: "/ddu_logo.jpeg",
    start: "May 2016",
    end: "May 2019",
    description: [
      "Bachelor's degree in Computer Applications",
      "Foundation in programming, databases, and software development",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "ATOM — Real Estate Tokenization Platform",
    href: "#",
    dates: "2024",
    active: true,
    description:
      "Blockchain-based real estate investment platform enabling regulated fractional ownership using ERC-3643 tokens on Base L2. Designed microservices architecture with identity registry, compliance workflows, and USDC-based investment flows.",
    detailedDescription: `ATOM is a revolutionary blockchain-based platform that enables fractional ownership of real estate properties through tokenization. The platform uses ERC-3643 compliant smart contracts on Base L2 to ensure regulatory compliance while providing seamless investment opportunities. I architected the entire backend system including microservices, identity registry, compliance workflows (Reg D / Reg S), token minting, valuation tracking, rent distribution logic, multi-sig custody integration, and KYC/AML integration with North Capital.`,
    keyFeatures: [
      "ERC-3643 compliant smart contract integration",
      "Identity Registry + compliance workflows (Reg D / Reg S)",
      "USDC-based investment flow",
      "Token minting, valuation tracking, and rent distribution",
      "Multi-sig custody integration",
      "KYC/AML integration (North Capital)",
      "Async job pipelines using Bull queues",
      "High-performance data layer (MySQL + Prisma + Redis)",
      "Admin dashboard APIs",
    ],
    technologies: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "NestJS", icon: "logos:nestjs" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Bull Queue", icon: "material-symbols:queue" },
      { name: "Base L2", icon: "material-symbols:layers" },
      { name: "ERC-3643", icon: "material-symbols:account-balance-wallet" },
      { name: "AWS", icon: "logos:aws" },
    ],
    links: [],
    image: undefined, // Private project - no image available
    images: [],
    video: "",
  },
  {
    title: "Tech Translate — AI + OCR Document Platform",
    href: "#",
    dates: "2024",
    active: true,
    description:
      "Multilingual PDF translation & structured document processing platform with Google Vision OCR integration and YOLO-based layout detection.",
    detailedDescription: `Tech Translate is a comprehensive document processing platform that enables multilingual PDF translation and structured document extraction. I led the backend and frontend coordination, designing the PDF upload & translation pipeline, integrating Google Vision OCR, implementing YOLO-based layout detection, building role-based authentication, managing AWS S3 storage workflows, and creating document processing automation pipelines.`,
    keyFeatures: [
      "PDF upload & translation pipeline",
      "Google Vision OCR integration",
      "YOLO-based layout detection",
      "Role-based authentication system",
      "AWS S3 storage workflows",
      "Document processing automation",
      "Multilingual support",
    ],
    technologies: [
      { name: "Python", icon: "logos:python" },
      { name: "FastAPI", icon: "logos:fastapi" },
      { name: "React", icon: "logos:react" },
      { name: "Google Vision", icon: "material-symbols:visibility" },
      { name: "YOLO", icon: "material-symbols:image-search" },
      { name: "AWS S3", icon: "logos:aws-s3" },
    ],
    links: [],
    image: undefined, // Private project - no image available
    images: [],
    video: "",
  },
  {
    title: "Ruv AI — Multi-Agent AI System",
    href: "#",
    dates: "2024",
    active: true,
    description:
      "Autonomous AI agent system using Open Interpreter + decentralized validator/miner communication with Neo4j knowledge graph and semantic routing.",
    detailedDescription: `Ruv AI is an advanced multi-agent AI system that enables autonomous AI agents to work collaboratively. I built the multi-agent orchestrator, integrated Open Interpreter, designed the Neo4j knowledge graph, developed the semantic routing engine, and implemented validator/miner communication protocols (Synapse, Axon, Dendrite) with performance-based task allocation logic.`,
    keyFeatures: [
      "Multi-agent orchestrator",
      "Open Interpreter integration",
      "Neo4j knowledge graph design",
      "Semantic routing engine",
      "Validator/miner communication (Synapse, Axon, Dendrite)",
      "Performance-based task allocation",
      "Decentralized validation system",
    ],
    technologies: [
      { name: "Python", icon: "logos:python" },
      { name: "OpenAI", icon: "logos:openai-icon" },
      { name: "Neo4j", icon: "logos:neo4j" },
      { name: "Bittensor", icon: "material-symbols:network-node" },
      { name: "Vector DB", icon: "material-symbols:database" },
      { name: "Async Systems", icon: "material-symbols:sync-alt" },
    ],
    links: [],
    image: undefined, // Private project - no image available
    images: [],
    video: "",
  },
  {
    title: "Super One — High-Throughput MLM Platform",
    href: "#",
    dates: "2023-2024",
    active: true,
    description:
      "Gaming + MLM backend system handling 30k–40k concurrent users with optimized task queues, Neo4j graph database, and async processing.",
    detailedDescription: `Super One is a high-performance MLM (Multi-Level Marketing) platform combined with gaming features. I designed high-throughput task queues, built cron-based processing workflows, implemented Neo4j graph database for relationship tracking, optimized package purchase & benefit logic, and improved performance using async Node.js patterns to handle 30k–40k concurrent users efficiently.`,
    keyFeatures: [
      "High-throughput task queues",
      "Cron-based processing workflows",
      "Neo4j graph database implementation",
      "Package purchase & benefit logic optimization",
      "Async Node.js patterns",
      "Handles 30k–40k concurrent users",
      "Gaming + MLM integration",
    ],
    technologies: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Neo4j", icon: "logos:neo4j" },
      { name: "Redis", icon: "logos:redis" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "Async Processing", icon: "material-symbols:sync-alt" },
    ],
    links: [],
    image: undefined, // Private project - no image available
    images: [],
    video: "",
  },
  {
    title: "Cachy — Social Media App Backend",
    href: "#",
    dates: "2023-2024",
    active: true,
    description:
      "Social media platform backend with admin dashboard, CRM features, Redis caching (30% performance improvement), and AWS infrastructure management.",
    detailedDescription: `Cachy is a comprehensive social media platform backend with advanced admin dashboard and CRM features. I developed REST APIs, implemented Redis caching achieving 30% performance improvement, built role-based admin panel, managed AWS infrastructure, integrated in-app purchase & Google APIs, and implemented trending, group, and engagement features.`,
    keyFeatures: [
      "REST APIs development",
      "Redis caching (30% performance improvement)",
      "Role-based admin panel",
      "AWS infrastructure management",
      "In-app purchase integration",
      "Google API integration",
      "Trending algorithms",
      "Group management",
      "Engagement features",
    ],
    technologies: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Express.js", icon: "logos:express" },
    ],
    links: [],
    image: undefined, // Private project - no image available
    images: [],
    video: "",
  },
] as const;
