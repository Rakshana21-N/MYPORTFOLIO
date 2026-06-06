# Component Documentation

## Overview

This document provides detailed information about each component in the portfolio.

## Components

### 1. Navigation.tsx
**Location**: `src/components/Navigation.tsx`
**Styles**: `src/styles/Navigation.css`

**Purpose**: Sticky navigation bar with dark/light mode toggle

**Features**:
- Sticky positioning (stays at top while scrolling)
- Responsive hamburger menu for mobile
- Dark/Light mode toggle button
- Smooth scroll navigation to sections
- Animated transitions

**Props**: None

**State**:
- `isOpen`: Menu open/close state
- Uses `useTheme` hook for theme management

**Key Methods**:
- `handleNavClick()`: Smooth scroll to section

---

### 2. Hero.tsx
**Location**: `src/components/Hero.tsx`
**Styles**: `src/styles/Hero.css`

**Purpose**: Landing section with animated introduction

**Features**:
- Animated text and buttons
- Gradient background with animated blobs
- Three CTA buttons (View Projects, Download Resume, Contact Me)
- Scroll indicator animation
- Framer Motion animations

**Props**: None

**Key Functions**:
- `handleDownloadResume()`: Downloads resume as text file
- `handleScroll()`: Smooth scroll to about section

**Animations**:
- Container stagger animation
- Item fade-in animations
- Blob floating animations

---

### 3. About.tsx
**Location**: `src/components/About.tsx`
**Styles**: `src/styles/About.css`

**Purpose**: Professional summary and key highlights

**Features**:
- Professional description
- Four highlight cards (Experience, Specialization, Security Focus, Performance)
- Responsive two-column layout
- Hover animations on cards
- Framer Motion animations

**Props**: None

**Data**:
- `highlights`: Array of objects with icon, label, and text

**Animations**:
- Section header fade-in
- Card slide-in and hover animations

---

### 4. Skills.tsx
**Location**: `src/components/Skills.tsx`
**Styles**: `src/styles/Skills.css`

**Purpose**: Display technical skills organized by category

**Features**:
- Six skill categories
- Skill badges with hover effects
- Responsive grid layout
- Color-coded categories
- Framer Motion animations

**Props**: None

**Data Structure**:
```tsx
skillCategories: Array<{
  title: string;
  skills: string[];
  color: 'primary' | 'secondary' | 'tertiary' | 'accent';
}>
```

**Animations**:
- Staggered category animations
- Badge scale animations on hover

---

### 5. Experience.tsx
**Location**: `src/components/Experience.tsx`
**Styles**: `src/styles/Experience.css`

**Purpose**: Timeline display of work experience and internship

**Features**:
- Timeline visualization with gradient line
- Two experience entries (Current job + Internship)
- Animated markers and connectors
- Responsive timeline (stacks on mobile)
- Hover effects on timeline items

**Props**: None

**Data Structure**:
```tsx
experiences: Array<{
  title: string;
  company: string;
  period: string;
  type: 'experience' | 'internship';
  responsibilities: string[];
}>
```

**Timeline Features**:
- Animated gradient line
- Dot markers with glow effect on hover
- Connecting lines between items
- Arrow pointers to content

---

### 6. Projects.tsx
**Location**: `src/components/Projects.tsx`
**Styles**: `src/styles/Projects.css`

**Purpose**: Showcase featured projects with details

**Features**:
- Project cards with image placeholders
- Featured badge for highlighted projects
- Technology tags
- Demo and code links
- Responsive grid layout
- Hover animations

**Props**: None

**Data Structure**:
```tsx
projects: Array<{
  id: number;
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
  image: string;
}>
```

**Card Features**:
- Image placeholder with emoji
- Project title and description
- Technology tags
- Code and Demo buttons
- Hover lift animation

---

### 7. Education.tsx
**Location**: `src/components/Education.tsx`
**Styles**: `src/styles/Education.css`

**Purpose**: Display education and certifications

**Features**:
- Education card with degree details
- Certifications list with medal icons
- Icon integration (GraduationCap, Award, Medal)
- Responsive two-column layout
- Hover effects

**Props**: None

**Data**:
- `education`: Degree, institution, location, year, CGPA
- `certifications`: Array of certification strings

**Icons Used**:
- `GraduationCap`: Education section
- `Award`: Certifications header
- `Medal`: Individual certification items

---

### 8. Contact.tsx
**Location**: `src/components/Contact.tsx`
**Styles**: `src/styles/Contact.css`

