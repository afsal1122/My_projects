import React, { createContext, useContext, useState, useEffect } from 'react';
import { Howl } from 'howler';
import transitionSound from '../assets/audio/transition.mp3';

const AudioContext = createContext();

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(() => {
    const savedMute = localStorage.getItem('audio-muted');
    return savedMute === 'true';
  });

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [transitionSoundObj, setTransitionSoundObj] = useState(null);

  useEffect(() => {
    localStorage.setItem('audio-muted', isMuted.toString());
  }, [isMuted]);

  useEffect(() => {
    // Initialize sound only after user interaction
    const enableSound = () => {
      if (!soundEnabled) {
        console.log('Initializing sound...');
        const sound = new Howl({
          src: [transitionSound],
          volume: 0.5,
          autoplay: false,
          html5: true, // Force HTML5 Audio to avoid some decoding issues
          onload: () => console.log('Transition sound loaded successfully'),
          onloaderror: (id, err) => console.error('Sound load error:', err),
          onplayerror: (id, err) => {
            console.error('Sound play error:', err);
            sound.once('unlock', () => {
              sound.play();
            });
          }
        });
        setTransitionSoundObj(sound);
        setSoundEnabled(true);
        console.log('Sound enabled state set to true');
        window.removeEventListener('click', enableSound);
        window.removeEventListener('touchstart', enableSound);
      }
    };

    window.addEventListener('click', enableSound);
    window.addEventListener('touchstart', enableSound);

    return () => {
      window.removeEventListener('click', enableSound);
      window.removeEventListener('touchstart', enableSound);
    };
  }, [soundEnabled]);

  const playTransitionSound = () => {
    console.log('Attempting to play sound. Enabled:', soundEnabled, 'Muted:', isMuted);
    if (soundEnabled && !isMuted && transitionSoundObj) {
      const id = transitionSoundObj.play();
      console.log('Sound played with ID:', id);
    } else {
      console.warn('Sound not played. Conditions not met.');
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AudioContext.Provider value={{
      isMuted,
      toggleMute,
      playTransitionSound,
      soundEnabled
    }}>
      {children}
    </AudioContext.Provider>
  );
};
