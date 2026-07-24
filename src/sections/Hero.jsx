import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImage from '../assets/profileImage.jpeg';
const titles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-2 rounded-full glass border-electric-blue/30 text-electric-blue text-sm font-semibold tracking-wide"
          >
            Welcome to my portfolio
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-gradient">Rohan Samanta</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-400 font-medium h-10">
            <motion.span
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {titles[titleIndex]}
            </motion.span>
          </div>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            I build exceptional and accessible digital experiences for the web.
          </p>

          <div className="flex gap-4 mt-4">
            <button className="px-8 py-3 rounded-full bg-electric-blue text-background font-bold hover:bg-neon-cyan transition-colors flex items-center gap-2 group">
              Download Resume
              <HiDownload className="group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="px-8 py-3 rounded-full glass text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2 group">
              View Projects
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex gap-6 mt-8">
            <a
              href="https://github.com/samantarohan736-cmyk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rohan-samanta-686450319/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue to-neon-purple rounded-full blur-[100px] opacity-30 animate-spin-slow" />
          <div className="w-80 h-80 rounded-full border-2 border-white/10 p-2 relative z-10 glass">
            {/* Placeholder for profile image */}
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              <span className="text-gray-500">
                <img
                  src={profileImage}
                  alt="Rohan Samanta"
                />
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-electric-blue rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
