import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const achievements = [
  { label: 'Projects Completed', value: 20 },
  { label: 'Happy Clients', value: 10 },
  { label: 'Years Experience', value: 1 },
  { label: 'Awards Won', value: 3 },
];

const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;
      const totalDuration = 2000;
      let incrementTime = (totalDuration / end);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return <span ref={ref}>{count}+</span>;
};

const Achievements = () => {
  return (
    <section className="py-20 px-6 relative z-10 border-y border-white/10 bg-white/5 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item, idx) => (
            <div key={idx} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple mb-2"
              >
                <Counter value={item.value} />
              </motion.div>
              <div className="text-gray-400 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Achievements;
