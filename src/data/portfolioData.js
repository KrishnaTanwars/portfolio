/**
 * Central Portfolio Data Source of Truth
 * 
 * Krishna Tanwar | Software Developer & Data Engineer
 * Graduate Engineer Trainee at SMAAC Net Solutions
 * Core Focus: Software development using Python, SQL, HTML, CSS, JavaScript
 * Location: Gurgaon, Haryana, India | Hometown: Mathura, Uttar Pradesh, India
 */

export const personalInfo = {
  name: "Krishna Tanwar",
  headline: "Software Developer | Graduate Engineer Trainee at SMAAC Net Solutions | Python · SQL · HTML & CSS",
  avatar: "/krishna.png",
  photo: "/krishna.png",
  location: "Gurgaon, Haryana, India",
  currentLocation: "Gurgaon, Haryana, India",
  hometown: "Mathura, Uttar Pradesh, India",
  phone: "+91 6395005796",
  email: "kstanwar0000@gmail.com",
  github: "https://github.com/KrishnaTanwars",
  linkedin: "https://www.linkedin.com/in/krishnatanwars",
  currentRole: "Graduate Engineer Trainee at SMAAC Net Solutions",
  statusBadge: "Industry Professional · Software Development",
  shortBio:
    "Software Developer and Graduate Engineer Trainee at SMAAC Net Solutions with hands-on experience in software engineering, backend architectures, relational databases, enterprise ERP solutions, and data analytics. Skilled in software development using Python, SQL, HTML, CSS, and Flask, with applied capabilities in Power BI business intelligence and AI/ML systems.",
  aboutParagraphs: [
    "I am a Software Developer and Graduate Engineer Trainee at SMAAC Net Solutions in Gurgaon, Haryana. My core technical foundation is centered on software development using Python, SQL, MySQL, HTML, CSS, and Flask, delivering scalable backend logic, database architectures, and business applications.",
    "At SMAAC Net Solutions, I work on software development and enterprise ERP solutions supporting business workflows in the Pre-Engineered Building (PEB) industry, collaborating on database design, business logic implementation, and system performance.",
    "Previously, as a Data Analyst at AtliQ Technologies and SkillCred, I built production-grade Power BI dashboards, engineered 20+ dynamic DAX measures, performed ETL across multi-table fact/dimension schemas, and analyzed 100K+ transactional records with advanced SQL queries.",
    "I have also led cross-functional engineering and analytics teams, serving as Project Manager & Team Lead for Smart India Hackathon and Data Analytics Team Lead at Innovative Bharat. Additionally, our Smart Agrofarm project was awarded 1st Runner-Up in the Data Analytics & Visualization Hackathon.",
    "I focus on writing clean, maintainable code, structuring normalized database models, and building efficient business systems. I am open to software development, backend engineering, and Python developer roles."
  ],
  stats: [
    { label: "Current Role", value: "Graduate Engineer Trainee" },
    { label: "Company", value: "SMAAC Net Solutions" },
    { label: "Core Stack", value: "Python, SQL, HTML, CSS, JS" },
    { label: "Location", value: "Gurgaon, Haryana" }
  ],
  quickMetrics: [
    { number: "10+", label: "Verified Repositories" },
    { number: "100K+", label: "Records Modeled & Queried" },
    { number: "Gold", label: "HackerRank SQL Badge" },
    { number: "1st", label: "Runner-Up Hackathon Winner" }
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
    role: "Graduate Engineer Trainee (GET)",
    company: "Smaac Net Solutions Pvt. Ltd.",
    period: "September 2026 – Present",
    badge: "Current Role",
    type: "Full-Time Industry Role",
    location: "Gurgaon, Haryana, India",
    description: [
      "Gaining hands-on professional software development experience in building enterprise ERP solutions and business applications.",
      "Learning and engineering how enterprise software architectures support business workflows in the PEB (Pre-Engineered Building) industry.",
      "Developing backend logic, normalized database schemas, and structured data pipelines using Python, SQL, and MySQL.",
      "Strengthening enterprise software best practices, database integrity, and production business requirements."
    ],
    technologies: ["Python", "SQL", "MySQL", "HTML5", "CSS3", "Flask", "Git", "Enterprise ERP"]
  },
  {
    id: "atliq",
    role: "Data Analyst",
    company: "AtliQ Technologies",
    period: "November 2025 – December 2025",
    badge: "Virtual Internship",
    type: "Industry Internship (Remote)",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Delivered end-to-end Power BI and SQL solutions aligned with real-world business requirements in insurance and enterprise domains.",
      "Built 3+ interactive Power BI dashboards covering revenue, customer growth, sales modes, and age-group segmentation for faster trend comparison.",
      "Designed and validated 20+ DAX measures (MoM growth, revenue KPIs, customer metrics), ensuring 100% KPI alignment with business logic.",
      "Cleaned, transformed, and modeled datasets across multiple fact & dimension tables, reducing reporting errors and improving reporting efficiency by 25%."
    ],
    technologies: ["Power BI", "SQL", "DAX", "Power Query", "Excel", "Data Modeling", "Business Intelligence"]
  },
  {
    id: "skillcred",
    role: "Data Analyst Intern",
    company: "SkillCred",
    period: "June 2024 – July 2024",
    badge: "Industry Internship",
    type: "Industry Internship (Remote)",
    location: "Pune, Maharashtra, India",
    description: [
      "Analyzed large business datasets (50K+ records) using Advanced Excel, Pivot Tables, and data visualization.",
      "Built 3 interactive Excel dashboards for customer and performance analysis, reducing analysis time by ~25%.",
      "Applied VLOOKUP, data cleaning, and data transformation techniques to prepare analysis-ready datasets.",
      "Conducted customer segmentation analysis and generated actionable insights through structured reporting."
    ],
    technologies: ["Advanced Excel", "Pivot Tables", "VLOOKUP", "Data Validation", "Customer Segmentation", "Dashboards"]
  },
  {
    id: "innovative-bharat",
    role: "Data Analytics Team Lead",
    company: "Innovative Bharat",
    period: "October 2024 – November 2024",
    badge: "Team Lead",
    type: "Leadership Role",
    location: "Mathura, Uttar Pradesh, India",
    description: [
      "Led a 5-member team to analyze and monitor industrial sensor data for system performance tracking.",
      "Designed structured data pipelines and conducted exploratory data analysis to identify patterns and anomalies.",
      "Built interactive dashboards and reports to communicate operational performance metrics to stakeholders."
    ],
    technologies: ["Python", "Data Pipelines", "Sensor Analytics", "Team Leadership", "Data Visualization"]
  },
  {
    id: "smart-india-hackathon",
    role: "Project Manager & Team Lead",
    company: "Smart India Hackathon",
    period: "August 2023 – August 2024",
    badge: "Project Lead",
    type: "Competitive Leadership",
    location: "Mathura, Uttar Pradesh, India",
    description: [
      "Led cross-functional teams (6 members) across multiple Smart India Hackathon editions to deliver data-driven solutions for real-world government problem statements.",
      "Managed requirement analysis, task planning, data analysis support, and dashboard presentations under strict timelines.",
      "Presented technical findings and solution impact to national evaluation panels."
    ],
    technologies: ["Project Management", "Python", "Requirement Analysis", "Dashboard Presentation", "Team Leadership"]
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
    technologies: ["Python", "RAG", "Whisper", "Ollama", "Vector Embeddings", "LLMs"],
    repoUrl: "https://github.com/KrishnaTanwars/rag-ai-teaching-assistant",
    verified: true,
    highlights: [
      "Automated audio extraction and Whisper speech-to-text pipeline for lecture videos",
      "Semantic passage chunking and local vector embedding indexing with Ollama",
      "Context-aware query retrieval returning answers with exact video timestamps for instant explanation lookup"
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
      "Designed the system to support multiple computer vision tasks concurrently from a single unified application",
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
    id: "sales-customer-analytics",
    title: "Sales & Customer Performance Analytics",
    category: "data-bi",
    categoryLabel: "Data Analytics & BI",
    metricBadge: "100K+ Transactions · SQL",
    description:
      "A comprehensive relational database analytics project evaluating 100K+ sales transactions. Developed 20+ SQL business queries using CTEs, Window Functions, Joins, Subqueries, and CASE statements to analyze sales, customers, products, and markets.",
    technologies: ["SQL", "MySQL", "CTEs", "Window Functions", "Subqueries", "Data Analytics"],
    repoUrl: "https://github.com/KrishnaTanwars/Sales-Customer-Performance-Analytics-",
    verified: true,
    highlights: [
      "Analyzed 100K+ sales transactions across customers, products, and markets using MySQL",
      "Authored 20+ complex business queries utilizing CTEs, Window Functions, Joins, and aggregations",
      "Conducted customer ranking, market-level achievement %, and variance analysis to drive business decisions"
    ],
    architecture: "100K+ Transactional DB ➔ Advanced SQL (CTEs, Windowing) ➔ Customer & Market Segmentation ➔ KPI Aggregation"
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
      "Designed a Star Schema data model across 4 core business functions: Finance, Sales, Marketing, Supply Chain",
      "Engineered advanced DAX measures for dynamic time-intelligence and net profit / gross margin calculations",
      "Delivered consolidated executive reports tracking key performance metrics for data-driven decisions"
    ],
    architecture: "Raw Records ➔ Power Query ETL ➔ Star-Schema Data Model ➔ DAX KPI Formulas ➔ Interactive Power BI Suite"
  },
  {
    id: "shield-insurance-bi",
    title: "Shield Insurance BI Analytics Dashboard",
    category: "data-bi",
    categoryLabel: "Data Analytics & BI",
    metricBadge: "Insurance Domain BI",
    description:
      "An end-to-end Power BI dashboard analyzing insurance customer and revenue trends across sales modes, customer age groups, and policies to support growth strategy and operational efficiency.",
    technologies: ["Power BI", "DAX", "Power Query", "Insurance Analytics", "Data Modeling"],
    repoUrl: "https://github.com/KrishnaTanwars/Shield-Insurance-BI-Dashboard-PowerBI",
    verified: true,
    highlights: [
      "Analyzed customer growth, revenue trends, and sales modes across multiple insurance policies",
      "Built dynamic DAX measures for month-over-month growth and customer retention metrics",
      "Designed interactive visual drill-downs for executive decision support"
    ],
    architecture: "Insurance Transaction Data ➔ Power Query Transformation ➔ Star Schema Modeling ➔ DAX Measures ➔ BI Dashboard"
  },
  {
    id: "smart-agrofarm",
    title: "Smart Agrofarm Analytics (Hackathon Winner)",
    category: "software-ai",
    categoryLabel: "Software Dev & AI/ML",
    metricBadge: "1st Runner-Up Hackathon",
    description:
      "A data-driven farm monitoring analytics platform that analyzes soil moisture, weather trends, and crop health metrics to present actionable KPIs supporting irrigation and yield optimization. Awarded 1st Runner-Up in the Data Analytics Hackathon.",
    technologies: ["Python", "Pandas", "Plotly", "Data Visualization", "IoT Analytics"],
    repoUrl: "https://github.com/KrishnaTanwars",
    verified: true,
    highlights: [
      "Awarded 1st Runner-Up in the Data Analytics & Visualization Hackathon by Department of CEA, GLA University",
      "Engineered data pipelines analyzing real-time sensor and environmental telemetry with Python & Pandas",
      "Built interactive Plotly dashboards presenting actionable crop and irrigation KPIs under tight timelines"
    ],
    architecture: "Sensor Telemetry ➔ Python / Pandas Processing ➔ KPI Optimization Algorithms ➔ Plotly Interactive Visuals"
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
      "Customer spending segmentation by age, income, and card type across geographical markets",
      "Transaction trend analysis, delinquency rate monitoring, and revenue KPI tracking",
      "Interactive multi-page report with drill-through exploration"
    ],
    architecture: "Card Transactional Data ➔ Data Cleaning in Power Query ➔ Metric Engineering ➔ Demographic Segmentation ➔ Drill-Through Dashboard"
  },
  {
    id: "hospitality-data-analysis",
    title: "Hospitality Business Data Analysis",
    category: "data-bi",
    categoryLabel: "Data Analytics & BI",
    metricBadge: "Python & Pandas",
    description:
      "Data analysis project evaluating operational revenue, occupancy rates, booking channels, and customer ratings for a luxury hotel chain to identify revenue leakage and optimize pricing strategies.",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Cleaning", "Business Analytics"],
    repoUrl: "https://github.com/KrishnaTanwars/Hospitality-Data-Analysis-Python",
    verified: true,
    highlights: [
      "Cleaned and merged multi-source hotel booking and transactional datasets using Pandas",
      "Calculated key hospitality metrics: RevPAR, ADR, Occupancy %, and Realization %",
      "Identified critical booking channel discrepancies to improve overall realization rate"
    ],
    architecture: "Raw Hotel Records ➔ Pandas Data Cleansing ➔ Metric Formulation (RevPAR, ADR) ➔ Visual Insights"
  }
];

