import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

const Experience: React.FC = () => {
  const companyValues = [
    {
      icon: <Zap size={28} />,
      title: "Agile Development",
      description: "We employ iterative development cycles to ensure fast, high-quality deployments that adapt to your evolving business requirements."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Reliable Architecture",
      description: "Our systems are built on secure, battle-tested infrastructures ensuring maximum uptime and data integrity for your enterprise."
    },
    {
      icon: <Globe size={28} />,
      title: "Global Reach",
      description: "Based in Chennai, we serve a worldwide clientele, providing digital transformations that bridge regional gaps and local markets."
    },
    {
      icon: <Cpu size={28} />,
      title: "Deep Tech Expertise",
      description: "From AI analytics to complex cloud ecosystems, we leverage the latest technological advancements to solve real-world problems."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-brand/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Company Background */}
          <div>
            <div className="inline-block mb-6">
               <span className="text-accent font-black tracking-widest uppercase text-sm">Our Foundation</span>
               <div className="h-2 w-full honeycomb-gradient rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight leading-tight text-brand dark:text-white mt-4">
              A Partner in <br />
              <span className="text-accent-highlight">Digital Success</span>
            </h2>
            
            <div className="space-y-8 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              <p>
                HadalBees Technologies delivers modern web, mobile, and digital solutions for businesses across various sectors. We don't just build software; we architect solutions that become the backbone of your business operations.
              </p>
              <p>
                Our team brings together years of cross-functional expertise in full-stack development, mobile ecosystems, and strategic digital consulting. We are committed to technological excellence and unparalleled client satisfaction.
              </p>
              
              <div className="pt-10 grid grid-cols-2 gap-10">
                 <div className="p-10 rounded-[2.5rem] bg-white dark:bg-brand/60 border-2 border-slate-200 dark:border-accent shadow-2xl">
                    <h4 className="text-5xl font-black text-accent-highlight mb-2">0%</h4>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-60">Downtime Goals</p>
                 </div>
                 <div className="p-10 rounded-[2.5rem] bg-white dark:bg-brand/60 border-2 border-slate-200 dark:border-accent shadow-2xl">
                    <h4 className="text-5xl font-black text-accent-highlight mb-2">24/7</h4>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-60">Tech Support</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Core Values / Approach */}
          <div className="grid sm:grid-cols-2 gap-8">
            {companyValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white dark:bg-brand border-2 border-transparent hover:border-accent-highlight transition-all group shadow-xl hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand/5 dark:bg-accent/10 text-accent flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-brand transition-all shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-black mb-4 text-brand dark:text-white uppercase tracking-tight">{value.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-bold">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;