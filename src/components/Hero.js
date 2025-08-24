import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Box } from "@react-three/drei";
import { ChevronDown } from "lucide-react";
import Orb from "./Orb";

// 3D Scene Component
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#D8ECF8" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D8ECF8" />

      {/* Floating geometric shapes */}
      <motion.mesh
        animate={{
          rotation: [0, Math.PI * 2, 0],
          y: [0, 2, 0],
        }}
        transition={{
          rotation: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        position={[-3, 0, 0]}
      >
        <Box args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#D8ECF8"
          emissive="#D8ECF8"
          emissiveIntensity={0.2}
        />
      </motion.mesh>

      <motion.mesh
        animate={{
          rotation: [0, -Math.PI * 2, 0],
          y: [0, -2, 0],
        }}
        transition={{
          rotation: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        position={[3, 0, 0]}
      >
        <Sphere args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#D8ECF8"
          emissive="#D8ECF8"
          emissiveIntensity={0.2}
        />
      </motion.mesh>

      <motion.mesh
        animate={{
          rotation: [Math.PI * 2, 0, 0],
          x: [0, 2, 0],
        }}
        transition={{
          rotation: { duration: 25, repeat: Infinity, ease: "linear" },
          x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        position={[0, 2, 0]}
      >
        <Box args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color="#D8ECF8"
          emissive="#D8ECF8"
          emissiveIntensity={0.2}
        />
      </motion.mesh>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-black"></div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
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
          className="mb-8"
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
        >
          <div className="text-accent-blue text-sm font-medium tracking-wider uppercase">
            Full-Stack Developer • UI/UX Designer • Creative Technologist
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-accent-blue"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-blue rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const HeroModified = () => {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />

      Content overlay
      <div className="absolute inset-0 z-20 text-center px-4 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
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
          className="mb-8"
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
        >
          <div className="text-accent-blue text-sm font-medium tracking-wider uppercase">
            Full-Stack Developer • UI/UX Designer • Creative Technologist
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { HeroModified };

export default Hero;