export const skillCategories = [
  {
    category: "Languages & Web Core",
    icon: "code",
    skills: [
      { name: "Python", level: "Primary", tag: "Backend & Systems" },
      { name: "SQL", level: "Primary", tag: "Relational Queries (Gold Badge)" },
      { name: "HTML5", level: "Core", tag: "Semantic Markup" },
      { name: "CSS3", level: "Core", tag: "Responsive UI & Flex/Grid" },
      { name: "JavaScript", level: "Core", tag: "Web Interactivity" }
    ]
  },
  {
    category: "Backend & Web Architecture",
    icon: "server",
    skills: [
      { name: "Flask", level: "Core", tag: "Microservices & APIs" },
      { name: "REST APIs", level: "Core", tag: "Endpoint Design" },
      { name: "Enterprise ERP", level: "Applied", tag: "PEB Systems" },
      { name: "JSON & HTTP", level: "Core", tag: "Data Exchange" }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "MySQL", level: "Core", tag: "Relational Design & Indexing" },
      { name: "PostgreSQL", level: "Working", tag: "RDBMS Architectures" },
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
      { name: "DAX", level: "Proficient", tag: "Time-Intelligence & Measures" },
      { name: "Power Query", level: "Advanced", tag: "ETL & Transformation" },
      { name: "Microsoft Excel", level: "Advanced", tag: "Pivot Tables, VLOOKUP & Modeling" },
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

export const achievements = [
  {
    title: "HackerRank SQL Gold Badge",
    issuer: "HackerRank",
    description: "Awarded top-tier Gold Badge for advanced problem solving in SQL queries, joins, aggregations, and subqueries."
  },
  {
    title: "1st Runner-Up — Data Analytics & Visualization Hackathon",
    issuer: "Department of CEA, GLA University",
    description: "Built Smart Agrofarm data-driven farm analytics solution in a 3-member team, winning 1st Runner-Up."
  },
  {
    title: "Smart India Hackathon Team Lead",
    issuer: "Government of India / SIH",
    description: "Led a 6-member team delivering data-driven solutions for real-world government problem statements."
  }
];

export const certifications = [
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    status: "Verified",
    description: "Complex relational queries, multi-table joins, subqueries, aggregations, and database problem solving.",
    skills: ["SQL", "MySQL", "Database Queries"]
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    status: "Verified",
    description: "Algorithmic thinking, data structures, edge-case optimization, and computational problem solving.",
    skills: ["Algorithms", "Problem Solving", "Logic"]
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    status: "Verified",
    description: "Foundational data structures, array manipulation, and algorithmic reasoning.",
    skills: ["Data Structures", "Algorithms"]
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    status: "Verified",
    description: "Core Python programming, control flow, functions, and object-oriented concepts.",
    skills: ["Python", "Backend Logic"]
  },
  {
    title: "Power BI Data Analytics 3.0",
    issuer: "Codebasics",
    status: "Verified",
    description: "Comprehensive enterprise business intelligence, Star Schema data modeling, and DAX calculations.",
    skills: ["Power BI", "DAX", "Power Query", "Data Modeling"]
  },
  {
    title: "Data Science & Analytics",
    issuer: "Cognitive Class",
    status: "Verified",
    description: "Data manipulation with Pandas and NumPy, exploratory data analysis, and predictive workflows.",
    skills: ["Python", "Pandas", "NumPy", "Data Science"]
  },
  {
    title: "Applied Machine Learning in Python",
    issuer: "Coursera",
    status: "Verified",
    description: "Applied machine learning algorithms, model evaluation, scikit-learn pipelines, and predictive modeling.",
    skills: ["Machine Learning", "Python", "Scikit-Learn"]
  },
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    status: "Verified",
    description: "Statistical data analysis, hypothesis testing, and quantitative computation with Python.",
    skills: ["Data Analytics", "Python", "Statistical Modeling"]
  }
];

