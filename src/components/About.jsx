import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: "Software & Backend Development",
      description: "Building scalable backend services, structured logic, and RESTful APIs using Python and Java with clean architecture and maintainability."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      title: "Relational Databases & SQL",
      description: "Designing normalized schemas, writing performant SQL queries, and optimizing relational data models in MySQL, PostgreSQL, and SQLite."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Business Intelligence & Analytics",
      description: "Translating complex operational datasets into interactive Power BI dashboards, KPI models, and stakeholder-ready reports."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      ),
      title: "Applied AI & Machine Learning",
      description: "Developing practical AI pipelines with Retrieval-Augmented Generation (RAG), Whisper speech-to-text, and OpenCV/YOLO computer vision."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Engineering mindset backed by practical execution.</h2>
          <p className="section-subtitle">
            A developer who bridges software engineering, database architectures, and business intelligence.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-text-column">
            <div className="about-profile-card card">
              <div className="about-photo-wrapper">
                <img 
                  src={personalInfo.photo || "/krishna.png"} 
                  alt={personalInfo.name} 
                  className="about-profile-photo" 
                />
                <div className="about-photo-status">
                  <span className="status-dot"></span> Available
                </div>
              </div>
              <div className="about-profile-details">
                <h3 className="about-profile-name">{personalInfo.name}</h3>
                <p className="about-profile-headline">{personalInfo.headline}</p>
                <div className="about-profile-tags">
                  <span className="about-pill">📍 {personalInfo.location}</span>
                  <span className="about-pill">💼 SMAAC Net Solutions</span>
                  <span className="about-pill">🎓 GLA University ('27)</span>
                </div>
              </div>
            </div>

            {personalInfo.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-credentials-box card">
              <div className="credential-item">
                <span className="cred-icon">🎓</span>
                <div>
                  <strong>B.Tech in Computer Science Engineering (AI/ML)</strong>
                  <p>GLA University · Expected Graduation: 2027</p>
                </div>
              </div>
              <div className="credential-item">
                <span className="cred-icon">💼</span>
                <div>
                  <strong>Graduate Engineer Trainee</strong>
                  <p>SMAAC Net Solutions · Software & Enterprise Development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Focus Pillars */}
          <div className="about-pillars-column">
            <h3 className="pillars-heading">Technical Focus Areas</h3>
            <div className="pillars-grid">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card card">
                  <div className="pillar-icon">{pillar.icon}</div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
