import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaGithub, FaBrain, FaLanguage } from 'react-icons/fa';
import { SiScikitlearn, SiOpencv, SiNumpy, SiTensorflow } from 'react-icons/si';
import TechChip from '../components/TechChip';

const AboutSection = () => {
  const skills = [
    { icon: FaPython, name: 'Python', proficiency: 70 },
    { icon: SiTensorflow, name: 'Machine Learning', proficiency: 70 },
    { icon: FaBrain, name: 'Artificial Intelligence', proficiency: 70 },
    { icon: FaLanguage, name: 'NLP', proficiency: 70 },
    { icon: SiScikitlearn, name: 'Scikit-Learn', proficiency: 65 },
    { icon: SiOpencv, name: 'OpenCV', proficiency: 65 },
    { icon: SiNumpy, name: 'NumPy & Pandas', proficiency: 70 },
    { icon: FaGithub, name: 'Git / GitHub', proficiency: 70 }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neoblue to-neomagenta mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 neon-border"
          >
            <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm an AI/ML Developer passionate about turning data into intelligent and useful systems. With a strong academic background in Artificial Intelligence and Machine Learning, I’ve developed skills in Artificial Intelligence, Machine learning, and Python programming through hands-on projects and internships.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey began with core programming and foundational AI concepts during my BSc in Artificial Intelligence & Machine Learning. Over time, I expanded my skills through internships, hands-on projects, and continuous learning—developing a passion for creating practical AI solutions that blend innovation with reliability.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Outside of development, I’m constantly learning—experimenting with new AI tools, exploring research papers, and enhancing my understanding of modern AI techniques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Core Technologies</h3>
            <div className="flex flex-wrap gap-4 justify-start">
              {skills.map((skill, index) => (
                <TechChip
                  key={index}
                  icon={skill.icon}
                  name={skill.name}
                  proficiency={skill.proficiency}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
