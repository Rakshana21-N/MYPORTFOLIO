# Quick Reference Guide

## 🚀 Common Commands

```bash
# Development
npm run dev              # Start dev server on localhost:5173
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Check for linting errors

# Installation
npm install              # Install all dependencies
npm install <package>    # Install specific package

# Deployment
vercel                   # Deploy to Vercel
netlify deploy           # Deploy to Netlify
npm run build && npm run preview  # Test production build
```

---

## 📝 Common Edits

### Change Your Name/Title
**File**: `src/components/Hero.tsx` (Line ~20-30)
```tsx
<motion.h1 variants={itemVariants} className="hero-title">
  Hi, I'm YOUR NAME  // Change this
</motion.h1>

<motion.h2 variants={itemVariants} className="hero-subtitle">
  YOUR TITLE HERE    // Change this
</motion.h2>
```

### Change Tagline
**File**: `src/components/Hero.tsx` (Line ~30-35)
```tsx
<motion.p variants={itemVariants} className="hero-tagline">
  Your tagline here  // Change this
</motion.p>
```

### Update About Section
**File**: `src/components/About.tsx` (Line ~35-40)
```tsx
<p className="about-description">
  Your about text here...  // Edit this paragraph
</p>
```

### Add/Edit Skills
**File**: `src/components/Skills.tsx` (Line ~15-40)
```tsx
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'C', 'C++'],  // Edit array
    color: 'primary',
  },
  // ... more categories
];
```

### Add/Edit Experience
**File**: `src/components/Experience.tsx` (Line ~15-45)
```tsx
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start - End',
    type: 'experience',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
    ],
  },
];
```

### Add/Edit Projects
**File**: `src/components/Projects.tsx` (Line ~15-45)
```tsx
const projects = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    featured: true,
    image: '📊',
  },
];
```

### Update Contact Email
**File**: `src/components/Contact.tsx` (Line ~90-100)
```tsx
const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'your.email@example.com',  // Change this
    href: 'mailto:your.email@example.com',
  },
];
```

---

## 🎨 CSS Quick Changes

### Change Primary Color
**File**: `src/styles/global.css` (Line ~7)
```css
:root {
  --primary-light: #6366f1;  /* Change this hex code */
  --primary-dark: #6366f1;   /* Also this one */
}
```

### Change Button Style
**File**: `src/styles/global.css` (Line ~200+)
```css
.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  padding: var(--spacing-sm) var(--spacing-lg);
  /* Modify as needed */
}
```

### Change Spacing
**File**: `src/styles/global.css` (Line ~25-30)
```css
:root {
  --spacing-xs: 0.5rem;      /* 8px */
  --spacing-sm: 1rem;        /* 16px */
  --spacing-md: 1.5rem;      /* 24px */
  --spacing-lg: 2rem;        /* 32px */
  --spacing-xl: 3rem;        /* 48px */
  --spacing-2xl: 4rem;       /* 64px */
}
```

---

## 🔗 Update Links

### Social Links
**File**: `src/components/Contact.tsx` (Line ~110-130)
```tsx
href="https://linkedin.com/in/YOUR-PROFILE"  // Update LinkedIn
href="mailto:your.email@example.com"         // Update Email
href="https://github.com/YOUR-USERNAME"      // Update GitHub
```

**File**: `src/components/Footer.tsx` (Line ~40-50)
```tsx
<a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank">
<a href="mailto:your.email@example.com">
<a href="https://github.com/YOUR-USERNAME" target="_blank">
```

---

## 📱 Test Responsive Design

Open browser DevTools (F12) and:
1. Click device toolbar icon (Ctrl+Shift+M / Cmd+Shift+M)
2. Select different devices:
   - iPhone SE (375px)
   - iPad (768px)
   - Laptop (1024px)
3. Test all sections and interactions

---

## 🌓 Test Dark/Light Mode

1. Click the moon/sun icon in navigation
2. Check if colors change correctly
3. Or use DevTools:
   - F12 → Rendering tab
   - Check "prefers-color-scheme" → Select "dark"

---

## 🔧 Fix Common Issues

### Port Already in Use
```bash
npm run dev -- --port 3000  # Use different port
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install  # Reinstall everything
```

### TypeScript Errors
```bash
npx tsc --noEmit  # Check for TS errors
```

