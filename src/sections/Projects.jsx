import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import weddingImg from '../assets/Wedding.png';
import bike from '../assets/Bike.png';
import calculator from '../assets/calculator.png';

const projectData = [
  {
    id: 1,
    title: "Wedding Invitation Site",
    description: "A wedding website for my cousin’s wedding. It includes details about the wedding, RSVP form, stunning animation , engaging song ",
    image: weddingImg,
    category: "React",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/samantarohan736-cmyk/Wedding_Invitation.git",
    live: "https://wedding-invitation-mocha-three.vercel.app/"
  },
  {
    id: 2,
    title: "Quick Bike ",
    description: "A ride booking application to travel from one place to another wiht map support and dummy payment system.",
    image: bike,
    category: "Frontend",
    tech: ["React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/samantarohan736-cmyk/quick_.bike.git",
    live: "https://quickbike.vercel.app/"
  },
  {
    id: 3,
    title: "Scientific Calculator",
    description: "Calculator app with all the Scientific functions , fully functional.",
    image: calculator,
    category: "Frontend",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/samantarohan736-cmyk/Scientific-Calculator.git",
    live: "https://scientific-calculator-nine-pink.vercel.app/"
  }
  // {
  //   id: 4,
  //   title: "Portfolio Template",
  //   description: "A premium 3D portfolio template for developers with smooth scroll and Framer Motion animations.",
  //   image: "https://via.placeholder.com/600x400/1a1a1a/ff5e00?text=Portfolio",
  //   category: "React",
  //   tech: ["React", "Three.js", "Framer Motion"],
  //   github: "#",
  //   live: "#"
  // }
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "React"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectData.filter(project => 
    filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-electric-blue text-background shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                  : "glass text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} className="w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-white hover:text-electric-blue hover:scale-110 transition-all backdrop-blur-md">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.live} className="w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-white hover:text-neon-cyan hover:scale-110 transition-all backdrop-blur-md">
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
