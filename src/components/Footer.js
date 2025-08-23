import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="text-center mb-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="text-4xl font-bold text-accent-blue glow-text mb-4">
              TN
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Crafting digital experiences with passion and innovation
            </p>
          </motion.div>

          {/* Navigation links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <ul className="flex flex-wrap justify-center gap-8">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent-blue transition-colors duration-300 font-medium relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex justify-center space-x-6">
              {[
                { name: "GitHub", url: "https://github.com/tharushanawod" },
                {
                  name: "LinkedIn",
                  url: "https://linkedin.com/in/tharushanawod",
                },
                { name: "Twitter", url: "https://twitter.com/tharushanawod" },
                { name: "Email", url: "mailto:tharusha@example.com" },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    textShadow: "0 0 20px rgba(216, 236, 248, 0.8)",
                  }}
                  className="text-gray-400 hover:text-accent-blue transition-all duration-300 font-medium"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <span>© 2024 Tharusha Nawod. Made with </span>
              <Heart size={14} className="inline text-red-400 mx-1" />
              <span> and lots of ☕</span>
            </div>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 20px rgba(216, 236, 248, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-2 px-4 py-2 bg-accent-blue/20 backdrop-blur-sm rounded-full border border-accent-blue/30 text-accent-blue hover:bg-accent-blue/30 transition-all duration-300 group"
            >
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
              <span className="text-sm font-medium">Back to top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-blue rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
