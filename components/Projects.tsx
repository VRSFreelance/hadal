import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronDown, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const getProjectDescription = (name: string) => {
    switch (name) {
      case 'Lesoko Dashboards':
        return "Advanced logistical dashboards built with Django and PostgreSQL, featuring image-based tracking and map integration.";
      case 'Enterprise Landing Pages':
        return "High-converting, performance-optimized landing pages developed for startups and MNCs with premium animations.";
      case 'ISSS & Ergonomic AI':
        return "Cross-platform mobile ecosystem integrated with AI-driven vision processing for ergonomic health monitoring.";
      case 'Butterfly Ragland Portal':
        return "A full-scale educational management system designed to streamline student curriculum and parent communications.";
      case 'E-commerce Platforms':
        return "Robust e-commerce solutions built on Laravel, optimized for high seasonal traffic and advanced search visibility.";
      case 'Hospital Management':
        return "An enterprise-grade HMS platform facilitating patient record tracking, scheduling, and administrative medical workflows.";
      default:
        return "A high-performance digital solution focused on business scalability and refined user experiences.";
    }
  };

  const getDeliverables = (name: string) => {
    switch (name) {
      case 'Hospital Management':
        return ['Patient Workflow Management', 'Automated Appointment Flow', 'Scalable Enterprise Database'];
      case 'ISSS & Ergonomic AI':
        return ['AI post-processing', 'Ergonomic Posture Feedback', 'Unified Mobile Ecosystem'];
      case 'Enterprise Landing Pages':
        return ['Conversion Rate Optimization', 'Premium Visual Design', 'Full Responsive Compliance'];
      case 'Lesoko Dashboards':
        return ['Advanced GIS Integration', 'Custom Telemetry Tracking', 'High-Availability Dashboards'];
      case 'E-commerce Platforms':
        return ['SEO Ranking Strategy', 'Secure Payment Workflows', 'Performance Load Balancing'];
      case 'Butterfly Ragland Portal':
        return ['Academic ERP System', 'Integrated Parent Portal', 'Curriculum Resource Management'];
      default:
        return ['Custom Systems Architecture', 'Comprehensive Tech Audits', 'Secure Cloud Infrastructure'];
    }
  };

  return (
    <section id="work" className="py-24 bg-slate-50 dark:bg-brand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-6 md:space-y-0">
          <div>
            <span className="text-accent font-black uppercase tracking-widest text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tight text-brand dark:text-white">Our Case Studies</h2>
          </div>
          <p className="max-w-md text-slate-500 dark:text-slate-300 text-lg font-medium">
            Explore our curated selection of digital transformation projects and technology deliverables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-[580px] bg-white dark:bg-brand/90 rounded-[2.5rem] border-2 border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden group hover:border-accent-highlight transition-all duration-300"
            >
              {/* Document Header */}
              <div className="px-8 py-5 bg-brand dark:bg-brand-dark flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-xl bg-accent text-brand shadow-sm">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black truncate max-w-[140px] text-white uppercase tracking-tight">{project.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-accent-highlight font-black">Project Archive</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-accent-highlight animate-pulse" />
                  <span className="text-[9px] font-black text-accent-highlight uppercase tracking-[0.2em]">Verified</span>
                </div>
              </div>

              {/* Scrollable Document Content */}
              <div className="flex-1 overflow-y-auto p-0 custom-scrollbar">
                <style dangerouslySetInnerHTML={{ __html: `
                  .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                  .custom-scrollbar::-webkit-scrollbar-thumb { background: #E7BF88; border-radius: 10px; }
                `}} />
                
                {/* Visual Cover */}
                <div className="h-52 relative overflow-hidden bg-slate-200">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand/50 group-hover:bg-brand/20 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-6 px-3 py-1 bg-brand/80 backdrop-blur-md rounded-lg text-[9px] font-black text-accent uppercase tracking-[0.3em]">
                    Phase: Complete
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 space-y-10">
                  <div>
                    <h4 className="text-xs font-black text-brand dark:text-accent uppercase tracking-[0.2em] mb-4">Project Summary</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                      {getProjectDescription(project.name)}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-brand dark:text-accent uppercase tracking-[0.2em] mb-5">Tech Ecosystem</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-4 py-2 rounded-xl bg-brand/5 dark:bg-white/10 text-[10px] font-black dark:text-accent-cream uppercase border border-slate-200 dark:border-transparent">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-brand dark:text-accent uppercase tracking-[0.2em] mb-5">Deliverables</h4>
                    <ul className="space-y-4">
                      {getDeliverables(project.name).map((deliverable, dIdx) => (
                        <li key={dIdx} className="flex items-start text-sm text-slate-500 dark:text-slate-400 font-medium">
                          <CheckCircle2 size={16} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                    <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 italic uppercase tracking-[0.3em] font-bold">
                      --- Proprietary Repository ---
                    </p>
                  </div>
                </div>
              </div>

              {/* Document Footer */}
              <div className="px-8 py-5 bg-slate-50 dark:bg-brand-dark border-t border-slate-200 dark:border-white/10 flex justify-between items-center mt-auto">
                <div className="flex space-x-1.5">
                   {[1,2,3].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i===1 ? 'honeycomb-gradient' : 'bg-slate-300 dark:bg-white/20'}`} />)}
                </div>
                <div className="text-[10px] font-black text-brand/40 dark:text-accent/30 uppercase tracking-[0.3em]">REF_ID: HB_2026_X</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Scroll Hint */}
        <div className="flex justify-center mt-16">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="flex flex-col items-center text-slate-400 dark:text-accent/40"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3">Scroll cards for technical audit</p>
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;