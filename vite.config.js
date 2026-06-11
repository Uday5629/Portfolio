import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When building for GitHub Pages the site is served from the `/Portfolio/`
// sub-path, so assets must be prefixed accordingly. The GitHub Actions
// workflow sets GITHUB_PAGES=true; every other build (Docker/nginx, local
// preview) keeps the root base so it still works at `/`.
const base = process.env.GITHUB_PAGES ? '/Portfolio/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
})