**Purpose**: Contact form and contact information

**Features**:
- Contact information cards with icons
- Social media buttons (LinkedIn, Email, GitHub)
- Functional contact form
- Form validation
- Success message on submission
- Responsive layout

**Props**: None

**State**:
```tsx
formData: {
  name: string;
  email: string;
  message: string;
}
submitted: boolean;
```

**Functions**:
- `handleChange()`: Update form fields
- `handleSubmit()`: Handle form submission

**Form Fields**:
- Name (required)
- Email (required, email validation)
- Message (required, textarea)

**Social Links**:
- LinkedIn
- Email
- GitHub

---

### 9. Footer.tsx
**Location**: `src/components/Footer.tsx`
**Styles**: `src/styles/Footer.css`

**Purpose**: Footer with links and information

**Features**:
- Quick section about
- Quick navigation links
- Contact information
- Copyright notice
- Responsive grid layout

**Props**: None

**Sections**:
1. About section with description
2. Quick links to all pages
3. Contact information
4. Copyright and credits

---

### 10. ThemeContext.tsx
**Location**: `src/context/ThemeContext.tsx`

**Purpose**: Global theme management (Dark/Light mode)

**Features**:
- React Context for theme state
- LocalStorage persistence
- Dark mode detection
- Easy theme toggle

**Context Value**:
```tsx
{
  isDark: boolean;
  toggleTheme: () => void;
}
```

**Usage**:
```tsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { isDark, toggleTheme } = useTheme();
  // ...
}
```

**Implementation**:
- Wraps app with `<ThemeProvider>`
- Adds/removes 'dark' class on HTML element
- Saves preference to localStorage
- Theme persists across sessions

---

## Styling System

### Global Styles
**File**: `src/styles/global.css`

**CSS Variables**:
- Color variables for light and dark modes
- Spacing scale (--spacing-xs to --spacing-2xl)
- Font sizes (--font-size-sm to --font-size-5xl)
- Border radius scale
- Transition timings

### Component Styles

Each component has its own CSS file:
- Scoped to component
- Uses CSS variables
- Responsive breakpoints (480px, 768px, 1024px)
- Framer Motion compatible

---

## Animation Library

### Framer Motion Integration

**Used in all components for**:
- `motion.div` - Animated divs
- `motion.button` - Animated buttons
- `motion.h1`, `motion.h2` - Animated headings

**Common Variants**:
```tsx
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}
```

---

## Icon Library

### Lucide React Icons Used

- `Menu` - Mobile menu icon
- `X` - Close menu icon
- `Moon` - Dark mode toggle
- `Sun` - Light mode toggle
- `ArrowDown` - Scroll indicator
- `Download` - Resume download
- `Mail` - Email icon
- `Linkedin` - LinkedIn icon
- `Github` - GitHub icon
- `ExternalLink` - External link icon
- `Award` - Certifications
- `GraduationCap` - Education
- `Medal` - Achievements
- `MapPin` - Location
- `Send` - Form submit

---

## Responsive Design

### Breakpoints

1. **480px** (Mobile)
   - Single column layouts
   - Smaller fonts
   - Adjusted padding/margins
   - Stacked navigation

2. **768px** (Tablet)
   - 2-column layouts in places
   - Medium fonts
   - Adjusted spacing

3. **1024px** (Desktop)
   - Full multi-column layouts
   - Normal fonts
   - Full spacing

### Mobile-First Approach

- Components start simple
- Add complexity at larger breakpoints
- Media queries for responsive adjustments

---

## Performance Optimizations

1. **Code Splitting**: Components load on demand
2. **Lazy Loading**: Images load as needed
3. **CSS Variables**: Efficient theming
4. **Framer Motion**: GPU-accelerated animations
5. **Optimized Animations**: Reduced on mobile

---

## Accessibility Features

1. **Semantic HTML**: Proper heading hierarchy
2. **ARIA Labels**: Screen reader support
3. **Keyboard Navigation**: Tab through interactive elements
4. **Focus Indicators**: Visible focus states
5. **Color Contrast**: WCAG compliant colors

---

## Best Practices

1. **Component Reusability**: Small, focused components
2. **Props Management**: Minimal props passing
3. **State Management**: Context for global state
4. **CSS Organization**: Component-specific styles
5. **Type Safety**: Full TypeScript coverage

---

For more information, refer to individual component files and their inline documentation.
