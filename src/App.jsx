import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, BrainCircuit, Terminal, Download, Cpu, Database, Layout } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link }) => (
  <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/60 transition-all group shadow-xl">
    <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm mb-5 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(tag => (
        <span key={tag} className="px-2.5 py-0.5 bg-blue-500/10 text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-500/20">
          {tag}
        </span>
      ))}
    </div>
    <a href={link} className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-white transition-colors">
      Explore Project <ExternalLink className="ml-2 w-4 h-4" />
    </a>
  </div>
);

export default function Portfolio() {
  const projects = [
    {
      title: "MedFusion (AI Clinical Scribe)",
      description: "A multi-agent system using LangChain and DeepSeek. Features Whisper for voice clinical scribing and ViT-DistilGPT2 for automated X-ray report generation.",
      tags: ["Multi-Agent Systems", "LangChain", "Whisper", "Computer Vision"],
      link: "#"
    },
    {
      title: "TripSplit",
      description: "A Flutter & Firebase mobile app for expense tracking. Built a custom debt-simplification algorithm to minimize settlements among group members.",
      tags: ["Flutter", "Firebase", "Algorithms", "UI/UX"],
      link: "#"
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Real-time visualization tool powered by Gemini API to categorize and analyze user sentiments across various data inputs.",
      tags: ["React", "Gemini API", "Data Viz", "NLP"],
      link: "#"
    },
    {
      title: "Rainfall Prediction Enhancement",
      description: "Research improving accuracy by 3-8% using SMOTE and Machine Learning. Published in IEEE 2024.",
      tags: ["Python", "SMOTE", "Scikit-Learn", "Research"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Hero Section */}
      <header className="max-w-6xl mx-auto pt-32 pb-20 px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
          Available for Software Developer Roles
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white">
          Himanshu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Yadav</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          AI Specialization • 8.01 CGPA • Amrita Vishwa Vidyapeetham
        </p>
        
        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="/RESUME_HIMANSHU_YADAV.pdf" 
            download="Himanshu_Yadav_Resume.pdf"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            <Download size={20} /> Download Resume
          </a>
          <div className="flex gap-6 sm:ml-8">
            <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors"><Github size={28} /></a>
            <a href="https://linkedin.com" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={28} /></a>
            <a href="mailto:himanshu80023@gmail.com" className="text-slate-400 hover:text-white transition-colors"><Mail size={28} /></a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-800/50">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
          <BrainCircuit className="text-blue-500" /> About Me
        </h2>
        <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
          <p>
            I am a final-year Computer Science student focusing on the intersection of AI research and practical software engineering. My technical journey is defined by building intelligent systems that solve real-world complexities—ranging from clinical diagnostics to financial optimization.
          </p>
          <p>
            From publishing research on <strong className="text-blue-400 font-semibold">Rainfall Prediction at IEEE</strong> to developing complex multi-agent clinical tools like <strong className="text-emerald-400 font-semibold">MedFusion</strong>, I thrive on turning complex data into intuitive, high-impact user experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
          <Terminal className="text-blue-500" /> Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-900/30 py-24 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-3 text-white">
            <Cpu className="text-emerald-400" /> Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4 text-white font-bold tracking-widest uppercase text-xs">
                <Terminal size={16} className="text-blue-400" /> Languages
              </div>
              <p className="text-slate-400 text-sm leading-7">Python, Java, C, JavaScript (Basic)</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4 text-white font-bold tracking-widest uppercase text-xs">
                <BrainCircuit size={16} className="text-blue-400" /> AI & ML
              </div>
              <p className="text-slate-400 text-sm leading-7">PyTorch, TensorFlow, Scikit-learn, OpenCV, NumPy, Pandas</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4 text-white font-bold tracking-widest uppercase text-xs">
                <Layout size={16} className="text-blue-400" /> Development
              </div>
              <p className="text-slate-400 text-sm leading-7">Flutter, Firebase, Git, GitHub, Android Studio, AWS</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4 text-white font-bold tracking-widest uppercase text-xs">
                <Database size={16} className="text-blue-400" /> Databases
              </div>
              <p className="text-slate-400 text-sm leading-7">MySQL, Oracle 11g, MongoDB</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center text-slate-500 text-sm border-t border-slate-800/50">
        <p>© 2026 Himanshu Yadav • Built with React & Tailwind • Hosted on Vercel</p>
      </footer>
    </div>
  );
}