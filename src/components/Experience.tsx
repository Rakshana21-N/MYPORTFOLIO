import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  const { isDark } = useTheme();

  const experiences = [
    {
      title: 'MEAN Stack Developer',
      company: 'Current Position',
      period: 'Nov 2024 - Present',
      type: 'experience',
      responsibilities: [
        'Developed and maintained full-stack applications using MongoDB, Express.js, Angular, and Node.js',
        'Built secure authentication systems using JWT and middleware authorization',
        'Developed REST APIs for registration, login, password reset, and account verification',
        'Implemented Role-Based Access Control (RBAC)',
        'Integrated OAuth authentication providers',
        'Implemented OTP verification and secure account recovery',
        'Optimized backend APIs for performance and scalability',
      ],
    },
    {
      title: 'Project Trainee',
      company: 'Amzetta Technologies Pvt Ltd',
      period: 'Jun 2024 - Sept 2024',
      type: 'internship',
      responsibilities: [
        'Developed MERN stack applications',
        'Created backend APIs using Node.js and Express.js',
        'Performed debugging and API testing',
        'Worked on performance improvements',
      ],
    },
  ];

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

  return (
    <section id="experience" className={`experience ${isDark ? 'dark' : 'light'}`}>
      <div className="experience-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Experience & Internship</h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.type}`}
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <motion.div
                className="timeline-content"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="content-header">
                  <div>
                    <h3 className="job-title">{exp.title}</h3>
                    <p className="company-name">{exp.company}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>

                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
