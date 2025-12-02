import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' }
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/afsal1122/AIML_Projects', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/afsal-rahiman-b50873264', label: 'LinkedIn' },
    { icon: FaWhatsapp, url: 'https://wa.me/919447176371', label: 'WhatsApp' },
    { icon: FaEnvelope, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=afsalrahimant1@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="glass-card border-t border-gray-200 dark:border-gray-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">ART Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A showcase of my journey in Artificial Intelligence and Machine Learning
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0 0 15px var(--neoblue)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-neoblue dark:hover:bg-neoblue hover:text-gray-900 dark:hover:text-gray-900 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="text-gray-600 dark:text-gray-400 hover:text-neoblue dark:hover:text-neoblue transition-all duration-300 cursor-pointer inline-block hover:translate-x-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="text-neoblue" />
                <span>Palakkad, Kerala, India <br />Pincode: 678702</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <FaPhone className="text-neoblue" />
                <span>+91 9447176371</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <FaEnvelope className="text-neoblue" />
                <span>afsalrahimant1@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} ART Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
