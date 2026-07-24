import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiReact, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase, 
  SiPython, SiSpringboot, SiGit, SiDocker 
} from 'react-icons/si';
import { FaJava, FaAws, FaChevronDown } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    id: "01",
    category: "Frontend Architecture",
    tagline: "UI/UX, Responsive Frameworks & Client State",
    accentColor: "#ff6b00",
    skills: [
      { name: "React", icon: SiReact, level: 90, color: "#ff6b00", bgGlow: "rgba(255, 107, 0, 0.15)" },
      { name: "TypeScript", icon: SiTypescript, level: 85, color: "#3178c6", bgGlow: "rgba(49, 120, 198, 0.15)" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95, color: "#38bdf8", bgGlow: "rgba(56, 189, 248, 0.15)" },
      { name: "JavaScript", icon: SiJavascript, level: 90, color: "#f7df1e", bgGlow: "rgba(247, 223, 30, 0.15)" },
      { name: "HTML5 / CSS3", icon: SiHtml5, level: 95, color: "#e34f26", bgGlow: "rgba(227, 79, 38, 0.15)" },
    ]
  },
  {
    id: "02",
    category: "Backend & Databases",
    tagline: "Server Architecture, APIs & Data Persistence",
    accentColor: "#ff0055",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 80, color: "#22c55e", bgGlow: "rgba(34, 197, 94, 0.15)" },
      { name: "Express.js", icon: SiExpress, level: 80, color: "#e2e8f0", bgGlow: "rgba(226, 232, 240, 0.15)" },
      { name: "MongoDB", icon: SiMongodb, level: 75, color: "#10b981", bgGlow: "rgba(16, 185, 129, 0.15)" },
      { name: "PostgreSQL", icon: SiPostgresql, level: 70, color: "#60a5fa", bgGlow: "rgba(96, 165, 250, 0.15)" },
      { name: "Spring Boot", icon: SiSpringboot, level: 75, color: "#4ade80", bgGlow: "rgba(74, 222, 128, 0.15)" },
    ]
  },
  {
    id: "03",
    category: "Tools & Cloud Architecture",
    tagline: "DevOps, Version Control & Cloud Infrastructure",
    accentColor: "#ffb700",
    skills: [
      { name: "Git & GitHub", icon: SiGit, level: 90, color: "#f97316", bgGlow: "rgba(249, 115, 22, 0.15)" },
      { name: "Docker", icon: SiDocker, level: 65, color: "#0284c7", bgGlow: "rgba(2, 132, 199, 0.15)" },
      { name: "AWS Cloud", icon: FaAws, level: 60, color: "#ff9900", bgGlow: "rgba(255, 153, 0, 0.15)" },
      { name: "Firebase", icon: SiFirebase, level: 85, color: "#f59e0b", bgGlow: "rgba(245, 158, 11, 0.15)" },
      { name: "Python", icon: SiPython, level: 80, color: "#facc15", bgGlow: "rgba(250, 204, 21, 0.15)" },
      { name: "Java", icon: FaJava, level: 85, color: "#ef4444", bgGlow: "rgba(239, 68, 68, 0.15)" },
    ]
  }
];

const CircularProgress = ({ level, color }) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="stroke-white/10"
          strokeWidth="3"
          fill="transparent"
        />
        <motion.circle
          cx="24"
          cy="24"
          r={radius}
          stroke={color}
          strokeWidth="3"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          strokeLinecap="round"
          fill="transparent"
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <span className="absolute text-[10px] font-bold text-white font-mono">
        {level}%
      </span>
    </div>
  );
};

const Skills = () => {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

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
            setActiveCategoryIndex(idx);
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
            opacity: 0.45,
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
    <section id="skills" ref={triggerRef} className="relative z-10 min-h-screen bg-background overflow-hidden">
      <div 
        ref={sectionRef} 
        className="w-full min-h-screen flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto relative"
        style={{ perspective: "1400px" }}
      >
        {/* Header */}
        <div className="text-center pt-2 sm:pt-6 mb-3 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-electric-blue/30 text-electric-blue text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-1.5">
            <HiSparkles />
            <span>3D Stacked Tech Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1.5">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm">
            Scroll down to watch skill categories stack layer by layer in 3D.
          </p>
        </div>

        {/* 3D Stacking Deck Container */}
        <div className="relative w-full max-w-5xl xl:max-w-6xl mx-auto h-[500px] sm:h-[530px] md:h-[520px] lg:h-[490px] xl:h-[510px] my-auto">
          {skillsData.map((group, idx) => (
            <div
              key={group.id}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="absolute inset-0 w-full h-full glass-card border border-white/15 rounded-3xl p-5 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-between shadow-2xl shadow-black/80 overflow-y-auto no-scrollbar lg:overflow-hidden bg-background/95 backdrop-blur-2xl"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                boxShadow: `0 20px 60px -15px ${group.accentColor}35`,
              }}
            >
              {/* Background Ambient Glow */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none rounded-3xl"
                style={{
                  background: `radial-gradient(circle at top right, ${group.accentColor} 0%, transparent 65%)`
                }}
              />

              {/* Stack Category Top Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 z-10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-gradient">
                      {group.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    {group.tagline}
                  </p>
                </div>

                <span 
                  className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{ color: group.accentColor, borderColor: `${group.accentColor}40`, backgroundColor: `${group.accentColor}10` }}
                >
                  {group.skills.length} Technologies
                </span>
              </div>

              {/* Grid of Skill Cards inside the Active 3D Category Deck */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 my-auto z-10">
                {group.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -6, scale: 1.04 }}
                    className="glass-card p-3.5 sm:p-4 flex flex-col items-center justify-between gap-3 group cursor-pointer relative overflow-hidden border border-white/10 hover:border-white/25 transition-all"
                  >
                    {/* Radial Brand Glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                      style={{
                        background: `radial-gradient(circle at top, ${skill.bgGlow} 0%, transparent 70%)`
                      }}
                    />

                    {/* Top Row: Icon & Circular Ring */}
                    <div className="w-full flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-2xl transition-transform group-hover:scale-110">
                        <skill.icon style={{ color: skill.color }} />
                      </div>
                      <CircularProgress level={skill.level} color={skill.color} />
                    </div>

                    {/* Skill Info */}
                    <div className="w-full text-left z-10 mt-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-electric-blue transition-colors truncate">
                        {skill.name}
                      </h4>
                      <div className="w-full bg-white/10 rounded-full h-1 mt-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 + sIdx * 0.05 }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, #ff6b00 0%, ${skill.color} 100%)`,
                            boxShadow: `0 0 8px ${skill.color}`
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Category Deck Navigation Dots */}
        <div className="flex items-center justify-between max-w-5xl xl:max-w-6xl mx-auto w-full pb-2 sm:pb-4 pt-2 z-20">
          <div className="flex items-center gap-3">
            {skillsData.map((cat, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-500 ${
                  activeCategoryIndex === i
                    ? "bg-electric-blue text-background shadow-[0_0_15px_#ff6b00]"
                    : "glass text-gray-400"
                }`}
              >
                <span>{cat.id}</span>
                <span className="hidden sm:inline">{cat.category}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <span>Scroll Stack</span>
            <FaChevronDown className="animate-bounce text-electric-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
