import { motion } from 'framer-motion';
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
      { name: "React", icon: SiReact, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "HTML/CSS", icon: SiHtml5, level: 95 },
    ]
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 80 },
      { name: "Express", icon: SiExpress, level: 80 },
      { name: "MongoDB", icon: SiMongodb, level: 75 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 70 },
      // { name: "Spring Boot", icon: SiSpringboot, level: 75 },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit, level: 90 },
      // { name: "Docker", icon: SiDocker, level: 65 },
      // { name: "AWS", icon: FaAws, level: 60 },
      // { name: "Firebase", icon: SiFirebase, level: 85 },
      { name: "Python", icon: SiPython, level: 80 },
      { name: "Java", icon: FaJava, level: 85 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {skillsData.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-purple pl-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 flex flex-col items-center justify-center gap-4 group hover:border-electric-blue/50 transition-colors"
                  >
                    <skill.icon className="text-5xl text-gray-400 group-hover:text-electric-blue transition-colors drop-shadow-[0_0_10px_rgba(0,240,255,0)] group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                    <span className="text-white font-medium text-center">{skill.name}</span>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + sIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-electric-blue to-neon-purple"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
