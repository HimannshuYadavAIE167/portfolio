import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, BrainCircuit, Terminal } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link }) => (
  <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:shadow-2xl transition-all">
    <h3 className="text-xl font-bold text-blue-400 mb-2">{title}</h3>
    <p className="text-slate-300 text-sm mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map(tag => (
        <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md">{tag}</span>
      ))}
    </div>
    <a href={link} className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm">
      View Project <ExternalLink className="ml-1 w-4 h-4" />
    </a>
  </div>
);

export default function Portfolio() {
  const projects = [
    {
      title: "MedFusion (AI Clinical Scribe)",
      description: "AI-Powered Clinical Scribe and disease analysis system. Features voice-to-text summarization (Whisper) and X-ray analysis (ViT-DistilGPT2) for report generation.",
      tags: ["DeepSeek", "LangChain", "PyTorch", "OpenCV", "Whisper", "ViT", "DistilGPT2", "Multi-Agent Systems"],
      link: "#"
    },
    {
      title: "TripSplit",
      description: "Full-stack mobile app for group travel expense management. Implements a Debt Simplification Algorithm to minimize transaction settlements.",
      tags: ["Flutter", "Firebase", "Algorithms", "UI/UX Design", "Full-Stack"],
      link: "#"
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Real-time visualization tool powered by Gemini API to categorize and analyze user sentiments across various data inputs.",
      tags: ["Python","Streamlit","MongoDB", "Gemini API","Transformer", "Data Viz", "Real-Time Processing", "Dashboard"],
      link: "#"
    },
    {
      title: "Rainfall Prediction Enhancement",
      description: "Research improving prediction accuracy by 3-8% using SMOTE and Machine Learning. Published in IEEE 2024.",
      tags: ["Python", "SMOTE", "Scikit-learn", "Data Preprocessing", "Machine Learning"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500">
      {/* Hero Section */}
      <header className="max-w-6xl mx-auto pt-24 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Himanshu Yadav
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Final-year CS student specialized in AI. Building impactful AI-driven solutions 
          and full-stack applications.
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com" className="hover:text-blue-400 transition"><Github /></a>
          <a href="https://linkedin.com" className="hover:text-blue-400 transition"><Linkedin /></a>
          <a href="mailto:himanshu80023@gmail.com" className="hover:text-blue-400 transition"><Mail /></a>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Terminal className="text-blue-400" /> Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-800/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <BrainCircuit className="text-emerald-400" /> Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300">
            <div>
              <h4 className="font-bold text-white mb-2">Languages</h4>
              <p>Python, Java, JavaScript, C</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">AI / ML</h4>
              <p>PyTorch, TensorFlow, Scikit-learn</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Developer Tools</h4>
              <p>Flutter, Firebase, Git/GitHub, AWS</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Databases</h4>
              <p>MongoDB, MySQL, Oracle 11g</p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
<section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-800">
  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
    <BrainCircuit className="text-blue-400" /> About Me
  </h2>
  <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
    <p>
      I am a final-year Computer Science student at Amrita Vishwa Vidyapeetham, 
      where I maintain an 8.01 CGPA and specialize in Artificial Intelligence. 
      My work focuses on building intelligent systems that solve real-world 
      complexities—ranging from clinical diagnostics to financial optimization.
    </p>
    <p>
      My technical journey is defined by projects like <strong className="text-blue-400">MedFusion</strong>, 
      an AI Clinical Co-Pilot designed to streamline medical workflows using 
      multi-agent systems and multimodal AI. I also enjoy tackling full-stack 
      challenges like <strong className="text-emerald-400">TripSplit</strong>, 
      where I blended algorithmic precision with intuitive UI/UX design.
    </p>
    <p>
      With a published IEEE research paper and certifications in AWS and Computer 
      Vision, I combine a strong theoretical foundation with hands-on engineering 
      to build the next generation of impactful software.
    </p>
  </div>
</section>

      <footer className="py-12 text-center text-slate-500 text-sm">
        © 2026 Himanshu Yadav • Built with React & Tailwind
      </footer>
    </div>
  );
}