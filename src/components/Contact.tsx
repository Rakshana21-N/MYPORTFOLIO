import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const { isDark } = useTheme();

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'rakshananeelakantan2102@gmail.com',
      href: 'mailto:rakshananeelakantan2102@gmail.com',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rakshana-neelakantan-547706269',
      href: 'https://linkedin.com/in/rakshana-neelakantan-547706269',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Chennai, India',
      href: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className={`contact ${isDark ? 'dark' : 'light'}`}>
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">Let's connect and discuss opportunities</p>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Contact Information</h3>
            <div className="info-items">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="info-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <p className="info-label">{info.label}</p>
                    <p className="info-value">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-buttons">
                <motion.a
                  href="https://linkedin.com/in/rakshana-neelakantan-547706269"
                  className="social-btn linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:rakshananeelakantan2102@gmail.com"
                  className="social-btn email"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={24} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  className="social-btn github"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
