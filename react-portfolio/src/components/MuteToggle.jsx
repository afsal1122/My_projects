import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../context/AudioContext';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MuteToggle = () => {
  const { isMuted, toggleMute, playTransitionSound } = useAudio();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        toggleMute();
        if (isMuted) playTransitionSound(); // Play sound when unmuting
      }}
      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
    >
      {isMuted ? (
        <FaVolumeMute className="text-red-400" />
      ) : (
        <FaVolumeUp className="text-neoblue" />
      )}
    </motion.button>
  );
};

export default MuteToggle;
