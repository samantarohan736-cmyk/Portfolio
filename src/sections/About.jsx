import { motion } from 'framer-motion';
import { HiCode, HiFolder, HiStar, HiClock } from 'react-icons/hi';

const stats = [
  { label: 'Projects Completed', value: '15+', icon: HiFolder },
  { label: 'Technologies', value: '20+', icon: HiCode },
  { label: 'GitHub Repos', value: '20+', icon: HiStar },
  { label: 'Coding Hours', value: '1000+', icon: HiClock },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I am a passionate software developer with a strong foundation in building scalable web applications. My journey in tech started with a curiosity for how things work on the internet, which quickly turned into a career I love.
            </p>
            <p>
              My goal is to create products that not only solve real-world problems but also provide an intuitive and beautiful user experience. I thrive in environments where I can learn new technologies and collaborate with creative minds.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 flex flex-col items-center text-center group cursor-default"
              >
                <stat.icon className="text-4xl text-electric-blue mb-4 group-hover:text-neon-cyan transition-colors" />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
