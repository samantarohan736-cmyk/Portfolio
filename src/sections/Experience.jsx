import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Digontom Private Limited",
    duration: "April 2026 - May 2026",
    description: "Worked on real-world client projects by implementing Figma-based UI designs, fixing bugs, and enhancing application functionality. Collaborated with the development team to deliver responsive, high-quality solutions while meeting client requirements.",
    tech: ["React", "JavaScript", "Tailwind CSS"]
  }
  // {
  //   id: 2,
  //   role: "Full Stack Developer",
  //   company: "Creative Agency",
  //   duration: "Mar 2021 - Dec 2022",
  //   description: "Developed and maintained multiple client websites and web applications. Integrated payment gateways and optimized database queries.",
  //   tech: ["Node.js", "Express", "React", "MongoDB"]
  // },
  // {
  //   id: 3,
  //   role: "Junior Web Developer",
  //   company: "Startup Hub",
  //   duration: "Jun 2019 - Feb 2021",
  //   description: "Collaborated with designers to implement responsive UI components. Built RESTful APIs and wrote unit tests.",
  //   tech: ["JavaScript", "HTML/CSS", "Python"]
  // }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="mb-12 ml-8 relative group"
            >
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-electric-blue group-hover:bg-electric-blue group-hover:shadow-[0_0_10px_#00f0ff] transition-all duration-300" />
              
              <div className="glass-card p-8 group-hover:border-electric-blue/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-electric-blue transition-colors">{exp.role}</h3>
                    <div className="text-lg text-neon-purple font-medium">{exp.company}</div>
                  </div>
                  <span className="px-4 py-1 rounded-full glass text-gray-300 text-sm whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-gray-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
