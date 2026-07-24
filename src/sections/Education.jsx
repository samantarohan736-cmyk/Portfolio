import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    degree: "Computer Science and Engineering",
    institution: "Brainware University",
    duration: "2024 - 2028",
    score: "CGPA: 9.47",
    description: "Pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering with a strong foundation in programming, software development, and problem-solving. Passionate about building real-world applications and continuously enhancing technical skills through projects and hands-on learning."
  },
  {
    id: 2,
    degree: "Higher Secondary",
    institution: "Shyampur High School",
    duration: "2022 - 2024",
    score: "85.40%",
    description: "Completed schooling with a strong academic foundation, developing analytical thinking, discipline, and a passion for technology. Actively participated in academics while building problem-solving and communication skills."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 flex flex-col md:flex-row gap-6 items-start group hover:-translate-y-2 transition-transform duration-300 hover:border-electric-blue/30"
            >
              <div className="p-4 rounded-full glass text-electric-blue text-3xl group-hover:scale-110 group-hover:text-neon-cyan transition-all duration-300 shrink-0">
                <FaGraduationCap />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-electric-blue transition-colors">{edu.degree}</h3>
                  <span className="text-electric-blue font-medium">{edu.duration}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <span className="text-lg text-neon-purple font-medium">{edu.institution}</span>
                  <span className="hidden sm:block text-gray-500">•</span>
                  <span className="text-gray-300 font-medium">{edu.score}</span>
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Education;
