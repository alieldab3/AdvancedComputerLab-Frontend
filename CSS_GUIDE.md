# Styling Guide

This guide explains how to style components in the Advanced Computer Lab Frontend project using CSS variables, global styles, and the theme system.

## Table of Contents

- [Overview](#overview)
- [CSS Variables](#css-variables)
- [Global Classes](#global-classes)
- [Component Styling](#component-styling)
- [Responsive Design](#responsive-design)
- [Color System](#color-system)
- [Typography](#typography)
- [Spacing System](#spacing-system)
- [Best Practices](#best-practices)

## Overview

The project uses a **consistent design system** with:

1. **Global CSS** (`globals.css`) - Base styles and utilities
2. **CSS Variables** - Design tokens for colors, spacing, typography
3. **Theme Config** (`theme.js`) - JavaScript theme configuration
4. **Component CSS** - Component-specific styles
5. **CSS Classes** - Utility classes for common patterns

## CSS Variables

All design tokens are available as CSS variables in `:root`:

### Colors

```css
/* Primary Colors */
--color-primary: #1976d2
--color-primary-light: #42a5f5
--color-primary-dark: #1565c0

/* Status Colors */
--color-success: #4caf50
--color-warning: #ff9800
--color-error: #f44336
--color-info: #2196f3

/* Neutral Colors */
--color-gray-50: #fafafa
--color-gray-100: #f5f5f5
... to ...
--color-gray-900: #212121

/* Neutral */
--color-white: #ffffff
--color-black: #000000
```

### Spacing

```css
--space-xs: 0.25rem    /* 4px */
--space-sm: 0.5rem     /* 8px */
--space-md: 1rem       /* 16px */
--space-lg: 1.5rem     /* 24px */
--space-xl: 2rem       /* 32px */
--space-2xl: 3rem      /* 48px */
```

### Typography

```css
--font-family: 'Segoe UI', 'Roboto', ...
--font-size-base: 16px
--line-height-base: 1.5
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

### Border Radius

```css
--radius-sm: 0.125rem    /* 2px */
--radius-md: 0.375rem    /* 6px */
--radius-lg: 0.5rem      /* 8px */
--radius-xl: 0.75rem     /* 12px */
```

### Transitions

```css
--transition-fast: 150ms ease-in-out
--transition-base: 300ms ease-in-out
--transition-slow: 500ms ease-in-out
```

## Global Classes

### Text Colors

```html
<!-- Text color utilities -->
<p class="text-muted">Secondary text</p>
<p class="text-success">Success message</p>
<p class="text-error">Error message</p>
<p class="text-warning">Warning message</p>
```

### Text Alignment

```html
<div class="text-center">Centered text</div>
<div class="text-left">Left aligned</div>
<div class="text-right">Right aligned</div>
```

### Margins & Padding

```html
<!-- Margins -->
<div class="mt-md">Margin top</div>
<div class="mb-lg">Margin bottom</div>

<!-- Padding -->
<div class="p-md">Padding all sides</div>
```

### Flexbox Utilities

```html
<!-- Flex containers -->
<div class="flex">Flex container</div>
<div class="flex-center">Centered flex</div>
<div class="flex-between">Space between items</div>
<div class="flex-column">Column direction</div>

<!-- Gap -->
<div class="flex gap-md">Items with gap</div>
```

## Component Styling

### Basic Component CSS

```css
/* MyComponent.css */

.my-component {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-md);
}

.my-component__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-gray-900);
  margin-bottom: var(--space-md);
}

.my-component__content {
  color: var(--color-gray-700);
  line-height: 1.6;
}

/* Interactive states */
.my-component:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Using BEM Naming

Block Element Modifier (BEM) convention:

```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier */
.card--primary { }
.card--large { }
.card__title--bold { }
```

### Styled Components Alternative

For inline styles or dynamic styling:

```javascript
const MyComponent = ({ theme }) => {
  return (
    <div
      style={{
        backgroundColor: theme.colors.white,
        padding: theme.spacing.lg,
        borderRadius: theme.borderRadius.lg,
        boxShadow: theme.shadows.md,
      }}
    >
      Content
    </div>
  );
};
```

## Responsive Design

### Breakpoints

Use these media queries for responsive design:

```css
/* Mobile First - Add styles then override for larger screens */

/* Small screens (320px+) */
@media (min-width: 320px) { }

/* Tablet (768px+) */
@media (min-width: 768px) { }

/* Desktop (1024px+) */
@media (min-width: 1024px) { }

/* Large Desktop (1280px+) */
@media (min-width: 1280px) { }
```

### Responsive Example

```css
.my-component {
  /* Mobile first */
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}

@media (min-width: 768px) {
  .my-component {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
  }
}

@media (min-width: 1024px) {
  .my-component {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Color System

### Using Colors in CSS

```css
.button {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: 1px solid var(--color-gray-300);
}

.button:hover {
  background-color: var(--color-primary-dark);
}
```

### Status Colors

```css
.success { color: var(--color-success); }
.warning { color: var(--color-warning); }
.error { color: var(--color-error); }
.info { color: var(--color-info); }
```

### Gray Scale

```css
/* Light grays for backgrounds */
background-color: var(--color-gray-50);

/* Medium grays for borders */
border-color: var(--color-gray-300);

/* Dark grays for text */
color: var(--color-gray-700);
```

## Typography

### Font Sizes

```css
.text-xs { font-size: 0.75rem; }     /* 12px */
.text-sm { font-size: 0.875rem; }    /* 14px */
.text-base { font-size: 1rem; }      /* 16px */
.text-lg { font-size: 1.125rem; }    /* 18px */
.text-xl { font-size: 1.25rem; }     /* 20px */
.text-2xl { font-size: 1.5rem; }     /* 24px */
```

### Font Weights

```css
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
```

### Line Heights

```css
.leading-tight { line-height: 1.2; }
.leading-normal { line-height: 1.5; }
.leading-relaxed { line-height: 1.75; }
.leading-loose { line-height: 2; }
```

## Spacing System

### Consistent Spacing

```css
/* Don't use arbitrary values */
margin: 14px;      /* ❌ Bad */
padding: 25px;     /* ❌ Bad */

/* Use spacing variables */
margin: var(--space-md);      /* ✅ Good */
padding: var(--space-lg);     /* ✅ Good */
```

### Spacing Scale

```
4px  (xs)    - Smallest spacing
8px  (sm)    - Small spacing
16px (md)    - Standard spacing
24px (lg)    - Large spacing
32px (xl)    - Extra large spacing
48px (2xl)   - Double extra large spacing
```

## Best Practices

### ✅ DO

```css
/* Use CSS variables for consistency */
.component {
  color: var(--color-primary);
  padding: var(--space-md);
}

/* Use semantic class names */
.card-header { }
.button-primary { }

/* Organize properties logically */
.component {
  /* Layout */
  display: flex;
  
  /* Sizing */
  width: 100%;
  
  /* Colors & effects */
  background-color: var(--color-white);
  box-shadow: var(--shadow-md);
}

/* Use mobile-first responsive design */
@media (min-width: 768px) {
  .component {
    grid-template-columns: 1fr 1fr;
  }
}
```

### ❌ DON'T

```css
/* Don't use hardcoded colors */
.component {
  color: #1976d2;              /* ❌ */
  background: rgb(255, 255, 255);  /* ❌ */
}

/* Don't use arbitrary spacing values */
.component {
  margin: 15px;                /* ❌ */
  padding: 23px;               /* ❌ */
}

/* Don't use inline styles for complex styling */
<div style="background-color: blue; padding: 10px;">  {/* ❌ */}

/* Don't nest CSS too deeply */
.component .wrapper .inner .element { }  /* ❌ */
```

### Tips

1. **Use CSS Variables** - Centralized design tokens
2. **Follow BEM Naming** - Clear, predictable class names
3. **Mobile First** - Start with mobile, enhance for larger screens
4. **DRY Principle** - Don't repeat yourself, use utilities
5. **Consistency** - Use the design system, don't create one-offs
6. **Performance** - Minimize specificity, use efficient selectors
7. **Documentation** - Comment complex CSS patterns
8. **Testing** - Test responsive design on multiple devices

### Common Patterns

#### Card Component

```css
.card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

#### Button Component

```css
.button {
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  font-weight: 500;
}

.button--primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.button--primary:hover {
  background-color: var(--color-primary-dark);
}
```

#### Form Input

```css
input, textarea, select {
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  font-family: inherit;
  transition: all var(--transition-base);
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
}
```

---

For questions or suggestions about styling, please open an issue or reach out to the team!
