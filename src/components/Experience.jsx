import React from 'react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Hands-on software development and data analytics roles across enterprise environments.
          </p>
        </div>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content card">
                <div className="timeline-header">
                  <div className="timeline-role-group">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company-meta">
                      <span className="timeline-company">{exp.company}</span>
                      <span className="timeline-bullet">•</span>
                      <span className="timeline-location">{exp.location}</span>
                    </div>
                  </div>

                  <div className="timeline-period-badge">
                    <span className="chip-badge">{exp.badge}</span>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                </div>

                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i} className="timeline-desc-item">
                      <svg className="bullet-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-technologies">
                  <span className="tech-label">Technologies:</span>
                  <div className="tech-chips">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="chip">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
