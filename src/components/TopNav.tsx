import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggle } = useDarkMode();
  const shouldReduceMotion = useReducedMotion();

  const isAbout = location.pathname === '/about' || location.pathname === '/info';
  // Only hide on project detail pages (project pages have their own dedicated top-right X and theme toggle)
  const isProject = location.pathname.startsWith('/projects/');
  if (isProject) return null;

  return (
    <div className="fixed top-5 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <motion.nav
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
        className="pointer-events-auto flex items-center gap-1 p-1 rounded-full glass-pill shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-md"
      >
        <button
          onClick={() => navigate('/')}
          className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            !isAbout
              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
          }`}
        >
          {!isAbout && (
            <motion.span
              layoutId="active-nav-indicator"
              transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 350, damping: 32 }}
              className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 sm:w-5 h-[2px] rounded-full bg-neutral-400/90 dark:bg-white shadow-[0_0_6px_rgba(150,150,150,0.4)] dark:shadow-[0_0_8px_rgba(255,255,255,0.75),0_0_2px_rgba(255,255,255,0.9)] pointer-events-none"
              aria-hidden="true"
            />
          )}
          Work
        </button>
        <button
          onClick={() => navigate('/about')}
          className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            isAbout
              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
          }`}
        >
          {isAbout && (
            <motion.span
              layoutId="active-nav-indicator"
              transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 350, damping: 32 }}
              className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 sm:w-5 h-[2px] rounded-full bg-neutral-400/90 dark:bg-white shadow-[0_0_6px_rgba(150,150,150,0.4)] dark:shadow-[0_0_8px_rgba(255,255,255,0.75),0_0_2px_rgba(255,255,255,0.9)] pointer-events-none"
              aria-hidden="true"
            />
          )}
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

