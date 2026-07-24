import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase, 
  SiPython, SiSpringboot, SiGit, SiDocker 
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, level: 90, color: "#00f0ff", bgGlow: "rgba(0, 240, 255, 0.15)" },
      { name: "TypeScript", icon: SiTypescript, level: 85, color: "#3178c6", bgGlow: "rgba(49, 120, 198, 0.15)" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95, color: "#38bdf8", bgGlow: "rgba(56, 189, 248, 0.15)" },
      { name: "JavaScript", icon: SiJavascript, level: 90, color: "#f7df1e", bgGlow: "rgba(247, 223, 30, 0.15)" },
      { name: "HTML/CSS", icon: SiHtml5, level: 95, color: "#e34f26", bgGlow: "rgba(227, 79, 38, 0.15)" },
    ]
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 80, color: "#22c55e", bgGlow: "rgba(34, 197, 94, 0.15)" },
      { name: "Express", icon: SiExpress, level: 80, color: "#e2e8f0", bgGlow: "rgba(226, 232, 240, 0.15)" },
      { name: "MongoDB", icon: SiMongodb, level: 75, color: "#10b981", bgGlow: "rgba(16, 185, 129, 0.15)" },
      { name: "PostgreSQL", icon: SiPostgresql, level: 70, color: "#60a5fa", bgGlow: "rgba(96, 165, 250, 0.15)" },
      { name: "Spring Boot", icon: SiSpringboot, level: 75, color: "#4ade80", bgGlow: "rgba(74, 222, 128, 0.15)" },
    ]
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "Git", icon: SiGit, level: 90, color: "#f97316", bgGlow: "rgba(249, 115, 22, 0.15)" },
      { name: "Docker", icon: SiDocker, level: 65, color: "#0284c7", bgGlow: "rgba(2, 132, 199, 0.15)" },
      { name: "AWS", icon: FaAws, level: 60, color: "#ff9900", bgGlow: "rgba(255, 153, 0, 0.15)" },
      { name: "Firebase", icon: SiFirebase, level: 85, color: "#f59e0b", bgGlow: "rgba(245, 158, 11, 0.15)" },
      { name: "Python", icon: SiPython, level: 80, color: "#facc15", bgGlow: "rgba(250, 204, 21, 0.15)" },
      { name: "Java", icon: FaJava, level: 85, color: "#ef4444", bgGlow: "rgba(239, 68, 68, 0.15)" },
    ]
  }
];

const categories = ["All", "Frontend", "Backend & DB", "Tools & Cloud"];

// All skills flattened for infinite marquee
const allSkills = skillsData.flatMap(cat => cat.skills);

const CircularProgress = ({ level, color }) => {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-14 h-14">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background Track */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          className="stroke-white/10"
          strokeWidth="3.5"
          fill="transparent"
        />
        {/* Animated Progress Ring */}
        <motion.circle
          cx="28"
          cy="28"
          r={radius}
          stroke={color}
          strokeWidth="3.5"
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
      <span className="absolute text-[11px] font-bold text-white font-mono">
        {level}%
      </span>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData = activeCategory === "All"
    ? skillsData
    : skillsData.filter(cat => cat.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Modern tech stack & tools engineered for high-performance applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue via-neon-purple to-neon-cyan mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Infinite Tech Marquee Bar */}
        <div className="w-full overflow-hidden mb-16 py-4 glass border-y border-white/10 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 items-center w-max"
          >
            {[...allSkills, ...allSkills].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 whitespace-nowrap group hover:border-electric-blue/50 transition-colors"
              >
                <item.icon className="text-xl text-gray-400 group-hover:scale-120 transition-transform" style={{ color: item.color }} />
                <span className="text-sm font-semibold text-gray-300">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300"
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue via-neon-cyan to-electric-blue shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${activeCategory === cat ? "text-background font-bold" : "text-gray-400 hover:text-white"}`}>
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-16">
          <AnimatePresence mode="wait">
            {filteredData.map((group) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3 border-l-4 border-electric-blue pl-4">
                  {group.category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {group.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIdx * 0.06, duration: 0.4 }}
                      whileHover={{ y: -8, scale: 1.03 }}
                      className="glass-card p-6 flex flex-col items-center justify-between gap-5 group cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-electric-blue/40"
                    >
                      {/* Background Glow on Hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                        style={{
                          background: `radial-gradient(circle at top, ${skill.bgGlow} 0%, transparent 70%)`
                        }}
                      />

                      {/* Top Row: Icon & Brand Indicator */}
                      <div className="w-full flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110">
                          <skill.icon style={{ color: skill.color }} />
                        </div>
                        <CircularProgress level={skill.level} color={skill.color} />
                      </div>

                      {/* Bottom Info */}
                      <div className="w-full text-left z-10 mt-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-electric-blue transition-colors">
                          {skill.name}
                        </h4>
                        <div className="w-full bg-white/10 rounded-full h-1.5 mt-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + sIdx * 0.05 }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, #00f0ff 0%, ${skill.color} 100%)`,
                              boxShadow: `0 0 8px ${skill.color}`
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
