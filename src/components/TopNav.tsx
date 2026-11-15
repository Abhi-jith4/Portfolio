import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useRef, useEffect, useState } from 'react';

const INDICATOR_WIDTH = 20; // 20px (matching w-5)

export function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggle } = useDarkMode();
  const shouldReduceMotion = useReducedMotion();

  const isAbout = location.pathname === '/about' || location.pathname === '/info';
  const isProject = location.pathname.startsWith('/projects/');

  const workBtnRef = useRef<HTMLButtonElement>(null);
  const infoBtnRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [indicatorLeft, setIndicatorLeft] = useState<number | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      const btn = isAbout ? infoBtnRef.current : workBtnRef.current;
      const nav = navRef.current;
      if (!btn || !nav) return;

      const btnRect = btn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();

      // Mathematically calculate the exact left position so the 20px indicator
      // is precisely centered over the active button on both desktop and mobile
      const buttonCenter = btnRect.left + btnRect.width / 2 - navRect.left;
      const left = buttonCenter - INDICATOR_WIDTH / 2;

      setIndicatorLeft(left);
      setIsReady(true);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    document.fonts?.ready?.then(updatePosition);

    return () => window.removeEventListener('resize', updatePosition);
  }, [isAbout, location.pathname]);

  if (isProject) return null;

  return (
    <div className="fixed top-5 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <motion.nav
        ref={navRef}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
        className="pointer-events-auto relative flex items-center gap-1 p-1 rounded-full glass-pill shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-md"
      >
        {/* Floating indicator: centered with exact precision directly above active tab */}
        {indicatorLeft !== null && (
          <motion.span
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{ top: -4, left: 0, width: INDICATOR_WIDTH }}
            initial={false}
            animate={{
              x: indicatorLeft,
              opacity: isReady ? 1 : 0,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 450, damping: 35, mass: 0.8 }
            }
          >
            <span className="block w-full h-[2px] rounded-full bg-neutral-400/90 dark:bg-white shadow-[0_0_6px_rgba(150,150,150,0.4)] dark:shadow-[0_0_8px_rgba(255,255,255,0.75),0_0_2px_rgba(255,255,255,0.9)]" />
          </motion.span>
        )}

        <button
          ref={workBtnRef}
          onClick={() => navigate('/')}
          className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            !isAbout
              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
          }`}
        >
          Work
        </button>

        <button
          ref={infoBtnRef}
          onClick={() => navigate('/about')}
          className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
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
