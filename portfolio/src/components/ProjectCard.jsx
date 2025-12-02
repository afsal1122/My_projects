import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.1 }
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onClick={() => onClick(project)}
      className="glass-card p-6 cursor-pointer group hover:bg-gray-50 dark:hover:bg-black/40 transition-colors"
    >
      <div className="h-48 rounded-lg overflow-hidden mb-4 relative">
        <img
          src={project.image || "/src/assets/images/project-placeholder.png"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span className="text-neoblue text-sm">Click to view details</span>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 3).map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs rounded-full bg-neoblue/10 text-neoblue border border-neoblue/30"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            +{project.tech.length - 3} more
          </span>
        )}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick(project);
          }}
          className="flex items-center space-x-2 text-neoblue hover:text-neomagenta transition-colors"
        >
          <FaExternalLinkAlt />
          <span>Demo</span>
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-neoblue transition-colors"
        >
          <FaGithub />
          <span>Code</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
