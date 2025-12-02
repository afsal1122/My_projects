import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl glass-card border-neoblue max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-neoblue text-black hover:bg-neoblue/20 hover:text-neoblue transition-colors z-10"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="p-4 md:p-5">
              <div className="h-40 md:h-56 rounded-lg overflow-hidden mb-4 md:mb-5 relative bg-black">
                {project.video ? (
                  project.video.includes('youtube.com') || project.video.includes('youtu.be') ? (
                    <iframe
                      src={project.video.replace('watch?v=', 'embed/')}
                      title={project.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      src={project.video}
                      controls
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : (
                  <>
                    <img
                      src={project.image || "/src/assets/images/project-placeholder.png"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{project.title}</h2>
                  <p className="text-gray-300 mb-6">{project.fullDescription || project.description}</p>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-full bg-neoblue/10 text-neoblue border border-neoblue/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Actions</h3>
                  <div className="space-y-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-lg border border-neoblue text-neoblue hover:bg-neoblue/10 transition-colors"
                    >
                      <FaGithub />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
