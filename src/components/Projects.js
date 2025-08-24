import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Corn Cradle",
      description:
        "A digital platform empowering Sri Lankan corn farmers to sell harvests via online auctions. Includes features for buyers to bid, farmers to hire workers, and purchase ingredients. Ensures fair trade, transparency, and wider market reach for small-scale farmers.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: "project1.png",
      liveUrl: "#", 
      githubUrl: "https://github.com/tharushanawod/Corn-Cradle",
      imagePosition: "left",
    }
    ,
    {
      id: 2,
      title: "Island Hop",
      description:
        "A smart tourism platform for Sri Lanka that connects travelers with destinations, experiences, and accommodations. Built with React, Spring Boot, and MongoDB, it features user-friendly UI, real-time data, and scalable backend services.",
      tech: ["React.js", "Spring Boot", "Python", "MongoDB", "PostgreSQL", "Redis", "AWS", "Vercel"],
      image: "project2.png",
      liveUrl: "#",
      githubUrl: "https://github.com/3rdYearGroupProject", // add when repo is public
      imagePosition: "right",
    }
    ,
    {
      id: 3,
      title: "CrownKeys Real Estate Platform",
      description:
        "A modern real estate listing platform where users can browse, search, and manage property listings. Features include property image galleries, JWT-based authentication, and integration with Supabase for backend services and storage.",
      tech: ["React.js", "Express.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
      image: "project3.png",
      liveUrl: "https://crown-keys-front-end.vercel.app/",
      githubUrl: "https://github.com/tharushanawod/CrownKeys-Front-End", // add when repo is available
      imagePosition: "left",
    }
   ,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const ProjectCard = ({ project, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    const isImageLeft = project.imagePosition === "left";

    const imageVariants = {
      hidden: {
        opacity: 0,
        x: isImageLeft ? -100 : 100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    };

    const contentVariants = {
      hidden: {
        opacity: 0,
        x: isImageLeft ? 100 : -100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        variants={projectVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${
          isImageLeft ? "" : "lg:grid-flow-col-dense"
        }`}
      >
        {/* Project Image */}
        <motion.div
          variants={imageVariants}
          className={`relative group ${
            isImageLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl glow-border">
            {/* Project Image */}
            {project.image && project.image !== "/api/placeholder/600/400" ? (
              <img
                src={project.image}
                alt={`${project.title} - Project Screenshot`}
                className="w-full h-80 object-cover object-center"
              />
            ) : (
              <div className="w-full h-80 bg-gradient-to-br from-accent-blue/20 to-gray-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-accent-blue mb-2">🖼️</div>
                  <div className="text-white font-medium">{project.title}</div>
                </div>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex space-x-4">
                <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-accent-blue rounded-full text-dark-bg hover:bg-white transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white rounded-full text-dark-bg hover:bg-accent-blue transition-colors duration-300"
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          variants={contentVariants}
          className={`space-y-6 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {project.title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-semibold text-accent-blue mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                  className="px-3 py-1 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-accent-blue text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* View Project Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href={project.liveUrl}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-blue/80 text-dark-bg font-semibold rounded-xl hover:from-accent-blue/90 hover:to-accent-blue/70 transition-all duration-300 glow-border group"
            >
              View Project
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 right-20 w-48 h-48 bg-accent-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-32 h-32 bg-accent-blue rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured{" "}
            <span className="text-accent-blue glow-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest work showcasing innovative solutions and
            cutting-edge technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
