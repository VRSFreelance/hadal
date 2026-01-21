import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-brand/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-accent font-black uppercase tracking-widest text-sm">Consultation</span>
            <h2 className="text-5xl font-black mt-6 mb-10 tracking-tight text-brand dark:text-white">Partner with us for <br />your next project.</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-14 leading-relaxed font-bold">
              We are ready to listen to your requirements and propose a technology roadmap that fits your vision. 
              Let's build a functional and scalable digital future together.
            </p>

            <div className="space-y-12">
              <div className="flex items-center space-x-8">
                <div className="w-18 h-18 rounded-3xl honeycomb-gradient text-brand flex items-center justify-center shadow-2xl shadow-accent/20">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-accent-highlight uppercase tracking-[0.2em] mb-2">Business Inquiry</p>
                  <a href="mailto:hello@hadalbees.com" className="text-2xl font-black hover:honeycomb-gradient-text transition-colors text-brand dark:text-white">
                    hello@hadalbees.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="w-18 h-18 rounded-3xl honeycomb-gradient text-brand flex items-center justify-center shadow-2xl shadow-accent/20">
                  <MessageSquare size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-accent-highlight uppercase tracking-[0.2em] mb-2">Strategy</p>
                  <p className="text-2xl font-black text-brand dark:text-white">Request a Tech Roadmap</p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="w-18 h-18 rounded-3xl honeycomb-gradient text-brand flex items-center justify-center shadow-2xl shadow-accent/20">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-accent-highlight uppercase tracking-[0.2em] mb-2">Headquarters</p>
                  <p className="text-2xl font-black text-brand dark:text-white">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-[4rem] bg-brand text-white border-4 border-accent shadow-[0_35px_60px_-15px_rgba(8,31,77,0.5)] dark:shadow-none"
          >
            <h3 className="text-3xl font-black mb-10 uppercase tracking-tight honeycomb-gradient-text">Project Inquiry</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 ml-2">Organization</label>
                  <input 
                    type="text" 
                    placeholder="Acme Corp"
                    className="w-full px-7 py-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-accent-highlight focus:ring-0 outline-none transition-all placeholder:text-white/30 font-bold"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 ml-2">Corporate Email</label>
                  <input 
                    type="email" 
                    placeholder="contact@acme.com"
                    className="w-full px-7 py-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-accent-highlight focus:ring-0 outline-none transition-all placeholder:text-white/30 font-bold"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 ml-2">Service Context</label>
                <select className="w-full px-7 py-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-accent-highlight focus:ring-0 outline-none transition-all appearance-none text-white font-black uppercase tracking-widest text-xs">
                  <option className="bg-brand">Website Development</option>
                  <option className="bg-brand">Web Applications</option>
                  <option className="bg-brand">Mobile Applications</option>
                  <option className="bg-brand">Graphic Design</option>
                  <option className="bg-brand">Digital Marketing</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 ml-2">Requirement Brief</label>
                <textarea 
                  rows={4}
                  placeholder="Describe your technical vision..."
                  className="w-full px-7 py-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-accent-highlight focus:ring-0 outline-none transition-all resize-none placeholder:text-white/30 font-bold"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-6 honeycomb-gradient text-brand rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center space-x-4 shadow-2xl hover:bg-accent-hover transition-all active:scale-95 group"
              >
                <span>Send Brief</span>
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;