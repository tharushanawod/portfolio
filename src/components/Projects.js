import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      description:
        "An immersive portfolio website built with Three.js and React. Features interactive 3D elements, smooth animations, and responsive design.",
      tech: ["React", "Three.js", "Framer Motion", "GSAP", "WebGL"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "AI Chat Application",
      description:
        "A real-time chat application powered by AI, built with React and OpenAI API. Features include intelligent responses and conversation history.",
      tech: ["React", "OpenAI API", "Socket.io", "Express", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      imagePosition: "left",
    },
    {
      id: 4,
      title: "Task Management System",
      description:
        "A comprehensive task management application with drag-and-drop functionality, team collaboration, and real-time updates.",
      tech: ["React", "Firebase", "DND Kit", "Tailwind CSS", "TypeScript"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      imagePosition: "right",
    },
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
            {/* Placeholder image */}
            <div className="w-full h-80 bg-gradient-to-br from-accent-blue/20 to-gray-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl text-accent-blue mb-2">🖼️</div>
                <div className="text-white font-medium">{project.title}</div>
              </div>
            </div>

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
