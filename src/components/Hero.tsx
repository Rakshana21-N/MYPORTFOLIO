import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleDownloadResume = () => {
    const element = document.createElement('a');
    element.setAttribute('href', '/Updated_Rakshana_Resume_21.pdf');
    element.setAttribute('download', 'Rakshana_N_Resume.pdf');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleScroll = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`hero ${isDark ? 'dark' : 'light'}`}>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm Rakshana N
          </motion.h1>

          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Full Stack Developer
          </motion.h2>

          <motion.p variants={itemVariants} className="hero-tagline">
            Building Secure, Scalable and High-Performance Web Applications
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() =>
                document
                  .querySelector('#projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={handleDownloadResume}>
              <Download size={18} /> Download Resume
            </button>
            <button
              className="btn btn-tertiary"
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Mail size={18} /> Contact Me
            </button>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <button onClick={handleScroll} className="scroll-button">
              <ArrowDown size={24} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-decoration"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="blob"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
