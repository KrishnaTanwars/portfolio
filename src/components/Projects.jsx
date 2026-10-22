import React, { useState } from 'react';
import { projects, projectCategories } from '../data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedArchitectureId, setExpandedArchitectureId] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const toggleArchitecture = (id) => {
    setExpandedArchitectureId(prev => prev === id ? null : id);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Engineering Work</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            Software applications, applied AI/ML systems, and data analytics platforms built with Python, SQL, and modern engineering tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters" role="tablist" aria-label="Project Categories">
          {projectCategories.map((cat) => {
            const count = cat.id === 'all' 
              ? projects.length 
              : projects.filter(p => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`filter-btn ${isActive ? 'filter-btn-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const isArchExpanded = expandedArchitectureId === project.id;

            return (
              <article key={project.id} className="project-card card">
                <div className="project-card-header">
                  <span className="project-category-tag">{project.categoryLabel}</span>

                  <div className="header-badges-row">
                    {project.metricBadge && (
                      <span className="metric-badge">
                        {project.metricBadge}
                      </span>
                    )}
                    {project.verified ? (
                      <span className="verified-badge" title="Verified against public GitHub repository">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Verified
                      </span>
                    ) : (
                      <span className="review-badge" title="Repository in staging / private">
                        In Review
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-desc">{project.description}</p>

                {/* Key Highlights */}
                <div className="project-highlights">
                  <h4 className="highlights-title">Key Capabilities & Features:</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <span className="highlight-bullet">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Drawer Toggle */}
                {project.architecture && (
                  <div className="project-architecture-wrapper">
                    <button
                      type="button"
                      className="arch-toggle-btn"
                      onClick={() => toggleArchitecture(project.id)}
                      aria-expanded={isArchExpanded}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                      <span>{isArchExpanded ? 'Hide Pipeline Architecture' : 'View Pipeline Architecture'}</span>
                      <svg 
                        className={`arch-arrow ${isArchExpanded ? 'rotated' : ''}`} 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>

                    {isArchExpanded && (
                      <div className="architecture-box">
                        <span className="arch-label">System Flow & Data Pipeline:</span>
                        <div className="arch-flow-text">
                          <code>{project.architecture}</code>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="chip">{tech}</span>
                  ))}
                </div>

                {/* Card Footer Actions */}
                <div className="project-actions">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm project-repo-btn"
                    aria-label={`View ${project.title} repository on GitHub`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub Repository
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
