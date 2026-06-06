import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isDark ? 'dark' : 'light'}`}>
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="footer-section">
          <h3>Rakshana N</h3>
          <p>Full Stack Developer | MEAN/MERN Stack Developer</p>
          <p>Building secure, scalable web applications.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:rakshananeelakantan2102@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/rakshana-neelakantan-547706269" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>&copy; {currentYear} Rakshana N. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
