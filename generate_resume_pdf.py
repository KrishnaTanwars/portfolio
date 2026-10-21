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
    margin: 12mm 15mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #1e293b;
    line-height: 1.4;
    font-size: 10pt;
    background: #ffffff;
  }
  .header {
    text-align: center;
    border-bottom: 2px solid #0284c7;
    padding-bottom: 8px;
    margin-bottom: 12px;
  }
  .name {
    font-size: 22pt;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.5px;
    margin-bottom: 2px;
  }
  .tagline {
    font-size: 10.5pt;
    font-weight: 600;
    color: #0284c7;
    margin-bottom: 6px;
  }
  .contact-bar {
    font-size: 8.5pt;
    color: #475569;
    display: flex;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
  }
  .contact-bar a {
    color: #0284c7;
    text-decoration: none;
    font-weight: 500;
  }
  .section {
    margin-bottom: 11px;
  }
  .section-title {
    font-size: 11pt;
    font-weight: 700;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 2px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .section-title::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 12px;
    background: #0284c7;
    border-radius: 2px;
  }
  .item {
    margin-bottom: 8px;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2px;
  }
  .item-title {
    font-weight: 700;
    font-size: 10pt;
    color: #0f172a;
  }
  .item-org {
    font-weight: 600;
    color: #0284c7;
  }
  .item-date {
    font-size: 8.5pt;
    color: #64748b;
    font-weight: 500;
  }
  .item-subtitle {
    font-size: 8.5pt;
    color: #475569;
    font-style: italic;
    margin-bottom: 3px;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    position: relative;
    padding-left: 14px;
    font-size: 9pt;
    color: #334155;
    margin-bottom: 2px;
    line-height: 1.35;
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
    font-size: 9pt;
    border-collapse: collapse;
  }
  .skills-table td {
    padding: 2.5px 0;
    vertical-align: top;
  }
  .skill-cat {
    width: 22%;
    font-weight: 700;
    color: #0f172a;
  }
  .skill-vals {
    width: 78%;
    color: #334155;
  }
  .tech-pill {
    display: inline-block;
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    border-radius: 3px;
    padding: 0 4px;
    font-size: 7.5pt;
    font-weight: 600;
    color: #334155;
    margin-left: 4px;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">KRISHNA TANWAR</div>
  <div class="tagline">Software Developer | Python & Backend Engineering | Relational Databases & SQL | AI/ML</div>
  <div class="contact-bar">
    <span>📍 Mathura, UP, India</span>
    <span>✉️ <a href="mailto:kstanwar0000@gmail.com">kstanwar0000@gmail.com</a></span>
    <span>💼 <a href="https://linkedin.com/in/krishnatanwars">linkedin.com/in/krishnatanwars</a></span>
    <span>💻 <a href="https://github.com/KrishnaTanwars">github.com/KrishnaTanwars</a></span>
  </div>
</div>

<div class="section">
  <div class="section-title">Education</div>
  <div class="item">
    <div class="item-header">
      <span class="item-title">Bachelor of Technology (B.Tech) — Computer Science & Engineering</span>
      <span class="item-date">2023 – 2027 (Expected)</span>
    </div>
    <div class="item-subtitle">GLA University, Mathura · Specialization in Artificial Intelligence & Machine Learning (AI/ML)</div>
    <ul>
      <li>Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/Python), Database Management Systems (SQL), Applied Machine Learning, Operating Systems & Computer Networks.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Professional Experience</div>
  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Graduate Engineer Trainee</span> — <span class="item-org">SMAAC Net Solutions</span></div>
      <span class="item-date">Present</span>
    </div>
    <div class="item-subtitle">Full-time Software Development & Enterprise Engineering</div>
    <ul>
      <li>Contributing to backend software development, business logic modules, and database management workflows.</li>
      <li>Adhering to clean code architecture, code review standards, and agile sprint delivery cycles.</li>
      <li>Working with relational schemas and optimizing query operations for enterprise systems.</li>
    </ul>
  </div>
  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Data Analyst Intern</span> — <span class="item-org">AtliQ Technologies</span></div>
      <span class="item-date">Nov 2025 – Feb 2026</span>
    </div>
    <div class="item-subtitle">Business Intelligence & Transactional Analytics</div>
    <ul>
      <li>Engineered executive Power BI dashboards with DAX measures and Power Query ETL pipelines across 100K+ transactional records.</li>
      <li>Designed robust star-schema relational models connecting sales, customer demographics, and financial datasets.</li>
      <li>Formulated SQL queries for cohort retention, margin analysis, and sales forecasting, enhancing executive reporting accuracy.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Selected Technical Projects</div>
  <div class="item">
    <div class="item-header">
      <div><span class="item-title">RAG AI Teaching Assistant</span> <span class="tech-pill">Python</span><span class="tech-pill">Ollama</span><span class="tech-pill">Whisper</span><span class="tech-pill">Vector Embeddings</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/rag-ai-teaching-assistant">GitHub Repo</a></span>
    </div>
    <ul>
      <li>Engineered an automated video tutorial RAG assistant using Whisper speech-to-text and local Ollama vector embeddings.</li>
      <li>Chunked subtitle transcripts with semantic windowing, returning precise video timestamp citations for student questions.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Smart Traffic Violation AI Platform</span> <span class="tech-pill">Python</span><span class="tech-pill">YOLO</span><span class="tech-pill">EasyOCR</span><span class="tech-pill">React</span><span class="tech-pill">SQLite</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Smart_Traffic_Violation_AI">GitHub Repo</a></span>
    </div>
    <ul>
      <li>Developed full-stack violation detection platform with YOLO vehicle tracking, license plate OCR, and automatic rule-checking.</li>
      <li>Integrated SQLite case logging database and React dashboard for audit history and automated citation generation.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Real-Time Video Multi-Class Detection System</span> <span class="tech-pill">Python</span><span class="tech-pill">OpenCV</span><span class="tech-pill">YOLO</span><span class="tech-pill">Flask</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Real_Time_Video_Analysis_ML_Project">GitHub Repo</a></span>
    </div>
    <ul>
      <li>Implemented multi-threaded real-time streaming pipeline supporting vehicle detection, human tracking, and motion detection.</li>
      <li>Built configurable performance profiles (fast, balanced, accurate) with web-based feed monitoring.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <div><span class="item-title">Business Insights 360 Enterprise BI</span> <span class="tech-pill">Power BI</span><span class="tech-pill">DAX</span><span class="tech-pill">SQL</span><span class="tech-pill">Data Modeling</span></div>
      <span class="item-date"><a href="https://github.com/KrishnaTanwars/Business-Insights-360-PowerBI-Dashboard">GitHub Repo</a></span>
    </div>
    <ul>
      <li>Created unified cross-functional BI suite for AtliQ Hardwares spanning Finance, Sales, Marketing, and Supply Chain.</li>
      <li>Engineered dynamic time-intelligence DAX measures replacing manual spreadsheets with real-time analytics.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Technical Skills</div>
  <table class="skills-table">
    <tr>
      <td class="skill-cat">Languages:</td>
      <td class="skill-vals">Python, SQL, Java, JavaScript, HTML5, CSS3</td>
    </tr>
    <tr>
      <td class="skill-cat">Backend & Frameworks:</td>
      <td class="skill-vals">Flask, REST APIs, Object-Oriented Architecture, System Design Fundamentals</td>
    </tr>
    <tr>
      <td class="skill-cat">Databases & Storage:</td>
      <td class="skill-vals">MySQL, PostgreSQL, SQLite, Database Normalization, Schema Design, Query Optimization</td>
    </tr>
    <tr>
      <td class="skill-cat">AI / ML & Computer Vision:</td>
      <td class="skill-vals">RAG (Retrieval-Augmented Generation), Whisper, Ollama, OpenCV, YOLO, TensorFlow, Vector Embeddings</td>
    </tr>
    <tr>
      <td class="skill-cat">Analytics & Tools:</td>
      <td class="skill-vals">Power BI, DAX, Power Query, Pandas, NumPy, Excel, Git, GitHub, VS Code</td>
    </tr>
  </table>
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
    "--headless",
    "--disable-gpu",
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
