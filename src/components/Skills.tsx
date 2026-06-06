import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'C', 'C++'],
      color: 'primary',
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Angular'],
      color: 'secondary',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MVC Architecture', 'Middleware Development'],
      color: 'tertiary',
    },
    {
      title: 'Authentication & Security',
      skills: ['JWT Authentication', 'OAuth 2.0', 'RBAC', 'bcrypt', 'OTP Verification', 'Session Management', 'API Security'],
      color: 'accent',
    },
    {
      title: 'Database',
      skills: ['MongoDB'],
      color: 'primary',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Postman', 'VS Code'],
      color: 'secondary',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className={`skills ${isDark ? 'dark' : 'light'}`}>
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className={`skill-category skill-${category.color}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
