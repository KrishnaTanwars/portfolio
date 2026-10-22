import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState('');

  const getIconForCategory = (icon) => {
    switch (icon) {
      case 'code':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case 'server':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        );
      case 'database':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
        );
      case 'cpu':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        );
      case 'bar-chart':
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        );
    }
  };

  const matchesSearch = (text) => {
    if (!searchQuery.trim()) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase().trim());
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Skills & Tooling Matrix</h2>
          <p className="section-subtitle">
            Categorized technical capabilities spanning Python, SQL, JavaScript, HTML5/CSS3, backend engineering, Power BI analytics, and applied AI/ML systems.
          </p>
        </div>

        {/* Interactive Search / Filter Bar */}
        <div className="skills-filter-bar">
          <div className="skills-search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search skills (e.g. Python, SQL, JavaScript, HTML, Power BI, RAG)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
              aria-label="Filter skills by keyword"
            />
            {searchQuery && (
              <button 
                type="button" 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear skill search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => {
            const hasVisibleSkills = cat.skills.some(
              skill => matchesSearch(skill.name) || (skill.tag && matchesSearch(skill.tag))
            );

            if (searchQuery.trim() && !hasVisibleSkills) {
              return null;
            }

            return (
              <div key={idx} className="skill-category-card card">
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">
                    {getIconForCategory(cat.icon)}
                  </div>
                  <h3 className="skill-cat-title">{cat.category}</h3>
                </div>

                <div className="skills-pill-container">
                  {cat.skills.map((skill, sIdx) => {
                    const isHighlighted = matchesSearch(skill.name) || (skill.tag && matchesSearch(skill.tag));
                    const isFaded = searchQuery.trim() && !isHighlighted;

                    return (
                      <div 
                        key={sIdx} 
                        className={`skill-item-badge ${isHighlighted && searchQuery.trim() ? 'skill-item-highlight' : ''} ${isFaded ? 'skill-item-faded' : ''}`}
                      >
                        <div className="skill-badge-top">
                          <span className="skill-item-name">{skill.name}</span>
                          <span className="skill-item-level">{skill.level}</span>
                        </div>
                        {skill.tag && (
                          <span className="skill-item-tag">{skill.tag}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
