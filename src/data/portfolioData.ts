import { Project, Capability, PhilosophyPrinciple, ProcessStep, DirectionNode, ExperienceItem, FAQItem } from '../types';

import portraitImg from '../assets/images/bruno_portrait_1788387160091.jpg';
import earthquakeImg from '../assets/images/earthquake_sim_1788387177302.jpg';
import nobelSourceImg from '../assets/images/nobel_source_1788387195735.jpg';
import tumagreenImg from '../assets/images/tumagreen_logistics_1788387213835.jpg';
import databaseAppImg from '../assets/images/database_mgmt_app_1788387230036.jpg';

export const PERSONAL_INFO = {
  name: 'Bruno Shema',
  role: 'Software Engineer',
  institution: 'European University of Lefke',
  degree: 'B.Sc. Software Engineering',
  cgpa: '3.78 / 4.00',
  portraitImage: portraitImg,
  email: 'shemabruno423@gmail.com',
  githubUrl: 'https://github.com/Bruno-250',
  linkedinUrl: 'https://linkedin.com/in/bruno-shema',
  location: 'Lefke / Global Remote',
  headline: 'I build software that solves real problems.',
  supportingStatement:
    'Software Engineer exploring the intersection of software development, AI, and intelligent systems.',
  additionalCopy:
    'Software Engineering graduate with a 3.78/4.00 CGPA, hands-on experience in programming, databases, software design and system development. Currently expanding into AI-assisted software production while exploring Edge AI, TinyML, embedded systems, IoT, robotics and automation.',
  corePositioning:
    'A Software Engineer who builds practical software, thinks in systems, and is exploring how AI can make software and intelligent systems more capable and efficient.',
};