export const educationInfo = {
  institution: "GLA University, Mathura",
  location: "Mathura, Uttar Pradesh, India",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science & Engineering",
  specialization: "Artificial Intelligence and Machine Learning (AI/ML)",
  cgpa: "8.3 / 10",
  period: "August 2023 – August 2027",
  academicDetails: [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      institution: "GLA University, Mathura",
      score: "CGPA: 8.3 / 10",
      year: "2023 – 2027"
    },
    {
      degree: "Senior Secondary (Class 12th) – Computer Science",
      institution: "Saraswati Vidhya Mandir / Board",
      score: "Percentage: 93%",
      year: "2021 – 2022"
    },
    {
      degree: "Secondary Education (Class 10th) – Science & Mathematics",
      institution: "Saraswati Vidhya Mandir / Board",
      score: "Percentage: 95%",
      year: "2019 – 2020"
    }
  ],
  focusAreas: [
    "Software Engineering & Architecture",
    "Database Management Systems (DBMS) & SQL",
    "Enterprise Systems & Backend Development",
    "Applied Machine Learning & Neural Networks",
    "Data Analytics & Business Intelligence"
  ]
};

export const contactInfo = {
  name: "Krishna Tanwar",
  phone: "+91 6395005796",
  email: "kstanwar0000@gmail.com",
  linkedin: "https://www.linkedin.com/in/krishnatanwars",
  github: "https://github.com/KrishnaTanwars",
  location: "Gurgaon, Haryana, India (Open to Remote / On-Site)",
  currentLocation: "Gurgaon, Haryana, India",
  hometown: "Mathura, Uttar Pradesh, India",
  headline: "Let's build scalable software and data systems together",
  subtext:
    "I am open to Software Developer, Backend Engineer, and Python Developer roles in Gurgaon, Haryana, and remote. Let's connect to discuss engineering opportunities.",
  templates: [
    {
      title: "🚀 Software Engineer Opportunity",
      subject: "Software Developer Opportunity for Krishna Tanwar",
      body: "Hi Krishna,\n\nI reviewed your portfolio and was impressed by your software development background in Python, SQL, HTML/CSS, and enterprise applications. We have an engineering opportunity that matches your skills.\n\nLet's connect soon!\n"
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
