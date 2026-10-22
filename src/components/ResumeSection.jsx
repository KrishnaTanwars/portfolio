import React from 'react';
import { personalInfo, experiences, projects, skillCategories, educationInfo, certifications, contactInfo } from '../data/portfolioData';

export default function ResumeSection() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header resume-header-row">
          <div>
            <span className="section-tag">Curriculum Vitae</span>
            <h2 className="section-title">Resume & Qualifications</h2>
            <p className="section-subtitle">
              Review my complete engineering credentials directly below, or download a local copy of my official resume.
            </p>
          </div>

          <div className="resume-download-btn-wrapper">
            <a
              href="./resume.pdf"
              download="Krishna_Tanwar_Resume.pdf"
              className="btn btn-primary"
              aria-label="Download Krishna Tanwar resume PDF"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PDF
            </a>
          </div>
        </div>

        {/* In-Page Resume Document */}
        <div className="inpage-resume-paper card">
          {/* Resume Header */}
          <header className="resume-paper-header">
            <div className="resume-paper-header-inner">
              <img 
                src={personalInfo.photo || "/krishna.png"} 
                alt={personalInfo.name} 
                className="resume-paper-avatar" 
              />
              <div className="resume-paper-meta-group">
                <h1 className="resume-paper-name">{personalInfo.name}</h1>
                <p className="resume-paper-tagline">{personalInfo.headline}</p>

                <div className="resume-paper-contact-row">
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  <span>•</span>
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <span>•</span>
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
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
                Specialization: <strong>{educationInfo.specialization}</strong>
              </p>
              <div className="resume-paper-coursework">
                <span className="coursework-label">Core Coursework:</span>
                <span>{educationInfo.focusAreas.join(' · ')}</span>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section className="resume-paper-section">
            <h2 className="resume-paper-heading">Key Technical Projects</h2>
            <div className="resume-paper-items">
              {projects.map((proj) => (
                <div key={proj.id} className="resume-paper-item">
                  <div className="resume-paper-item-header">
                    <div>
                      <strong className="resume-paper-item-role">{proj.title}</strong>
                      <span className="resume-paper-item-company"> ({proj.categoryLabel})</span>
                    </div>
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-paper-item-link"
                    >
                      GitHub Repo ↗
                    </a>
                  </div>

                  <p className="resume-paper-item-desc">{proj.description}</p>

                  <div className="resume-paper-tech-tags">
                    <span className="tech-tag-label">Tech:</span>
                    {proj.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="resume-tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Table */}
          <section className="resume-paper-section">
            <h2 className="resume-paper-heading">Technical Competencies</h2>
            <div className="resume-paper-skills-grid">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="resume-paper-skill-row">
                  <span className="resume-paper-skill-cat">{cat.category}:</span>
                  <span className="resume-paper-skill-list">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="resume-paper-section resume-paper-cert-section">
            <h2 className="resume-paper-heading">Verified Credentials & Certifications</h2>
            <div className="resume-paper-cert-list">
              {certifications.map((c) => (
                <div key={c.id} className="resume-paper-cert-row">
                  <span className="cert-row-badge">✓</span>
                  <span className="cert-row-title"><strong>{c.title}</strong> — {c.issuer}</span>
                  <span className="cert-row-period">({c.period})</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
