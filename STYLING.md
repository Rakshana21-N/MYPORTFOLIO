# Styling & Customization Guide

## 🎨 Color System

### CSS Variables Structure

Located in `src/styles/global.css`:

```css
:root {
  /* Light Mode Colors */
  --primary-light: #6366f1;
  --secondary-light: #ec4899;
  --tertiary-light: #0ea5e9;
  --accent-light: #f59e0b;
  
  /* Light Mode Backgrounds */
  --bg-light: #ffffff;
  --bg-secondary-light: #f9fafb;
  
  /* Light Mode Text */
  --text-light: #1f2937;
  --text-secondary-light: #6b7280;
  --border-light: #e5e7eb;
  
  /* Same for dark mode... */
}

/* Theme Application */
html:not(.dark) {
  --bg: var(--bg-light);
  --text: var(--text-light);
  --primary: var(--primary-light);
  /* ... */
}

html.dark {
  --bg: var(--bg-dark);
  --text: var(--text-dark);
  --primary: var(--primary-dark);
  /* ... */
}
```

### Using Colors

```css
/* In component CSS files */
background-color: var(--bg);
color: var(--text);
border-color: var(--border);
```

## 🌈 Changing Color Schemes

### Option 1: Simple Color Change

Edit colors in `src/styles/global.css`:

```css
:root {
  --primary-light: #8b5cf6;    /* Change from indigo to violet */
  --secondary-light: #db2777;  /* Change from pink to dark pink */
  --tertiary-light: #06b6d4;   /* Change from cyan to light cyan */
  --accent-light: #f59e0b;     /* Keep amber */
}
```

### Option 2: Complete Theme

Replace all color values for a new theme:

```css
/* Tech Blue Theme */
:root {
  --primary-light: #0066cc;
  --secondary-light: #0088ff;
  --tertiary-light: #00aaff;
  --accent-light: #ffaa00;
  
  --bg-light: #f0f4f8;
  --bg-secondary-light: #e6eef7;
  --text-light: #001a4d;
  --text-secondary-light: #334d99;
  --border-light: #cce0ff;
}

@media (prefers-color-scheme: dark) {
  /* Dark versions... */
}
```

### Option 3: Brand Colors

Create a brand-specific theme:

```css
/* Tech Startup Theme */
:root {
  --primary-light: #6366f1;      /* Brand Purple */
  --secondary-light: #ec4899;    /* Brand Pink */
  --tertiary-light: #0ea5e9;     /* Sky Blue */
  --accent-light: #f59e0b;       /* Warm Orange */
  
  --bg-light: #fafbfc;
  --bg-secondary-light: #f3f4f6;
  --text-light: #111827;
  --text-secondary-light: #6b7280;
  --border-light: #e5e7eb;
}
```

## 📐 Spacing System

### Spacing Scale

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

### Usage in Components

```css
.component {
  padding: var(--spacing-lg);      /* 32px */
  margin-bottom: var(--spacing-xl); /* 48px */
  gap: var(--spacing-md);          /* 24px */
}
```

## 🔤 Typography System

### Font Sizes

```css
:root {
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
}
```

### Font Selection

To change font family:

```css
body {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
}

h1, h2, h3 {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

## 🎯 Border Radius System

```css
:root {
  --radius-sm: 0.375rem;   /* 6px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
}
```

## ⚡ Transitions

### Timing

```css
:root {
  --transition-fast: 150ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;
  --transition-slower: 700ms;
  
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Usage

```css
.element {
  transition: all var(--transition-base) var(--ease-in-out);
  
  &:hover {
    transition: color var(--transition-fast);
  }
}
```

## 🎨 Button Styles

### Primary Button

```css
.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: all var(--transition-base);
  box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px -5px rgba(99, 102, 241, 0.4);
}
```

### Secondary Button

```css
.btn-secondary {
  background: var(--bg-secondary);
  color: var(--text);
  border: 2px solid var(--primary);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
}
```

## 📱 Responsive Design

### Breakpoint System

```css
/* Mobile First Approach */

/* Base styles (mobile - 320px+) */
.component {
  font-size: var(--font-size-sm);
  padding: var(--spacing-md);
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .component {
    font-size: var(--font-size-base);
    padding: var(--spacing-lg);
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .component {
    font-size: var(--font-size-lg);
    padding: var(--spacing-xl);
  }
}

/* Large Desktop (1200px+) */
@media (min-width: 1200px) {
  .component {
    padding: var(--spacing-2xl);
  }
}
```

### Common Patterns

**Single to Multi-Column**:
```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

**Responsive Text**:
```css
.heading {
  font-size: var(--font-size-2xl);
}

@media (min-width: 768px) {
  .heading {
    font-size: var(--font-size-3xl);
  }
}

@media (min-width: 1024px) {
  .heading {
    font-size: var(--font-size-4xl);
  }
}
```

## 🌙 Dark Mode Implementation

### How It Works

1. **Theme Context** (`src/context/ThemeContext.tsx`):
   - Manages dark/light mode state
   - Persists to localStorage
   - Adds 'dark' class to HTML element

2. **CSS Variables** (apply based on class):
   ```css
   html:not(.dark) {
     --bg: var(--bg-light);
     --text: var(--text-light);
   }
   
   html.dark {
     --bg: var(--bg-dark);
     --text: var(--text-dark);
   }
   ```

3. **Auto Detection**:
   ```tsx
   // In ThemeContext.tsx
   const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
   ```

### Testing Dark Mode

1. Browser DevTools:
   - F12 → Rendering → Emulate CSS media feature prefers-color-scheme
   - Select "dark" or "light"

2. System Settings:
   - macOS: System Preferences → General → Appearance
   - Windows: Settings → Personalization → Colors

## 🎨 Custom Component Styling

### Creating New Components

```css
/* src/styles/NewComponent.css */

.new-component {
  background: var(--bg-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  transition: all var(--transition-base);
}

.new-component:hover {
  border-color: var(--primary);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .new-component {
    padding: var(--spacing-md);
  }
}
```

## 🎬 Animation Customization

### Framer Motion Examples

```tsx
// Fade in animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Slide up animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Content
</motion.div>

// Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## 📊 CSS Grid & Flexbox

### Common Patterns

**Center Content**:
```css
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**Responsive Grid**:
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}
```

**Space Between**:
```css
.space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## ✅ Best Practices

1. **Use CSS Variables** - Easier maintenance and theming
2. **Mobile First** - Start with mobile styles
3. **Consistent Spacing** - Use spacing scale
4. **Reusable Classes** - Create utilities
5. **Performance** - Minimize animations
6. **Accessibility** - High contrast colors
7. **Responsive** - Test on real devices
8. **Documentation** - Comment complex styles

## 🚀 Performance Tips

1. **CSS-in-JS**: Keep inline styles minimal
2. **Animations**: Use `transform` and `opacity`
3. **Avoid**: `top`, `left`, `width` in animations
4. **Debounce**: Resize handlers
5. **Lazy Load**: Images and components

---

For more examples, check individual component CSS files!
