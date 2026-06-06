# Portfolio Setup Guide

## 📋 Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Git (optional, for version control)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd MYPORTFOLIO/my-portfolio
npm install
```

This will install:
- React 19.2.6
- Vite 8.0.12
- Framer Motion 10.16.16
- React Router DOM 6.20.0
- Lucide React 0.292.0
- TypeScript

### 2. Run Development Server

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## 📝 Customization Guide

### Change Your Information

1. **Update Hero Section** - `src/components/Hero.tsx`
   - Change name, title, and tagline
   - Update CTA button actions

2. **Update About Section** - `src/components/About.tsx`
   - Modify the about description
   - Update highlights and metrics

3. **Update Skills** - `src/components/Skills.tsx`
   - Add/remove skill categories
   - Modify skill badges

4. **Update Experience** - `src/components/Experience.tsx`
   - Add new job experiences
   - Update responsibilities

5. **Update Projects** - `src/components/Projects.tsx`
   - Add your projects
   - Update technologies used
   - Add demo and code links

6. **Update Education** - `src/components/Education.tsx`
   - Update degree information
   - Modify certifications list

7. **Update Contact** - `src/components/Contact.tsx`
   - Update email address
   - Update social media links
   - Modify contact form handler

### Add Your Resume

1. Place your resume file in `public/` folder (e.g., `public/resume.pdf`)
2. Update the download link in `src/components/Hero.tsx`:
   ```tsx
   // Around line 50 in handleDownloadResume function
   // Replace the create download logic with:
   const link = document.createElement('a');
   link.href = '/resume.pdf';
   link.download = 'Rakshana_N_Resume.pdf';
   link.click();
   ```

### Customize Colors

Edit `src/styles/global.css`:

```css
:root {
  /* Light Mode Colors */
  --primary-light: #6366f1;
  --secondary-light: #ec4899;
  --tertiary-light: #0ea5e9;
  --accent-light: #f59e0b;
  
  /* Dark Mode Colors */
  --primary-dark: #6366f1;
  --secondary-dark: #ec4899;
  --tertiary-dark: #0ea5e9;
  --accent-dark: #f59e0b;
}
```

### Add Profile Image

1. Create `src/assets/profile.png` with your photo
2. Update `src/components/About.tsx`:
   ```tsx
   import profileImage from '../assets/profile.png';
   // Then use in the image placeholder
   ```

### Update Social Links

In `src/components/Contact.tsx` and `src/components/Footer.tsx`:
- Update LinkedIn URL
- Update GitHub URL
- Update email address

## 🎨 Theme Customization

### Change Theme Colors

1. Edit CSS variables in `src/styles/global.css`
2. Colors automatically apply to all components
3. Both light and dark modes update simultaneously

### Add New Color Scheme

Example: Create a "Purple" theme

```css
:root {
  --primary-light: #7c3aed;      /* Purple */
  --secondary-light: #db2777;    /* Magenta */
  --tertiary-light: #0891b2;     /* Cyan */
  --accent-light: #f59e0b;       /* Amber */
}
```

## 📱 Responsive Design Testing

Test on different devices:

```bash
# Chrome DevTools
- F12 or Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac)
- Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
```

Breakpoints:
- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px+

## 🔗 Linking Sections

The navigation automatically smooth scrolls to sections:

```tsx
// Each section has an ID
<section id="about">
<section id="skills">
<section id="experience">
// Navigation links to these IDs
onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to connect your GitHub account

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Deploy to GitHub Pages

1. Update `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/portfolio/',  // Replace with your repo name
     plugins: [react()],
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy"
   git push origin main
   ```

## ⚡ Performance Optimization

### Image Optimization

```bash
# Install image optimizer
npm install -D imagemin imagemin-webpack-plugin
```

### Code Splitting

Already configured in Vite. Components load on demand.

### CSS Optimization

- Use CSS variables instead of repeated values
- Remove unused styles
- Minimize animations for mobile devices

## 🔍 SEO Optimization

Update `index.html`:

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="Your skills, technologies">
<meta property="og:title" content="Your Name - Your Title">
<meta property="og:description" content="Your description">
```

## 🐛 Troubleshooting

### Dependencies Not Installing

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

```bash
# Run on different port
npm run dev -- --port 3000
```

### Build Fails

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Clean build
rm -rf dist
npm run build
```

### Dark Mode Not Working

1. Check browser console for errors
2. Verify `ThemeContext.tsx` is imported in `App.tsx`
3. Check localStorage for 'theme' key

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 💡 Tips & Best Practices

1. **Use CSS Variables** - Easy theme switching
2. **Component Reusability** - Create small, focused components
3. **Responsive First** - Design mobile-first
4. **Performance** - Minimize animations on mobile
5. **Accessibility** - Use semantic HTML and ARIA labels
6. **SEO** - Update meta tags and use semantic elements
7. **Testing** - Test on real devices and browsers

## 🆘 Getting Help

If you encounter issues:

1. Check the [README.md](./README.md)
2. Review component documentation in code comments
3. Check browser console for errors
4. Verify all dependencies are installed

## 📝 Checklist Before Deployment

- [ ] Update all personal information
- [ ] Add profile image/photo
- [ ] Update resume file
- [ ] Test dark/light mode toggle
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test download resume button
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Update meta tags in index.html
- [ ] Check for console errors
- [ ] Optimize images
- [ ] Update favicon
- [ ] Add custom domain (if applicable)

---

Happy building! 🎉
