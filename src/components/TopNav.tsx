import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggle } = useDarkMode();

  const isAbout = location.pathname === '/about' || location.pathname === '/info';
  // Only hide on project detail pages (project pages have their own dedicated top-right X and theme toggle)
  const isProject = location.pathname.startsWith('/projects/');
  if (isProject) return null;

  return (
    <div className="fixed top-5 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="pointer-events-auto flex items-center gap-1 p-1 rounded-full glass-pill shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-md"
      >
        <button
          onClick={() => navigate('/')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            !isAbout
              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
          }`}
        >
          Work
        </button>
        <button
          onClick={() => navigate('/about')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            isAbout
              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
          }`}
        >
          Info
        </button>
        <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-700/80 mx-1" />
        <button
          onClick={toggle}
          className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </motion.nav>
    </div>
  );
}

