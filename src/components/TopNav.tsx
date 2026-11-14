import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useRef, useEffect, useState } from 'react';

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
  const [indicatorX, setIndicatorX] = useState<number | null>(null);

  useEffect(() => {
    const btn = isAbout ? infoBtnRef.current : workBtnRef.current;
    const nav = navRef.current;
    if (!btn || !nav) return;
    const btnRect = btn.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    // Center of button relative to nav
    const x = btnRect.left + btnRect.width / 2 - navRect.left;
    setIndicatorX(x);
  }, [isAbout, location.pathname]);

  if (isProject) return null;

  return (
    <div className="fixed top-5 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <motion.nav
        ref={navRef}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto relative flex items-center gap-1 p-1 rounded-full glass-pill shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-md"
      >
        {/* Floating indicator above the pill — positioned absolutely within nav */}
        {indicatorX !== null && (
          <motion.span
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{ top: -5, left: 0, transform: 'translateX(-50%)' }}
            animate={{ x: indicatorX }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 380, damping: 30, mass: 0.9 }
            }
          >
            <span className="block w-5 h-[2px] rounded-full bg-neutral-500/80 dark:bg-white/90 shadow-[0_0_5px_1px_rgba(100,100,100,0.3)] dark:shadow-[0_0_8px_2px_rgba(255,255,255,0.6),0_0_2px_rgba(255,255,255,0.9)]" />
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
