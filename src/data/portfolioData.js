/**
 * Central Portfolio Data Source of Truth
 * 
 * Edit this file to update profile details, experience, projects, skills, certifications, and links.
 * All components dynamically consume this data.
 */

export const personalInfo = {
  name: "Krishna Tanwar",
  headline: "Software Developer | Python | SQL | AI/ML",
  location: "India",
  email: "kstanwar0000@gmail.com",
  github: "https://github.com/KrishnaTanwars",
  linkedin: "https://linkedin.com/in/krishnatanwars",
  currentRole: "Graduate Engineer Trainee at SMAAC Net Solutions",
  statusBadge: "Available for Software Engineering Roles",
  shortBio:
    "I'm a computer science engineering student and software developer focused on building practical backend applications, working with relational databases, and solving real-world engineering challenges. My experience spans software development, database design, business intelligence, and applied AI/ML systems.",
  aboutParagraphs: [
    "I am currently pursuing my B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning at GLA University (expected graduation in 2027). My core engineering focus is on software development, backend architectures, and database-driven applications.",
    "With a solid foundation in Python, Java, and SQL, I enjoy designing clean backend logic, structuring efficient relational databases (MySQL, PostgreSQL), and creating scalable systems. My experience bridges software engineering and data analytics—enabling me to understand both the operational backend and the analytical layers of enterprise platforms.",
    "Currently, I work as a Graduate Engineer Trainee at SMAAC Net Solutions, where I apply software engineering practices and collaborate on enterprise systems. Previously, as a Data Analyst Intern at AtliQ Technologies, I transformed transactional datasets into actionable business intelligence dashboards using Power BI and SQL.",
    "I am actively seeking software developer, Python developer, and backend engineering opportunities where I can contribute to high-impact products, write robust code, and continue expanding my engineering skillset."
  ],
  stats: [
    { label: "Core Focus", value: "Backend & Software Dev" },
    { label: "Primary Languages", value: "Python, SQL, Java" },
    { label: "Education", value: "B.Tech CSE (AI/ML) '27" },
    { label: "Current Status", value: "Graduate Engineer Trainee" }
  ],
  quickMetrics: [
    { number: "6+", label: "GitHub Repositories" },
    { number: "100K+", label: "Data Records Modeled" },
    { number: "10+", label: "Core Technologies" },
    { number: "100%", label: "Clean Code & Delivery" }
  ]
};

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

export const experiences = [
  {
    id: "smaac",
    role: "Graduate Engineer Trainee",
    company: "SMAAC Net Solutions",
    period: "Present",
    badge: "Current Role",
    type: "Full-Time",
    location: "India",
    description: [
      "Contributing as an early-career software engineer, focusing on software development lifecycles, backend logic, and database-driven enterprise applications.",
      "Collaborating on engineering workflows, applying clean coding standards, and working with modern tools and relational database systems.",
      "Developing practical technical expertise across enterprise software architectures and database integration patterns."
    ],
    technologies: ["Python", "SQL", "Database Systems", "Software Engineering", "Enterprise Systems"]
  },
  {
    id: "atliq",
    role: "Data Analyst Intern",
    company: "AtliQ Technologies",
    period: "Nov 2025 – Feb 2026",
    badge: "Internship",
    type: "Internship",
    location: "India",
    description: [
      "Analyzed business and transactional datasets to uncover operational patterns and customer performance metrics across enterprise lines.",
      "Developed interactive business intelligence dashboards and reporting views using Power BI, DAX, and SQL.",
      "Collaborated on data modeling and transformation workflows, translating raw records into structured decision-making insights."
    ],
    technologies: ["Power BI", "SQL", "DAX", "Power Query", "Excel", "Data Modeling"]
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "software-ai", label: "Software Dev & AI/ML" },
  { id: "data-bi", label: "Data Analytics & BI" }
];

