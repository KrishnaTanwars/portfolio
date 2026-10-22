import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('download'); // 'download' | 'preview'

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="resume-modal-title"
    >
      <div className="modal-card card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-icon-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <div>
            <h3 id="resume-modal-title" className="modal-title">Official Resume & Qualifications</h3>
            <span className="modal-subtitle">{personalInfo.name} · {personalInfo.headline}</span>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close resume modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tab-bar">
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'download' ? 'active' : ''}`}
            onClick={() => setActiveTab('download')}
          >
            Direct Download
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            Technical Summary View
          </button>
        </div>

        <div className="modal-body">
          {activeTab === 'download' ? (
            <div className="resume-ready-state">
              <div className="resume-document-badge">
                <div className="doc-avatar-wrapper">
                  <img src={personalInfo.photo || "/krishna.png"} alt={personalInfo.name} className="doc-avatar-img" />
                </div>
                <div className="doc-meta">
                  <span className="doc-name">Krishna_Tanwar_Resume.pdf</span>
                  <span className="doc-format">Format: PDF · Verified ATS Standard · Comprehensive Format</span>
                </div>
              </div>

              <p className="resume-state-text">
                The compiled technical resume is ready for immediate download. It highlights software development at SMAAC Net Solutions in Gurgaon, internships at AtliQ Technologies & SkillCred, software and AI projects, and academic credentials at GLA University (CGPA: 8.3/10).
              </p>

              <div className="resume-action-buttons">
                <a
                  href="./resume.pdf"
                  download="Krishna_Tanwar_Resume.pdf"
                  className="btn btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Official Resume (PDF)
                </a>

                <a
                  href={`mailto:${personalInfo.email}?subject=Software%20Developer%20Opportunity%20-%20Krishna%20Tanwar`}
                  className="btn btn-secondary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Contact via Email ({personalInfo.email})
                </a>
              </div>
            </div>
          ) : (
            <div className="resume-summary-preview">
              <div className="summary-block">
                <h4 className="summary-block-title">Core Candidate Overview</h4>
                <p className="summary-text">
                  Software Developer and Graduate Engineer Trainee with hands-on experience in software development using Python, SQL, HTML, CSS, and JavaScript. Experienced in building backend services, relational databases, data analytics with Power BI, and applied AI/ML systems.
                </p>
              </div>

              <div className="summary-grid">
                <div className="summary-col">
                  <h5>Technical Skills</h5>
                  <ul className="summary-list">
                    <li><strong>Languages:</strong> Python, SQL, JavaScript, HTML5, CSS3</li>
                    <li><strong>Backend & Web:</strong> Flask, REST APIs, React, JSON</li>
                    <li><strong>Databases:</strong> MySQL, PostgreSQL, SQLite</li>
                    <li><strong>Analytics & BI:</strong> Power BI, Microsoft Excel, DAX, Power Query</li>
                    <li><strong>AI & ML:</strong> LLMs, RAG, OpenCV, YOLOv3, TensorFlow, Whisper</li>
                  </ul>
                </div>

                <div className="summary-col">
                  <h5>Experience & Education</h5>
                  <ul className="summary-list">
                    <li><strong>SMAAC Net Solutions:</strong> Graduate Engineer Trainee (Gurgaon, Haryana)</li>
                    <li><strong>AtliQ Technologies:</strong> Data Analyst Intern (2025–2026)</li>
                    <li><strong>SkillCred:</strong> AI & Analytics Intern (2025)</li>
                    <li><strong>GLA University:</strong> B.Tech CSE (AI & ML) '27 (CGPA 8.3/10)</li>
                    <li><strong>Location:</strong> Gurgaon, Haryana (Hometown: Kosi Kalan)</li>
                    <li><strong>Phone:</strong> +91 6395005796</li>
                  </ul>
                </div>
              </div>

              <div className="summary-footer-actions">
                <a
                  href="./resume.pdf"
                  download="Krishna_Tanwar_Resume.pdf"
                  className="btn btn-primary btn-sm"
                >
                  Download PDF Now
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
