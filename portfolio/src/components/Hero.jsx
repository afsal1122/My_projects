import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaDownload, FaEye } from 'react-icons/fa';


const TypingText = ({ text, delay = 0, speed = 0.05, className = "", start = true }) => {
  const words = text.split(" ");
  let runningIndex = 0;

  return (
    <span className={`${className}`}>
      {words.map((word, wordIndex) => {
        const currentWordStartIndex = runningIndex;
        runningIndex += word.length + 1;

        return (
          <React.Fragment key={wordIndex}>
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.25,
                    delay: delay + (currentWordStartIndex + charIndex) * speed
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {wordIndex < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </span>
  );
};

const Hero = () => {
  const words = ["AI Powered", "Future Tech", "Neural Network", "Machine Learning"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [startRotation, setStartRotation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartRotation(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startRotation) return;

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [startRotation]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,238,255,0.1)_0%,rgba(11,15,20,0)_70%)]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-neoblue/10"
                animate={{
                  borderColor: [
                    'rgba(0,238,255,0.1)',
                    'rgba(0,238,255,0.3)',
                    'rgba(0,238,255,0.1)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.02
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Terminal Intro */}


      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 1 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 whitespace-nowrap">
              <TypingText text="Hi, I'm " delay={0.5} className="inline-block" />
              <motion.span
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
                className="gradient-text inline-block"
              >
                Afsal Rahiman
              </motion.span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 whitespace-nowrap">
              <TypingText text="Crafting " delay={2.5} className="inline-block" />
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: (!startRotation && currentWordIndex === 0) ? 3.0 : 0 }}
                className="gradient-text"
              >
                {words[currentWordIndex]}
              </motion.span>
              <TypingText text=" interfaces" delay={3.8} className="inline-block" />
            </h2>

            <div className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl h-24 md:h-auto">
              <TypingText
                text="Developer focused on AI-powered applications, machine learning models, and intuitive user experiences powered by modern technologies."
                delay={4.3}
                speed={0.02}
                start={true}
              />
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 6.0 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-neoblue to-neomagenta text-white font-bold hover:opacity-90 transition-opacity cursor-pointer text-center"
              >
                View Projects
              </Link>
              <a
                href="/Afsal%20AI%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border-2 border-neoblue text-neoblue font-bold hover:bg-neoblue/10 transition-colors text-center flex items-center justify-center gap-2"
              >
                <FaEye />
                <span>View Resume</span>
              </a>
              <a
                href="/Afsal%20AI%20Resume.pdf"
                download
                className="px-4 py-4 rounded-full border-2 border-neoblue text-neoblue font-bold hover:bg-neoblue/10 transition-colors text-center flex items-center justify-center relative group"
                aria-label="Download Resume"
              >
                <FaDownload />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 dark:bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Download Resume
                </span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neoblue to-neomagenta rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img
                src="/image.png"
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-neoblue/50"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-neoblue flex justify-center">
          <div className="w-2 h-2 bg-neoblue rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
