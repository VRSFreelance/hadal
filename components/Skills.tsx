import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Layout } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-brand transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative p-16 md:p-32 rounded-[4rem] bg-brand-dark text-white shadow-2xl shadow-brand/60 overflow-hidden border-t-8 border-accent-highlight">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
            <Shield size={320} className="text-accent" />
          </div>
          <div className="absolute bottom-0 left-0 p-16 opacity-5 pointer-events-none">
            <Layout size={240} className="text-accent" />
          </div>
          
          <div className="relative z-10 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-28 h-28 rounded-[2rem] honeycomb-gradient flex items-center justify-center mb-12 shadow-2xl shadow-accent/20"
            >
              <Zap size={56} className="text-brand fill-brand" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] max-w-5xl tracking-tight"
            >
              We build <span className="honeycomb-gradient-text">customizable, scalable, and reliable</span> technology solutions across all modern platforms.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex flex-wrap justify-center gap-10 text-[11px] font-black uppercase tracking-[0.4em] text-accent-cream"
            >
              <span className="flex items-center"><div className="w-3 h-3 rounded-full honeycomb-gradient mr-4 shadow-sm"/>Cloud Ready</span>
              <span className="flex items-center"><div className="w-3 h-3 rounded-full honeycomb-gradient mr-4 shadow-sm"/>Mobile First</span>
              <span className="flex items-center"><div className="w-3 h-3 rounded-full honeycomb-gradient mr-4 shadow-sm"/>Enterprise Grade</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;