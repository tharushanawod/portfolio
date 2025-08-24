import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Box } from "@react-three/drei";
import { ChevronDown } from "lucide-react";
import Galaxy from "./Galaxy";

const Hero = () => {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Galaxy mouseRepulsion={true} mouseInteraction={true} />

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 text-center px-4 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 pointer-events-none"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            <span className="text-accent-blue glow-text">Tharusha</span>
            <br />
            <span className="text-white">Nawod</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-8 pointer-events-none"
        >
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technology and
            creative innovation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pointer-events-none"
        >
          <div className="text-accent-blue text-sm font-medium tracking-wider uppercase">
            Full-Stack Developer • UI/UX Designer • Creative Technologist
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8 pointer-events-auto"
        >
          <a
            href="/Tharusha-Nawod-Jayasinghe-FullStack-Developer-Intern.pdf"
            download="Tharusha-Nawod-Jayasinghe-FullStack-Developer-Intern-CV.pdf"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-accent-blue to-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-blue/25 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-accent-blue opacity-0 transition-opacity duration-300 group-hover:translate-x-1 group-hover:opacity-100 rounded-full"></div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
