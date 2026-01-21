import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-brand/50 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block mb-6">
               <span className="text-accent font-black tracking-widest uppercase text-sm">Our Mission</span>
               <div className="h-2 w-full honeycomb-gradient absolute -bottom-2 left-0 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight leading-tight text-brand dark:text-white mt-4">
              Empowering businesses through <br />
              <span className="honeycomb-gradient-text">Innovative Technology</span>
            </h2>
            <div className="p-8 rounded-3xl bg-brand dark:bg-accent/5 border-l-8 border-accent-highlight shadow-xl">
              <p className="text-xl font-bold honeycomb-gradient-text italic leading-relaxed">
                "HadalBees Technologies delivers modern web, mobile, and digital solutions for businesses."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-8"
          >
            <p className="font-medium">
              HadalBees Technologies is a premier technology consulting firm specializing in future-ready digital products. We partner with startups and enterprises to architect software that drives operational efficiency and market innovation.
            </p>
            <p className="font-medium">
              Our philosophy centers on building technology that solves real-world challenges. We focus on high-performance infrastructure, intuitive user experiences, and scalable solutions that generate measurable business value for our partners.
            </p>
            <div className="pt-6 flex space-x-12">
               <div>
                  <h4 className="text-4xl font-black text-brand dark:text-accent-highlight mb-1">5+</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-60">Tech Domains</p>
               </div>
               <div>
                  <h4 className="text-4xl font-black text-brand dark:text-accent-highlight mb-1">20+</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-60">Success Stories</p>
               </div>
               <div>
                  <h4 className="text-4xl font-black text-brand dark:text-accent-highlight mb-1">100%</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-60">Retention</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;