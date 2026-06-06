# Rakshana N - Full Stack Developer Portfolio

A modern, responsive, and fully functional portfolio website built with **React.js**, **Vite**, **Framer Motion**, and **TypeScript**.

## 🚀 Features

- ✨ **Modern Design** - Clean, professional UI with gradient accents
- 🎨 **Dark/Light Mode** - Toggle between dark and light themes
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Beautiful transitions using Framer Motion
- 📊 **Interactive Components** - Engaging cards, timelines, and forms
- 🔐 **Authentication Focus** - Highlights security expertise
- 📥 **Resume Download** - One-click resume download
- 📧 **Contact Form** - Professional contact form with validation
- ♿ **Accessible** - Built with accessibility best practices
- 📈 **SEO Optimized** - Meta tags and semantic HTML

## 📂 Project Structure

```
src/
├── components/          # React components
├── context/            # React Context
├── styles/             # CSS files
├── App.tsx            # Main App component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 🛠️ Technologies Used

- React 19 with TypeScript
- Vite (build tool)
- Framer Motion (animations)
- Lucide React (icons)
- CSS3 with CSS variables
- Responsive design

## 📋 Sections

1. **Navigation** - Sticky navbar with dark/light mode toggle
2. **Hero** - Eye-catching introduction with CTA buttons
3. **About** - Professional summary and highlights
4. **Skills** - Organized skill categories
5. **Experience** - Timeline with detailed responsibilities
6. **Projects** - Featured project cards with technologies
7. **Education** - Education details and certifications
8. **Contact** - Contact form and social links
9. **Footer** - Quick links and social media

## 📦 Getting Started

### Installation

```bash
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `src/styles/global.css`
- **Content**: Update component files in `src/components/`
- **Resume**: Add resume file and update download link in `Hero.tsx`
- **Social Links**: Update in `Contact.tsx` and `Footer.tsx`

## 🚀 Deployment

**Vercel**: `npm install -g vercel && vercel`
**Netlify**: `npm install -g netlify-cli && netlify deploy`
**GitHub Pages**: Build and push to gh-pages branch

## 📱 Responsive Design

- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px+

## 📝 License

MIT License - Open source and free to use

---

**Quick Links**
- 📧 Email: rakshananeelakantan2102@gmail.com
- 💼 LinkedIn: linkedin.com/in/rakshana-neelakantan-547706269
- 📍 Location: Chennai, India

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
