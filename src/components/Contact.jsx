import React, { useState } from 'react';
import { contactInfo, personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [subject, setSubject] = useState(contactInfo.templates[0].subject);
  const [message, setMessage] = useState(contactInfo.templates[0].body);
  const [toastMessage, setToastMessage] = useState('');

  const handleSelectTemplate = (idx) => {
    setSelectedTemplate(idx);
    setSubject(contactInfo.templates[idx].subject);
    setMessage(contactInfo.templates[idx].body);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    showToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCopyMessage = (e) => {
    if (e) e.preventDefault();
    navigator.clipboard.writeText(`Subject: ${subject}\n\n${message}`);
    showToast('Subject & message copied to clipboard!');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Communication</span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Open to early-career software engineering, Python developer, and backend opportunities. Send a message or connect directly.
          </p>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="contact-toast" role="status">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{toastMessage}</span>
          </div>
        )}

        <div className="contact-layout-grid">
          {/* Left Column: Direct Channels */}
          <div className="contact-sidebar">
            <div className="contact-intro-card card">
              <div className="contact-author-header">
                <img 
                  src={personalInfo.photo || "/krishna.png"} 
                  alt={personalInfo.name} 
                  className="contact-author-photo" 
                />
                <div>
                  <h3 className="contact-headline">{contactInfo.headline}</h3>
                  <div className="contact-status-tag">
                    <span className="status-dot"></span> Available for Roles
                  </div>
                </div>
              </div>
              <p className="contact-subtext">{contactInfo.subtext}</p>

              <div className="location-indicator">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{contactInfo.location}</span>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="contact-channels-list">
              {/* Email Card */}
              <div className="channel-box card">
                <div className="channel-icon-col">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="channel-info">
                  <span className="channel-label">Email Address</span>
                  <a href={`mailto:${contactInfo.email}`} className="channel-value">
                    {contactInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm copy-email-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="channel-box card">
                <div className="channel-icon-col">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="channel-info">
                  <span className="channel-label">LinkedIn Profile</span>
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="channel-value">
                    linkedin.com/in/krishnatanwars
                  </a>
                </div>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="Visit LinkedIn profile"
                >
                  Connect
                </a>
              </div>

              {/* GitHub Card */}
              <div className="channel-box card">
                <div className="channel-icon-col">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="channel-info">
                  <span className="channel-label">GitHub Profile</span>
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="channel-value">
                    github.com/KrishnaTanwars
                  </a>
                </div>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="Visit GitHub profile"
                >
                  Follow
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Composer */}
          <div className="contact-composer-column">
            <div className="composer-card card">
              <div className="composer-header">
                <span className="composer-badge">Quick Message Composer</span>
                <h4 className="composer-title">Send a Quick Dispatch</h4>
                <p className="composer-sub">Select a preset or customize your message, then copy it directly to your clipboard.</p>
              </div>

              {/* Template Buttons */}
              <div className="template-pills">
                {contactInfo.templates.map((tpl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`template-btn ${selectedTemplate === idx ? 'active' : ''}`}
                    onClick={() => handleSelectTemplate(idx)}
                  >
                    {tpl.title}
                  </button>
                ))}
              </div>

              <form onSubmit={handleCopyMessage} className="composer-form">
                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="form-input"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-body" className="form-label">Message Content</label>
                  <textarea
                    id="contact-body"
                    className="form-textarea"
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="composer-actions">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copy Message Text
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
