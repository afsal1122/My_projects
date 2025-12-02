import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neoblue to-neomagenta transform -translate-x-1/2"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
          >
            {/* Timeline node */}
            <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full bg-neoblue border-4 border-neodark flex items-center justify-center z-10">
              <div className="w-3 h-3 rounded-full bg-neodark"></div>
            </div>

            {/* Content */}
            <div className={`w-full pl-16 md:w-1/2 md:flex md:flex-col ${index % 2 === 0 ? 'md:pr-10 md:pl-0 md:text-right md:items-end' : 'md:pl-10 md:items-start'}`}>
              <div className="glass-card p-6 neon-border w-full md:max-w-md">
                <span className="text-neoblue text-sm font-medium">{exp.period}</span>
                <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                <h4 className="text-lg text-neomagenta mb-3">{exp.company}</h4>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-2/12"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
