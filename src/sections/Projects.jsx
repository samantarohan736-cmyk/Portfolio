import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaCube } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import weddingImg from '../assets/Wedding.png';
import bike from '../assets/Bike.png';
import calculator from '../assets/calculator.png';

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: 1,
    title: "Wedding Invitation Site",
    description: "A feature-rich wedding celebration platform complete with guest RSVP management, ceremony itinerary, interactive location maps, ambient audio player, and smooth Framer Motion animations.",
    image: weddingImg,
    category: "React",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/samantarohan736-cmyk/Wedding_Invitation.git",
    live: "https://wedding-invitation-mocha-three.vercel.app/"
  },
  {
    id: 2,
    title: "Quick Bike Application",
    description: "An intuitive ride-booking web application enabling seamless route selection between locations with real-time map integration and automated payment simulation.",
    image: bike,
    category: "Frontend",
    tech: ["React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/samantarohan736-cmyk/quick_.bike.git",
    live: "https://quickbike.vercel.app/"
  },
  {
    id: 3,
    title: "Scientific Calculator",
    description: "A fully functional scientific web calculator equipped with advanced trigonometric, logarithmic, and algebraic functions alongside calculation history logging.",
    image: calculator,
    category: "Frontend",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/samantarohan736-cmyk/Scientific-Calculator.git",
    live: "https://scientific-calculator-nine-pink.vercel.app/"
  }
];

const categories = ["All", "Frontend", "React"];

const ProjectCard3D = ({ project, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const lightRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -18;
    const rotateY = ((x - centerX) / centerX) * 18;

    // 3D Parallax Tilt for Main Card Container
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: "power2.out",
    });

    // 3D Parallax Layering: Image floats back, text pops forward
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        z: 25,
        scale: 1.06,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    if (titleRef.current) {
      gsap.to(titleRef.current, {
        z: 45,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        z: 60,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    // Dynamic Light Beam Reflection
    if (lightRef.current) {
      gsap.to(lightRef.current, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        opacity: 0.35,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "power3.out",
    });

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        z: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
      });
    }

    if (titleRef.current) {
      gsap.to(titleRef.current, {
        z: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    }

    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        z: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    }

    if (lightRef.current) {
      gsap.to(lightRef.current, {
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    }
  };

  return (
    <div className="perspective-container" style={{ perspective: "1200px" }}>
      <motion.div
        layout
        initial={{ opacity: 0, y: 50, rotateY: -15 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: index * 0.12 }}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="project-card-3d glass-card overflow-hidden group border border-white/10 hover:border-electric-blue/60 flex flex-col justify-between relative transition-shadow duration-500 hover:shadow-[0_0_35px_rgba(0,240,255,0.3)] cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Holographic Light Beam Reflection */}
        <div
          ref={lightRef}
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-electric-blue/30 via-neon-cyan/20 to-neon-purple/30 blur-2xl pointer-events-none opacity-0 z-20"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        />

        <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
          
          {/* 3D Floating Image Frame */}
          <div 
            ref={imageRef} 
            className="relative overflow-hidden h-60 sm:h-64 rounded-t-2xl shadow-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 opacity-70 group-hover:opacity-30 transition-opacity duration-500" />
            
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out"
            />

            {/* Action Buttons Layer (Pops out in 3D) */}
            <div 
              ref={badgeRef}
              className="absolute top-4 right-4 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-3"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.a
                whileHover={{ scale: 1.2, z: 20 }}
                whileTap={{ scale: 0.9 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-background/90 flex items-center justify-center text-white hover:text-electric-blue border border-electric-blue/40 shadow-[0_0_15px_rgba(0,240,255,0.4)] backdrop-blur-md"
                title="GitHub Code"
              >
                <FaGithub size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, z: 20 }}
                whileTap={{ scale: 0.9 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-background/90 flex items-center justify-center text-white hover:text-neon-cyan border border-neon-cyan/40 shadow-[0_0_15px_rgba(0,255,255,0.4)] backdrop-blur-md"
                title="Live Demo"
              >
                <FaExternalLinkAlt size={15} />
              </motion.a>
            </div>
          </div>

          {/* 3D Floating Details Section */}
          <div ref={titleRef} className="p-6 md:p-8" style={{ transformStyle: "preserve-3d" }}>
            <div className="flex items-center gap-2 text-electric-blue text-xs font-semibold uppercase tracking-wider mb-2">
              <FaCube className="text-neon-cyan animate-pulse" />
              <span>{project.category}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="px-6 md:px-8 pb-6 md:pb-8 relative z-10">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1 rounded-full text-xs font-semibold bg-electric-blue/10 border border-electric-blue/25 text-electric-blue group-hover:border-electric-blue/50 transition-colors shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const sectionRef = useRef(null);

  const filteredProjects = projectData.filter(project => 
    filter === "All" || project.category === filter
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading 3D Sweep entrance
      gsap.fromTo(
        ".project-header-3d",
        { opacity: 0, y: -40, rotateX: -20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Staggered 3D Cards entrance
      gsap.fromTo(
        ".perspective-container",
        { opacity: 0, y: 80, rotateY: -15, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.22,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="project-header-3d text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-electric-blue/30 text-electric-blue text-xs font-semibold uppercase tracking-widest mb-3">
            <HiSparkles />
            <span>Interactive 3D Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Hover over cards to experience real-time 3D parallax depth & holographic light reflections.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue via-neon-purple to-neon-cyan mx-auto rounded-full mt-4" />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-electric-blue via-neon-cyan to-electric-blue text-background shadow-[0_0_20px_rgba(0,240,255,0.4)] font-bold"
                  : "glass text-gray-300 hover:text-white hover:border-electric-blue/40"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* 3D Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard3D
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
