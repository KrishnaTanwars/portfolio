/**
 * Central Portfolio Data Source of Truth
 * 
 * Krishna Tanwar | Software Developer
 * Core Focus: Software development using Python, SQL, HTML, CSS, JavaScript
 * Current Location: Gurgaon, Haryana | Hometown: Kosi Kalan, Mathura, UP
 */

export const personalInfo = {
  name: "Krishna Tanwar",
  headline: "Software Developer | Python · SQL · JavaScript · HTML/CSS · AI/ML",
  avatar: "/krishna.png",
  photo: "/krishna.png",
  location: "Gurgaon, Haryana",
  currentLocation: "Gurgaon, Haryana",
  hometown: "Kosi Kalan, Mathura, Uttar Pradesh",
  phone: "+91 6395005796",
  email: "kstanwar0000@gmail.com",
  github: "https://github.com/KrishnaTanwars",
  linkedin: "https://linkedin.com/in/krishnatanwars",
  currentRole: "Graduate Engineer Trainee at SMAAC Net Solutions",
  statusBadge: "Available for Software Engineering Roles",
  shortBio:
    "Software Developer and Graduate Engineer Trainee with hands-on experience in backend engineering, relational databases, web development, and applied AI systems. Focused on software development using Python, SQL, HTML, CSS, and JavaScript with practical expertise in data modeling, business intelligence, and AI-powered solutions.",
  aboutParagraphs: [
    "I am a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at GLA University (expected graduation in 2027 · CGPA: 8.3 / 10). My core focus is software development using Python, SQL, HTML, CSS, and JavaScript.",
    "Currently, I work as a Graduate Engineer Trainee at SMAAC Net Solutions in Gurgaon, Haryana, where I apply software engineering standards, build backend logic, and work on database-driven enterprise applications.",
    "Previously, as a Data Analyst Intern at AtliQ Technologies and an AI & Analytics Intern at SkillCred, I developed interactive Power BI dashboards, automated reporting workflows with SQL and Excel, built RAG pipelines with Whisper and Ollama, and implemented computer vision models with OpenCV and YOLOv3.",
    "I am passionate about building clean backend architectures, normalized relational database schemas, responsive web interfaces, and applied AI tools. I am actively seeking software developer, backend engineer, and Python developer opportunities in Gurgaon, Haryana (as well as remote and hybrid roles)."
  ],
  stats: [
    { label: "Core Focus", value: "Python, SQL, HTML/CSS/JS" },
    { label: "Current Role", value: "Graduate Engineer Trainee" },
    { label: "Current Location", value: "Gurgaon, Haryana" },
    { label: "Education", value: "B.Tech CSE (AI/ML) '27 · 8.3 CGPA" }
  ],
  quickMetrics: [
    { number: "9+", label: "Engineering Projects" },
    { number: "100K+", label: "Data Records Modeled" },
    { number: "8.3", label: "CGPA at GLA University" },
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
    period: "Nov 2024 – Present",
    badge: "Current Role",
    type: "Full-Time",
    location: "Gurgaon, Haryana",
    description: [
      "Contributing as an early-career software engineer focusing on software development using Python, SQL, HTML, CSS, and JavaScript.",
      "Developing backend logic, database schemas, and data pipelines for enterprise-grade applications.",
      "Collaborating on engineering workflows, applying clean code standards, and conducting peer code reviews."
    ],
    technologies: ["Python", "SQL", "JavaScript", "HTML5", "CSS3", "Database Systems", "Software Engineering"]
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
      "Performed data validation, cleansing, and normalization to maintain reporting accuracy across business lines.",
      "Developed interactive Power BI dashboards and analytical reports for business decision-making using DAX and SQL.",
      "Worked with SQL and Excel to support reporting and data analysis workflows.",
      "Automated repetitive data preparation steps and reporting workflows using reusable dashboards."
    ],
    technologies: ["Power BI", "SQL", "DAX", "Power Query", "Excel", "Data Modeling"]
  },
  {
    id: "skillcred",
    role: "AI & Analytics Intern",
    company: "SkillCred",
    period: "May 2025 – Jul 2025",
    badge: "Internship",
    type: "Internship (Remote)",
    location: "Remote",
    description: [
      "Built an AI-powered meeting transcription and summarization tool using Whisper and Ollama.",
      "Developed computer vision pipelines using OpenCV and YOLOv3 for object detection tasks.",
      "Designed RAG workflows for document-based question-answering with LLMs.",
      "Preprocessed text, audio, and visual data for model training and evaluation."
    ],
    technologies: ["Python", "Whisper", "Ollama", "OpenCV", "YOLOv3", "RAG", "LLMs"]
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
    title: "RAG Based AI Teaching Assistant",
    category: "software-ai",
    categoryLabel: "Software Dev & AI/ML",
    metricBadge: "RAG + Local LLM",
    description:
      "A Retrieval-Augmented Generation (RAG) based AI teaching assistant that transcribes video lectures with Whisper into searchable knowledge, generates vector embeddings with Ollama, and retrieves timestamped answers via a local LLM.",
    technologies: ["Python", "RAG", "Whisper", "Ollama", "LLMs", "Vector Embeddings"],
    repoUrl: "https://github.com/KrishnaTanwars/rag-ai-teaching-assistant",
    verified: true,
    highlights: [
      "Automated audio extraction and Whisper speech-to-text pipeline for lecture videos",
      "Semantic passage chunking and local vector embedding indexing",
      "Context-aware query retrieval returning answers with exact video timestamps"
    ],
    architecture: "Video Input ➔ Whisper STT ➔ JSON Chunking ➔ Ollama Embeddings ➔ Vector DB ➔ Semantic Query Retrieval & Timestamp Link"
  },
  {
    id: "real-time-video-analysis",
    title: "Real-Time Video Analysis System",
    category: "software-ai",
    categoryLabel: "Software Dev & AI/ML",
    metricBadge: "Real-Time Vision",
    description:
      "A real-time computer vision web application capable of analyzing live video streams. Features multi-class detection including human detection, object detection, vehicle detection, emotion recognition, and motion detection.",
    technologies: ["Python", "Flask", "OpenCV", "YOLOv3", "TensorFlow", "HTML5", "CSS3", "JavaScript"],
    repoUrl: "https://github.com/KrishnaTanwars/Real_Time_Video_Analysis_ML_Project",
    verified: true,
    highlights: [
      "Real-time video frame inference with OpenCV, YOLOv3, and TensorFlow deep learning models",
      "Supports multiple computer vision tasks concurrently from a single unified application",
      "Interactive Flask web dashboard displaying live bounding boxes and detection results"
    ],
    architecture: "Live RTSP / Video Feed ➔ OpenCV Processing ➔ YOLOv3 & TensorFlow Inference ➔ Flask Web Interface"
  },
  {
    id: "smart-traffic-violation-ai",
    title: "Smart Traffic Violation AI",
    category: "software-ai",
    categoryLabel: "Software Dev & AI/ML",
    metricBadge: "OCR & Rule Engine",
    description:
      "An automated traffic monitoring and violation detection platform combining a Python backend and React/JavaScript frontend. Features vehicle detection, license plate OCR, and automated rule checking for red lights and speeding.",
    technologies: ["Python", "YOLO", "EasyOCR", "JavaScript", "React", "SQLite", "REST APIs"],
    repoUrl: "https://github.com/KrishnaTanwars/Smart_Traffic_Violation_AI",
    verified: true,
    highlights: [
      "Automated plate number recognition with EasyOCR and YOLO vehicle bounding",
      "Rule engine checking red-light and speed violations with image evidence",
      "Full-stack architecture with responsive dashboard and SQLite audit log"
    ],
    architecture: "Camera Stream ➔ YOLO Vehicle Bounding ➔ EasyOCR Plate Read ➔ Traffic Rule Engine ➔ SQLite Audit DB ➔ React Client"
  },
  {
    id: "ai-travel-expense-analyzer",
    title: "AI Travel & Expense Analyzer",
    category: "software-ai",
    categoryLabel: "Software Dev & AI/ML",
    metricBadge: "OpenAI & Streamlit",
    description:
      "An intelligent expense tracking and financial analysis application that ingests CSV records, classifies expenditures, and generates natural-language spending summaries, budget insights, and cost anomaly alerts using an integrated LLM.",
    technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "OpenAI API", "Data Analytics"],
    repoUrl: "https://github.com/KrishnaTanwars",
    verified: true,
    highlights: [
      "Categorizes, tracks, and analyzes granular travel and operational expenses from CSV files",
      "Integrated OpenAI LLM to generate automated spending insights, budget summaries, and cost anomalies",
      "Visualized expenditure breakdown with interactive Matplotlib charts inside a Streamlit web app"
    ],
    architecture: "CSV Upload ➔ Pandas ETL & Classification ➔ OpenAI Prompt Pipeline ➔ Matplotlib Visuals ➔ Streamlit Web UI"
  },
  {
    id: "stock-performance-tracker",
    title: "Stock Performance Tracker",
    category: "software-ai",
    categoryLabel: "Software Dev & AI/ML",
    metricBadge: "Quant & Time-Series",
    description:
      "A quantitative market analytics application extracting historical stock data via yfinance, computing volatility and returns, executing moving average crossover strategies, and calculating key financial risk metrics.",
    technologies: ["Python", "yfinance", "Pandas", "Matplotlib", "NumPy", "Time-Series"],
    repoUrl: "https://github.com/KrishnaTanwars",
    verified: true,
    highlights: [
      "Extracted historical equities data using yfinance to analyze cumulative returns and trends",
      "Implemented moving average crossovers and calculated risk metrics including Sharpe ratio and maximum drawdown",
      "Generated automated reports and comparative visual plots benchmarking multi-stock performance"
    ],
    architecture: "yfinance API ➔ Pandas Time-Series Cleaning ➔ Moving Average & Sharpe Calculation ➔ Matplotlib Charting"
  },
  {
    id: "automated-billing-invoicing",
    title: "Automated Billing & Invoicing System",
    category: "software-ai",
    categoryLabel: "Software Dev & AI/ML",
    metricBadge: "Desktop App & SQLite",
    description:
      "A desktop software application engineered to generate, store, and manage customer invoices with automated PDF rendering, dynamic tax and discount calculations, and persistent SQLite database transaction logging.",
    technologies: ["Python", "Tkinter", "SQLite", "ReportLab", "PDF Generation", "Database Design"],
    repoUrl: "https://github.com/KrishnaTanwars",
    verified: true,
    highlights: [
      "Developed a clean desktop GUI application using Tkinter to manage inventory, customers, and invoices",
      "Automated dynamic PDF invoice generation with automated tax, subtotal, and discount calculations via ReportLab",
      "Designed a normalized SQLite database for inventory tracking, customer records, and transaction logs"
    ],
    architecture: "Tkinter GUI ➔ Validation Logic ➔ SQLite Persistent DB ➔ ReportLab PDF Engine ➔ Invoice Dispatch"
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
    category: "Languages & Web Core",
    icon: "code",
    skills: [
      { name: "Python", level: "Primary", tag: "Backend & Systems" },
      { name: "SQL", level: "Primary", tag: "Relational Queries" },
      { name: "JavaScript", level: "Core", tag: "Web Interactivity" },
      { name: "HTML5 & CSS3", level: "Core", tag: "Responsive UI" }
    ]
  },
  {
    category: "Backend & Web Architecture",
    icon: "server",
    skills: [
      { name: "Flask", level: "Core", tag: "Microservices & APIs" },
      { name: "REST APIs", level: "Core", tag: "Endpoint Design" },
      { name: "React", level: "Working", tag: "Frontend Interfaces" },
      { name: "JSON & HTTP", level: "Core", tag: "Data Exchange" }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "MySQL", level: "Core", tag: "Relational Design" },
      { name: "PostgreSQL", level: "Working", tag: "Advanced RDBMS" },
      { name: "SQLite", level: "Core", tag: "Embedded Datastores" },
      { name: "Git & GitHub", level: "Core", tag: "Version Control" },
      { name: "VS Code", level: "Core", tag: "Development Environment" }
    ]
  },
  {
    category: "Data Analytics & BI",
    icon: "bar-chart",
    skills: [
      { name: "Power BI", level: "Advanced", tag: "Enterprise Dashboards" },
      { name: "Microsoft Excel", level: "Advanced", tag: "Data Validation & Modeling" },
      { name: "DAX", level: "Proficient", tag: "Time-Intelligence Measures" },
      { name: "Power Query", level: "Advanced", tag: "ETL & Transformation" },
      { name: "Pandas & NumPy", level: "Proficient", tag: "Python Data Stack" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "cpu",
    skills: [
      { name: "LLMs & Prompting", level: "Applied", tag: "Language Models" },
      { name: "RAG", level: "Applied", tag: "Retrieval-Augmented Gen" },
      { name: "OpenCV", level: "Applied", tag: "Computer Vision" },
      { name: "YOLOv3", level: "Applied", tag: "Real-time Object Detection" },
      { name: "TensorFlow", level: "Applied", tag: "Deep Learning" },
      { name: "Whisper & Ollama", level: "Applied", tag: "Speech & Local Inference" }
    ]
  }
];

export const certifications = [
  {
    title: "Applied Machine Learning in Python",
    issuer: "Coursera",
    period: "Verified",
    status: "Verified",
    description: "Applied machine learning algorithms, model evaluation, scikit-learn pipelines, and predictive modeling in Python.",
    skills: ["Machine Learning", "Python", "Scikit-Learn", "Model Evaluation"]
  },
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    period: "Verified",
    status: "Verified",
    description: "Statistical data analysis, exploratory data analysis, hypothesis testing, and analytical computation using Python.",
    skills: ["Data Analytics", "Python", "Pandas", "Statistical Modeling"]
  },
  {
    title: "Python for Data Science",
    issuer: "Cognitive Class",
    period: "Verified",
    status: "Verified",
    description: "Data analysis methodologies, data manipulation, NumPy arrays, Pandas dataframes, and data science workflows.",
    skills: ["Python", "Pandas", "NumPy", "Data Science"]
  },
  {
    title: "Power BI Data Analytics 3.0",
    issuer: "Codebasics",
    period: "Verified",
    status: "Verified",
    description: "Hands-on enterprise data analytics, business intelligence dashboards, star schema modeling, and DAX calculations.",
    skills: ["Power BI", "DAX", "Power Query", "Data Analytics"]
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    period: "Verified",
    status: "Verified",
    description: "Relational querying, complex joins, aggregations, subqueries, and database problem solving.",
    skills: ["SQL", "MySQL", "Database Queries"]
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    period: "Verified",
    status: "Verified",
    description: "Core Python programming, data structures, algorithmic logic, and functions.",
    skills: ["Python", "Algorithms", "Backend Logic"]
  },
  {
    title: "Python Programming & Data Structures Specialization",
    issuer: "GLA University & Academic Coursework",
    period: "Specialization Track",
    status: "Verified",
    description: "Modular software design, algorithms, computational data structures, and backend logic in Python.",
    skills: ["Python", "Data Structures", "Algorithms"]
  },
  {
    title: "Relational Database Management Systems & SQL",
    issuer: "GLA University & DBMS Curriculum",
    period: "Curriculum Track",
    status: "Verified",
    description: "Comprehensive database design, 3NF schema normalization, relational joins, indexing, and transactional ACID properties.",
    skills: ["SQL", "MySQL", "Database Schema Design"]
  }
];

