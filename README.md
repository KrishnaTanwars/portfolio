# Krishna Tanwar — Personal Developer Portfolio

[![Deploy to GitHub Pages](https://github.com/KrishnaTanwars/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/KrishnaTanwars/portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-Visit_Portfolio-blue?style=flat&logo=googlechrome)](https://krishnatanwars.github.io/portfolio/)

A modern, high-performance, responsive personal portfolio website engineered for **Krishna Tanwar** — Software Developer, Graduate Engineer Trainee at SMAAC Net Solutions, and Computer Science Engineering student specializing in AI/ML at GLA University.

---

## 🌟 Highlights & Features

- **Production-Ready & Responsive**: Optimized for desktop, tablet, and mobile with fluid layouts and accessible touch controls.
- **Tailored Recruiter Experience**: Clear professional positioning focusing on software development, Python, SQL, database design, and business intelligence.
- **Verified GitHub Project Showcase**: Highlights 6 select projects grouped into *Software Development & AI/ML* and *Data Analytics & Business Intelligence*.
- **Data-Driven Architecture**: Easily customizable via a single central source of truth in [`src/data/portfolioData.js`](./src/data/portfolioData.js).
- **Smart Resume Handling**: Gracefully handles resume downloads and provides fallback contact guidance if a PDF is pending upload.
- **Zero External Backend Dependencies**: Fully static, fast-loading, and completely free static hosting via GitHub Pages with automated GitHub Actions CI/CD.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS with custom properties design system (dark charcoal & deep navy theme, restrained cyan accents)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## 📂 Project Directory Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Actions deployment workflow
├── public/
│   ├── resume-placeholder.txt  # Documentation for placing official resume
│   └── resume.pdf              # (Optional) Drop your compiled resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive navigation & mobile menu
│   │   ├── Hero.jsx            # Headline, elevator pitch & interactive terminal preview
│   │   ├── About.jsx           # Engineering background & core focus pillars
│   │   ├── Experience.jsx      # Career timeline (SMAAC Net Solutions, AtliQ Technologies)
│   │   ├── Projects.jsx        # Category-filtered cards for 6 GitHub repositories
│   │   ├── Skills.jsx          # Structured competencies (Languages, Web, DB, AI, BI)
│   │   ├── Education.jsx       # GLA University credentials & foundation coursework
│   │   ├── Contact.jsx         # Email mailto, copy-to-clipboard, LinkedIn & GitHub
│   │   ├── Footer.jsx          # Dynamic copyright, social links & scroll-to-top
│   │   └── ResumeModal.jsx     # Interactive modal handling resume downloads/requests
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all content
│   ├── App.css                 # Component layout styling & responsive rules
│   ├── App.jsx                 # App root component
│   ├── index.css               # Design tokens, color system, and global reset
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML entry with Open Graph & SEO tags
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration with relative base path
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v20.18+ or later)
- npm (v10+ or later)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/KrishnaTanwars/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Run the development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to view the live preview.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 📝 Customization Guide

### Updating Your Profile, Projects, or Skills
All textual content, links, project details, and skills are centrally maintained in:
👉 [`src/data/portfolioData.js`](./src/data/portfolioData.js)

To update any detail (such as adding a new project or updating your current role):
1. Open `src/data/portfolioData.js`.
2. Edit the corresponding object (`personalInfo`, `experiences`, `projects`, `skillCategories`, `educationInfo`, or `contactInfo`).
3. Commit and push:
   ```bash
   git add src/data/portfolioData.js
   git commit -m "Update portfolio data"
   git push origin main
   ```
The GitHub Actions workflow will automatically rebuild and deploy your changes in under 60 seconds!

---

## 📄 Adding Your Resume PDF

To activate direct one-click PDF downloads:
1. Export your resume as a PDF.
2. Name the file `resume.pdf`.
3. Place it in the `public/` directory:
   ```text
   public/resume.pdf
   ```
4. Commit and push:
   ```bash
   git add public/resume.pdf
   git commit -m "Add official resume PDF"
   git push origin main
   ```
The website will automatically detect the file and enable the **Download Official Resume** button.

---

## ⚙️ GitHub Pages Deployment Configuration

This repository uses automated deployment via GitHub Actions.

If you are setting this up for the first time:
1. Navigate to your repository on GitHub: `https://github.com/KrishnaTanwars/portfolio`
2. Go to **Settings** > **Pages**
3. Under **Build and deployment** > **Source**, select:
   **GitHub Actions**
4. Push to the `main` branch to trigger the automatic build and deployment pipeline!

---

## 📬 Contact & Links

- **Email**: [kstanwar0000@gmail.com](mailto:kstanwar0000@gmail.com)
- **LinkedIn**: [linkedin.com/in/krishnatanwars](https://linkedin.com/in/krishnatanwars)
- **GitHub**: [github.com/KrishnaTanwars](https://github.com/KrishnaTanwars)

---

*© Krishna Tanwar. Built with React and Vite.*
