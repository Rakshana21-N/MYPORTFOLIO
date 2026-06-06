import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Medal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Education.css';

const Education: React.FC = () => {
  const { isDark } = useTheme();

  const education = {
    degree: 'Bachelor of Computer Science Engineering',
    institution: 'Dr. N.G.P Institute of Technology',
    location: 'Coimbatore',
    year: '2020 - 2024',
    cgpa: '8.75',
  };

  const certifications = [
    'NPTEL Programming in Java',
    'Great Learning Java Programming',
    'Fundamentals of Drones Workshop',
    'Database in Real Time Applications Seminar',
    'Paper Presentation at Sri Krishna College of Engineering',
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
    <section id="education" className={`education ${isDark ? 'dark' : 'light'}`}>
      <div className="education-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Education & Certifications</h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education Card */}
          <motion.div
            className="education-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="card-icon">
              <GraduationCap size={32} />
            </div>
            <div className="card-content">
              <h3>{education.degree}</h3>
              <p className="institution">{education.institution}</p>
              <p className="location">{education.location}</p>
              <div className="education-meta">
                <span className="year">{education.year}</span>
                <span className="cgpa">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div className="certifications-section" variants={itemVariants}>
            <div className="certifications-header">
              <Award size={28} />
              <h3>Certifications & Achievements</h3>
            </div>

            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  viewport={{ once: true }}
                >
                  <Medal size={20} className="cert-icon" />
                  <span>{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
