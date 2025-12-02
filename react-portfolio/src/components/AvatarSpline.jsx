import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Fallback SVG Avatar
const SvgAvatar = () => (
  <div className="w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-64 h-64">
      <circle cx="50" cy="40" r="20" fill="none" stroke="#00eeff" strokeWidth="2" />
      <circle cx="40" cy="35" r="3" fill="#00eeff" />
      <circle cx="60" cy="35" r="3" fill="#00eeff" />
      <path d="M40 50 Q50 60 60 50" stroke="#00eeff" strokeWidth="2" fill="none" />
    </svg>
  </div>
);

// Simple 3D Head Component
const SimpleHead = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#00eeff" 
          metalness={0.7} 
          roughness={0.2} 
          emissive="#00eeff"
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.3, 0.2, 0.8]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.3, 0.2, 0.8]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Mouth */}
      <mesh position={[0, -0.2, 0.8]}>
        <torusGeometry args={[0.2, 0.05, 16, 32]} />
        <meshStandardMaterial 
          color="#ff00ff" 
          metalness={0.5} 
          roughness={0.3} 
        />
      </mesh>
    </Float>
  );
};

// Try to import Spline component if available
let SplineComponent;
try {
  SplineComponent = require('@splinetool/react-spline').default;
} catch (e) {
  SplineComponent = null;
}

const AvatarSpline = () => {
  const [showFallback, setShowFallback] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hide on very small screens
  if (windowWidth < 480) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <SvgAvatar />
      </div>
    );
  }

  // If Spline component is available and has a valid scene
  if (SplineComponent && process.env.REACT_APP_SPLINE_SCENE_URL) {
    return (
      <div className="w-full h-full">
        <Suspense fallback={<div>Loading 3D model...</div>}>
          <SplineComponent scene={process.env.REACT_APP_SPLINE_SCENE_URL} />
        </Suspense>
      </div>
    );
  }

  // Fallback to Three.js model
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00eeff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        <SimpleHead />
        <Environment preset="night" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default AvatarSpline;
