import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-brand text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-2.5 honeycomb-gradient" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-5xl font-black tracking-tighter mb-8 uppercase">HADALBEES<span className="text-accent">.</span></h3>
            <p className="text-slate-400 max-w-sm text-xl leading-relaxed font-bold">
              HadalBees Technologies — Digital Solutions & Technology Consulting provider focusing on future-ready ecosystems.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-black mb-10 text-xs uppercase tracking-[0.4em] text-accent-highlight">Navigation</h4>
            <ul className="space-y-5">
              <li><a href="#about" className="text-slate-300 hover:honeycomb-gradient-text transition-colors font-black uppercase text-xs tracking-[0.2em]">Our Mission</a></li>
              <li><a href="#services" className="text-slate-300 hover:honeycomb-gradient-text transition-colors font-black uppercase text-xs tracking-[0.2em]">Expertise</a></li>
              <li><a href="#work" className="text-slate-300 hover:honeycomb-gradient-text transition-colors font-black uppercase text-xs tracking-[0.2em]">Portfolio</a></li>
              <li><a href="#contact" className="text-slate-300 hover:honeycomb-gradient-text transition-colors font-black uppercase text-xs tracking-[0.2em]">Consultation</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-black mb-10 text-xs uppercase tracking-[0.4em] text-accent-highlight">Connect</h4>
            <div className="flex flex-wrap gap-5">
              <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 text-slate-300 hover:honeycomb-gradient hover:text-brand transition-all flex items-center justify-center shadow-lg active:scale-95">
                <Linkedin size={22} />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 text-slate-300 hover:honeycomb-gradient hover:text-brand transition-all flex items-center justify-center shadow-lg active:scale-95">
                <Github size={22} />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 text-slate-300 hover:honeycomb-gradient hover:text-brand transition-all flex items-center justify-center shadow-lg active:scale-95">
                <Twitter size={22} />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 text-slate-300 hover:honeycomb-gradient hover:text-brand transition-all flex items-center justify-center shadow-lg active:scale-95">
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em]">
            © 2026 HadalBees Technologies. All rights reserved.
          </p>
          <div className="flex space-x-10 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
            <a href="#" className="hover:honeycomb-gradient-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:honeycomb-gradient-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;