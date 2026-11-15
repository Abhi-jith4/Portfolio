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
  const isProject = location.pathname.startsWith('/projects/');

  if (isProject) return null;

  return (
    <div className="fixed top-5 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <motion.nav
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
        className="pointer-events-auto relative flex items-center gap-1 p-1 rounded-full glass-pill shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-md"
      >
        {/* Work Tab Button */}
        <button
          onClick={() => {
            if (location.pathname !== '/') navigate('/');
          }}
          className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 select-none ${
            !isAbout
              ? 'text-white dark:text-neutral-900'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
          }`}
        >
          {!isAbout && (
            <>
              {/* Glowing top indicator: always 100% mathematically centered directly over active tab */}
              <motion.div
                layoutId="active-nav-glow"
                className="absolute -top-1.5 inset-x-0 flex justify-center pointer-events-none z-20"
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 500, damping: 35, mass: 0.8 }
                }
              >
                <span className="w-5 h-[2px] rounded-full bg-neutral-800 dark:bg-white shadow-[0_0_5px_rgba(0,0,0,0.3)] dark:shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_2px_rgba(255,255,255,1)]" />
              </motion.div>

              {/* Active pill background */}
              <motion.div
                layoutId="active-nav-pill"
                className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white shadow-sm -z-0"
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 500, damping: 35, mass: 0.8 }
                }
              />
            </>
          )}
          <span className="relative z-10">Work</span>
        </button>

        {/* Info Tab Button */}
        <button
          onClick={() => {
            if (location.pathname !== '/about' && location.pathname !== '/info') navigate('/about');
          }}
          className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 select-none ${
            isAbout
              ? 'text-white dark:text-neutral-900'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
          }`}
        >
          {isAbout && (
            <>
              {/* Glowing top indicator: always 100% mathematically centered directly over active tab */}
              <motion.div
                layoutId="active-nav-glow"
                className="absolute -top-1.5 inset-x-0 flex justify-center pointer-events-none z-20"
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 500, damping: 35, mass: 0.8 }
                }
              >
                <span className="w-5 h-[2px] rounded-full bg-neutral-800 dark:bg-white shadow-[0_0_5px_rgba(0,0,0,0.3)] dark:shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_2px_rgba(255,255,255,1)]" />
              </motion.div>

              {/* Active pill background */}
              <motion.div
                layoutId="active-nav-pill"
                className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white shadow-sm -z-0"
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 500, damping: 35, mass: 0.8 }
                }
              />
            </>
          )}
          <span className="relative z-10">Info</span>
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
