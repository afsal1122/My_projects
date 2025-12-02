import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';

const TerminalIntro = ({ onClose }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = '> Initializing ART Portfolio Interface...\n> Loading neural pathways...\n> System ready. Welcome!';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Auto close after a delay
        setTimeout(onClose, 1000);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-2xl bg-gray-900 border border-neoblue rounded-lg overflow-hidden"
      >
        <div className="bg-gray-800 px-4 py-2 flex items-center">
          <FaTerminal className="text-neoblue mr-2" />
          <span className="text-gray-300 text-sm">system-terminal.log</span>
          <button
            onClick={onClose}
            className="ml-auto text-gray-400 hover:text-white"
          >
            âœ•
          </button>
        </div>
        <div className="p-6 h-48 overflow-auto">
          <pre className="terminal-text whitespace-pre-wrap">
            {displayText}
            <span className="animate-terminal-cursor">|</span>
          </pre>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TerminalIntro;
