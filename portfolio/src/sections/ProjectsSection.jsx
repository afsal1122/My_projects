import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Real-Time Network Packet Classifier (IDS)',
      description: 'AI-powered Intrusion Detection System (IDS) that classifies live network traffic threats using NLP techniques.',
      fullDescription:
        'An intelligent cybersecurity tool that monitors live network traffic to detect malicious activity. It pioneers an NLP-based approach by treating packet payloads as text and using TF-IDF vectorization for anomaly detection. The application features a dual-mode operation (Live Sniffing & Simulation) and visualizes threat levels instantly via a responsive Flask dashboard.',
      image: '/assets/images/ids.png',
      tech: ['Python', 'Scikit-learn', 'Scapy', 'Flask', 'Pandas', 'NLTK'],
      demo: '#',
      video: '/assets/videos/RTNPC.mp4',
      github: 'https://github.com/afsal1122/AIML_Projects/tree/main/network-packet-classifier'
    },
    {
      id: 2,
      title: 'Laptop Price Prediction & Recommendation Platform',
      description: 'Full-stack data science application for accurate market price prediction and persona-based product recommendations.',
      fullDescription:
        'A sophisticated machine learning application designed to predict laptop market prices with high accuracy using XGBoost regression. Beyond simple prediction, it includes a weighted recommendation engine that scores products based on specific user personas (Gaming, Coding, Content Creation) and provides interactive visual analytics of market trends.',
      image: '/assets/images/lpr.png',
      tech: ['Python', 'XGBoost', 'Scikit-learn', 'Streamlit', 'Pandas'],
      demo: '#',
      video: '/assets/videos/LPP.mp4',
      github: 'https://github.com/afsal1122/AIML_Projects/tree/main/Laptop-Price-Prediction'
    },
    {
      id: 3,
      title: 'AI Gesture-Controlled Interface & Voice Assistant',
      description:
        'A touch-free HCI system enabling mouse control and concurrent voice typing using real-time computer vision.',
      fullDescription:
        'A robust Human-Computer Interaction system that eliminates the need for physical peripherals. It utilizes geometric algorithms for precise hand tracking and implements exponential smoothing to reduce cursor jitter. The system features a multi-threaded architecture to handle real-time gesture recognition alongside concurrent speech-to-text typing.',
      image: '/assets/images/hga.png',
      tech: ['OpenCV', 'MediaPipe', 'Autopy', 'NumPy', 'Python'],
      demo: '#',
      video: '', // Add YouTube link or video URL here
      github: 'https://github.com/afsal1122/AIML_Projects/tree/main/Hand%20gesture%20AI%20mouse'
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neoblue to-neomagenta mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={handleProjectClick}
            />
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 rounded-full border-2 border-neoblue text-neoblue font-bold hover:bg-neoblue/10 transition-colors">
              View All Projects
            </button>
          </motion.div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ProjectsSection;
