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
    margin: 6mm 11mm 6mm 11mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #1e293b;
    line-height: 1.28;
    font-size: 8.2pt;
    background: #ffffff;
  }
  .header {
    text-align: center;
    border-bottom: 2px solid #0284c7;
    padding-bottom: 3.5px;
    margin-bottom: 5px;
  }
  .name {
    font-size: 19.5pt;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.3px;
    margin-bottom: 1.5px;
  }
  .location-bar {
    font-size: 8.5pt;
    font-weight: 600;
    color: #0284c7;
    margin-bottom: 2.5px;
  }
  .contact-bar {
    font-size: 8.35pt;
    color: #475569;
    display: flex;
    justify-content: center;
    gap: 13px;
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
    margin-bottom: 4px;
  }
  .section-title {
    font-size: 9.4pt;
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
    font-size: 8.8pt;
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
    font-size: 8.2pt;
    color: #334155;
    margin-bottom: 1px;
    line-height: 1.28;
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
    font-size: 8.2pt;
    border-collapse: collapse;
  }
  .skills-table td {
    padding: 1.1px 0;
    vertical-align: top;
  }
  .skill-cat {
    width: 26%;
    font-weight: 700;
    color: #0f172a;
  }
  .skill-vals {
    width: 74%;
    color: #334155;
  }
  .cert-row {
    font-size: 8.2pt;
    margin-bottom: 1.5px;
    line-height: 1.30;
  }
  .edu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 8.25pt;
    margin-bottom: 2px;
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
  Software Developer and Graduate Engineer Trainee at SMAAC Net Solutions with practical experience in software development, backend architectures, relational databases, enterprise ERP solutions, and business intelligence. Skilled in software engineering using Python, SQL, HTML, CSS, and Flask, with hands-on capabilities in Power BI analytics, Star Schema modeling, and AI/ML architectures.
</div>

<div class="section">
  <div class="section-title">Technical Skills</div>
  <table class="skills-table">
    <tr>
      <td class="skill-cat">● Languages & Web:</td>
      <td class="skill-vals">Python, SQL (HackerRank Gold Badge), HTML5, CSS3, JavaScript</td>
    </tr>
    <tr>
      <td class="skill-cat">● Backend & Systems:</td>
      <td class="skill-vals">Flask, REST APIs, Enterprise ERP (PEB Workflows), JSON, System Architecture</td>
    </tr>
    <tr>
      <td class="skill-cat">● Databases & Storage:</td>
      <td class="skill-vals">MySQL, PostgreSQL, SQLite, Star Schema Design, Normalized Data Modeling</td>
    </tr>
    <tr>
      <td class="skill-cat">● Data Analytics & BI:</td>
      <td class="skill-vals">Power BI, Microsoft Excel (Pivot Tables, VLOOKUP), DAX, Power Query, Pandas, NumPy</td>
    </tr>
    <tr>
      <td class="skill-cat">● AI & Machine Learning:</td>
      <td class="skill-vals">LLMs, RAG, TensorFlow, OpenCV, YOLOv3, Whisper, Ollama</td>
    </tr>
    <tr>
      <td class="skill-cat">● Tools & Platforms:</td>
      <td class="skill-vals">Git, GitHub, VS Code, Linux, ReportLab, Streamlit, Plotly</td>
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
      <li>Contributing to software development lifecycles focusing on Python, SQL, MySQL, HTML, CSS, and Flask.</li>
      <li>Developing enterprise ERP solutions and business applications in the Pre-Engineered Building (PEB) industry.</li>
      <li>Designing backend logic, normalized database schemas, and structured data processing pipelines.</li>
      <li>Translating technical business specifications into scalable software modules and maintaining database integrity.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Data Analyst</span> — <span class="item-org">AtliQ Technologies</span></div>
      <span class="item-date">Nov 2025 – Dec 2025 | Bengaluru (Remote)</span>
    </div>
    <ul>
      <li>Delivered end-to-end Power BI and SQL solutions aligned with real-world business requirements in insurance BI.</li>
      <li>Built 3+ interactive Power BI dashboards covering revenue, customer growth, sales modes, and policy segmentation.</li>
      <li>Designed and validated 20+ DAX measures (MoM growth, revenue KPIs, customer retention), improving metric accuracy.</li>
      <li>Cleaned, transformed, and modeled datasets across multiple fact & dimension tables, reducing reporting errors by 25%.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Data Analyst Intern</span> — <span class="item-org">SkillCred</span></div>
      <span class="item-date">Jun 2024 – Jul 2024 | Pune (Remote)</span>
    </div>
    <ul>
      <li>Analyzed large transactional business datasets (50K+ records) using Advanced Excel, Pivot Tables, and visual reporting.</li>
      <li>Built 3 interactive Excel dashboards for customer and performance analysis, reducing recurring analysis turnaround by ~25%.</li>
      <li>Applied VLOOKUP, data validation, and ETL cleansing to deliver customer segmentation insights for strategic decisions.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Project Manager & Team Lead</span> — <span class="item-org">Smart India Hackathon & Innovative Bharat</span></div>
      <span class="item-date">2023 – 2024 | Mathura, UP</span>
    </div>
    <ul>
      <li>Led a 6-member team delivering data-driven solutions for real-world government problem statements in national hackathons.</li>
      <li>Directed industrial sensor telemetry analytics at Innovative Bharat, designing structured data pipelines and reports.</li>
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
      <li>Built a RAG teaching assistant transcribing lecture videos via Whisper and indexing semantic chunks in Ollama.</li>
      <li>Implemented context-aware query retrieval returning answers with exact timestamps for rapid video explanation lookup.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Real-Time Video Analysis System</span> <span style="font-size:7.8pt; color:#64748b;">| Python, Flask, OpenCV, YOLOv3, TensorFlow</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Real_Time_Video_Analysis_ML_Project" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Engineered real-time computer vision system performing concurrent human detection, vehicle tracking, and emotion recognition.</li>
      <li>Integrated deep learning models with an interactive Flask web dashboard displaying live bounding boxes.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Sales & Customer Performance Analytics</span> <span style="font-size:7.8pt; color:#64748b;">| SQL, MySQL, CTEs, Window Functions</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Sales-Customer-Performance-Analytics-" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Evaluated 100K+ sales transactions across customers and products; authored 20+ complex SQL queries using CTEs and joins.</li>
      <li>Conducted customer ranking and variance calculations to identify sales growth patterns and market opportunities.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Enterprise Business Insights 360</span> <span style="font-size:7.8pt; color:#64748b;">| Power BI, DAX, Star Schema, Power Query</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Business-Insights-360-PowerBI-Dashboard" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Architected an enterprise Star Schema model and built interactive Power BI KPI dashboards across Finance and Sales.</li>
      <li>Engineered advanced DAX measures for dynamic time-intelligence and multi-dimensional performance tracking.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Certifications & Achievements</div>
  <div class="cert-row">● <strong>HackerRank SQL Gold Badge</strong> &nbsp;|&nbsp; ● <strong>1st Runner-Up — Data Analytics & Visualization Hackathon</strong> (Smart Agrofarm)</div>
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
