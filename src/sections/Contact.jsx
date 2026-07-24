import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // Safety check for Environment Variables
    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setStatus({
        type: 'error',
        message: 'Email service configuration is missing. Please verify your environment variables.'
      });
      return;
    }

    // EmailJS v4 sendForm call with options object
    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey: publicKey,
        }
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully.'
          });
          if (formRef.current) {
            formRef.current.reset();
          }

          setTimeout(() => {
            setStatus({ type: '', message: '' });
          }, 6000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          setStatus({
            type: 'error',
            message: `Failed to send message: ${error?.text || error?.message || 'Network error'}`
          });
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Have a question, proposal, or project idea? Feel free to reach out.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue via-neon-purple to-neon-cyan mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-extrabold text-white">Let's talk about everything!</h3>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-electric-blue text-xl shrink-0 group-hover:border-electric-blue/50 transition-colors">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">hell0@rohan.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-electric-blue text-xl shrink-0 group-hover:border-electric-blue/50 transition-colors">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-400">+91 xxxxx xxxxx</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-electric-blue text-xl shrink-0 group-hover:border-electric-blue/50 transition-colors">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">West Bengal, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 md:p-10 border border-white/10 relative overflow-hidden"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  autoComplete="name"
                  className="w-full bg-background/60 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors text-sm sm:text-base"
                  placeholder="Rohan Samanta"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  autoComplete="email"
                  className="w-full bg-background/60 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors text-sm sm:text-base"
                  placeholder="samantarohan736@gmail.com"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-background/60 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors resize-none text-sm sm:text-base"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-electric-blue via-neon-cyan to-electric-blue text-background font-extrabold text-base sm:text-lg hover:shadow-lg hover:shadow-electric-blue/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-background border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {/* Status Alert Banners */}
              {status.type === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm mt-2">
                  <FaCheckCircle className="text-xl shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.type === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm mt-2">
                  <FaExclamationCircle className="text-xl shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
