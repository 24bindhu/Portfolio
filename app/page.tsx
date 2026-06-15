'use client';

import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink,
  Code, Database, Cloud, Cpu, BookOpen, Briefcase, Star, GitBranch,
  Award, Trophy, Eye, Brain, Zap, Shield
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'skills', 'projects', 'certificates'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
              Sai Bindhu Javvaji
            </h1>
            <div className="hidden md:flex space-x-6">
              {['about', 'education', 'experience', 'skills', 'projects', 'certificates'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 text-sm font-medium tracking-wide ${
                      activeSection === section
                        ? 'text-sky-400 border-b border-sky-400'
                        : 'text-slate-300 hover:text-slate-50'
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ABOUT / HERO SECTION */}
      <section
        id="about"
        className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800"
      >
        <div className="max-w-4xl mx-auto text-center space-y-7">
          <p className="text-sm tracking-[0.35em] uppercase text-slate-400">
            Software Engineering Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-50">
            Sai Bindhu Javvaji
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light">
            Software Developer &amp; Computer Science Graduate
          </p>
          <div className="mx-auto mt-4 inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-sky-300">
            <Briefcase className="w-4 h-4 mr-2" />
            Currently: AI Automation Developer at Melanin Valley
          </div>

          {/* Contact */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-slate-300 text-base">
            <a
              href="tel:408-603-5506"
              className="flex items-center gap-2 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              408-603-5506
            </a>
            <a
              href="mailto:javvajisbindhu@outlook.com"
              className="flex items-center gap-2 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              javvajisbindhu@outlook.com
            </a>
            <a
              href="https://linkedin.com/in/sai-bindhu-javvaji-32b2b9237"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          {/* Bio */}
          <div className="pt-8">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              Computer Science graduate with experience in AI-driven systems, backend development, 
              and scalable software engineering. Skilled in building REST APIs, LLM-powered workflows, 
              and cloud-based applications using Python, JavaScript/TypeScript. Strong foundation in 
              system design, data structures, and secure software development with experience delivering 
              production-ready features in Agile teams. Passionate about building reliable AI and full-stack systems. 
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-20 md:py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-50 mb-8 text-center tracking-tight">
            Education
          </h2>
          <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-50">
                  University of Missouri - Kansas City
                </h3>
                <p className="text-slate-300 mt-1 text-base">
                  Bachelor of Science in Computer Science
                </p>
              </div>
              <div className="text-left md:text-right text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4" /> Graduated: December 2025
                </div>
                <div className="flex items-center gap-2 text-slate-400 mt-1">
                  <MapPin className="w-4 h-4" /> Kansas, Missouri
                </div>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-600">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span className="text-sm font-medium text-sky-300">GPA: 3.8</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 md:py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-50 text-center mb-12 tracking-tight">
            Experience
          </h2>
          <div className="space-y-8">
            {/* AI Automation Developer - Melanin Valley */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-50 mb-1">
                    AI Automation Developer
                  </h3>
                  <h4 className="text-base text-sky-300 font-medium mb-3">
                    Melanin Valley
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Python',
                      'Playwright',
                      'Pandas',
                      'Google Apps Script',
                      'Gmail API',
                      'Wix & GoAffPro'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-slate-200 font-medium mb-1">
                    April 2026 – Present
                  </div>
                  <div className="text-slate-400">United States</div>
                </div>
              </div>
              <ul className="space-y-3 text-slate-200 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Architected 6 Google Apps Script workflows with Gmail API integrations, eliminating manual onboarding processes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Built a document generation system that automated agreement creation and qualification-based email workflows.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Developed Python pipelines using Playwright and Pandas to process and deduplicate 12K+ healthcare provider records.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Configured Wix and GoAffPro automations for member acquisition, outreach, and referral tracking.
                  </span>
                </li>
              </ul>
            </div>

            {/* Software Developer Intern - SelectQuote */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-50 mb-1">
                    Software Developer Intern
                  </h3>
                  <h4 className="text-base text-sky-300 font-medium mb-3">
                    SelectQuote
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'JavaScript',
                      'TypeScript',
                      'AWS Lambda',
                      'CloudWatch',
                      'Postman',
                      'Serverless Framework'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-slate-200 font-medium mb-1">
                    May 2025 – August 2025
                  </div>
                  <div className="text-slate-400">United States</div>
                </div>
              </div>
              <ul className="space-y-3 text-slate-200 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Updated AWS Lambda memory settings in Serverless Framework from 2048 MB to 10240 MB to prevent crashes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Resolved duplicate prescription issues by redesigning API response handling and frontend retry behavior, introducing
recalculation status tracking to prevent duplicate record creation caused by timeout-based retries.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Improved CRM data integrity by enforcing dialer-state validation before logging Click-to-Dial activity.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Developed and tested REST APIs in JavaScript and TypeScript using Postman, contributing to 5+ production releases.
                  </span>
                </li>
              </ul>
            </div>

            {/* AI Software Engineer Intern - NeuralSeek */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-50 mb-1">
                    AI Software Engineer Intern
                  </h3>
                  <h4 className="text-base text-sky-300 font-medium mb-3">
                    NeuralSeek (CerebralBlue Inc.)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Python',
                      'LLM',
                      'AI Workflows',
                      'Prompt Engineering',
                      'Data Validation'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-slate-200 font-medium mb-1">
                    October 2025 – November 2025
                  </div>
                  <div className="text-slate-400">United States</div>
                </div>
              </div>
              <ul className="space-y-3 text-slate-200 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Designed backend-supported LLM workflows integrating multiple datasets with a
                    focus on reliability and consistency.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Improved agent reasoning pipelines by refining prompts and validating structured
                    input data.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Collaborated with engineers to evaluate production AI systems for correctness
                    and stability.
                  </span>
                </li>
              </ul>
            </div>

            {/* Software Engineering Intern - Key Chain Applications */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-50 mb-1">
                    Software Engineering Intern – Mobile Development
                  </h3>
                  <h4 className="text-base text-sky-300 font-medium mb-3">
                    KeyChain Applications (Startup)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Dart', 'Flutter', 'Android', 'Provider', 'UI/UX'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-slate-200 font-medium mb-1">
                    February 2024 – July 2024
                  </div>
                  <div className="text-slate-400">Remote, Canada</div>
                </div>
              </div>
              <ul className="space-y-3 text-slate-200 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Developed and optimized Flutter applications using reusable widgets, improving
                    load time and rendering by 35%.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Debugged Android builds and resolved performance issues, reducing application
                    crash rates by 50%.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Refactored legacy codebases and collaborated with designers to improve UI
                    responsiveness and UX consistency.
                  </span>
                </li>
              </ul>
            </div>

            {/* Software Developer - IEEE TEMS Chapter */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-50 mb-1">
                    Software Developer (Student Lead)
                  </h3>
                  <h4 className="text-base text-sky-300 font-medium mb-3">
                    IEEE TEMS Chapter
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'Flask', 'Git', 'HTML/CSS'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-slate-200 font-medium mb-1">
                    June 2022 – February 2023
                  </div>
                  <div className="text-slate-400">India</div>
                </div>
              </div>
              <ul className="space-y-3 text-slate-200 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Built and deployed an event registration website using Flask and responsive
                    frontend components.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Led programming workshops for 20+ students on Python, JavaScript, and
                    Git/GitHub workflows.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Mentored peers on version control best practices and collaborative software
                    development.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 md:py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-50 text-center mb-12 tracking-tight">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-sm">
              <h3 className="font-semibold text-base mb-4 text-slate-50 flex items-center gap-2 tracking-wide uppercase">
                <Code className="w-4 h-4 text-sky-400" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'TypeScript', 'R', 'Java', 'C', 'C++', 'SQL'].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-600 text-slate-100 rounded-lg text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-sm">
              <h3 className="font-semibold text-base mb-4 text-slate-50 flex items-center gap-2 tracking-wide uppercase">
                <Cloud className="w-4 h-4 text-sky-400" />
                Backend &amp; Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Node.js',
                  'Flask',
                  'Express.js',
                  'REST APIs',
                  'AWS Lambda',
                  'Vercel',
                  'Render',
                  'Authentication',
                  'JWT'
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-600 text-slate-100 rounded-lg text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-sm">
              <h3 className="font-semibold text-base mb-4 text-slate-50 flex items-center gap-2 tracking-wide uppercase">
                <Database className="w-4 h-4 text-sky-400" />
                Frontend &amp; Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React.js',
                  'HTML',
                  'CSS',
                  'Bootstrap',
                  'Tailwind',
                  'PostgreSQL',
                  'MongoDB',
                  'Sequelize'
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-600 text-slate-100 rounded-lg text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-8">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-sm">
              <h3 className="font-semibold text-base mb-4 text-slate-50 flex items-center gap-2 tracking-wide uppercase">
                <Cpu className="w-4 h-4 text-sky-400" />
                Core Concepts &amp; Methodologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'System Design',
                  'API Security',
                  'OOP',
                  'Agile/SCRUM',
                  'SDLC',
                  'CI/CD',
                  'Machine Learning',
                  'NLP'
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-600 text-slate-100 rounded-lg text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 md:py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-50 text-center mb-12 tracking-tight">
            Featured Projects
          </h2>

          <div className="space-y-10">
            {/* Full-stack & Product */}
            <div>
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
                Full‑stack &amp; Product
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* InDesign Manager */}
                <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                  <Briefcase className="w-7 h-7 text-sky-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-slate-50 mb-2">
                    InDesign Manager (GID)
                  </h3>
                  <p className="text-sm text-slate-200 mb-4">
                    Built role-based dashboards, REST APIs, and responsive Next.js/Tailwind
                    frontend. Managed project and material data with PostgreSQL, Sequelize ORM, JWT
                    auth, and CI/CD-ready deployment via Vercel and Render.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      'TypeScript',
                      'Node.js',
                      'Next.js',
                      'Express',
                      'PostgreSQL',
                      'Sequelize',
                      'JWT'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/24bindhu/Project---Interiors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block text-center w-full py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>

                {/* Neptune Banking */}
                <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                  <Shield className="w-7 h-7 text-sky-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-slate-50 mb-2">
                    Neptune Banking (Capstone)
                  </h3>
                  <p className="text-sm text-slate-200 mb-4">
                    Developed backend validation, REST APIs, and secure MongoDB storage with error
                    handling. Built interactive React dashboards with real-time account and
                    transaction visualization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['MongoDB', 'React', 'Node.js', 'JavaScript', 'REST APIs'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/24bindhu/Banking_App_Capstone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block text-center w-full py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>

                {/* SavvyEats */}
                <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                  <Star className="w-7 h-7 text-sky-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-slate-50 mb-2">
                    SavvyEats
                  </h3>
                  <p className="text-sm text-slate-200 mb-4">
                    Built responsive React frontend and Node.js APIs with secure authentication and
                    session management. Integrated AI-generated images, chatbot-based nutrition
                    guidance, and real-time data handling with MongoDB.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['JavaScript', 'Node.js', 'React.js', 'MongoDB', 'AI Integration'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <a
                    href="https://github.com/24bindhu/SavvyEats"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block text-center w-full py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* AI & Data */}
            <div>
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
                AI &amp; Data
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* TalentAlignAI */}
                <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                  <Brain className="w-7 h-7 text-sky-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-slate-50 mb-2">
                    TalentAlignAI
                  </h3>
                  <p className="text-sm text-slate-200 mb-4">
                    Developed Python APIs for unstructured text processing, semantic similarity
                    scoring, and skill alignment. Built Gradio UI integrating LLM outputs for
                    real-time resume-job matching and AI recommendations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Python', 'NLP', 'REST API', 'LLM', 'sentence-transformers', 'Gradio'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <a
                    href="https://github.com/24bindhu/TalentAlignAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block text-center w-full py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>

                {/* TweetSentimentClassifier */}
                <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                  <Zap className="w-7 h-7 text-sky-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-slate-50 mb-2">
                    TweetSentimentClassifier
                  </h3>
                  <p className="text-sm text-slate-200 mb-4">
                    Performed sentiment analysis on 10k+ tweets using both Naive Bayes and
                    lexicon-based techniques, evaluating models with precision, recall, and
                    F1-score.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Python', 'NLP', 'Scikit-learn', 'TextBlob', 'Machine Learning'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <a
                    href="https://github.com/24bindhu/TweetSentimentClassifier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block text-center w-full py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>

                {/* PredicTrade */}
                <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                  <Cpu className="w-7 h-7 text-sky-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-slate-50 mb-2">
                    PredicTrade
                  </h3>
                  <p className="text-sm text-slate-200 mb-4">
                    Developed Random Forest, KNN, and Decision Tree models for stock index
                    forecasting. Optimized preprocessing with efficient data structures and
                    validated accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Python', 'Machine Learning', 'Random Forest', 'KNN', 'Decision Trees'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <a
                    href="https://github.com/24bindhu/PredicTrade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block text-center w-full py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Design & Experience */}
            <div>
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
                Design &amp; Experience
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Guru Interiors */}
                <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                  <Briefcase className="w-7 h-7 text-sky-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-slate-50 mb-2">
                    Guru Interiors
                  </h3>
                  <p className="text-sm text-slate-200 mb-4">
                    Professional interior design portfolio website showcasing modern design
                    aesthetics, project galleries, and services. Built with responsive design and
                    smooth animations for an elegant user experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-900 border border-slate-600 text-slate-100 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://guru-interiors.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/24bindhu/Portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 bg-slate-900 text-slate-50 border border-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50 hover:text-slate-900 hover:border-sky-500 transition-colors flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-20 md:py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-50 text-center mb-12 tracking-tight">
            Certificates &amp; Achievements
          </h2>
          <div className="space-y-6">
            {/* AWS Certified Cloud Practitioner */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-600">
                  <Cloud className="w-7 h-7 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-50 mb-1">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                    <Award className="w-4 h-4 text-sky-400" />
                    Amazon Web Services
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-slate-200 text-sm">
                <p>
                  Validated foundational knowledge of AWS Cloud concepts, services, and terminology.
                  Demonstrated understanding of AWS architectural principles, security, compliance,
                  and core services including compute, storage, networking, and databases.
                </p>
                <div className="bg-slate-900 border border-slate-600 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-50 mb-2 flex items-center gap-2 text-xs tracking-wide uppercase">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    Certification Details
                  </h4>
                  <ul className="text-xs text-slate-200 space-y-1 list-disc list-inside">
                    <li>Issued: 2025</li>
                    <li>Provider: Amazon Web Services (AWS)</li>
                    <li>Credential: Cloud Practitioner</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://drive.google.com/file/d/17K2BBY_Z_gt3mUPLzxkhwSu4vquRODu9/view"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Certificate
              </a>
            </div>

            {/* Generative AI Mastermind */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-600">
                  <Brain className="w-7 h-7 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-50 mb-1">
                    Generative AI Mastermind
                  </h3>
                  <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                    <Award className="w-4 h-4 text-sky-400" />
                    OutSkill
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-slate-200 text-sm">
                <p>
                  Completed comprehensive training in Generative AI technologies, including large
                  language models, prompt engineering, AI application development, and ethical AI
                  practices. Gained hands-on experience with cutting-edge AI tools and frameworks.
                </p>
                <div className="bg-slate-900 border border-slate-600 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-50 mb-2 flex items-center gap-2 text-xs tracking-wide uppercase">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    Course Details
                  </h4>
                  <ul className="text-xs text-slate-200 space-y-1 list-disc list-inside">
                    <li>Issued: 2025</li>
                    <li>Provider: OutSkill</li>
                    <li>Focus: Generative AI, LLMs, Prompt Engineering</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://drive.google.com/file/d/118YpeqKe6BXW4eZ48xtLqtj10uuVqMU1/view"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Certificate
              </a>
            </div>

            {/* NeuralSeek Multi-Tier AI Agent Architecture */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-600">
                  <Zap className="w-7 h-7 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-50 mb-1">
                    Multi-Tier AI Agent Architecture
                  </h3>
                  <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                    <Award className="w-4 h-4 text-sky-400" />
                    Level 3 Certification
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-slate-200 text-sm">
                <p>
                  Advanced certification in NeuralSeek&apos;s multi-tier AI agent architecture.
                  Demonstrated expertise in designing and implementing complex AI systems with
                  multiple layers of reasoning, data integration, and workflow orchestration.
                </p>
                <div className="bg-slate-900 border border-slate-600 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-50 mb-2 flex items-center gap-2 text-xs tracking-wide uppercase">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    Certification Details
                  </h4>
                  <ul className="text-xs text-slate-200 space-y-1 list-disc list-inside">
                    <li>Issued: 2025</li>
                    <li>Provider: NeuralSeek (CerebralBlue Inc.)</li>
                    <li>Level: 3 (Advanced)</li>
                    <li>Focus: Multi-Tier AI Agent Architecture</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://drive.google.com/file/d/12tQ-m8VoWXB7Z_aJuhj-TADlqoN69nUr/view"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Certificate
              </a>
            </div>

            {/* UMKC Hack-A-Roo 2024 */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-600">
                  <Trophy className="w-7 h-7 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-50 mb-1">
                    UMKC Hack-A-Roo 2024
                  </h3>
                  <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                    <Award className="w-4 h-4 text-sky-400" />
                    2nd Place
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-slate-200 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-slate-50">Achievement Details</h4>
                  <p>
                    Secured 2nd place in the Computer Science LLM track at the 2024 UMKC
                    Hack-A-Roo held on November 15th, 2024. Demonstrated exceptional problem-solving
                    skills and technical innovation in building AI-powered solutions.
                  </p>
                </div>
                <div className="bg-slate-900 border border-slate-600 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-50 mb-2 flex items-center gap-2 text-xs tracking-wide uppercase">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    Event Details
                  </h4>
                  <ul className="text-xs text-slate-200 space-y-1 list-disc list-inside">
                    <li>Date: November 15th, 2024</li>
                    <li>Track: Computer Science LLM</li>
                    <li>Sponsors: T-Mobile, NASA, NSF, UMKC</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedCertificate(
                    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bf794587d_WhatsAppImage2025-08-23at70745AM.jpg'
                  )
                }
                className="w-full mt-6 py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Certificate
              </button>
            </div>

            {/* Anthropic Model Context Protocol */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-600">
                  <Award className="w-7 h-7 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-50 mb-1">
                    Model Context Protocol
                  </h3>
                  <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                    <BookOpen className="w-4 h-4 text-sky-400" />
                    Certified
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-slate-200 text-sm">
                <h4 className="font-semibold mb-2 text-slate-50">Course Achievement</h4>
                <p>
                  Successfully completed &quot;Introduction to Model Context Protocol&quot; course
                  from Anthropic, gaining expertise in advanced AI model interaction protocols and
                  best practices.
                </p>

                <div className="bg-slate-900 border border-slate-600 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-50 mb-2 flex items-center gap-2 text-xs tracking-wide uppercase">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    Course Details
                  </h4>
                  <ul className="text-xs text-slate-200 space-y-1 list-disc list-inside">
                    <li>Issued: August 16, 2025</li>
                    <li>Certificate No: xfbowq2kxtwj</li>
                    <li>Provider: Anthropic</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button
                    onClick={() =>
                      setSelectedCertificate(
                        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c0dc80506_certificate-xfbowq2kxtwj-1755402116.pdf'
                      )
                    }
                    className="py-3 bg-slate-50 text-slate-900 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-all flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <a
                    href="https://verify.skilljar.com/c/xfbowq2kxtwj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 bg-slate-900 text-slate-50 border border-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50 hover:text-slate-900 hover:border-sky-500 transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-700 flex justify-between items-center">
              <h3 className="text-sm font-semibold text-slate-50">Certificate</h3>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="w-8 h-8 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center text-slate-200 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-4 bg-slate-900">
              {selectedCertificate.endsWith('.pdf') ? (
                <iframe
                  src={selectedCertificate}
                  className="w-full h-[70vh]"
                  title="Certificate PDF"
                />
              ) : (
                <img
                  src={selectedCertificate}
                  alt="Certificate"
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-700 text-center text-slate-400">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-normal mb-4 text-slate-50 tracking-tight">
              Let&apos;s Connect
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="tel:408-603-5506"
                className="hover:text-sky-400 transition-colors text-slate-200"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:javvajisbindhu@outlook.com"
                className="hover:text-sky-400 transition-colors text-slate-200"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sai-bindhu-javvaji-32b2b9237"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors text-slate-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6">
            <p className="text-xs text-slate-500">
              © 2025 Sai Bindhu Javvaji. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
