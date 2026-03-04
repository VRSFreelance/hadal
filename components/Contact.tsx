import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatusMessage('');

    emailjs
      .sendForm(
        'service_tovtkjm', 
        'template_cchsme7', 
        formRef.current,
        '7VVirm8fwh10b6KQp'
      )
      .then(
        () => {
          setStatusMessage('Inquiry sent successfully!');
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setStatusMessage('Failed to send inquiry.');
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-brand/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">

          {/* LEFT SIDE */}
          <div>
            <span className="text-accent font-black uppercase tracking-widest text-sm">
              Consultation
            </span>

            <h2 className="text-5xl font-black mt-6 mb-10 tracking-tight text-brand dark:text-white">
              Partner with us for <br />your next project.
            </h2>

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
                  <p className="text-xs font-black text-accent-highlight uppercase tracking-[0.2em] mb-2">
                    Business Inquiry
                  </p>
                  <a
                    href="mailto:hello@hadalbees.com"
                    className="text-2xl font-black hover:honeycomb-gradient-text transition-colors text-brand dark:text-white"
                  >
                    hello@hadalbees.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="w-18 h-18 rounded-3xl honeycomb-gradient text-brand flex items-center justify-center shadow-2xl shadow-accent/20">
                  <MessageSquare size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-accent-highlight uppercase tracking-[0.2em] mb-2">
                    Strategy
                  </p>
                  <p className="text-2xl font-black text-brand dark:text-white">
                    Request a Tech Roadmap
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="w-18 h-18 rounded-3xl honeycomb-gradient text-brand flex items-center justify-center shadow-2xl shadow-accent/20">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-accent-highlight uppercase tracking-[0.2em] mb-2">
                    Headquarters
                  </p>
                  <p className="text-2xl font-black text-brand dark:text-white">
                    No: 27, 3rd floor, Setu Complex, near Frontline Hospital, Chinthamani Bazaar, Trichy -620002
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-[4rem] bg-brand text-white border-4 border-accent shadow-[0_35px_60px_-15px_rgba(8,31,77,0.5)] dark:shadow-none"
          >
            <h3 className="text-3xl font-black mb-10 uppercase tracking-tight honeycomb-gradient-text">
              Project Inquiry
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

              <div className="grid md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="organization"
                  placeholder="Acme Corp"
                  required
                  className="w-full px-7 py-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-accent-highlight outline-none font-bold"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="contact@acme.com"
                  required
                  className="w-full px-7 py-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-accent-highlight outline-none font-bold"
                />
              </div>

              <select
                name="service"
                required
                className="w-full px-7 py-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-accent-highlight outline-none text-white font-black uppercase text-xs"
              >
                <option value="Website Development" className="bg-brand">Website Development</option>
                <option value="Web Applications" className="bg-brand">Web Applications</option>
                <option value="Mobile Applications" className="bg-brand">Mobile Applications</option>
                <option value="Graphic Design" className="bg-brand">Graphic Design</option>
                <option value="Digital Marketing" className="bg-brand">Digital Marketing</option>
              </select>

              <textarea
                name="message"
                rows={4}
                placeholder="Describe your technical vision..."
                required
                className="w-full px-7 py-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-accent-highlight outline-none resize-none font-bold"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-6 honeycomb-gradient text-brand rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center space-x-4 shadow-2xl transition-all active:scale-95"
              >
                <span>{loading ? 'Sending...' : 'Send Brief'}</span>
                <Send size={20} />
              </button>

              {statusMessage && (
                <p className="text-center mt-4 text-green-400 font-bold">
                  {statusMessage}
                </p>
              )}

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
