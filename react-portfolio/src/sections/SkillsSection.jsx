import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaGitAlt,
  FaJava, FaGithub, FaRProject,
  FaEye, FaChartBar
} from 'react-icons/fa';
import {
  SiFlask, SiStreamlit,
  SiJupyter, SiOpencv, SiScikitlearn, SiPandas, SiNumpy, SiWireshark, SiSelenium
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import TechChip from '../components/TechChip';

const SkillsSection = () => {
  const skillCategories = [
    {
      name: 'Libraries & Frameworks',
      skills: [
        { icon: SiOpencv, name: 'OpenCV', proficiency: 70 },
        { icon: FaEye, name: 'MediaPipe', proficiency: 70 },
        { icon: SiScikitlearn, name: 'Scikit-learn', proficiency: 60 },
        { icon: FaChartBar, name: 'XGBoost', proficiency: 70 },
        { icon: SiPandas, name: 'Pandas', proficiency: 70 },
        { icon: SiNumpy, name: 'NumPy', proficiency: 70 }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { icon: FaPython, name: 'Python', proficiency: 70 },
        { icon: FaJava, name: 'Java', proficiency: 60 },
        { icon: SiFlask, name: 'Flask', proficiency: 65 },
        { icon: SiStreamlit, name: 'Streamlit', proficiency: 65 },
        { icon: FaRProject, name: 'R Programming', proficiency: 65 },
        { icon: FaGithub, name: 'GitHub', proficiency: 70 }
      ]
    },
    {
      name: 'Tools & Platforms',
      skills: [
        { icon: FaGitAlt, name: 'Git', proficiency: 70 },
        { icon: VscVscode, name: 'VS Code', proficiency: 80 },
        { icon: SiJupyter, name: 'Jupyter NB', proficiency: 65 },
        { icon: SiWireshark, name: 'Scapy', proficiency: 65 },
        { icon: SiSelenium, name: 'Selenium', proficiency: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-[var(--color-bg)] to-gray-100 dark:from-neodark dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neoblue to-neomagenta mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 neon-border"
            >
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">{category.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <TechChip
                    key={skillIndex}
                    icon={skill.icon}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    delay={skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
