import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('python'); // 'python' | 'terminal' | 'json'
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeCommand, setActiveCommand] = useState('info');

  const pythonSnippet = `# developer_profile.py
class SoftwareDeveloper:
    def __init__(self):
        self.name = "${personalInfo.name}"
        self.headline = "${personalInfo.headline}"
        self.current_role = "Graduate Engineer Trainee @ SMAAC Net Solutions"
        self.education = "B.Tech CSE (AI/ML) · GLA University '27"
        self.languages = ["Python", "SQL", "Java", "JavaScript"]
        self.databases = ["MySQL", "PostgreSQL", "SQLite"]
        self.technologies = ["RAG", "Whisper", "Power BI", "Flask", "OpenCV"]

    def get_status(self):
        return {
            "status": "Available for Software Engineering Roles",
            "relocation": "Open to Remote & On-Site",
            "passion": "Building scalable backend services & data-driven systems"
        }`;

  const jsonSnippet = `{
  "developer": {
    "name": "${personalInfo.name}",
    "title": "Software Developer",
    "specialization": "Python, Relational Databases, AI/ML & BI",
    "organization": "SMAAC Net Solutions",
    "academics": "GLA University (B.Tech '27)",
    "repositories": 6,
    "verified_open_source": true,
    "available_for_hire": true
  }
}`;

  const terminalOutputs = {
    info: `$ python -m krishna_tanwar --info
✓ Profile: Krishna Tanwar (Software Developer)
✓ Current Role: Graduate Engineer Trainee @ SMAAC Net Solutions
✓ Work Availability: Open to Remote & On-Site
✓ Education: GLA University (B.Tech CSE AI/ML '27)
✓ Core Focus: Python Backend, Relational Databases & SQL, AI/ML, BI
✓ Status: Ready for software engineering opportunities`,
    stack: `$ check-stack --full
[Languages]   Python (Primary), SQL (Primary), Java, JavaScript
[Backend]     Flask, REST APIs, Object-Oriented Architecture
[Databases]   MySQL, PostgreSQL, SQLite, Star Schema Design
[AI & ML]     RAG, Local Ollama, Whisper, OpenCV, YOLO
[Analytics]   Power BI, DAX, Power Query, Pandas, Excel`,
    git: `$ git log -1 --stat
commit 8f2c19a (HEAD -> main, origin/main)
Author: Krishna Tanwar <kstanwar0000@gmail.com>
Date:   Recent Engineering Sprint

    feat: production RAG assistant & real-time computer vision
    6 files changed, 1420 insertions(+), 0 deletions(-)
    Status: All automated checks passed (100% verified)`
  };

  const handleCopyCode = () => {
    let textToCopy = pythonSnippet;
    if (activeTab === 'terminal') {
      textToCopy = terminalOutputs[activeCommand];
    } else if (activeTab === 'json') {
      textToCopy = jsonSnippet;
    }
    navigator.clipboard.writeText(textToCopy);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToResume = (e) => {
    e.preventDefault();
    const target = document.getElementById('resume');
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-glow"></span>
            <span className="badge-text">{personalInfo.currentRole}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <p className="hero-headline">{personalInfo.headline}</p>

          <p className="hero-description">{personalInfo.shortBio}</p>

          {/* Quick Highlight Stats Grid */}
          <div className="hero-stats-grid">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-card">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hero-actions">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={handleScrollToProjects}
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a 
              href="#resume" 
              className="btn btn-secondary"
              onClick={handleScrollToResume}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              View Resume
            </a>

            <a
              href="#contact"
              className="btn btn-outline"
              onClick={handleScrollToContact}
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a 
              href={`mailto:${personalInfo.email}`}
              className="social-link"
              aria-label="Send Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Multi-tab Interactive Terminal */}
        <div className="hero-visual">
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>

              {/* Tabs */}
              <div className="terminal-tabs">
                <button
                  type="button"
                  className={`term-tab ${activeTab === 'python' ? 'active' : ''}`}
                  onClick={() => setActiveTab('python')}
                >
                  developer.py
                </button>
                <button
                  type="button"
                  className={`term-tab ${activeTab === 'terminal' ? 'active' : ''}`}
                  onClick={() => setActiveTab('terminal')}
                >
                  bash terminal
                </button>
                <button
                  type="button"
                  className={`term-tab ${activeTab === 'json' ? 'active' : ''}`}
                  onClick={() => setActiveTab('json')}
                >
                  profile.json
                </button>
              </div>

              <button 
                type="button" 
                className="copy-btn" 
                onClick={handleCopyCode}
                aria-label="Copy terminal content"
              >
                {copiedCode ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div className="terminal-body">
              {activeTab === 'python' && (
                <pre>
                  <code>
                    <span className="syntax-comment"># developer_profile.py</span>{'\n'}
                    <span className="syntax-keyword">class</span> <span className="syntax-class">SoftwareDeveloper</span>:{'\n'}
                    {'    '}<span className="syntax-keyword">def</span> <span className="syntax-function">__init__</span>(self):{'\n'}
                    {'        '}self.name = <span className="syntax-string">"{personalInfo.name}"</span>{'\n'}
                    {'        '}self.role = <span className="syntax-string">"Graduate Engineer Trainee"</span>{'\n'}
                    {'        '}self.company = <span className="syntax-string">"SMAAC Net Solutions"</span>{'\n'}
                    {'        '}self.education = <span className="syntax-string">"B.Tech CSE (AI/ML) · GLA '27"</span>{'\n'}
                    {'        '}self.languages = [<span className="syntax-string">"Python"</span>, <span className="syntax-string">"SQL"</span>, <span className="syntax-string">"Java"</span>]{'\n'}
                    {'        '}self.databases = [<span className="syntax-string">"MySQL"</span>, <span className="syntax-string">"PostgreSQL"</span>, <span className="syntax-string">"SQLite"</span>]{'\n'}
                    {'        '}self.specialties = [<span className="syntax-string">"Backend"</span>, <span className="syntax-string">"RAG"</span>, <span className="syntax-string">"Power BI"</span>]{'\n\n'}
                    {'    '}<span className="syntax-keyword">def</span> <span className="syntax-function">is_available_for_hire</span>(self):{'\n'}
                    {'        '}<span className="syntax-keyword">return</span> <span className="syntax-bool">True</span>  <span className="syntax-comment"># Actively connecting</span>
                  </code>
                </pre>
              )}

              {activeTab === 'terminal' && (
                <div className="interactive-terminal">
                  <div className="term-command-picker">
                    <span className="picker-label">Run command:</span>
                    <button 
                      type="button" 
                      className={`cmd-btn ${activeCommand === 'info' ? 'active' : ''}`}
                      onClick={() => setActiveCommand('info')}
                    >
                      --info
                    </button>
                    <button 
                      type="button" 
                      className={`cmd-btn ${activeCommand === 'stack' ? 'active' : ''}`}
                      onClick={() => setActiveCommand('stack')}
                    >
                      --stack
                    </button>
                    <button 
                      type="button" 
                      className={`cmd-btn ${activeCommand === 'git' ? 'active' : ''}`}
                      onClick={() => setActiveCommand('git')}
                    >
                      git log
                    </button>
                  </div>
                  <pre className="term-output-pre">
                    <code>{terminalOutputs[activeCommand]}</code>
                  </pre>
                </div>
              )}

              {activeTab === 'json' && (
                <pre>
                  <code>
                    <span className="syntax-comment">// profile.json</span>{'\n'}
                    {jsonSnippet}
                  </code>
                </pre>
              )}
            </div>

            <div className="terminal-footer">
              <span className="pulse-indicator"></span>
              <span className="footer-status">{personalInfo.statusBadge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
