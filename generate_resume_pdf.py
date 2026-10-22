import os
import subprocess
import tempfile
import pypdf

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Krishna Tanwar - Resume</title>
<style>
  @page {
    size: A4;
    margin: 5mm 10mm 5mm 10mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #1e293b;
    line-height: 1.26;
    font-size: 8.0pt;
    background: #ffffff;
  }
  .header {
    text-align: center;
    border-bottom: 2px solid #0284c7;
    padding-bottom: 4px;
    margin-bottom: 5px;
  }
  .name {
    font-size: 20pt;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.3px;
    margin-bottom: 2px;
  }
  .location-bar {
    font-size: 8.6pt;
    font-weight: 600;
    color: #0284c7;
    margin-bottom: 3px;
  }
  .contact-bar {
    font-size: 8.4pt;
    color: #475569;
    display: flex;
    justify-content: center;
    gap: 14px;
  }
  .contact-bar a {
    color: #0284c7;
    text-decoration: none;
    font-weight: 600;
  }
  .summary-text {
    font-size: 8.4pt;
    color: #334155;
    line-height: 1.34;
    margin-bottom: 5px;
    text-align: justify;
  }
  .section {
    margin-bottom: 3.5px;
  }
  .section-title {
    font-size: 9.3pt;
    font-weight: 700;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    border-bottom: 1.5px solid #cbd5e1;
    padding-bottom: 1.5px;
    margin-bottom: 3.5px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .section-title::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 11px;
    background: #0284c7;
    border-radius: 2px;
  }
  .item {
    margin-bottom: 2.5px;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1px;
  }
  .item-title {
    font-weight: 700;
    font-size: 8.7pt;
    color: #0f172a;
  }
  .item-org {
    font-weight: 600;
    color: #0284c7;
  }
  .item-date {
    font-size: 8.1pt;
    color: #64748b;
    font-weight: 500;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    position: relative;
    padding-left: 11px;
    font-size: 8.0pt;
    color: #334155;
    margin-bottom: 1px;
    line-height: 1.26;
  }
  li::before {
    content: "•";
    position: absolute;
    left: 1px;
    color: #0284c7;
    font-weight: bold;
  }
  .skills-table {
    width: 100%;
    font-size: 8.0pt;
    border-collapse: collapse;
  }
  .skills-table td {
    padding: 1.2px 0;
    vertical-align: top;
  }
  .skill-cat {
    width: 25%;
    font-weight: 700;
    color: #0f172a;
  }
  .skill-vals {
    width: 75%;
    color: #334155;
  }
  .cert-row {
    font-size: 8.0pt;
    margin-bottom: 2px;
    line-height: 1.30;
  }
  .edu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 8.3pt;
    margin-bottom: 2.5px;
  }
  .edu-title {
    font-weight: 700;
    color: #0f172a;
  }
  .edu-inst {
    color: #475569;
  }
  .edu-score {
    color: #0284c7;
    font-weight: 600;
  }
  .edu-date {
    color: #64748b;
    font-size: 8.1pt;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">KRISHNA TANWAR</div>
  <div class="location-bar">
    Gurgaon, Haryana, India &nbsp;|&nbsp; Mathura, Uttar Pradesh, India
  </div>
  <div class="contact-bar">
    <span>📞 +91 6395005796</span>
    <span>✉️ <a href="mailto:kstanwar0000@gmail.com">kstanwar0000@gmail.com</a></span>
    <span>💼 <a href="https://www.linkedin.com/in/krishnatanwars">LinkedIn: in/krishnatanwars</a></span>
    <span>💻 <a href="https://github.com/KrishnaTanwars">GitHub: github.com/KrishnaTanwars</a></span>
  </div>
</div>

<div class="summary-text">
  Software Developer and Graduate Engineer Trainee at SMAAC Net Solutions with hands-on experience in software engineering, backend architectures, relational databases, enterprise ERP solutions, and business intelligence. Skilled in software development using Python, SQL, HTML, CSS, JavaScript, and Flask, with applied capabilities in Power BI data analytics, Star Schema modeling, REST APIs, and AI/ML architectures.
</div>

<div class="section">
  <div class="section-title">Technical Skills</div>
  <table class="skills-table">
    <tr>
      <td class="skill-cat">● Languages & Web:</td>
      <td class="skill-vals">Python, SQL (HackerRank Gold Badge), HTML5, CSS3, JavaScript, JSON</td>
    </tr>
    <tr>
      <td class="skill-cat">● Backend & Frameworks:</td>
      <td class="skill-vals">Flask, REST APIs, Enterprise ERP (PEB Workflows), System Architecture, Microservices</td>
    </tr>
    <tr>
      <td class="skill-cat">● Databases & Storage:</td>
      <td class="skill-vals">MySQL, PostgreSQL, SQLite, Star Schema Design, Normalized Data Modeling (3NF), Query Optimization</td>
    </tr>
    <tr>
      <td class="skill-cat">● Data Analytics & BI:</td>
      <td class="skill-vals">Power BI, Microsoft Excel (Pivot Tables, VLOOKUP, INDEX/MATCH), DAX, Power Query, Pandas, NumPy</td>
    </tr>
    <tr>
      <td class="skill-cat">● AI & Machine Learning:</td>
      <td class="skill-vals">LLMs, Retrieval-Augmented Generation (RAG), TensorFlow, OpenCV, YOLOv3, Whisper, Ollama</td>
    </tr>
    <tr>
      <td class="skill-cat">● Tools & Methodologies:</td>
      <td class="skill-vals">Git, GitHub, VS Code, Linux/Bash, Streamlit, Plotly, Agile / Scrum, SDLC, Code Review</td>
    </tr>
    <tr>
      <td class="skill-cat">● Core Coursework:</td>
      <td class="skill-vals">Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks</td>
    </tr>
  </table>
</div>

<div class="section">
  <div class="section-title">Professional Experience</div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Graduate Engineer Trainee (GET)</span> — <span class="item-org">Smaac Net Solutions Pvt. Ltd.</span></div>
      <span class="item-date">Sep 2026 – Present | Gurgaon, Haryana</span>
    </div>
    <ul>
      <li>Contributing to software development lifecycles utilizing Python, SQL, MySQL, HTML5, CSS3, and Flask.</li>
      <li>Engineering enterprise ERP solutions and business process automation for the Pre-Engineered Building (PEB) industry.</li>
      <li>Designing and optimizing normalized relational database schemas, stored procedures, and backend data processing pipelines.</li>
      <li>Collaborating on cross-functional technical specifications, feature requirements, and modular code maintainability.</li>
      <li>Implementing secure API endpoints and structured data validation mechanisms to guarantee business data integrity.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Data Analyst</span> — <span class="item-org">AtliQ Technologies</span></div>
      <span class="item-date">Nov 2025 – Dec 2025 | Bengaluru (Remote)</span>
    </div>
    <ul>
      <li>Delivered end-to-end Power BI and SQL business intelligence solutions addressing real-world enterprise requirements.</li>
      <li>Built 3+ interactive multi-page dashboards analyzing revenue streams, sales channels, customer demographics, and policy growth.</li>
      <li>Formulated and validated 20+ complex DAX measures (MoM growth, target variances, customer retention, sales performance).</li>
      <li>Cleaned, transformed, and modeled multi-table Star Schema datasets in Power Query, reducing reporting turnaround by 25%.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Data Analyst Intern</span> — <span class="item-org">SkillCred</span></div>
      <span class="item-date">Jun 2024 – Jul 2024 | Pune (Remote)</span>
    </div>
    <ul>
      <li>Evaluated 50,000+ transactional and customer records using Advanced Excel, Pivot Tables, and visual analytics.</li>
      <li>Developed 3 interactive dynamic Excel dashboards tracking regional sales performance, conversion rates, and revenue trends.</li>
      <li>Executed data validation, ETL cleansing, and advanced formulas (VLOOKUP, INDEX/MATCH), reducing recurring report turnaround by 25%.</li>
      <li>Delivered customer segmentation analysis and KPI summaries to senior mentors for data-driven strategic planning.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Project Manager & Team Lead</span> — <span class="item-org">Smart India Hackathon & Innovative Bharat</span></div>
      <span class="item-date">2023 – 2024 | Mathura, UP</span>
    </div>
    <ul>
      <li>Directed 6-member cross-functional engineering teams in national hackathons, delivering data-driven solutions for government challenges.</li>
      <li>Spearheaded industrial sensor telemetry and IoT analytics at Innovative Bharat, designing structured data ingestion pipelines.</li>
      <li>Managed sprint planning, milestone delivery, architecture design, and final technical demonstrations to national evaluation juries.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Key Projects</div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">RAG Based AI Teaching Assistant</span> <span style="font-size:7.8pt; color:#64748b;">| Python, RAG, Whisper, Ollama, Vector DB</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/rag-ai-teaching-assistant" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Transcribes video lectures with Whisper into searchable knowledge chunks; generates vector embeddings with Ollama.</li>
      <li>Implemented context-aware semantic search returning timestamped query answers for rapid video explanation lookup.</li>
      <li>Integrated local LLM inference pipeline ensuring zero external API latency, reduced compute overhead, and complete data privacy.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Real-Time Video Analysis System</span> <span style="font-size:7.8pt; color:#64748b;">| Python, Flask, OpenCV, YOLOv3, TensorFlow</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Real_Time_Video_Analysis_ML_Project" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Engineered multi-class vision pipeline performing simultaneous human detection, vehicle tracking, and emotion recognition.</li>
      <li>Integrated deep learning inference models with an interactive Flask web dashboard displaying live bounding boxes and metrics.</li>
      <li>Optimized frame processing loops achieving smooth real-time throughput for multi-camera streams.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Smart Traffic Violation AI Platform</span> <span style="font-size:7.8pt; color:#64748b;">| Python, YOLO, EasyOCR, JavaScript, SQLite</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Smart_Traffic_Violation_AI" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Built automated vision platform detecting vehicle speed infractions and traffic light violations from camera feeds.</li>
      <li>Implemented automatic number plate recognition (ANPR) using EasyOCR and bounding box tracking with YOLO.</li>
      <li>Developed full-stack dashboard with SQLite audit logging, violation evidence reporting, and RESTful communication.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Sales & Customer Performance Analytics</span> <span style="font-size:7.8pt; color:#64748b;">| SQL, MySQL, CTEs, Window Functions</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Sales-Customer-Performance-Analytics-" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Evaluated 100K+ transactional records across customers, products, and markets using complex relational SQL queries.</li>
      <li>Developed 20+ business queries leveraging CTEs, Window Functions, self-joins, and aggregations for revenue and margin insights.</li>
      <li>Conducted market-level achievement benchmarking and customer ranking to identify high-value commercial growth opportunities.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Enterprise Business Insights 360</span> <span style="font-size:7.8pt; color:#64748b;">| Power BI, DAX, Star Schema, Power Query</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Business-Insights-360-PowerBI-Dashboard" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Architected enterprise Star Schema model integrating data across Finance, Sales, Marketing, and Supply Chain.</li>
      <li>Engineered 25+ dynamic DAX measures for time-intelligence, profit margins, and net sales KPI reporting.</li>
      <li>Replaced legacy manual spreadsheets with automated, interactive Power BI dashboards for executive decision-making.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Certifications & Achievements</div>
  <div class="cert-row">● <strong>HackerRank SQL Gold Badge (5 Stars)</strong> &nbsp;|&nbsp; ● <strong>1st Runner-Up — Data Analytics & Visualization Hackathon</strong> (Smart Agrofarm)</div>
  <div class="cert-row">● <strong>SQL (Intermediate)</strong>, <strong>Problem Solving (Intermediate)</strong>, <strong>Problem Solving (Basic)</strong> & <strong>Python (Basic)</strong> — HackerRank</div>
  <div class="cert-row">● <strong>Power BI Data Analytics 3.0</strong> — Codebasics &nbsp;|&nbsp; ● <strong>Data Science & Analytics</strong> — Cognitive Class</div>
  <div class="cert-row">● <strong>Applied Machine Learning in Python</strong> — Coursera &nbsp;|&nbsp; ● <strong>Data Analytics with Python</strong> — NPTEL</div>
</div>

<div class="section">
  <div class="section-title">Education</div>
  <div class="edu-row">
    <div><span class="edu-title">B.Tech in Computer Science and Engineering (AI & ML)</span> — <span class="edu-inst">GLA University, Mathura</span></div>
    <div><span class="edu-score">CGPA: 8.3 / 10</span> &nbsp;|&nbsp; <span class="edu-date">2023 – 2027</span></div>
  </div>
  <div class="edu-row">
    <div><span class="edu-title">Class XII (Senior Secondary)</span> — <span class="edu-inst">CBSE Board</span></div>
    <div><span class="edu-score">Percentage: 93%</span> &nbsp;|&nbsp; <span class="edu-date">2022</span></div>
  </div>
  <div class="edu-row">
    <div><span class="edu-title">Class X (Secondary)</span> — <span class="edu-inst">CBSE Board</span></div>
    <div><span class="edu-score">Percentage: 95%</span> &nbsp;|&nbsp; <span class="edu-date">2020</span></div>
  </div>
</div>

</body>
</html>
"""

temp_html_path = os.path.join(tempfile.gettempdir(), "krishna_resume.html")
with open(temp_html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

output_pdf = os.path.abspath("public/resume.pdf")
edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

cmd = [
    edge_path,
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={output_pdf}",
    temp_html_path
]

print("Running command:", " ".join(cmd))
res = subprocess.run(cmd, capture_output=True, text=True)
print("Exit code:", res.returncode)
if os.path.exists(output_pdf):
    reader = pypdf.PdfReader(output_pdf)
    print("PDF generated successfully! Pages:", len(reader.pages), "Size:", os.path.getsize(output_pdf), "bytes")
else:
    print("Failed to generate PDF")
