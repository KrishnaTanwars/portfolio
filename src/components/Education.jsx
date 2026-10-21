import React from 'react';
import { educationInfo, certifications } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic & Credentials</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Formal computer science engineering degree paired with verified industry credentials in Python, SQL, BI, and Machine Learning.
          </p>
        </div>

        <div className="education-grid">
          {/* Main University Card */}
          <div className="education-card card">
            <div className="education-card-header">
              <div className="edu-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>

              <div className="edu-header-text">
                <h3 className="edu-institution">{educationInfo.institution}</h3>
                <span className="edu-location">{educationInfo.location}</span>
              </div>

              <div className="edu-badge">
                <span className="chip-badge">{educationInfo.period}</span>
              </div>
            </div>

            <div className="edu-degree-details">
              <h4 className="edu-degree-title">{educationInfo.degree}</h4>
              <p className="edu-major">
                {educationInfo.major} — <span className="text-accent">{educationInfo.specialization}</span>
              </p>
            </div>

            <div className="edu-coursework">
              <h5 className="coursework-title">Key Core Coursework & Foundations:</h5>
              <div className="coursework-tags">
                {educationInfo.focusAreas.map((area, idx) => (
                  <span key={idx} className="chip">{area}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Highlights & Stats */}
          <div className="academic-highlight-card card">
            <div className="highlight-header">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h4 className="highlight-title">Specialization Highlights</h4>
            </div>

            <div className="highlight-points">
              <div className="highlight-item">
                <span className="highlight-dot">▹</span>
                <div>
                  <strong>AI & Machine Learning Focus</strong>
                  <p>In-depth specialization coursework encompassing Neural Networks, Computer Vision, and NLP architectures.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-dot">▹</span>
                <div>
                  <strong>Software Engineering Principles</strong>
                  <p>Rigorous practice in Object-Oriented Design, relational data modeling, system algorithms, and API engineering.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-dot">▹</span>
                <div>
                  <strong>Industry Application</strong>
                  <p>Direct translation of university theory into live production code at SMAAC Net Solutions and AtliQ Technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Industry Certifications Grid */}
        <div className="certifications-showcase">
          <div className="cert-section-header">
            <div className="cert-title-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15l-2 5l9-11h-7l2-5l-9 11h7z"></path>
              </svg>
              <span>Verified Competencies & Credentials</span>
            </div>
            <h3 className="cert-section-heading">Industry & Academic Certifications</h3>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card card">
                <div className="cert-card-top">
                  <span className="cert-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {cert.status}
                  </span>
                  <span className="cert-year">{cert.period}</span>
                </div>

                <h4 className="cert-name">{cert.title}</h4>
                <span className="cert-issuer">{cert.issuer}</span>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills-chips">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="chip">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