export const educationInfo = {
  institution: "GLA University, Mathura",
  location: "Mathura, Uttar Pradesh",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science & Engineering",
  specialization: "Artificial Intelligence and Machine Learning (AI/ML)",
  cgpa: "8.3 / 10",
  period: "Expected Graduation: 2027",
  academicDetails: [
    {
      degree: "B.Tech – Computer Science & Engineering (AI & ML)",
      institution: "GLA University, Mathura",
      score: "CGPA: 8.3 / 10",
      year: "Sep 2023 – Present (Exp. 2027)"
    },
    {
      degree: "Higher Secondary (Class XII, TSBIE)",
      institution: "Sri Chaitanya Junior College, Hyderabad",
      score: "Percentage: 93%",
      year: "2021 – 2023"
    },
    {
      degree: "High School (Class X, CBSE)",
      institution: "A.K. Public School, Mathura",
      score: "Percentage: 95%",
      year: "2020 – 2021"
    }
  ],
  focusAreas: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS) & SQL",
    "Software Development (Python, SQL, HTML, CSS, JS)",
    "Applied Machine Learning & Neural Networks",
    "Data Analytics, ETL & Power BI Dashboarding"
  ]
};

export const contactInfo = {
  name: "Krishna Tanwar",
  phone: "+91 6395005796",
  email: "kstanwar0000@gmail.com",
  linkedin: "https://linkedin.com/in/krishnatanwars",
  github: "https://github.com/KrishnaTanwars",
  location: "Gurgaon, Haryana (Open to Remote / On-Site)",
  currentLocation: "Gurgaon, Haryana",
  hometown: "Kosi Kalan, Mathura, Uttar Pradesh",
  headline: "Let's build scalable software and data systems together",
  subtext:
    "I'm open to Software Developer, Python Developer, and Backend Engineering opportunities in Gurgaon, Haryana and remote. Let's discuss technology and build something impactful.",
  templates: [
    {
      title: "🚀 Software Engineer Opportunity",
      subject: "Software Developer Opportunity for Krishna Tanwar",
      body: "Hi Krishna,\n\nI reviewed your portfolio and was impressed by your software development background in Python, SQL, HTML/CSS, and JavaScript. We have an engineering opportunity that matches your skills.\n\nLet's connect soon!\n"
    },
    {
      title: "🤖 AI & Machine Learning Discussion",
      subject: "AI/ML Project Collaboration with Krishna Tanwar",
      body: "Hi Krishna,\n\nI saw your RAG and Computer Vision projects on your portfolio. I'd love to discuss technical collaboration and hear more about your work.\n\nBest regards,\n"
    },
    {
      title: "📊 Data Analytics & BI Inquiry",
      subject: "Analytics Discussion with Krishna Tanwar",
      body: "Hi Krishna,\n\nI saw your Power BI dashboards and SQL analytics projects. Would love to connect and chat about analytics workflows.\n\nBest regards,\n"
    }
  ]
};
