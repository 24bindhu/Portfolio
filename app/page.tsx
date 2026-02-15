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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Sai Bindhu Javvaji
            </h1>
            <div className="hidden md:flex space-x-8">
              {['about', 'education', 'experience', 'skills', 'projects', 'certificates'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 text-sm font-medium ${
                    activeSection === section
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ABOUT / HERO SECTION */}
      <section id="about" className="pt-24 pb-20 px-6 bg-gradient-to-br from-blue-50/50 to-purple-50/30">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">
            <span className="block text-slate-800">Sai Bindhu</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Javvaji
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
            Software Developer &amp; Computer Science Graduate
          </p>

          {/* Contact */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-600">
            <a href="tel:408-603-5506" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Phone className="w-4 h-4"/>408-603-5506</a>
            <a href="mailto:javvajisbindhu@outlook.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Mail className="w-4 h-4"/>javvajisbindhu@outlook.com</a>
            <a href="https://linkedin.com/in/sai-bindhu-javvaji-32b2b9237" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Linkedin className="w-4 h-4"/>LinkedIn
            </a>
          </div>

          {/* Bio */}
          <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
            Computer Science graduate with strong experience in full-stack and backend software development, including building
            production-grade APIs, AWS serverless services, and scalable web applications. Proven ability to deliver reliable software in
            Agile environments with a solid foundation in data structures, system design, and cloud technologies.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-20 px-6 bg-gradient-to-br from-white to-slate-50/80">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-light text-center mb-8">Education</h2>
          <div className="bg-white rounded-2xl p-8 shadow border">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-semibold">University of Missouri - Kansas City</h3>
                <p className="text-slate-600">Bachelor of Science in Computer Science</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <div className="flex items-center gap-2 text-slate-600"><Calendar className="w-4 h-4"/> Graduated: December 2025</div>
                <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-4 h-4"/> Kansas, Missouri</div>
              </div>
            </div>
            <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border">
              <span className="text-lg font-semibold text-emerald-700">GPA: 3.8</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-50/60 to-purple-50/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl font-light text-center mb-12">Experience</h2>

          {/* Software Developer Intern - SelectQuote */}
          <div className="bg-white rounded-2xl p-8 shadow border">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">Software Developer Intern</h3>
                <h4 className="text-xl text-blue-600 font-medium mb-3">SelectQuote</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['JavaScript', 'TypeScript', 'AWS Lambda', 'CloudWatch', 'Postman', 'Serverless Framework'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-slate-600 font-medium mb-1">May 2025 – August 2025</div>
                <div className="text-slate-500">United States</div>
              </div>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built and optimized AWS Lambda backend services using the Serverless Framework to improve scalability and reliability.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Implemented fault-tolerant workflows with structured error handling and CloudWatch logging to reduce errors by 90%.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Improved system observability by filtering invalid CRM logs during inactive dialer sessions, increasing data accuracy.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Developed and tested REST APIs in JavaScript and TypeScript using Postman, contributing to 5+ production releases.</span>
              </li>
            </ul>
          </div>

          {/* AI Software Engineer Intern - NeuralSeek */}
          <div className="bg-white rounded-2xl p-8 shadow border">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">AI Software Engineer Intern</h3>
                <h4 className="text-xl text-purple-600 font-medium mb-3">NeuralSeek (CerebralBlue Inc.)</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'LLM', 'AI Workflows', 'Prompt Engineering', 'Data Validation'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-slate-600 font-medium mb-1">October 2025 – November 2025</div>
                <div className="text-slate-500">United States</div>
              </div>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Designed backend-supported LLM workflows integrating multiple datasets with a focus on reliability and consistency.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Improved agent reasoning pipelines by refining prompts and validating structured input data.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Collaborated with engineers to evaluate production AI systems for correctness and stability.</span>
              </li>
            </ul>
          </div>

          {/* Software Engineering Intern - Key Chain Applications */}
          <div className="bg-white rounded-2xl p-8 shadow border">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">Software Engineering Intern – Mobile Development</h3>
                <h4 className="text-xl text-indigo-600 font-medium mb-3">Key Chain Applications (Startup)</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Dart', 'Flutter', 'Android', 'Provider', 'UI/UX'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-slate-600 font-medium mb-1">February 2024 – July 2024</div>
                <div className="text-slate-500">Remote, Canada</div>
              </div>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Developed and optimized Flutter applications using reusable widgets, improving load time and rendering by 35%.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Debugged Android builds and resolved performance issues, reducing application crash rates by 50%.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Refactored legacy codebases and collaborated with designers to improve UI responsiveness and UX consistency.</span>
              </li>
            </ul>
          </div>

          {/* Software Developer - IEEE TEMS Chapter */}
          <div className="bg-white rounded-2xl p-8 shadow border">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">Software Developer (Student Lead)</h3>
                <h4 className="text-xl text-teal-600 font-medium mb-3">IEEE TEMS Chapter</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'JavaScript', 'Flask', 'Git', 'HTML/CSS'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-slate-600 font-medium mb-1">June 2022 – February 2023</div>
                <div className="text-slate-500">India</div>
              </div>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built and deployed an event registration website using Flask and responsive frontend components.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Led programming workshops for 20+ students on Python, JavaScript, and Git/GitHub workflows.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Mentored peers on version control best practices and collaborative software development.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-indigo-50/60 to-blue-50/40">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-light">Technical Toolkit</h2>
          <p className="text-slate-600">A collection of technologies I work with.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-semibold flex items-center gap-2 bg-blue-700 text-white p-2 rounded"><Code/> Languages</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Python','JavaScript','TypeScript','R','Java','C','C++','SQL'].map(s=>(
                <span key={s} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-md">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold flex items-center gap-2 bg-purple-700 text-white p-2 rounded"><Cloud/> Backend & Cloud</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Node.js','Flask','Express.js','REST APIs','AWS Lambda','Vercel','Render','Authentication','JWT'].map(s=>(
                <span key={s} className="px-4 py-2 bg-purple-100 text-purple-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-md">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold flex items-center gap-2 bg-indigo-700 text-white p-2 rounded"><Database/> Frontend & Databases</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {['React.js','HTML','CSS','Bootstrap','Tailwind','PostgreSQL','MongoDB','Sequelize'].map(s=>(
                <span key={s} className="px-4 py-2 bg-indigo-100 text-indigo-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-md">{s}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8">
          <div className="bg-white rounded-2xl p-6 shadow border">
            <h3 className="font-semibold flex items-center gap-2 text-slate-800 mb-4"><Cpu/> Core Concepts & Methodologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Data Structures & Algorithms','System Design','API Security','OOP','Agile/SCRUM','SDLC','CI/CD','Machine Learning','NLP'].map(s=>(
                <span key={s} className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 rounded-full font-medium transition-all hover:scale-105 hover:shadow-md">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-white to-slate-50/60">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-light">Featured Projects</h2>
          <p className="text-slate-600">A selection of projects I'm proud of.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* InDesign Manager */}
          <div className="bg-white rounded-2xl p-8 shadow border flex flex-col hover:shadow-2xl transition-all duration-300">
            <Briefcase className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">InDesign Manager (GID)</h3>
            <p className="text-slate-600 mb-4">Built role-based dashboards, REST APIs, and responsive Next.js/Tailwind frontend. Managed project and material data with PostgreSQL, Sequelize ORM, JWT auth, and CI/CD-ready deployment via Vercel and Render.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['TypeScript', 'Node.js', 'Next.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
            <a href="https://github.com/24bindhu/InDesign-Manager" target="_blank" rel="noopener noreferrer" className="mt-auto block text-center w-full py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
              <Github className="w-5 h-5"/>
              View on GitHub
            </a>
          </div>

          {/* TalentAlignAI */}
          <div className="bg-white rounded-2xl p-8 shadow border flex flex-col hover:shadow-2xl transition-all duration-300">
            <Brain className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">TalentAlignAI</h3>
            <p className="text-slate-600 mb-4">Developed Python APIs for unstructured text processing, semantic similarity scoring, and skill alignment. Built Gradio UI integrating LLM outputs for real-time resume-job matching and AI recommendations.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Python', 'NLP', 'REST API', 'LLM', 'sentence-transformers', 'Gradio'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
            <a href="https://github.com/24bindhu/TalentAlignAI" target="_blank" rel="noopener noreferrer" className="mt-auto block text-center w-full py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
              <Github className="w-5 h-5"/>
              View on GitHub
            </a>
          </div>

          {/* SavvyEats */}
          <div className="bg-white rounded-2xl p-8 shadow border flex flex-col hover:shadow-2xl transition-all duration-300">
            <Star className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">SavvyEats</h3>
            <p className="text-slate-600 mb-4">Built responsive React frontend and Node.js APIs with secure authentication and session management. Integrated AI-generated images, chatbot-based nutrition guidance, and real-time data handling with MongoDB.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['JavaScript', 'Node.js', 'React.js', 'MongoDB', 'AI Integration'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
            <a href="https://github.com/24bindhu/SavvyEats" target="_blank" rel="noopener noreferrer" className="mt-auto block text-center w-full py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
              <Github className="w-5 h-5"/>
              View on GitHub
            </a>
          </div>

          {/* Neptune Banking */}
          <div className="bg-white rounded-2xl p-8 shadow border flex flex-col hover:shadow-2xl transition-all duration-300">
            <Shield className="w-8 h-8 text-indigo-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">Neptune Banking (Capstone)</h3>
            <p className="text-slate-600 mb-4">Developed backend validation, REST APIs, and secure MongoDB storage with error handling. Built interactive React dashboards with real-time account and transaction visualization.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['MongoDB', 'React', 'Node.js', 'JavaScript', 'REST APIs'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
            <a href="https://github.com/24bindhu/Neptune-Banking" target="_blank" rel="noopener noreferrer" className="mt-auto block text-center w-full py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
              <Github className="w-5 h-5"/>
              View on GitHub
            </a>
          </div>

          {/* TweetSentimentClassifier */}
          <div className="bg-white rounded-2xl p-8 shadow border flex flex-col hover:shadow-2xl transition-all duration-300">
            <Zap className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">TweetSentimentClassifier</h3>
            <p className="text-slate-600 mb-4">Performed sentiment analysis on 10k+ tweets using both Naive Bayes and lexicon-based techniques, evaluating models with precision, recall, and F1-score.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Python', 'NLP', 'Scikit-learn', 'TextBlob', 'Machine Learning'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
            <a href="https://github.com/24bindhu/TweetSentimentClassifier" target="_blank" rel="noopener noreferrer" className="mt-auto block text-center w-full py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
              <Github className="w-5 h-5"/>
              View on GitHub
            </a>
          </div>

          {/* PredicTrade */}
          <div className="bg-white rounded-2xl p-8 shadow border flex flex-col hover:shadow-2xl transition-all duration-300">
            <Cpu className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">PredicTrade</h3>
            <p className="text-slate-600 mb-4">Developed Random Forest, KNN, and Decision Tree models for stock index forecasting. Optimized preprocessing with efficient data structures and validated accuracy.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Python', 'Machine Learning', 'Random Forest', 'KNN', 'Decision Trees'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
            <a href="https://github.com/24bindhu/PredicTrade" target="_blank" rel="noopener noreferrer" className="mt-auto block text-center w-full py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
              <Github className="w-5 h-5"/>
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-20 px-6 bg-gradient-to-br from-amber-50/40 via-orange-50/30 to-yellow-50/40">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-light">Certificates & Achievements</h2>
          <p className="text-slate-600">Recognition for excellence and continuous learning.</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">

          {/* AWS Certified Cloud Practitioner */}
          <div className="bg-gradient-to-br from-white to-orange-50/50 rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-1">AWS Certified Cloud Practitioner</h3>
                <div className="flex items-center gap-2 text-orange-600 text-lg font-medium">
                  <Award className="w-5 h-5" /> Amazon Web Services
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-700">
              <p>
                Validated foundational knowledge of AWS Cloud concepts, services, and terminology. Demonstrated understanding of AWS architectural principles, security, compliance, and core services including compute, storage, networking, and databases.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-4">
                <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-600" /> Certification Details
                </h4>
                <ul className="text-sm text-orange-700 space-y-1 list-disc list-inside">
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
              className="w-full mt-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Eye className="w-5 h-5" />
              View Certificate
            </a>
          </div>

          {/* Generative AI Mastermind */}
          <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-1">Generative AI Mastermind</h3>
                <div className="flex items-center gap-2 text-purple-600 text-lg font-medium">
                  <Award className="w-5 h-5" /> OutSkill
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-700">
              <p>
                Completed comprehensive training in Generative AI technologies, including large language models, prompt engineering, AI application development, and ethical AI practices. Gained hands-on experience with cutting-edge AI tools and frameworks.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-4">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-600" /> Course Details
                </h4>
                <ul className="text-sm text-purple-700 space-y-1 list-disc list-inside">
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
              className="w-full mt-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Eye className="w-5 h-5" />
              View Certificate
            </a>
          </div>

          {/* NeuralSeek Multi-Tier AI Agent Architecture */}
          <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-1">Multi-Tier AI Agent Architecture</h3>
                <div className="flex items-center gap-2 text-blue-600 text-lg font-medium">
                  <Award className="w-5 h-5" /> Level 3 Certification
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-700">
              <p>
                Advanced certification in NeuralSeek's multi-tier AI agent architecture. Demonstrated expertise in designing and implementing complex AI systems with multiple layers of reasoning, data integration, and workflow orchestration.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" /> Certification Details
                </h4>
                <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
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
              className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Eye className="w-5 h-5" />
              View Certificate
            </a>
          </div>

          {/* UMKC Hack-A-Roo 2024 */}
          <div className="bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-1">UMKC Hack-A-Roo 2024</h3>
                <div className="flex items-center gap-2 text-yellow-600 text-lg font-medium">
                  <Award className="w-5 h-5" /> 2nd Place
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-700">
              <div>
                <h4 className="font-semibold mb-2">Achievement Details</h4>
                <p>
                  Secured 2nd place in the Computer Science LLM track at the 2024 UMKC Hack-A-Roo held on November 15th, 2024. Demonstrated exceptional problem-solving skills and technical innovation in building AI-powered solutions.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" /> Event Details
                </h4>
                <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                  <li>Date: November 15th, 2024</li>
                  <li>Track: Computer Science LLM</li>
                  <li>Sponsors: T-Mobile, NASA, NSF, UMKC</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setSelectedCertificate('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bf794587d_WhatsAppImage2025-08-23at70745AM.jpg')}
              className="w-full mt-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Eye className="w-5 h-5" />
              View Certificate
            </button>
          </div>

          {/* Anthropic Model Context Protocol */}
          <div className="bg-gradient-to-br from-white to-emerald-50/50 rounded-2xl p-8 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-1">Model Context Protocol</h3>
                <div className="flex items-center gap-2 text-emerald-600 text-lg font-medium">
                  <BookOpen className="w-5 h-5" /> Certified
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-700">
              <h4 className="font-semibold mb-2">Course Achievement</h4>
              <p>
                Successfully completed "Introduction to Model Context Protocol" course from Anthropic, gaining expertise in advanced AI model interaction protocols and best practices.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                <h4 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600" /> Course Details
                </h4>
                <ul className="text-sm text-emerald-700 space-y-1 list-disc list-inside">
                  <li>Issued: August 16, 2025</li>
                  <li>Certificate No: xfbowq2kxtwj</li>
                  <li>Provider: Anthropic</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <button
                  onClick={() => setSelectedCertificate('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c0dc80506_certificate-xfbowq2kxtwj-1755402116.pdf')}
                  className="py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <a
                  href="https://verify.skilljar.com/c/xfbowq2kxtwj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-gradient-to-r from-slate-500 to-slate-600 text-white rounded-lg font-semibold hover:from-slate-600 hover:to-slate-700 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedCertificate(null)}>
          <div className="max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Certificate</h3>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-4">
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
      <footer className="py-12 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-center text-slate-400">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-light mb-4 text-white">Let's Connect</h3>
            <div className="flex justify-center gap-6">
              <a href="tel:408-603-5506" className="hover:text-blue-400 transition-colors text-white"><Phone className="w-6 h-6" /></a>
              <a href="mailto:javvajisbindhu@outlook.com" className="hover:text-blue-400 transition-colors text-white"><Mail className="w-6 h-6" /></a>
              <a href="https://linkedin.com/in/sai-bindhu-javvaji-32b2b9237" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-white"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6">
            <p>© 2025 Sai Bindhu Javvaji. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}