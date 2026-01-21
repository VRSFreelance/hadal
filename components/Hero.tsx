import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-brand transition-colors duration-500">
      {/* Decorative Orbs with Brand Colors */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand/10 dark:bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div 
            variants={item}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full border border-accent/40 bg-accent/5 mb-10 shadow-sm"
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand dark:text-accent-highlight">
              Accepting New Enterprise Projects
            </span>
          </motion.div>

          <motion.h1 
            variants={item}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] text-brand dark:text-white"
          >
            We Build <br className="hidden md:block" /> <span className="honeycomb-gradient-text">Digital Excellence</span>
          </motion.h1>

          <motion.h2 
            variants={item}
            className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-10"
          >
            HadalBees Technologies delivers future-ready technology solutions.
          </motion.h2>

          <motion.p 
            variants={item}
            className="max-w-2xl text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-14 leading-relaxed font-medium"
          >
            We architect high-performance web platforms, scalable software ecosystems, and innovative mobile experiences 
            designed to accelerate your business growth.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-8">
            <a 
              href="#work" 
              className="group relative px-12 py-5 honeycomb-gradient text-brand rounded-full font-black uppercase tracking-widest overflow-hidden transition-all shadow-2xl shadow-accent/20 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center">
                Our Work
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#contact" 
              className="px-12 py-5 border-2 border-brand dark:border-accent text-brand dark:text-accent rounded-full font-black uppercase tracking-widest hover:bg-brand hover:text-accent-cream dark:hover:bg-accent-hover dark:hover:text-brand transition-all active:scale-95"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;