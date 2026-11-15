import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useRef, useEffect, useState } from 'react';

const INDICATOR_WIDTH = 22; // px

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

      // Mathematically calculate the exact left position so the 22px indicator
      // is precisely centered over the active button, regardless of screen size or zoom
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
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto relative flex items-center gap-1 p-1 rounded-full glass-pill shadow-lg shadow-black/5 dark:shadow-black/40 backdrop-blur-xl"
      >
        {/* Floating glowing indicator: centered with exact precision directly above active tab */}
        {indicatorLeft !== null && (
          <motion.span
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{ top: -5, left: 0, width: INDICATOR_WIDTH }}
            initial={false}
            animate={{
              x: indicatorLeft,
              opacity: isReady ? 1 : 0,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 420, damping: 32, mass: 0.8 }
            }
          >
            <span className="block w-full h-[2px] rounded-full bg-[#171717] dark:bg-white shadow-[0_0_5px_1px_rgba(0,0,0,0.25)] dark:shadow-[0_0_8px_2px_rgba(255,255,255,0.7),0_0_2px_rgba(255,255,255,0.95)] filter dark:drop-shadow-[0_-1px_3px_rgba(255,255,255,0.6)]" />
          </motion.span>
        )}

        <button
          ref={workBtnRef}
          onClick={() => navigate('/')}
          className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            !isAbout
              ? 'bg-[#171717] dark:bg-[#F5F5F5] text-[#F5F5F5] dark:text-[#111111] shadow-sm'
              : 'text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5]'
          }`}
        >
          Work
        </button>

        <button
          ref={infoBtnRef}
          onClick={() => navigate('/about')}
          className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            isAbout
              ? 'bg-[#171717] dark:bg-[#F5F5F5] text-[#F5F5F5] dark:text-[#111111] shadow-sm'
              : 'text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5]'
          }`}
        >
          Info
        </button>

        <div className="w-px h-4 bg-black/10 dark:bg-[#303030] mx-1" />
        <button
          onClick={toggle}
          className="w-8 h-8 flex items-center justify-center rounded-full text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </motion.nav>
    </div>
  );
}
