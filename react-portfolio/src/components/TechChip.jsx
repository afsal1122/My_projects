import React from 'react';
import { motion } from 'framer-motion';

const TechChip = ({ icon: Icon, name, proficiency = 80, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className="neon-border rounded-full px-4 py-2 flex items-center space-x-2 glass-card hover-glow">
        {Icon && <Icon className="text-neoblue" />}
        <span className="font-medium whitespace-nowrap">{name}</span>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 dark:bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
        Proficiency: {proficiency}%
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-neoblue blur-md opacity-0 group-hover:opacity-30 transition-opacity -z-10 animate-pulse-neon"></div>
    </motion.div>
  );
};

export default TechChip;
