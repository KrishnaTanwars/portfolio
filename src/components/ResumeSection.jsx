import React, { useState } from 'react';
import { personalInfo, experiences, projects, skillCategories, educationInfo, certifications, contactInfo } from '../data/portfolioData';

export default function ResumeSection({ onOpenModal }) {
  const [viewMode, setViewMode] = useState('interactive'); // 'interactive' | 'pdf'
  const [copiedText, setCopiedText] = useState(false);

  const plainTextResume = `KRISHNA TANWAR
Software Developer | Python | SQL | AI/ML | Business Intelligence
Mathura, Uttar Pradesh, India | Email: ${contactInfo.email}
LinkedIn: ${contactInfo.linkedin} | GitHub: ${contactInfo.github}

==================================================
PROFESSIONAL SUMMARY
==================================================
${personalInfo.shortBio}

==================================================
EDUCATION
==================================================
${educationInfo.institution} — ${educationInfo.location}
${educationInfo.degree} in ${educationInfo.major} (${educationInfo.specialization})
${educationInfo.period}
Core Coursework: ${educationInfo.focusAreas.join(', ')}

==================================================
PROFESSIONAL EXPERIENCE
==================================================
${experiences.map(exp => `${exp.role} | ${exp.company} (${exp.period})
${exp.description.map(d => `• ${d}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}`).join('\n\n')}

==================================================
KEY TECHNICAL PROJECTS
==================================================
${projects.map(p => `${p.title} (${p.categoryLabel})
${p.description}
Technologies: ${p.technologies.join(', ')}
Repo: ${p.repoUrl}`).join('\n\n')}

==================================================
TECHNICAL SKILLS
==================================================
${skillCategories.map(cat => `${cat.category}: ${cat.skills.map(s => `${s.name} (${s.level})`).join(', ')}`).join('\n')}

==================================================
VERIFIED CERTIFICATIONS
==================================================
${certifications.map(c => `• ${c.title} — ${c.issuer} (${c.period})`).join('\n')}
`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Curriculum Vitae</span>
          <h2 className="section-title">Resume & Qualifications</h2>
          <p className="section-subtitle">
            Review my complete engineering credentials directly below, open the live PDF document, or download a local copy for your applicant tracking system.
          </p>
        </div>

        {/* Toolbar & Actions */}
        <div className="resume-toolbar-card card">
          <div className="resume-view-switcher" role="tablist" aria-label="Resume View Mode">
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'interactive'}
              className={`view-switch-btn ${viewMode === 'interactive' ? 'active' : ''}`}
              onClick={() => setViewMode('interactive')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              Interactive Document View
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'pdf'}
              className={`view-switch-btn ${viewMode === 'pdf' ? 'active' : ''}`}
              onClick={() => setViewMode('pdf')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              Embedded PDF Viewer
            </button>
          </div>

          <div className="resume-action-buttons-row">
            <a
              href="./resume.pdf"
              download="Krishna_Tanwar_Resume.pdf"
              className="btn btn-primary btn-sm"
              aria-label="Download Krishna Tanwar resume PDF"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PDF
            </a>

            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label="Open resume PDF in a new tab"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Open in New Tab
            </a>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={onOpenModal}
              aria-label="Open resume in modal dialog"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
              Modal View
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handlePrint}
              aria-label="Print resume document"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleCopyText}
              aria-label="Copy resume plain text for ATS"
            >
              {copiedText ? (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Copied ATS Text!
                </>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Copy ATS Text
                </>
              )}
            </button>
          </div>
        </div>

        {/* View Mode 1: Interactive In-Page Resume Document */}
        {viewMode === 'interactive' && (
          <div className="inpage-resume-paper card">
            {/* Resume Header */}
            <header className="resume-paper-header">
              <h1 className="resume-paper-name">{personalInfo.name}</h1>
              <p className="resume-paper-tagline">{personalInfo.headline}</p>

              <div className="resume-paper-contact-row">
                <span>📍 {personalInfo.location}</span>
                <span>•</span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                <span>•</span>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span>•</span>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="resume-paper-section">
              <h2 className="resume-paper-heading">Professional Profile</h2>
              <p className="resume-paper-summary-text">{personalInfo.shortBio}</p>
            </section>

            {/* Experience */}
            <section className="resume-paper-section">
              <h2 className="resume-paper-heading">Professional Experience</h2>
              <div className="resume-paper-items">
                {experiences.map((exp) => (
                  <div key={exp.id} className="resume-paper-item">
                    <div className="resume-paper-item-header">
                      <div>
                        <strong className="resume-paper-item-role">{exp.role}</strong>
                        <span className="resume-paper-item-company"> — {exp.company}</span>
                        <span className="resume-paper-item-badge">({exp.type})</span>
                      </div>
                      <span className="resume-paper-item-period">{exp.period}</span>
                    </div>

                    <ul className="resume-paper-bullet-list">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>

                    <div className="resume-paper-tech-tags">
                      <span className="tech-tag-label">Stack:</span>
                      {exp.technologies.map((t, tIdx) => (
                        <span key={tIdx} className="resume-tech-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="resume-paper-section">
              <h2 className="resume-paper-heading">Education & Academic Background</h2>
              <div className="resume-paper-item">
                <div className="resume-paper-item-header">
                  <div>
                    <strong className="resume-paper-item-role">{educationInfo.degree} in {educationInfo.major}</strong>
                    <span className="resume-paper-item-company"> — {educationInfo.institution}</span>
                  </div>
                  <span className="resume-paper-item-period">{educationInfo.period}</span>
                </div>
                <p className="resume-paper-sub-detail">
                  Specialization: <strong>{educationInfo.specialization}</strong> · {educationInfo.location}
                </p>
                <div className="resume-paper-coursework">
                  <span className="coursework-label">Core Coursework:</span>
                  <span>{educationInfo.focusAreas.join(' · ')}</span>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section className="resume-paper-section">
              <h2 className="resume-paper-heading">Featured Technical Projects</h2>
              <div className="resume-paper-items">
                {projects.slice(0, 4).map((proj) => (
                  <div key={proj.id} className="resume-paper-item">
                    <div className="resume-paper-item-header">
                      <div className="proj-title-group">
                        <strong className="resume-paper-item-role">{proj.title}</strong>
                        <span className="resume-paper-item-badge">{proj.categoryLabel}</span>
                      </div>
                      <a 
                        href={proj.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="resume-paper-repo-link"
                      >
                        GitHub Repo ↗
                      </a>
                    </div>
                    <p className="resume-paper-desc-text">{proj.description}</p>
                    <ul className="resume-paper-bullet-list">
                      {proj.highlights.slice(0, 2).map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                    <div className="resume-paper-tech-tags">
                      {proj.technologies.map((tech, idx) => (
                        <span key={idx} className="resume-tech-pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Matrix */}
            <section className="resume-paper-section">
              <h2 className="resume-paper-heading">Technical Competencies Matrix</h2>
              <div className="resume-paper-skills-grid">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="resume-paper-skill-row">
                    <span className="resume-skill-cat-name">{cat.category}:</span>
                    <span className="resume-skill-cat-vals">
                      {cat.skills.map(s => `${s.name}`).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="resume-paper-section">
              <h2 className="resume-paper-heading">Verified Credentials & Certifications</h2>
              <div className="resume-paper-cert-list">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="resume-paper-cert-item">
                    <span className="cert-bullet">✔</span>
                    <strong>{cert.title}</strong>
                    <span className="cert-meta">— {cert.issuer} ({cert.period})</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Paper Footer Action */}
            <footer className="resume-paper-footer">
              <span>Ready for software developer and backend engineering roles.</span>
              <div className="paper-footer-buttons">
                <a
                  href="./resume.pdf"
                  download="Krishna_Tanwar_Resume.pdf"
                  className="btn btn-primary btn-sm"
                >
                  Download Compiled PDF
                </a>
                <a
                  href={`mailto:${contactInfo.email}?subject=Interview%20Inquiry%20-%20Krishna%20Tanwar`}
                  className="btn btn-secondary btn-sm"
                >
                  Contact Candidate
                </a>
              </div>
            </footer>
          </div>
        )}

        {/* View Mode 2: Embedded PDF Document Frame */}
        {viewMode === 'pdf' && (
          <div className="inpage-pdf-frame-wrapper card">
            <div className="pdf-frame-header">
              <div className="frame-meta">
                <span className="frame-icon">📄</span>
                <strong>Krishna_Tanwar_Resume.pdf</strong>
                <span className="frame-size">(Live PDF Document)</span>
              </div>
              <div className="frame-links">
                <a
                  href="./resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Open in New Window ↗
                </a>
                <a
                  href="./resume.pdf"
                  download="Krishna_Tanwar_Resume.pdf"
                  className="btn btn-primary btn-sm"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <div className="pdf-iframe-container">
              <iframe
                src="./resume.pdf"
                title="Krishna Tanwar Technical Resume"
                className="resume-pdf-iframe"
                loading="lazy"
              >
                <p>
                  Your browser does not support embedded PDFs. 
                  <a href="./resume.pdf" download="Krishna_Tanwar_Resume.pdf">
                    Click here to download the PDF
                  </a>.
                </p>
              </iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
