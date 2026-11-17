import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Use '/Portfolio/' only when building specifically for GitHub Pages and not on Vercel
  const isGitHubPages = mode === 'github-pages' || process.env.GITHUB_PAGES === 'true';
  const base = isGitHubPages && !process.env.VERCEL ? '/Portfolio/' : '/';

  return {
    base,
    plugins: [react()],
  };
});
