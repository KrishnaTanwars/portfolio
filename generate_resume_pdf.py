import os
import subprocess
import tempfile

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Krishna Tanwar - Resume</title>
<style>
  @page {
    size: A4;
    margin: 8mm 12mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #1e293b;
    line-height: 1.34;
    font-size: 8.8pt;
    background: #ffffff;
  }
  .header {
    text-align: center;
    border-bottom: 2px solid #0284c7;
    padding-bottom: 5px;
    margin-bottom: 7px;
  }
  .name {
    font-size: 19pt;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.3px;
    margin-bottom: 2px;
  }
  .location-bar {
    font-size: 8.2pt;
    font-weight: 600;
    color: #0284c7;
    margin-bottom: 3px;
  }
  .contact-bar {
    font-size: 8.2pt;
    color: #475569;
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .contact-bar a {
    color: #0284c7;
    text-decoration: none;
    font-weight: 500;
  }
  .summary-text {
    font-size: 8.35pt;
    color: #334155;
    line-height: 1.36;
    margin-bottom: 7px;
    text-align: justify;
  }
  .section {
    margin-bottom: 6px;
  }
  .section-title {
    font-size: 9.6pt;
    font-weight: 700;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 2px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
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
    margin-bottom: 3.5px;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1px;
  }
  .item-title {
    font-weight: 700;
    font-size: 8.9pt;
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
  .item-subtitle {
    font-size: 8.1pt;
    color: #475569;
    font-style: italic;
    margin-bottom: 1px;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    position: relative;
    padding-left: 12px;
    font-size: 8.25pt;
    color: #334155;
    margin-bottom: 1.2px;
    line-height: 1.28;
  }
  li::before {
    content: "•";
    position: absolute;
    left: 2px;
    color: #0284c7;
    font-weight: bold;
  }
  .skills-table {
    width: 100%;
    font-size: 8.25pt;
    border-collapse: collapse;
  }
  .skills-table td {
    padding: 1.2px 0;
    vertical-align: top;
  }
  .skill-cat {
    width: 27%;
    font-weight: 700;
    color: #0f172a;
  }
  .skill-vals {
    width: 73%;
    color: #334155;
  }
  .cert-row {
    font-size: 8.25pt;
    margin-bottom: 1.2px;
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
    <span>💼 <a href="https://www.linkedin.com/in/krishnatanwars">LinkedIn: /in/krishnatanwars</a></span>
    <span>💻 <a href="https://github.com/KrishnaTanwars">GitHub: /KrishnaTanwars</a></span>
  </div>
</div>

<div class="summary-text">
  Software Developer and Graduate Engineer Trainee at SMAAC Net Solutions with hands-on experience in software development, backend architectures, relational databases, enterprise ERP solutions, and data analytics. Skilled in software development using Python, SQL, HTML, CSS, and Flask, with applied capabilities in Power BI business intelligence and AI/ML architectures.
</div>

<div class="section">
  <div class="section-title">Technical Skills</div>
  <table class="skills-table">
    <tr>
      <td class="skill-cat">● Languages & Web:</td>
      <td class="skill-vals">Python, SQL (HackerRank Gold Badge), HTML5, CSS3, JavaScript</td>
    </tr>
    <tr>
      <td class="skill-cat">● Backend & Frameworks:</td>
      <td class="skill-vals">Flask, REST APIs, Enterprise ERP (PEB Systems), JSON, SQLite</td>
    </tr>
    <tr>
      <td class="skill-cat">● Databases & Storage:</td>
      <td class="skill-vals">MySQL, PostgreSQL, SQLite, Star Schema Design</td>
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
      <td class="skill-vals">Git, GitHub, VS Code, ReportLab, Streamlit, Linux</td>
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
      <li>Gaining hands-on professional software development experience in building enterprise ERP solutions and business applications.</li>
      <li>Learning and engineering how enterprise software architectures support business workflows in the PEB (Pre-Engineered Building) industry.</li>
      <li>Developing backend logic, normalized database schemas, and structured data pipelines using Python, SQL, and MySQL.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Data Analyst</span> — <span class="item-org">AtliQ Technologies</span></div>
      <span class="item-date">Nov 2025 – Dec 2025 | Bengaluru (Remote)</span>
    </div>
    <ul>
      <li>Delivered end-to-end Power BI and SQL solutions aligned with real-world business requirements in insurance and enterprise domains.</li>
      <li>Built 3+ interactive Power BI dashboards covering revenue, customer growth, sales modes, and age-group segmentation.</li>
      <li>Designed and validated 20+ DAX measures (MoM growth, revenue KPIs, customer metrics), improving metric accuracy and consistency.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Data Analyst Intern</span> — <span class="item-org">SkillCred</span></div>
      <span class="item-date">Jun 2024 – Jul 2024 | Pune (Remote)</span>
    </div>
    <ul>
      <li>Analyzed large business datasets (50K+ records) using Advanced Excel, Pivot Tables, and data visualization.</li>
      <li>Built 3 interactive Excel dashboards for customer and performance analysis, reducing analysis time by ~25%.</li>
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
      <li>Built a RAG teaching assistant transcribing lecture videos via Whisper, indexing semantic chunks in Ollama, and retrieving timestamped answers.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Real-Time Video Analysis System</span> <span style="font-size:7.8pt; color:#64748b;">| Python, Flask, OpenCV, YOLOv3, TensorFlow</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Real_Time_Video_Analysis_ML_Project" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Real-time computer vision system performing concurrent human, vehicle, and emotion detection on live video feeds via Flask.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Sales & Customer Performance Analytics</span> <span style="font-size:7.8pt; color:#64748b;">| SQL, MySQL, CTEs, Window Functions</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Sales-Customer-Performance-Analytics-" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Evaluated 100K+ sales transactions; authored 20+ complex SQL queries using CTEs, Window Functions, and joins to analyze sales and markets.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Business Insights 360</span> <span style="font-size:7.8pt; color:#64748b;">| Power BI, DAX, Star Schema, Power Query</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Business-Insights-360-PowerBI-Dashboard" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Designed a Star Schema data model and built interactive Power BI KPI dashboards across Finance, Sales, Marketing, and Supply Chain.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Certifications & Achievements</div>
  <div class="cert-row">● <strong>HackerRank SQL Gold Badge</strong> &nbsp;|&nbsp; ● <strong>1st Runner-Up — Data Analytics Hackathon</strong> (Smart Agrofarm)</div>
  <div class="cert-row">● <strong>SQL (Intermediate)</strong> & <strong>Problem Solving (Intermediate)</strong> & <strong>Python (Basic)</strong> — HackerRank</div>
  <div class="cert-row">● <strong>Power BI Data Analytics 3.0</strong> — Codebasics &nbsp;|&nbsp; ● <strong>Data Science & Analytics</strong> — Cognitive Class</div>
  <div class="cert-row">● <strong>Applied Machine Learning in Python</strong> — Coursera &nbsp;|&nbsp; ● <strong>Data Analytics with Python</strong> — NPTEL</div>
</div>

<div class="section">
  <div class="section-title">Education</div>
  <div class="item">
    <div class="item-header">
      <span class="item-title">B.Tech in Computer Science and Engineering (AI & ML)</span>
      <span class="item-date">2023 – 2027</span>
    </div>
    <div class="item-subtitle">GLA University, Mathura &nbsp;|&nbsp; <strong>CGPA: 8.3 / 10</strong></div>
  </div>
  <div class="item">
    <div class="item-header">
      <span class="item-title">Senior Secondary (Class 12th) – Computer Science</span>
      <span class="item-date">2021 – 2022</span>
    </div>
    <div class="item-subtitle">Saraswati Vidhya Mandir / Board &nbsp;|&nbsp; Percentage: <strong>93%</strong></div>
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
    print("PDF generated successfully! Size:", os.path.getsize(output_pdf), "bytes")
else:
    print("Failed to generate PDF")
