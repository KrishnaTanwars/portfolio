import React from 'react';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <span className="footer-brand">{personalInfo.name}</span>
          <p className="footer-copy">
            © {CURRENT_YEAR} Krishna Tanwar. Built for performance, accessibility, and clean engineering.
          </p>
        </div>

        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${personalInfo.email}`}>
                Email
              </a>
            </li>
            <li>
              <a href={`tel:${personalInfo.phone.replace(/[\s+]/g, '')}`}>
                Phone
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={handleScrollToTop}
            aria-label="Scroll back to top of page"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
