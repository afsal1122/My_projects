import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';

const ExperienceSection = () => {
  const experiences = [
    {
      period: 'Jun 2025 – Oct 2025',
      role: 'Software Testing Intern',
      company: 'Intersmart Edutech',
      description: 'Performed manual testing with defect logging, automated browser tests using Selenium (Java), and ran basic performance tests with JMeter.'
    },
    {
      period: 'May 2024 – July 2024',
      role: 'AI Intern',
      company: 'Skolar',
      description: 'Researched AI algorithms and collaborated on training models and building prototypes.'
    },
    {
      period: 'April 2024 – May 2024',
      role: 'Machine Learning Intern',
      company: 'Softronics',
      description: 'Developed predictive models using supervised learning techniques and dataset analysis.'
    },
    {
      period: 'April 2023 – May 2023',
      role: 'Python Intern',
      company: 'Softronics',
      description: 'Automated tasks and performed data manipulation using Python, Pandas, and NumPy.'
    },
    {
      period: 'July 2024 - 15 Days',
      role: 'Soft Skills Training',
      company: 'Infosys BPM Limited',
      description: 'Refined professional communication, presentation skills, and workplace etiquette.'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-[var(--color-bg)] to-gray-100 dark:from-neodark dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neoblue to-neomagenta mx-auto rounded-full"></div>
        </motion.div>

        <Timeline experiences={experiences} />
      </div>
    </section>
  );
};

export default ExperienceSection;
