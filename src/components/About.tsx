import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/About.css';

const About: React.FC = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    { icon: '💼', label: '1.6 Years', text: 'Professional Experience' },
    { icon: '🎯', label: 'MEAN Stack', text: 'Specialization' },
    { icon: '🔐', label: 'Security', text: 'Focus' },
    { icon: '⚡', label: 'Performance', text: 'Oriented' },
  ];

  return (
    <section id="about" className={`about ${isDark ? 'dark' : 'light'}`}>
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="about-text">
            <p className="about-description">
              I am a Full Stack Developer with 1.5 years of experience in MEAN Stack development.
              My expertise lies in building secure authentication systems, RESTful APIs,
              role-based access control, and scalable backend architectures. I enjoy solving
              complex problems and developing efficient applications that focus on security,
              performance, and maintainability.
            </p>

            <div className="highlights">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="highlight-icon">{highlight.icon}</div>
                  <div className="highlight-content">
                    <p className="highlight-label">{highlight.label}</p>
                    <p className="highlight-text">{highlight.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default About;
