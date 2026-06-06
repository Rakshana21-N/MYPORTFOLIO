import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isDark ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-text">Rakshana N</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="nav-link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
