import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 text-xl sm:text-2xl font-extrabold text-white tracking-tighter group"
        >
          <img
            src="/profileImage.jpeg"
            alt="Profile"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-electric-blue/80 shadow-[0_0_10px_rgba(255,107,0,0.4)]"
          />
          <span>
            <span className="text-electric-blue">&lt;</span>
            Dev Rohan
            <span className="text-electric-blue">/&gt;</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-200 hover:text-electric-blue border border-white/10 text-2xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl flex flex-col p-6 md:hidden z-[100]"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-4 text-base font-semibold text-gray-300 hover:text-electric-blue hover:bg-white/5 rounded-xl transition-all border-b border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
