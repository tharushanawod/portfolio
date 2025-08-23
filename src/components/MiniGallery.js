import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ExternalLink, Github } from "lucide-react";

const MiniGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const galleryItems = [
    {
      id: 1,
      title: "UI/UX Design System",
      category: "Design",
      image: "/api/placeholder/400/300",
      description:
        "A comprehensive design system with reusable components and design tokens.",
      tech: ["Figma", "Adobe XD", "Sketch"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Mobile App Interface",
      category: "Mobile",
      image: "/api/placeholder/400/300",
      description:
        "Modern mobile app interface design with intuitive user experience.",
      tech: ["React Native", "Framer", "Principle"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Web Dashboard",
      category: "Web",
      image: "/api/placeholder/400/300",
      description:
        "Analytics dashboard with data visualization and interactive charts.",
      tech: ["React", "D3.js", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "Branding",
      image: "/api/placeholder/400/300",
      description:
        "Complete brand identity package including logo, colors, and guidelines.",
      tech: ["Illustrator", "Photoshop", "InDesign"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "3D Product Render",
      category: "3D",
      image: "/api/placeholder/400/300",
      description: "High-quality 3D product visualization for e-commerce.",
      tech: ["Blender", "Substance", "Keyshot"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Icon Set",
      category: "Icons",
      image: "/api/placeholder/400/300",
      description: "Custom icon set designed for modern applications.",
      tech: ["Illustrator", "Figma", "Sketch"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="gallery" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-accent-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-accent-blue rounded-full blur-3xl"></div>
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
            Design <span className="text-accent-blue glow-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A curated collection of design work, prototypes, and creative
            explorations
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(216, 236, 248, 0.2)",
              }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => openProject(item)}
            >
              <div className="relative overflow-hidden rounded-2xl glow-border bg-gradient-to-br from-accent-blue/10 to-gray-800/50">
                {/* Placeholder image */}
                <div className="w-full h-64 bg-gradient-to-br from-accent-blue/20 to-gray-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl text-accent-blue mb-2">🎨</div>
                    <div className="text-white font-medium">{item.title}</div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-lg font-semibold mb-2">
                      {item.title}
                    </div>
                    <div className="text-sm text-accent-blue">
                      {item.category}
                    </div>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-accent-blue/20 backdrop-blur-sm rounded-full border border-accent-blue/30">
                  <span className="text-xs text-accent-blue font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Project info */}
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-accent-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-dark-bg rounded-2xl border border-accent-blue/30 glow-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 p-2 bg-accent-blue/20 backdrop-blur-sm rounded-full border border-accent-blue/30 hover:bg-accent-blue/30 transition-colors duration-300"
              >
                <X size={20} className="text-accent-blue" />
              </button>

              {/* Modal content */}
              <div className="p-6">
                {/* Project image */}
                <div className="relative w-full h-80 rounded-xl overflow-hidden mb-6">
                  <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-gray-600 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-accent-blue mb-2">🎨</div>
                      <div className="text-white font-medium text-xl">
                        {selectedProject.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project details */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="inline-block px-3 py-1 bg-accent-blue/20 rounded-full border border-accent-blue/30">
                      <span className="text-sm text-accent-blue font-medium">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tech stack */}
                  <div>
                    <h3 className="text-lg font-semibold text-accent-blue mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-accent-blue text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={selectedProject.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-6 py-3 bg-accent-blue text-dark-bg font-semibold rounded-xl hover:bg-accent-blue/90 transition-colors duration-300"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      View Live
                    </motion.a>
                    <motion.a
                      href={selectedProject.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors duration-300"
                    >
                      <Github size={20} className="mr-2" />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MiniGallery;
