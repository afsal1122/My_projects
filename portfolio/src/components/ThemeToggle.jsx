import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useAudio } from '../context/AudioContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const { playTransitionSound } = useAudio();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        toggleTheme();
        playTransitionSound();
      }}
      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-300" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
