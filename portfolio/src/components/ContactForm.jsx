import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaTimes } from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Apply specific input restrictions
    let newValue = value;
    if (name === 'name') {
      newValue = value.replace(/[^A-Za-z\s]/g, '');
    } else if (name === 'email') {
      newValue = value.replace(/\s/g, '');
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleClear = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: ''
    }));
    setErrors(prev => ({
      ...prev,
      [field]: ''
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'name') {
      if (!value.trim()) {
        error = "Name is required";
      } else if (value.trim().length < 3) {
        error = "Name must be at least 3 characters long";
      }
    }

    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value.trim()) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Please enter a valid email address";
      }
    }

    if (name === 'message') {
      if (!value.trim()) {
        error = "Message is required";
      }
    }

    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const isFormValid = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (
      formData.name.trim().length >= 3 &&
      emailRegex.test(formData.email) &&
      formData.message.trim().length > 0
    );
  };

  const sanitizeInput = (input) => {
    // Remove potential XSS and SQL injection patterns
    const dangerousPatterns = [
      /<script\b[^>]*>([\s\S]*?)<\/script>/gm,
      /javascript:/gi,
      /on\w+=/gi,
      /SELECT\s+.*FROM/gi,
      /INSERT\s+INTO/gi,
      /DROP\s+TABLE/gi,
      /UNION\s+SELECT/gi,
      /--/g,
      /;/g
    ];

    let sanitized = input;
    dangerousPatterns.forEach(pattern => {
      sanitized = sanitized.replace(pattern, '');
    });

    // Basic HTML entity encoding
    return sanitized
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters long";
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const rawName = formData.name;
    const rawEmail = formData.email;
    const rawMessage = formData.message;

    // Sanitize inputs
    const cleanName = sanitizeInput(rawName);
    const cleanEmail = sanitizeInput(rawEmail);
    const cleanMessage = sanitizeInput(rawMessage);

    // Check if sanitization removed content (potential attack)
    if (cleanName !== rawName.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") ||
      cleanMessage !== rawMessage.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")) {
      alert("Invalid characters detected in your input. Please remove any special code or scripts.");
      return;
    }

    setLoading(true);
    setStatus('');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'service_hfyme74';
    const TEMPLATE_ID = 'template_o8gxedb';
    const PUBLIC_KEY = 'uqbOJSs11R5Z0NjNH';

    // Create a temporary form with sanitized data for EmailJS
    const sanitizedData = {
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, sanitizedData, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <motion.form
      ref={form}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={sendEmail}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} text-gray-900 dark:text-white focus:border-neoblue focus:outline-none focus:ring-1 focus:ring-neoblue transition-colors pr-10`}
          />
          {formData.name && (
            <button
              type="button"
              onClick={() => handleClear('name')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes />
            </button>
          )}
        </div>
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} text-gray-900 dark:text-white focus:border-neoblue focus:outline-none focus:ring-1 focus:ring-neoblue transition-colors pr-10`}
          />
          {formData.email && (
            <button
              type="button"
              onClick={() => handleClear('email')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes />
            </button>
          )}
        </div>
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} text-gray-900 dark:text-white focus:border-neoblue focus:outline-none focus:ring-1 focus:ring-neoblue transition-colors resize-none pr-10`}
          ></textarea>
          {formData.message && (
            <button
              type="button"
              onClick={() => handleClear('message')}
              className="absolute right-3 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes />
            </button>
          )}
        </div>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <motion.button
        whileHover={!loading && isFormValid() ? { scale: 1.02 } : {}}
        whileTap={!loading && isFormValid() ? { scale: 0.98 } : {}}
        type="submit"
        disabled={loading || !isFormValid()}
        className={`w-full px-6 py-3 rounded-lg font-bold transition-all ${loading || !isFormValid()
          ? 'bg-gray-600 cursor-not-allowed text-gray-300'
          : 'bg-gradient-to-r from-neoblue to-neomagenta text-black hover:opacity-90'
          }`}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </motion.button>

      {status === 'success' && (
        <p className="text-green-500 text-center font-medium">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-center font-medium">Failed to send message. Please try again.</p>
      )}
    </motion.form>
  );
};

export default ContactForm;
