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
          <div className="degree-card card">
            <div className="edu-card-header">
              <div className="edu-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>

              <div className="edu-header-text">
                <h3 className="edu-institution">{educationInfo.institution}</h3>
                <span className="edu-location">📍 {educationInfo.location}</span>
              </div>

              <div className="edu-badge">
                <span className="badge-pulse"></span>
                <span>{educationInfo.period}</span>
              </div>
            </div>

            <div className="edu-degree-details">
              <h4 className="edu-degree-title">{educationInfo.degree} in {educationInfo.major}</h4>
              <p className="edu-major">
                Specialization in <span className="text-accent">{educationInfo.specialization}</span> · <strong className="text-success">CGPA: {educationInfo.cgpa}</strong>
              </p>
            </div>

            <div className="edu-coursework">
              <h5 className="coursework-title">Key Core Foundations & Competencies:</h5>
              <div className="coursework-tags">
                {educationInfo.focusAreas.map((area, idx) => (
                  <span key={idx} className="chip">{area}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Track Record & Schooling */}
          <div className="academic-highlight-card card">
            <div className="highlight-header">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h4 className="highlight-title">Academic Track Record</h4>
            </div>

            <div className="highlight-points">
              {educationInfo.academicDetails.map((item, idx) => (
                <div key={idx} className="highlight-item">
                  <span className="highlight-dot">▹</span>
                  <div>
                    <strong>{item.degree}</strong>
                    <p>{item.institution} · <span className="text-accent font-semibold">{item.score}</span> · {item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Sub-Section */}
        <div className="certifications-sub-section">
          <div className="sub-section-title-wrap">
            <div className="sub-section-badge">
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
                <div className="cert-header">
                  <span className="cert-status-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {cert.status}
                  </span>
                  <span className="cert-issuer-badge">{cert.issuer}</span>
                </div>

                <h4 className="cert-name">{cert.title}</h4>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills-chips">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="cert-chip">{skill}</span>
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