export const CREDIBILITY_METRICS = [
  {
    id: 'cgpa',
    metric: '3.78 / 4.00',
    label: 'Cumulative CGPA',
    detail: 'Top academic standing reflecting rigorous foundational discipline.',
  },
  {
    id: 'degree',
    metric: 'B.Sc. Software Engineering',
    label: 'Academic Qualification',
    detail: 'European University of Lefke, accredited software engineering curriculum.',
  },
  {
    id: 'dev',
    metric: 'Software Development',
    label: 'Core Competency',
    detail: 'Hands-on programming, relational databases, and application engineering.',
  },
  {
    id: 'systems',
    metric: 'Systems Thinking',
    label: 'Methodology',
    detail: 'Architecture design, modular decomposition, and feasibility validation.',
  },
  {
    id: 'direction',
    metric: 'Current Direction',
    label: 'Active Exploration',
    detail: 'AI-assisted workflows, Edge AI, TinyML, and embedded intelligent systems.',
  },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    number: '01',
    title: 'Ideas are easy. Working systems are harder.',
    summary: 'Execution demands systemic engineering rather than conceptual optimism.',
    elaboration:
      'Turning an idea into useful software requires understanding requirements, architecture, data structures, interfaces, business logic, and implementation constraints. Software is only real when it operates reliably under constraint.',
  },
  {
    number: '02',
    title: 'Good engineering creates clarity.',
    summary: 'Architecture should eliminate friction rather than introduce prestige complexity.',
    elaboration:
      'Technology should be selected because it cleanly solves a specific, verified problem—not because it is fashionable or trendy. Simplicity, maintainability, and explicit data boundaries preserve velocity over time.',
  },
  {
    number: '03',
    title: 'AI is changing how software is built.',
    summary: 'Acceleration tools amplify capability only when guided by foundational rigor.',
    elaboration:
      'AI can significantly accelerate development cycles, prototyping, and synthesis. However, rigorous engineering judgment, comprehensive testing, sound architecture, and deep systems comprehension remain irreplaceable.',
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    description:
      'Designing and developing reliable, maintainable applications from clear requirements to production delivery.',
    benefit: 'Turn a defined problem into a working software system.',
    tags: ['C / C++', 'Python', 'TypeScript', 'Object-Oriented Design', 'Modular Architecture'],
  },
  {
    id: 'databases',
    title: 'Databases & Data Systems',
    description:
      'Relational modeling, schema normalization, SQL querying, and seamless application/data integration.',
    benefit: 'Keep information structured, accessible and usable.',
    tags: ['PostgreSQL', 'SQLite', 'SQL Queries', 'Data Integrity', 'Schema Design'],
  },
  {
    id: 'system-design',
    title: 'System Design',
    description:
      'Requirements analysis, component decomposition, technical feasibility assessment, and data flow modeling.',
    benefit: 'Make technical decisions before they become expensive problems.',
    tags: ['Architecture Planning', 'Requirements Engineering', 'Feasibility Studies', 'UML & Data Flow'],
  },
  {
    id: 'ai-assisted',
    title: 'AI-Assisted Software Production',
    description:
      'Actively developing capability focused on AI-assisted coding, research workflows, rapid validation, and rigorous review.',
    benefit: 'Accelerate iteration cycles without sacrificing code quality or control.',
    tags: ['AI-Assisted Workflows', 'Rapid Prototyping', 'Prompt Engineering', 'Rigorous Code Review'],
    isDeveloping: true,
  },
  {
    id: 'intelligent-systems',
    title: 'Intelligent Systems Exploration',
    description:
      'Long-term technical frontier: translating software intelligence into resource-constrained physical devices.',
    benefit: 'Bridge computation, physical sensing, and deterministic automation.',
    tags: ['Embedded Systems', 'Edge AI', 'TinyML', 'IoT Devices', 'Robotics & Automation'],
    isDeveloping: true,
    progression: [
      'Embedded Systems',
      'Edge AI',
      'TinyML',
      'IoT Networks',
      'Robotics & Automation',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'earthquake-simulator',
    title: 'Earthquake Simulator',
    category: 'System Architecture & Modeling',
    systemType: 'System Software',
    tagline: 'Seismic wave simulation and structural resilience modeling system.',
    problem:
      'Visualizing and assessing how complex physical seismic waves affect multi-story structural elements requires clear mathematical models, modular telemetry, and robust system-level coordination.',
    contribution:
      'Formulated system architecture, technical feasibility documentation, requirements decomposition, and led structural parameter modeling.',
    technologies: ['Systems Architecture', 'Python', 'Numerical Modeling', 'Feasibility Analysis'],
    technicalChallenge:
      'Balancing high-precision wave frequency computation with responsive graphical display parameters without system stalls.',
    outcome:
      'Demonstrated rigorous system-level thinking, verifiable requirements tracking, and technical leadership in simulation feasibility.',
    image: earthquakeImg,
    architectureDetails: [
      'Mathematical wave generation engine',
      'Structural dampening parameter matrix',
      'Real-time stress displacement telemetry',
      'Feasibility and constraint boundaries documentation',
    ],
  },
  {
    id: 'database-mgmt',
    title: 'Database Management Application',
    category: 'Application & Database Integration',
    systemType: 'Database App',
    tagline: 'Practical desktop relational database workbench with customized UI.',
    problem:
      'Local database administration and structured data tracking often suffer from fragmented scripts or bloated tools with high friction for small-to-medium datasets.',
    contribution:
      'Built a complete desktop database management application implementing CRUD workflows, SQL schema transactions, and responsive desktop interface.',
    technologies: ['Python', 'CustomTkinter', 'SQLite', 'SQL Optimization'],
    technicalChallenge:
      'Ensuring ACID transaction consistency, robust input validation, and clean event-driven GUI responsiveness without UI freezes during complex queries.',
    outcome:
      'Demonstrated practical software engineering: clean separation of database persistence from graphical presentation layers.',
    image: databaseAppImg,
    repoName: 'Database-project2024',
    architectureDetails: [
      'Parameterized query protection against SQL injection',
      'Transactional rollbacks on validation failures',
      'CustomTkinter modular component widgets',
      'Export and data backup utilities',
    ],
  },
  {
    id: 'nobel-source',
    title: 'Nobel Source',
    category: 'Supply Chain & Marketplace Concept',
    systemType: 'Supply Chain',
    tagline: 'Bridging the divide between smallholder agricultural producers and direct market buyers.',
    problem:
      'Agricultural producers frequently suffer severe value loss due to inefficient intermediary chains, lack of direct pricing transparency, and fragmented logistics.',
    contribution:
      'Architected the graduation system concept and software model for direct farmer-to-buyer market access, trade coordination, and transaction data flow.',
    technologies: ['TypeScript', 'System Modeling', 'Full-Stack Architecture', 'Marketplace Logic'],
    technicalChallenge:
      'Structuring supply catalog data models to accommodate variable agricultural harvests, dynamic pricing ranges, and localized fulfillment paths.',
    outcome:
      'Detailed systems architecture for a socially impactful digital marketplace, addressing market access friction with direct trade mechanisms.',
    image: nobelSourceImg,
    repoName: 'NobelSource',
    architectureDetails: [
      'Direct supplier-to-buyer trade protocol',
      'Harvest availability inventory ledger',
      'Localized transport coordination schema',
      'Transparent fair-market pricing indicators',
    ],
  },
  {
    id: 'tumagreen',
    title: 'TumaGreen',
    category: 'Logistics & Dispatch System',
    systemType: 'Logistics',
    tagline: 'Clean urban delivery service and logistics dispatch platform.',
    problem:
      'Urban package delivery networks struggle with dispatch coordination, tracking overhead, and route inefficiencies that increase operational waste.',
    contribution:
      'Developed core delivery service provider repository, dispatch order state-machine, and routing status flow.',
    technologies: ['JavaScript / Node.js', 'State Machine', 'RESTful API', 'Logistics Logic'],
    technicalChallenge:
      'Modeling multi-stop delivery states (Received → Assigned → Transit → Delivered) while preserving real-time package traceability.',
    outcome:
      'Created a modular delivery service architecture designed for low-overhead dispatching and clean integration.',
    image: tumagreenImg,
    repoName: 'TumaGreen',
    architectureDetails: [
      'Deterministic delivery lifecycle state machine',
      'Courier assignment and payload validation',
      'Order dispatch status tracking endpoints',
      'Lightweight route payload serialization',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    action: 'Problem & Constraints',
    description:
      'Deeply analyze user needs, functional goals, boundary conditions, and technical trade-offs before writing a single line of code.',
    deliverables: ['Requirements specification', 'User flow boundaries', 'Technical trade-off matrix'],
  },
  {
    number: '02',
    title: 'Structure',
    action: 'Architecture & Data',
    description:
      'Decompose the problem into modular components, define relational entities, and establish clear API and interface contracts.',
    deliverables: ['System block diagram', 'Normalized data schema', 'Interface contracts'],
  },
  {
    number: '03',
    title: 'Build',
    action: 'Implementation & Logic',
    description:
      'Implement clean, idiomatic solutions using stable technologies suited to the specific problem rather than chasing trends.',
    deliverables: ['Modular codebase', 'Self-documenting code', 'Zero unnecessary dependencies'],
  },
  {
    number: '04',
    title: 'Test',
    action: 'Verification & QA',
    description:
      'Validate system behavior across expected inputs and edge cases, measure performance, and root out regressions systematically.',
    deliverables: ['Boundary edge tests', 'Transaction integrity verification', 'Defect remediation'],
  },
  {
    number: '05',
    title: 'Iterate',
    action: 'Refinement & Evolution',
    description:
      'Evaluate working software against real feedback, isolate bottlenecks, and refine the system through structured iterations.',
    deliverables: ['Performance profiling', 'Architecture refactoring', 'Continuous feedback loop'],
  },
];

export const DIRECTION_JOURNEY: DirectionNode[] = [
  {
    title: 'Software Engineering',
    level: 'Foundation',
    description: 'B.Sc. degree, academic excellence (3.78 CGPA), algorithms, databases, and structured system design.',
    tags: ['C / C++', 'Python', 'Algorithms', 'Databases', 'Design Patterns'],
  },
  {
    title: 'Practical Software Systems',
    level: 'Foundation',
    description: 'Building operational applications that solve concrete user problems with high reliability.',
    tags: ['Desktop Applications', 'Relational Databases', 'System Architecture'],
  },
  {
    title: 'AI-Assisted Development',
    level: 'Expanding',
    description: 'Leveraging AI as a multiplier for rapid iteration, prototyping, and synthesis while applying engineering judgment.',
    tags: ['AI Bootcamps', 'Workflow Automation', 'RAG Pipelines', 'Testing AI Code'],
  },
  {
    title: 'Edge AI & TinyML',
    level: 'Active Exploration',
    description: 'Deploying compact machine learning models directly onto resource-constrained microcontrollers and edge hardware.',
    tags: ['Microcontrollers', 'Model Quantization', 'Sensor Telemetry', 'Local Inference'],
  },
  {
    title: 'Embedded Systems & IoT',
    level: 'Active Exploration',
    description: 'Hardware-software interfaces, sensor networks, real-time telemetry, and resilient field communication.',
    tags: ['Microcontrollers', 'Sensor Interfacing', 'Network Protocols', 'C/C++ Bare-Metal'],
  },
  {
    title: 'Robotics & Automation',
    level: 'Target Domain',
    description: 'Bringing together software intelligence, mechanical control, and autonomous physical feedback loops.',
    tags: ['Feedback Loops', 'Deterministic Control', 'Intelligent Actuation', 'Autonomous Systems'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'student-assistant',
    role: 'Student Assistant',
    organization: 'European University of Lefke',
    period: 'Academic Sessions',
    category: 'Academic & Teaching',
    summary:
      'Supported undergraduate engineering students with core C and C++ programming fundamentals, conducted lab exercises, and evaluated code submissions.',
    responsibilities: [
      'Assisted junior engineering students in hands-on computer science laboratory sessions',
      'Demonstrated structured debugging techniques for pointers, memory allocation, and data structures in C/C++',
      'Graded programming assignments with rigorous attention to functional correctness and code style',
      'Helped diagnose common compile-time and runtime faults in student implementations',
    ],
    engineeringConnection:
      'Teaching reinforced foundational mastery: explaining low-level memory management and algorithmic thinking to others honed deep technical clarity.',
  },
  {
    id: 'peer-tutor',
    role: 'Peer Tutor — Computer Science & Engineering',
    organization: 'European University of Lefke',
    period: 'Academic Sessions',
    category: 'Academic & Teaching',
    summary:
      'Organized targeted revision and concept-clarification workshops for students studying challenging core software engineering subjects.',
    responsibilities: [
      'Facilitated structured study groups focused on Data Structures, Algorithms, and Software Architecture',
      'Deconstructed complex theoretical proofs and abstract concepts into intuitive, approachable mental models',
      'Created custom problem sets and guided students through iterative step-by-step problem solving',
    ],
    engineeringConnection:
      'Refined the ability to communicate technical complexity clearly—a vital skill for architecture reviews, documentation, and stakeholder discussions.',
  },
  {
    id: 'choir-leadership',
    role: 'University Choir Leadership',
    organization: 'European University of Lefke',
    period: 'Multidisciplinary Leadership',
    category: 'Leadership',
    summary:
      'Served in a key leadership role coordinating diverse member groups, rehearsals, performance discipline, and team alignment.',
    responsibilities: [
      'Led group coordination, scheduled rehearsals, and aligned individual members toward cohesive performances',
      'Mentored new members, fostering an environment of active listening, discipline, and mutual support',
      'Collaborated closely with musical directors to resolve scheduling and preparation bottlenecks under deadlines',
    ],
    engineeringConnection:
      'Demonstrated accountability, interpersonal communication, and team cohesion: managing complex human systems mirrors organizing modular software components.',
  },
];

export const EDUCATION_DATA = {
  institution: 'European University of Lefke',
  degree: 'Bachelor of Science in Software Engineering',
  cgpa: '3.78 / 4.00',
  standing: 'High Honors / Top Tier Academic Performance',
  location: 'Lefke, Northern Cyprus',
  coreCoursework: [
    { name: 'Data Structures & Algorithms', focus: 'Complexity analysis, trees, graphs, sorting, memory efficiency' },
    { name: 'Object-Oriented Programming', focus: 'Polymorphism, inheritance, encapsulation, design patterns' },
    { name: 'Software Design & Architecture', focus: 'Modular decomposition, SOLID principles, architectural styles' },
    { name: 'Software Quality Assurance & Testing', focus: 'Test methodologies, unit validation, verification protocols' },
    { name: 'Database Management Systems', focus: 'Relational algebra, SQL, normalization, concurrency control' },
    { name: 'Computer Networks', focus: 'TCP/IP stack, socket programming, protocols, distributed communications' },
  ],
};

export const AI_LEARNING_DATA = {
  headline: 'Learning to build with AI.',
  coreManifesto: 'AI is a tool in my engineering process, not a replacement for engineering judgment.',
  context:
    'Currently developing practical AI competencies through an intensive AI summer bootcamp and focused hands-on software engineering experiments.',
  facets: [
    {
      title: 'AI-Assisted Coding',
      description: 'Using AI models to draft boilerplates, generate test cases, and explore alternative syntactic formulations without relinquishing code review.',
    },
    {
      title: 'Rapid Prototyping',
      description: 'Accelerating early feedback loops and validating interface feasibility rapidly before investing in deep architectural commitments.',
    },
    {
      title: 'AI-Assisted Research',
      description: 'Synthesizing technical documentation, exploring library APIs, and comparing architectural patterns quickly.',
    },
    {
      title: 'Rigorous Verification of AI Output',
      description: 'Treating all generated code as untrusted input: reading every line, testing edge conditions, and verifying algorithmic bounds.',
    },
    {
      title: 'AI Integration & Workflows',
      description: 'Building software pipelines (such as RAG and contextual indexing) that integrate AI services into structured business systems.',
    },
  ],
};

export const FAQS: FAQItem[] = [
  {
    category: 'Specialization',
    question: 'What do you specialise in?',
    answer:
      'My established foundation is in Software Engineering—spanning programming (C, C++, Python, TypeScript), relational database design (SQL, SQLite, PostgreSQL), and system architecture. Concurrently, my active area of development is exploring AI-assisted software production and moving toward intelligent systems (Edge AI, TinyML, and embedded devices).',
  },
  {
    category: 'Clarification',
    question: 'Are you an AI engineer?',
    answer:
      'No, and I am careful not to claim that title. My formal qualification is a Bachelor of Science in Software Engineering (3.78 CGPA). I treat AI as an active, exciting area of learning and development—expanding my capability through bootcamps and hands-on projects—while grounding everything in solid software engineering practices.',
  },
  {
    category: 'Tech Stack',
    question: 'What technologies do you work with?',
    answer:
      'I work primarily with C, C++, Python, TypeScript/JavaScript, SQL (SQLite, PostgreSQL), CustomTkinter for desktop tools, and modern web application stacks. I prioritize foundational principles over tools, allowing me to adopt new frameworks as requirements dictate.',
  },
  {
    category: 'Execution',
    question: 'Can you work on an idea from scratch?',
    answer:
      'Yes. My approach starts with deconstructing the problem: defining functional requirements, establishing constraints, designing the data structures and system architecture, and then building an iterative prototype that can be tested against real criteria.',
  },
  {
    category: 'Web Development',
    question: 'Do you build websites and web applications?',
    answer:
      'Yes. While my academic foundation covers low-level systems, databases, and algorithms, I build practical web interfaces and full-stack applications when a web delivery model best serves the problem.',
  },
  {
    category: 'AI Philosophy',
    question: 'How do you use AI in development?',
    answer:
      'I use AI as a workflow accelerator for drafting, exploring alternative patterns, generating test scenarios, and conducting technical research. However, every piece of code is scrutinized, tested, and validated with my own engineering judgment.',
  },
  {
    category: 'Collaboration',
    question: 'Are you available for collaboration?',
    answer:
      'Yes. I welcome conversations regarding software engineering roles, technical projects, academic/research collaborations, and explorations in Edge AI, IoT, and embedded systems.',
  },
];
