import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiCode, HiFolder, HiStar, HiClock, HiSparkles } from 'react-icons/hi';

const stats = [
  { label: 'Projects Completed', value: '15+', icon: HiFolder, color: "#ff6b00" },
  { label: 'Technologies Used', value: '20+', icon: HiCode, color: "#ff0055" },
  { label: 'GitHub Repositories', value: '20+', icon: HiStar, color: "#ffb700" },
  { label: 'Coding Hours', value: '1000+', icon: HiClock, color: "#ff3600" },
];

const Word = ({ children, progress, range }) => {
  const color = useTransform(progress, range, ["#6b7280", "#ffffff"]);
  const opacity = useTransform(progress, range, [0.35, 1]);
  const textShadow = useTransform(progress, range, [
    "0px 0px 0px rgba(255, 107, 0, 0)",
    "0px 0px 14px rgba(255, 107, 0, 0.6)"
  ]);

  return (
    <motion.span
      style={{ color, opacity, textShadow }}
      className="inline-block mr-2.5 my-1 font-medium transition-all"
    >
      {children}
    </motion.span>
  );
};

const ScrollRevealParagraph = ({ text }) => {
  const targetRef = useRef(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <div ref={targetRef} className="flex flex-wrap text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-tight select-none">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-28 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-electric-blue/30 text-electric-blue text-xs font-semibold uppercase tracking-widest mb-3">
            <HiSparkles />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue via-neon-purple to-neon-cyan mx-auto rounded-full mt-2" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Scroll-Driven Color Changing Text */}
          <div className="lg:col-span-7 space-y-8 glass-card p-8 md:p-10 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-electric-blue/15 rounded-full blur-3xl pointer-events-none" />
            
            <ScrollRevealParagraph 
              text="I am a passionate software developer with a strong foundation in building scalable web applications. My journey in tech started with a curiosity for how things work on the internet, which quickly turned into a career I love." 
            />

            <div className="w-full h-[1px] bg-gradient-to-r from-electric-blue/40 via-white/10 to-transparent" />

            <ScrollRevealParagraph 
              text="My goal is to create products that not only solve real-world problems but also provide an intuitive and beautiful user experience. I thrive in environments where I can learn new technologies and collaborate with creative minds." 
            />
          </div>

          {/* Right Side: Animated Glass Metrics Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="glass-card p-6 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden border border-white/10 hover:border-electric-blue/50 transition-all duration-300"
              >
                {/* Background glow on card hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${stat.color} 0%, transparent 70%)` }}
                />

                <div 
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-4 text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: stat.color, border: `1px solid ${stat.color}50` }}
                >
                  <stat.icon />
                </div>

                <h3 
                  className="text-3xl sm:text-4xl font-extrabold text-white mb-2 transition-all duration-300"
                  style={{ textShadow: `0 0 15px ${stat.color}50` }}
                >
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
