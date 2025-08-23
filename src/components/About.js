import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, FileCode, FileText, Code2, Zap } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skills = [
    { name: "HTML", icon: FileText, color: "#E34F26" },
    { name: "CSS", icon: FileCode, color: "#1572B6" },
    { name: "JavaScript", icon: Code, color: "#F7DF1E" },
    { name: "React", icon: Zap, color: "#61DAFB" },
    { name: "Spline", icon: Code2, color: "#D8ECF8" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-blue rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left side - Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-r from-accent-blue/20 to-accent-blue/5 rounded-full blur-3xl"></div>

              {/* Image container */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(216, 236, 248, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent-blue/30 glow-border"
              >
                {/* Placeholder image - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-gray-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl text-accent-blue mb-2">👨‍💻</div>
                    <div className="text-white font-medium">Tharusha Nawod</div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-blue/10 to-transparent animate-pulse"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Bio and Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Bio */}
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                About <span className="text-accent-blue glow-text">Me</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed mb-6"
              >
                I'm a passionate full-stack developer with a keen eye for
                creating immersive digital experiences. With expertise in modern
                web technologies and a creative approach to problem-solving, I
                transform ideas into elegant, functional applications that leave
                lasting impressions.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed"
              >
                My journey in tech has been driven by curiosity and innovation,
                constantly exploring new frontiers in web development, 3D
                graphics, and interactive design to push the boundaries of
                what's possible on the web.
              </motion.p>
            </div>

            {/* Skills */}
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-semibold text-white mb-6"
              >
                Technical <span className="text-accent-blue">Skills</span>
              </motion.h3>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      boxShadow: `0 10px 20px ${skill.color}40`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center p-4 rounded-xl glass-effect hover:border-accent-blue/50 transition-all duration-300"
                  >
                    <skill.icon
                      size={32}
                      color={skill.color}
                      className="mb-2"
                    />
                    <span className="text-sm text-white font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
