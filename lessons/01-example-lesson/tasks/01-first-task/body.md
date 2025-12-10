## Overview

In this task, you will set up your development environment and get familiar with the project structure.

## Prerequisites

- Node.js 18+ installed
- Code editor (VS Code recommended)
- Git installed

## Steps

### 1. Clone the Repository

```bash
git clone https://github.com/workshops-de/example-repo.git
cd example-repo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Verify Setup

Open your browser and navigate to `http://localhost:3000`. You should see the welcome page.

## Success Criteria

- [ ] Repository cloned successfully
- [ ] All dependencies installed without errors
- [ ] Development server running
- [ ] Welcome page visible in browser

## Troubleshooting

If you encounter issues:

- Make sure you're using the correct Node.js version (check `.nvmrc`)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check the console for error messages

