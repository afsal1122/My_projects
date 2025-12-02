import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaCopy, FaCheck } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('afsalrahimant1@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: FaEnvelope, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=afsalrahimant1@gmail.com', label: 'Email' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/afsal-rahiman-b50873264', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/afsal1122/AIML_Projects', label: 'GitHub' },
    { icon: FaWhatsapp, url: 'https://wa.me/919447176371', label: 'WhatsApp' }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neoblue to-neomagenta mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg ">
              I am currently looking for opportunities in AI and Machine Learning.
              If you have an interesting project or a role that fits my skills,
              feel free to contact me!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-neoblue/10 flex items-center justify-center">
                  <FaEnvelope className="text-neoblue text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 dark:text-gray-400">afsalrahimant1@gmail.com</p>
                    <button
                      onClick={handleCopy}
                      className="text-gray-500 hover:text-neoblue transition-colors p-1"
                      title="Copy email"
                    >
                      {copied ? <FaCheck size={14} className="text-green-500" /> : <FaCopy size={14} />}
                    </button>
                    <AnimatePresence>
                      {copied && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-green-500 text-sm font-medium"
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0 0 15px var(--neoblue)" }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-neoblue dark:hover:bg-neoblue hover:text-gray-900 dark:hover:text-gray-900 transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default ContactSection;