export const projects = [
  {
    id: "rag-ai-assistant",
    title: "RAG AI Teaching Assistant",
    category: "software-ai",
    categoryLabel: "Software Dev & AI/ML",
    metricBadge: "Local Vector Search",
    description:
      "A local retrieval-augmented generation (RAG) assistant that transcribes tutorial videos with Whisper into JSON subtitle chunks, creates vector embeddings via local Ollama models, and retrieves the most relevant video timestamp to answer user questions accurately.",
    technologies: ["Python", "Ollama", "Whisper", "RAG", "Vector Embeddings", "Local LLMs"],
    repoUrl: "https://github.com/KrishnaTanwars/rag-ai-teaching-assistant",
    verified: true,
    highlights: [
      "Automated audio extraction and Whisper speech-to-text pipeline",
      "Chunking and contextual passage merging for high semantic precision",
      "Local embedding retrieval with exact video timestamp attribution"
    ],
    architecture: "Video Input ➔ Whisper STT ➔ JSON Chunking ➔ Ollama Embeddings ➔ Vector DB ➔ Semantic Query Retrieval & Timestamp Link"
  },
  {
    id: "real-time-video-analysis",
    title: "Real-Time Video Analysis",
    category: "software-ai",
    categoryLabel: "Software Dev & AI/ML",
    metricBadge: "30+ FPS Inference",
    description:
      "A modular real-time computer vision system performing multi-class detection including human tracking, vehicle monitoring, emotion recognition, and motion detection with configurable model performance profiles and a web interface.",
    technologies: ["Python", "OpenCV", "YOLO", "Flask", "Computer Vision", "Real-Time Processing"],
    repoUrl: "https://github.com/KrishnaTanwars/Real_Time_Video_Analysis_ML_Project",
    verified: true,
    highlights: [
      "Real-time video feed inference with unique object tracking IDs",
      "Configurable runtime profiles (fast, balanced, accurate)",
      "Web-based interface for stream monitoring and analytics"
    ],
    architecture: "RTSP / Video Feed ➔ OpenCV Frame Capture ➔ YOLO Object Inference ➔ Tracking Engine ➔ Flask Web Dashboard"
  },
  {
    id: "smart-traffic-violation-ai",
    title: "Smart Traffic Violation AI",
    category: "software-ai",
    categoryLabel: "Software Dev & AI/ML",
    metricBadge: "OCR & Rule Engine",
    description:
      "An automated traffic monitoring and violation detection platform combining a Python ML backend and React frontend. Features YOLO vehicle detection, license plate OCR, and automated rule checking for red lights and speeding with SQLite case logging.",
    technologies: ["Python", "YOLO", "EasyOCR", "React", "SQLite", "REST API", "Rule Engine"],
    repoUrl: "https://github.com/KrishnaTanwars/Smart_Traffic_Violation_AI",
    verified: true,
    highlights: [
      "Automated plate number recognition with EasyOCR",
      "Rule engine checking red-light and speed violations with image evidence",
      "Full-stack architecture with React dashboard and SQLite audit log"
    ],
    architecture: "Camera Stream ➔ YOLO Vehicle Bounding ➔ EasyOCR Plate Read ➔ Traffic Rule Engine ➔ SQLite Audit DB ➔ React Client"
  },
  {
    id: "sales-customer-analytics",
    title: "Sales & Customer Performance Analytics",
    category: "data-bi",
    categoryLabel: "Data Analytics & BI",
    metricBadge: "Cohort & SQL Analytics",
    description:
      "A comprehensive relational database analytics project evaluating customer transaction histories, sales performance indicators, revenue retention patterns, and product metrics to drive data-informed business strategies.",
    technologies: ["SQL", "MySQL", "PostgreSQL", "Excel", "Data Analytics", "Performance Metrics"],
    repoUrl: "https://github.com/KrishnaTanwars/Sales-Customer-Performance-Analytics",
    verified: true,
    highlights: [
      "Complex SQL querying for cohort and customer segment analysis",
      "Sales performance tracking across regions and product lines",
      "Structured data transformations for executive reporting"
    ],
    architecture: "Transactional DB ➔ SQL Query Views & Joins ➔ Customer Segmentation ➔ KPI Aggregation ➔ Visual Reports"
  },
  {
    id: "business-insights-360",
    title: "Business Insights 360",
    category: "data-bi",
    categoryLabel: "Data Analytics & BI",
    metricBadge: "Star Schema & 15+ KPIs",
    description:
      "An enterprise cross-functional Power BI dashboard built for AtliQ Hardwares, providing a unified analytical view across Finance, Sales, Marketing, and Supply Chain to replace static spreadsheets with interactive real-time BI.",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "Excel", "Business Intelligence"],
    repoUrl: "https://github.com/KrishnaTanwars/Business-Insights-360-PowerBI-Dashboard",
    verified: true,
    highlights: [
      "Cross-functional metrics covering Gross Margin, Net Sales & Forecast Accuracy",
      "Advanced DAX measures for dynamic time-intelligence calculations",
      "Optimized star-schema data model handling multi-table business records"
    ],
    architecture: "Raw CSV / SQL Records ➔ Power Query ETL ➔ Star-Schema Data Model ➔ DAX KPI Formulas ➔ Interactive Power BI Suite"
  },
  {
    id: "credit-card-financial-insights",
    title: "Credit Card Spend & Financial Insights",
    category: "data-bi",
    categoryLabel: "Data Analytics & BI",
    metricBadge: "Financial KPI Dashboard",
    description:
      "A financial intelligence Power BI dashboard analyzing credit card transactional flows, customer spending behavior across demographics, geographic distribution, and key revenue KPIs to support risk assessment and commercial strategy.",
    technologies: ["Power BI", "DAX", "Power Query", "Financial Analytics", "Excel", "KPI Tracking"],
    repoUrl: "https://github.com/KrishnaTanwars/Credit-Card-Spend-and-Financial-Insights-PowerBI",
    verified: true,
    highlights: [
      "Customer spending segmentation by age, income, and card type",
      "Transaction trend analysis and delinquency/revenue KPI tracking",
      "Interactive multi-page report with drill-through exploration"
    ],
    architecture: "Card Transactional Data ➔ Data Cleaning in Power Query ➔ Metric Engineering ➔ Demographic Segmentation ➔ Drill-Through Dashboard"
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", level: "Primary", tag: "Backend & AI" },
      { name: "SQL", level: "Primary", tag: "Relational Queries" },
      { name: "Java", level: "Foundational", tag: "OOP & Algorithms" },
      { name: "JavaScript", level: "Working", tag: "Full-Stack Web" }
    ]
  },
  {
    category: "Web & Backend Development",
    icon: "server",
    skills: [
      { name: "Flask", level: "Core", tag: "Microservices & APIs" },
      { name: "REST APIs", level: "Core", tag: "Endpoint Design" },
      { name: "React", level: "Working", tag: "Frontend Interfaces" },
      { name: "HTML5 & CSS3", level: "Core", tag: "Responsive UI" }
    ]
  },
  {
    category: "Databases & Tools",
    icon: "database",
    skills: [
      { name: "MySQL", level: "Core", tag: "Relational Design" },
      { name: "PostgreSQL", level: "Working", tag: "Advanced RDBMS" },
      { name: "SQLite", level: "Core", tag: "Embedded Datastores" },
      { name: "Git & GitHub", level: "Core", tag: "Version Control" },
      { name: "VS Code", level: "Core", tag: "Primary Dev Tool" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "cpu",
    skills: [
      { name: "Retrieval-Augmented Gen (RAG)", level: "Applied", tag: "Vector Search" },
      { name: "Large Language Models (LLMs)", level: "Applied", tag: "Local Ollama" },
      { name: "Whisper (OpenAI)", level: "Applied", tag: "Speech-to-Text" },
      { name: "OpenCV", level: "Applied", tag: "Computer Vision" },
      { name: "YOLO Object Detection", level: "Applied", tag: "Real-time Inference" },
      { name: "TensorFlow", level: "Applied", tag: "Model Foundations" }
    ]
  },
  {
    category: "Data Analytics & BI",
    icon: "bar-chart",
    skills: [
      { name: "Power BI", level: "Advanced", tag: "Enterprise Reporting" },
      { name: "Power Query (ETL)", level: "Advanced", tag: "Data Transformation" },
      { name: "DAX", level: "Proficient", tag: "Time-Intelligence" },
      { name: "Pandas & NumPy", level: "Proficient", tag: "Python Data Stack" },
      { name: "Excel Advanced", level: "Advanced", tag: "Pivot & Modeling" }
    ]
  }
];

export const certifications = [
  {
    title: "Python Programming & Data Structures Specialization",
    issuer: "GLA University & Academic Coursework",
    period: "2024",
    status: "Verified",
    description: "Deep dive into object-oriented architecture, data structures, algorithms, modular package design, and backend logic in Python.",
    skills: ["Python 3", "OOP", "Data Structures", "Algorithms"]
  },
  {
    title: "Relational Database Management Systems & SQL",
    issuer: "GLA University & DBMS Curriculum",
    period: "2024",
    status: "Verified",
    description: "Comprehensive database design, 3NF schema normalization, complex relational joins, indexing, and transactional ACID properties.",
    skills: ["SQL", "MySQL", "PostgreSQL", "Database Schema Design"]
  },
  {
    title: "Enterprise Business Intelligence & Power BI",
    issuer: "AtliQ Technologies Internship Track",
    period: "2025 – 2026",
    status: "Applied & Verified",
    description: "Hands-on data modeling, star-schema optimization, DAX metric engineering, and executive KPI dashboard creation for enterprise operations.",
    skills: ["Power BI", "DAX", "Power Query", "Star Schema"]
  },
  {
    title: "Artificial Intelligence & Applied Machine Learning",
    issuer: "GLA University Specialization Curriculum",
    period: "2025",
    status: "Specialization Track",
    description: "Applied artificial intelligence coursework covering computer vision, neural networks, speech recognition, and retrieval-augmented generation.",
    skills: ["RAG", "Computer Vision", "YOLO", "Whisper", "Vector Search"]
  }
];

export const educationInfo = {
  institution: "GLA University",
  location: "India",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning (AI/ML)",
  period: "Expected Graduation: 2027",
  focusAreas: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java / Python)",
    "Database Management Systems (DBMS) & SQL",
    "Applied Machine Learning & Neural Networks",
    "Software Engineering & System Design Fundamentals"
  ]
};

