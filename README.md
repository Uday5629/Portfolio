# Uday's Resume Website

A modern, responsive React-based resume website with dark/light mode toggle.

## Project Structure

```
uday-resume-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Layout
│   │   └── sections/        # Hero, Experience, Projects, Skills, Education, Contact
│   ├── context/
│   │   └── ThemeContext.jsx # Dark/Light mode context
│   ├── data/
│   │   └── resumeData.js    # All resume content (edit this to update resume)
│   ├── styles/
│   │   └── global.css       # Global styles and theme variables
│   ├── App.jsx
│   └── main.jsx
├── Dockerfile               # Docker configuration
├── docker-compose.yml       # Docker Compose configuration
├── nginx.conf              # Nginx configuration for Docker
├── index.html
├── package.json
└── vite.config.js
```

## Quick Start

### Option 1: Run Locally (Development)

```bash
cd uday-resume-website
npm install
npm run dev
```

Access at: `http://localhost:3000`

### Option 2: Run with Docker (Recommended)

```bash
docker-compose up -d
docker-compose logs -f
docker-compose down
```

Access at: `http://localhost`

## Build for Production

```bash
npm run build
```

## Features

- Responsive design with mobile hamburger menu
- Dark/Light mode toggle
- Dynamic content from data file
- Docker ready deployment
- Production Nginx configuration

## Tech Stack

- React 18, Vite, CSS Modules, Docker + Nginx
