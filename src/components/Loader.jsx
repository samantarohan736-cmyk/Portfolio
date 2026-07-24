import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const statusMessages = [
  "INITIALIZING SYSTEM...",
  "LOADING ASSETS & SHADERS...",
  "COMPILING INTERACTIVE MODULES...",
  "WELCOME TO MY PORTFOLIO"
];

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    // Progress counter timer from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 22);

    // Status message switcher
    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % statusMessages.length);
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background px-6 overflow-hidden select-none"
    >
      {/* Background Radial Glow */}
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-r from-electric-blue/15 via-neon-purple/15 to-neon-cyan/15 rounded-full blur-[120px] animate-pulse pointer-events-none" />

      {/* Central Animated Loader Core */}
      <div className="relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 mb-8">
        
        {/* Outer Rotating Dashed Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-electric-blue/40"
        />

        {/* Outer Rotating Solid Dual Gradient Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-3 rounded-full border border-neon-purple/40 border-t-neon-purple border-b-neon-cyan"
        />

        {/* Pulsing Aura Circle */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-2 rounded-full bg-gradient-to-tr from-electric-blue/20 to-neon-purple/20 blur-md"
        />

        {/* Center Circular Profile Avatar */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-electric-blue shadow-[0_0_30px_rgba(0,240,255,0.4)] z-10">
          <img
            src="/profileImage.jpeg"
            alt="Loading..."
            className="w-full h-full object-cover"
          />
          {/* Scanning Line overlay */}
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent shadow-[0_0_15px_#00f0ff]"
          />
        </div>
      </div>

      {/* Brand Text & Code Symbol */}
      <div className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold text-white tracking-wider mb-5">
        <span className="text-electric-blue">&lt;</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-white to-neon-cyan">
          Dev Rohan
        </span>
        <span className="text-electric-blue">/&gt;</span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 md:w-80 h-2 bg-white/10 rounded-full overflow-hidden mb-4 p-0.5 border border-white/10 relative">
        <div
          className="h-full bg-gradient-to-r from-electric-blue via-neon-purple to-neon-cyan rounded-full transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Dynamic Status Message & Percentage */}
      <div className="flex items-center justify-between w-64 md:w-80 text-xs md:text-sm font-mono text-gray-400">
        <motion.span
          key={msgIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-electric-blue/90 tracking-wider truncate max-w-[200px]"
        >
          {statusMessages[msgIndex]}
        </motion.span>
        <span className="text-white font-bold tracking-widest">{progress}%</span>
      </div>
    </motion.div>
  );
};

export default Loader;
