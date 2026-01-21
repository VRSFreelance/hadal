import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-brand/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-black uppercase tracking-widest text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mt-4 tracking-tight text-brand dark:text-white"
          >
            Scalable Solutions for Your Business
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-10 rounded-3xl bg-slate-50 dark:bg-brand/60 border-2 border-transparent hover:border-accent-highlight transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-brand/20"
            >
              <div className="w-20 h-20 rounded-2xl honeycomb-gradient text-brand flex items-center justify-center mb-10 shadow-xl shadow-accent/10 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-8 group-hover:honeycomb-gradient-text transition-colors text-brand dark:text-white">
                {service.title}
              </h3>
              <ul className="space-y-5">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 dark:text-slate-300 font-bold uppercase text-xs tracking-widest">
                    <div className="w-2.5 h-2.5 rounded-full honeycomb-gradient mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;