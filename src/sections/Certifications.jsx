import { motion } from 'framer-motion';
import reactSS from '../assets/reactSS.png'
import cyberOps from '../assets/cyberOps.png'
import ethicsSS from '../assets/Ethics.png'


const certs = [
  {
    id: 1,
    title: "CyberOps Associate",
    organization: "cisco",
    date: "Feb 2026",
    image: cyberOps,
    link: "/certificates/CyberOps.pdf"
  },
  {
    id: 2,
    title: "React",
    organization: "udemy",
    date: "July 2026",
    image: reactSS,
    link: "/certificates/React.pdf"
  },
  {
   id: 3,
     title: "Engineering Ethics",
     organization: "PDH-PRO",
     date: "july 2026",
     image: ethicsSS,
     link: "/certificates/EthicsCertificate.pdf"
   }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/50 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <div className="text-neon-purple font-medium mb-1">{cert.organization}</div>
                <div className="text-gray-400 text-sm mb-6">{cert.date}</div>
                <a
                  href={cert.link}
                  className="inline-block px-6 py-2 rounded-full glass text-white text-sm font-medium hover:bg-electric-blue hover:text-background transition-all"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;