export const contactInfo = {
  email: "kstanwar0000@gmail.com",
  linkedin: "https://linkedin.com/in/krishnatanwars",
  github: "https://github.com/KrishnaTanwars",
  location: "India (Open to Relocation / Remote)",
  headline: "Let's build something practical together",
  subtext:
    "I'm open to early-career software developer, backend engineer, and Python developer roles. Whether you have an open position, an exciting engineering project, or want to discuss technology, I'd love to connect.",
  templates: [
    {
      title: "🚀 Software Engineer Opportunity",
      subject: "Software Developer Opportunity for Krishna Tanwar",
      body: "Hi Krishna,\n\nI came across your developer portfolio and was impressed by your backend, Python, and SQL background. We have an engineering opportunity that matches your skills.\n\nLet's connect soon!\n"
    },
    {
      title: "🤖 AI & Machine Learning Discussion",
      subject: "AI/ML Project Collaboration with Krishna Tanwar",
      body: "Hi Krishna,\n\nI saw your RAG and Computer Vision projects on your portfolio. I'd love to discuss technical collaboration and hear more about your work.\n\nBest regards,\n"
    },
    {
      title: "☕ General Tech Inquiry",
      subject: "Connecting with Krishna Tanwar",
      body: "Hi Krishna,\n\nI really liked your portfolio and projects. Would love to connect and chat about software engineering.\n\nCheers,\n"
    }
  ]
};
