import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import weddingImg from '../assets/Wedding.png';
import bike from '../assets/Bike.png';
import calculator from '../assets/calculator.png';

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: 1,
    num: "01",
    title: "Wedding Invitation Site",
    description: "A feature-rich wedding celebration platform complete with guest RSVP management, ceremony itinerary, interactive location maps, ambient audio player, and smooth Framer Motion animations.",
    image: weddingImg,
    category: "React",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/samantarohan736-cmyk/Wedding-Invitation.git",
    live: "https://wedding-invitation-frontend-perz.onrender.com/",
    color: "#ff6b00"
  },
  {
    id: 2,
    num: "02",
    title: "Quick Bike Application",
    description: "An intuitive ride-booking web application enabling seamless route selection between locations with real-time map integration and automated payment simulation.",
    image: bike,
    category: "Frontend",
    tech: ["React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/samantarohan736-cmyk/quick_.bike.git",
    live: "https://quickbike.vercel.app/",
    color: "#ff0055"
  },
  {
    id: 3,
    num: "03",
    title: "Scientific Calculator",
    description: "A fully functional scientific web calculator equipped with advanced trigonometric, logarithmic, and algebraic functions alongside calculation history logging.",
    image: calculator,
    category: "Frontend",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/samantarohan736-cmyk/Scientific-Calculator.git",
    live: "https://scientific-calculator-nine-pink.vercel.app/",
    color: "#ffb700"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${cards.length * 90}%`,
          scrub: 0.5, // Buttery smooth instantaneous scrub
          pin: true,
          onUpdate: (self) => {
            const idx = Math.min(
              cards.length - 1,
              Math.floor(self.progress * cards.length)
            );
            setActiveCardIndex(idx);
          },
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, {
            transformOrigin: "center center",
            zIndex: 10,
            scale: 1,
            y: 0,
            opacity: 1,
            rotateX: 0,
            force3D: true,
          });
          return;
        }

        gsap.set(card, {
          transformOrigin: "center center",
          zIndex: 10 + i,
          y: "105%",
          scale: 0.88,
          opacity: 0,
          rotateX: -15,
          force3D: true,
        });

        tl.to(
          cards[i - 1],
          {
            scale: 0.9 - (cards.length - i) * 0.03,
            y: -35 * i,
            rotateX: 10,
            opacity: 0.5,
            duration: 1,
            ease: "power1.inOut",
            force3D: true,
          },
          `step-${i}`
        ).to(
          card,
          {
            y: "0%",
            scale: 1,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            ease: "power1.inOut",
            force3D: true,
          },
          `step-${i}`
        );
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={triggerRef} className="relative z-10 min-h-screen bg-background overflow-hidden">
      <div 
        ref={sectionRef} 
        className="w-full min-h-screen flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto relative"
        style={{ perspective: "1400px" }}
      >
        {/* Section Header */}
        <div className="text-center pt-2 sm:pt-6 mb-3 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-electric-blue/30 text-electric-blue text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-1.5">
            <HiSparkles />
            <span>3D Interactive Deck</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1.5">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm">
            Scroll down to watch 3D project cards stack dynamically layer by layer.
          </p>
        </div>

        {/* 3D Stacking Deck Container */}
        <div className="relative w-full max-w-5xl xl:max-w-6xl mx-auto h-[480px] sm:h-[520px] md:h-[530px] lg:h-[500px] xl:h-[520px] my-auto">
          {projectData.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="absolute inset-0 w-full h-full glass-card border border-white/15 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-4 lg:gap-8 items-stretch lg:items-center shadow-2xl shadow-black/80 overflow-y-auto no-scrollbar lg:overflow-hidden bg-background/95 backdrop-blur-2xl"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                boxShadow: `0 20px 60px -15px ${project.color}30`,
              }}
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none rounded-3xl"
                style={{
                  background: `radial-gradient(circle at 80% 20%, ${project.color} 0%, transparent 60%)`
                }}
              />

              {/* Image Preview */}
              <div className="w-full lg:w-1/2 h-32 sm:h-44 md:h-52 lg:h-full rounded-2xl overflow-hidden relative z-10 border border-white/10 shadow-xl group shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Details Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between h-full z-10 space-y-3 lg:space-y-0">
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-gradient">
                      {project.num}
                    </span>
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-electric-blue/10 border border-electric-blue/30 text-electric-blue">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-5">
                    {project.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-electric-blue to-neon-cyan text-background font-bold text-xs sm:text-sm hover:shadow-lg hover:shadow-electric-blue/30 transition-all flex items-center gap-1.5"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt size={11} />
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full glass border border-white/20 text-white font-bold text-xs sm:text-sm hover:bg-white/10 transition-all flex items-center gap-1.5"
                    >
                      <span>Source Code</span>
                      <FaGithub size={13} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Deck Progress Indicator */}
        <div className="flex items-center justify-between max-w-5xl xl:max-w-6xl mx-auto w-full pb-2 sm:pb-4 pt-2 z-20">
          <div className="flex gap-2">
            {projectData.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeCardIndex === i
                    ? "w-8 bg-electric-blue shadow-[0_0_10px_#ff6b00]"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <span>Scroll Deck</span>
            <FaChevronDown className="animate-bounce text-electric-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