### Build Fails
```bash
npm run build -- --debug  # Debug the build
npm run preview           # Test production build locally
```

---

## 📊 Files by Purpose

### To Update Personal Info
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### To Add/Edit Content
- `src/components/Skills.tsx`
- `src/components/Experience.tsx`
- `src/components/Projects.tsx`
- `src/components/Education.tsx`

### To Change Styling
- `src/styles/global.css` (Colors, spacing, fonts)
- `src/components/*/ComponentName.css` (Component-specific)

### To Update HTML Meta Tags
- `index.html`

### To Change Package Dependencies
- `package.json`

---

## 🎯 Component Files Quick Reference

| Component | File | Key Sections |
|-----------|------|--------------|
| Navigation | `src/components/Navigation.tsx` | navLinks array, theme toggle |
| Hero | `src/components/Hero.tsx` | title, tagline, buttons, resume download |
| About | `src/components/About.tsx` | description, highlights array |
| Skills | `src/components/Skills.tsx` | skillCategories array |
| Experience | `src/components/Experience.tsx` | experiences array |
| Projects | `src/components/Projects.tsx` | projects array |
| Education | `src/components/Education.tsx` | education object, certifications array |
| Contact | `src/components/Contact.tsx` | contactInfo array, form handling |
| Footer | `src/components/Footer.tsx` | Footer sections and links |

---

## 🎨 CSS File Reference

| CSS File | Applies To | Key Classes |
|----------|-----------|------------|
| `global.css` | Entire app | CSS variables, utilities, global styles |
| `Navigation.css` | Navigation component | `.navbar`, `.nav-links`, `.theme-toggle` |
| `Hero.css` | Hero section | `.hero`, `.hero-title`, `.btn` |
| `About.css` | About section | `.about`, `.highlight-card` |
| `Skills.css` | Skills section | `.skill-category`, `.skill-badge` |
| `Experience.css` | Experience section | `.timeline`, `.timeline-item` |
| `Projects.css` | Projects section | `.project-card`, `.tech-tag` |
| `Education.css` | Education section | `.education-card`, `.certification-item` |
| `Contact.css` | Contact section | `.contact-form`, `.social-btn` |
| `Footer.css` | Footer component | `.footer`, `.footer-section` |

---

## 🚀 Deployment Quick Links

- **Vercel**: https://vercel.com (Recommended)
- **Netlify**: https://netlify.com
- **GitHub Pages**: https://pages.github.com
- **AWS S3**: https://aws.amazon.com/s3/

---

## 📚 Documentation Quick Links

- **README.md** - Overview and quick start
- **SETUP.md** - Detailed setup and deployment
- **COMPONENTS.md** - Component documentation
- **STYLING.md** - Styling and customization
- **PROJECT_SUMMARY.md** - Project overview

---

## 💡 Pro Tips

1. **Save Often** - Vite hot reload is amazing
2. **Use Inspector** - DevTools is your friend
3. **Test Mobile** - Use device emulation
4. **Check Console** - For any JavaScript errors
5. **Use Git** - Version control your changes
6. **Read Errors** - Error messages are helpful
7. **Comment Code** - Document your changes

---

## 🔐 Security Tips

1. Never commit sensitive information
2. Use environment variables for secrets
3. Keep dependencies updated
4. Use HTTPS for deployment
5. Validate form inputs
6. Sanitize user data

---

## 📈 Performance Optimization

```bash
# Build size analysis
npm install -D vite-plugin-visualizer

# Check for unused code
npm install -D vite-bundle-analyzer

# Minify CSS/JS - Automatic with Vite
npm run build
```

---

## 🎓 Learning Resources

- MDN Web Docs: https://developer.mozilla.org
- React Official Docs: https://react.dev
- CSS-Tricks: https://css-tricks.com
- Dev.to: https://dev.to (Great tutorials)
- YouTube: Search "React Tutorial" or "Web Design"

---

## 📞 Quick Help

- **Component not showing?** Check if it's imported in `App.tsx`
- **Style not applying?** Check class names and CSS file path
- **Dark mode not working?** Check `ThemeContext.tsx` is in `App.tsx`
- **Form not submitting?** Check form handler in `Contact.tsx`
- **Links not working?** Verify href attribute is correct

---

**Remember**: This is a living project. Feel free to explore, experiment, and make it your own! 🚀
