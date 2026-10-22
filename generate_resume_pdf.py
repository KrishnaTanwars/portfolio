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
    font-size: 8.9pt;
    background: #ffffff;
  }
  .header {
    text-align: center;
    border-bottom: 2px solid #0284c7;
    padding-bottom: 5px;
    margin-bottom: 8px;
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
    font-size: 8.4pt;
    color: #334155;
    line-height: 1.38;
    margin-bottom: 8px;
    text-align: justify;
  }
  .section {
    margin-bottom: 7px;
  }
  .section-title {
    font-size: 9.8pt;
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
    margin-bottom: 4px;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1.5px;
  }
  .item-title {
    font-weight: 700;
    font-size: 9pt;
    color: #0f172a;
  }
  .item-org {
    font-weight: 600;
    color: #0284c7;
  }
  .item-date {
    font-size: 8.2pt;
    color: #64748b;
    font-weight: 500;
  }
  .item-subtitle {
    font-size: 8.2pt;
    color: #475569;
    font-style: italic;
    margin-bottom: 1.5px;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    position: relative;
    padding-left: 12px;
    font-size: 8.35pt;
    color: #334155;
    margin-bottom: 1.5px;
    line-height: 1.3;
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
    font-size: 8.35pt;
    border-collapse: collapse;
  }
  .skills-table td {
    padding: 1.5px 0;
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
    font-size: 8.35pt;
    margin-bottom: 1.5px;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">KRISHNA TANWAR</div>
  <div class="location-bar">
    Hometown: Kosi Kalan, Mathura, Uttar Pradesh &nbsp;|&nbsp; Current Location: Gurgaon, Haryana
  </div>
  <div class="contact-bar">
    <span>📞 +91 6395005796</span>
    <span>✉️ <a href="mailto:kstanwar0000@gmail.com">kstanwar0000@gmail.com</a></span>
    <span>💼 <a href="https://linkedin.com/in/krishnatanwars">LinkedIn</a></span>
    <span>💻 <a href="https://github.com/KrishnaTanwars">GitHub</a></span>
  </div>
</div>

<div class="summary-text">
  Software Developer and Graduate Engineer Trainee with hands-on experience in software development using Python, SQL, HTML, CSS, and JavaScript. Experienced in building backend services, relational database schemas, ETL pipelines, interactive Power BI dashboards, and AI-powered solutions using RAG, computer vision, and large language models.
</div>

<div class="section">
  <div class="section-title">Technical Skills</div>
  <table class="skills-table">
    <tr>
      <td class="skill-cat">● Languages & Web:</td>
      <td class="skill-vals">Python, SQL, JavaScript, HTML5, CSS3</td>
    </tr>
    <tr>
      <td class="skill-cat">● Backend & Frameworks:</td>
      <td class="skill-vals">Flask, REST APIs, React, JSON, SQLite</td>
    </tr>
    <tr>
      <td class="skill-cat">● Databases & Storage:</td>
      <td class="skill-vals">MySQL, PostgreSQL, SQLite, Star Schema Design</td>
    </tr>
    <tr>
      <td class="skill-cat">● Data Analytics & BI:</td>
      <td class="skill-vals">Microsoft Excel, Power BI, NumPy, Pandas, DAX, Power Query</td>
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
      <div><span class="item-title">Graduate Engineer Trainee</span> — <span class="item-org">SMAAC Net Solutions</span></div>
      <span class="item-date">Nov 2024 – Present | Gurgaon, Haryana</span>
    </div>
    <ul>
      <li>Contributing to software development lifecycles focusing on Python, SQL, HTML, CSS, and JavaScript.</li>
      <li>Developing backend logic, database schemas, and data pipelines for enterprise-grade applications.</li>
      <li>Collaborating on engineering workflows, applying clean coding standards, and participating in peer code reviews.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Data Analyst Intern</span> — <span class="item-org">AtliQ Technologies</span></div>
      <span class="item-date">Nov 2025 – Feb 2026 | India</span>
    </div>
    <ul>
      <li>Performed data validation, cleansing, and normalization to maintain reporting accuracy.</li>
      <li>Developed interactive Power BI dashboards and analytical reports for business decision-making.</li>
      <li>Worked with SQL and Excel to support reporting and data analysis workflows.</li>
      <li>Automated repetitive data preparation steps to reduce manual effort.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">AI & Analytics Intern</span> — <span class="item-org">SkillCred</span></div>
      <span class="item-date">May 2025 – Jul 2025 | Remote</span>
    </div>
    <ul>
      <li>Built an AI-powered meeting transcription and summarization tool using Whisper and Ollama.</li>
      <li>Developed computer vision pipelines using OpenCV and YOLOv3 for object detection tasks.</li>
      <li>Designed RAG workflows for document-based question-answering with LLMs.</li>
      <li>Preprocessed text, audio, and visual data for model training and evaluation.</li>
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
      <li>Retrieved timestamped answers via local LLMs to enable instant concept search across video recordings.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Real-Time Video Analysis System</span> <span style="font-size:7.8pt; color:#64748b;">| Python, Flask, OpenCV, YOLOv3, TensorFlow</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Real_Time_Video_Analysis_ML_Project" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Real-time computer vision system performing concurrent human, vehicle, and emotion detection on live video.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">AI Travel & Expense Analyzer</span> <span style="font-size:7.8pt; color:#64748b;">| Python, Streamlit, Pandas, Matplotlib, OpenAI</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Categorized expenses from CSV data with LLM-generated spending insights, budget summaries, and anomaly detection.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Automated Billing & Invoicing System</span> <span style="font-size:7.8pt; color:#64748b;">| Python, Tkinter, SQLite, ReportLab</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars" style="color:#0284c7; text-decoration:none; font-weight:600;">GITHUB ↗</a></span>
    </div>
    <ul>
      <li>Desktop GUI application with dynamic PDF invoice generation, inventory tracking, and persistent SQLite database.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Education</div>
  <div class="item">
    <div class="item-header">
      <span class="item-title">B.Tech in Computer Science and Engineering (AI & ML)</span>
      <span class="item-date">Sep 2023 – Present (Exp. 2027)</span>
    </div>
    <div class="item-subtitle">GLA University, Mathura &nbsp;|&nbsp; <strong>CGPA: 8.3 / 10</strong></div>
  </div>
  <div class="item">
    <div class="item-header">
      <span class="item-title">Higher Secondary (Class XII, TSBIE)</span>
      <span class="item-date">2021 – 2023</span>
    </div>
    <div class="item-subtitle">Sri Chaitanya Junior College, Hyderabad &nbsp;|&nbsp; Percentage: <strong>93%</strong></div>
  </div>
  <div class="item">
    <div class="item-header">
      <span class="item-title">High School (Class X, CBSE)</span>
      <span class="item-date">2020 – 2021</span>
    </div>
    <div class="item-subtitle">A.K. Public School, Mathura &nbsp;|&nbsp; Percentage: <strong>95%</strong></div>
  </div>
</div>

<div class="section">
  <div class="section-title">Certifications</div>
  <div class="cert-row">● <strong>Applied Machine Learning in Python</strong> — Coursera &nbsp;|&nbsp; ● <strong>Data Analytics with Python</strong> — NPTEL</div>
  <div class="cert-row">● <strong>Python for Data Science</strong> — Cognitive Class &nbsp;|&nbsp; ● <strong>Power BI Data Analytics 3.0</strong> — Codebasics</div>
  <div class="cert-row">● <strong>SQL (Intermediate)</strong> & <strong>Python (Basic)</strong> — HackerRank</div>
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
