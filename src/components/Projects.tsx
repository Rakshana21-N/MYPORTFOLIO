import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'Authentication & Role-Based Management System',
      description:
        'Built secure authentication and authorization systems with JWT, OAuth, OTP verification, password reset functionality, and role-based access control.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC'],
      featured: true,
      image: '🔐',
    },
    {
      id: 2,
      title: 'AI Integrated Chat Application',
      description:
        'Developed a scalable chatbot supporting Java, Python, and C++ programming queries with multilingual capabilities and context-aware responses.',
      technologies: ['Python', 'FastAPI', 'Ollama', 'LLM'],
      featured: true,
      image: '🤖',
    },
    {
      id: 3,
      title: 'Sentiment Analysis System for Education Feedback',
      description:
        'Built a sentiment analysis application to evaluate student feedback and generate reports for educators.',
      technologies: ['Python', 'HTML', 'CSS', 'Machine Learning'],
      featured: false,
      image: '📊',
    },
    {
      id: 4,
      title: 'Crop Price Prediction System',
      description:
        'Developed a machine learning model to predict agricultural crop prices and assist farmers in decision making.',
      technologies: ['Python', 'Machine Learning', 'Data Analysis'],
      featured: false,
      image: '🌾',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className={`projects ${isDark ? 'dark' : 'light'}`}>
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span className="image-emoji">{project.image}</span>
                </div>
                {project.featured && <div className="featured-badge">Featured</div>}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>


              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
