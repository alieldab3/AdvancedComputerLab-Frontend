# Development Setup Guide

This guide provides comprehensive instructions for setting up your development environment and contributing to the Advanced Computer Lab Frontend project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Code Style & Best Practices](#code-style--best-practices)
- [Debugging](#debugging)
- [Common Issues](#common-issues)
- [Contributing](#contributing)

## Prerequisites

### Required Software

- **Node.js** (v14.0.0 or higher)
  - [Download from nodejs.org](https://nodejs.org/)
  - Verify: `node --version`

- **npm** (v6.0.0 or higher)
  - Comes bundled with Node.js
  - Verify: `npm --version`

- **Git** (for version control)
  - [Download from git-scm.com](https://git-scm.com/)
  - Verify: `git --version`

### Recommended Tools

- **Visual Studio Code** with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint
  - Thunder Client or Postman (for API testing)
  - React Developer Tools (browser extension)

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/AdvancedComputerLab-Frontend.git
cd AdvancedComputerLab-Frontend
```

### 2. Install Dependencies

```bash
npm install
```

This command installs all required packages listed in `package.json`.

### 3. Configure Environment Variables

Copy the example environment file and create your local configuration:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
REACT_APP_API_BASE_URL=http://localhost:8080/api
PORT=3000
REACT_APP_DEBUG=true
```

**Important**: Never commit `.env.local` to version control. It's ignored by `.gitignore`.

### 4. Start Development Server

```bash
npm start
```

The application opens automatically at `http://localhost:3000` with hot-module reloading enabled.

## Development Workflow

### Daily Development Cycle

1. **Create a feature branch**
   ```bash
   git checkout -b feature/feature-name
   ```

2. **Make your changes**
   - Edit component files
   - Add new features
   - Update styles as needed

3. **Test your changes**
   ```bash
   npm test
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **Push to remote**
   ```bash
   git push origin feature/feature-name
   ```

6. **Create a Pull Request** (on GitHub)

### Running Different Scripts

```bash
# Development server with hot reload
npm start

# Build for production
npm run build

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Eject configuration (one-way operation - avoid!)
npm run eject
```

## Project Structure

```
src/
├── components/                    # React components organized by role/feature
│   ├── Common Features/          # Shared components used across all roles
│   │   ├── ChangeDayOff/
│   │   ├── resetpassword/
│   │   ├── signin/
│   │   ├── SubmitLeave/
│   │   └── ...
│   ├── HR/                       # HR administrator specific components
│   ├── HOD/                      # Head of Department components
│   ├── Course Coordinator/       # Course Coordinator components
│   ├── Course Instructor/        # Course Instructor components
│   ├── Header/                   # Application header
│   ├── Sidebar/                  # Navigation sidebar
│   ├── Homepage/                 # Home page
│   ├── Profile/                  # User profile management
│   └── login/                    # Authentication components
├── App.js                        # Root component
├── App.css                       # App level styles
├── index.js                      # Entry point
├── index.css                     # Index styles
├── globals.css                   # Global styles (NEW)
├── theme.js                      # Theme configuration (NEW)
└── reportWebVitals.js           # Performance metrics

public/
├── index.html                    # HTML template
├── manifest.json                 # PWA manifest
└── robots.txt                    # SEO robots file
```

## Code Style & Best Practices

### Naming Conventions

- **Components**: PascalCase (`MyComponent.js`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Classes**: kebab-case (`my-component-class`)
- **Variables**: camelCase (`myVariable`)
- **Constants**: UPPER_SNAKE_CASE (`MY_CONSTANT`)

### Component Best Practices

#### Functional Components (Recommended)

```javascript
import React, { useState } from 'react';
import './MyComponent.css';

const MyComponent = ({ title, onSubmit }) => {
  const [state, setState] = useState('');

  const handleClick = () => {
    setState('new value');
  };

  return (
    <div className="my-component">
      <h2>{title}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default MyComponent;
```

#### CSS Organization

```css
/* 1. Layout/Structure */
.my-component {
  display: flex;
  padding: var(--space-md);
}

/* 2. Sizing */
.my-component {
  width: 100%;
  height: auto;
}

/* 3. Colors & Effects */
.my-component {
  background-color: var(--color-white);
  box-shadow: var(--shadow-md);
}

/* 4. Interactive States */
.my-component:hover {
  box-shadow: var(--shadow-lg);
}

/* 5. Responsive */
@media (max-width: 768px) {
  .my-component {
    flex-direction: column;
  }
}
```

### Using Theme Variables

```javascript
// In CSS files
.my-class {
  color: var(--color-primary);
  padding: var(--space-md);
  font-size: var(--font-size-base);
  border-radius: var(--radius-md);
}
```

```javascript
// In JavaScript files
import { colors, spacing } from '../theme';

const MyComponent = () => {
  const style = {
    color: colors.primary,
    padding: spacing.md,
  };

  return <div style={style}>Styled Content</div>;
};
```

## Debugging

### Browser DevTools

1. **Open DevTools**: Press `F12` or right-click → Inspect
2. **Console Tab**: Check for errors and logs
3. **Network Tab**: Monitor API calls
4. **React DevTools**: Inspect component hierarchy and state
5. **Application Tab**: Check local storage, cookies

### VS Code Debugging

Add to `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "attach",
      "name": "Attach Chrome",
      "port": 9222,
      "pathMapping": {
        "/": "${workspaceRoot}/",
        "/static/js/bundle.js": "${workspaceRoot}/src"
      }
    }
  ]
}
```

### Logging Best Practices

```javascript
// Good logging
console.log('API Response:', { data, status });
console.error('Failed to fetch data:', error);
console.warn('Deprecated method used');

// Avoid
console.log('test');
console.log(userData);
```

## Common Issues

### Issue: Port 3000 Already in Use

```bash
# Option 1: Kill the process using port 3000
npx kill-port 3000

# Option 2: Use a different port
npm start -- --port 3001
```

### Issue: npm install Fails

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Changes Not Reflecting

1. Clear browser cache (Ctrl+Shift+Delete)
2. Restart development server (Ctrl+C, then `npm start`)
3. Check for errors in console (F12)

### Issue: API Connection Errors

1. Verify backend server is running
2. Check API_BASE_URL in `.env.local`
3. Check browser DevTools Network tab
4. Verify CORS settings on backend

## Contributing

### Before You Start

1. Read the README.md for project overview
2. Understand the role-based structure
3. Familiarize yourself with the component organization

### Submitting Changes

1. **Follow the coding standards** above
2. **Create meaningful commits** with clear messages
3. **Test your changes** before pushing
4. **Keep PRs focused** on single features
5. **Write clear PR descriptions**

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

Types: feat, fix, docs, style, refactor, test, chore

Examples:
```
feat: add leave request submission form
fix: resolve navigation link issue
docs: update setup instructions
```

### Pull Request Checklist

- [ ] Code follows style guidelines
- [ ] All tests pass locally
- [ ] Changes are documented
- [ ] No console errors/warnings
- [ ] Responsive design tested
- [ ] Component props documented

## Getting Help

- **Issues**: Create GitHub issues for bugs or feature requests
- **Documentation**: Check README.md and this guide
- **Code Examples**: Browse existing components for patterns
- **Team**: Reach out to maintainers for questions

## Additional Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com/en/main)
- [Material-UI Documentation](https://material-ui.com/)
- [Ant Design Documentation](https://ant.design/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Happy coding!** If you have questions or suggestions, feel free to open an issue or reach out. 🚀
