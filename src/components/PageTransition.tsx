import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const dots = [0, 1, 2];

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);


  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setLoading(true);
      window.scrollTo(0, 0);
      const t = setTimeout(() => {
        setDisplayLocation(location);
        setLoading(false);
      }, 550);
      return () => clearTimeout(t);
    }
  }, [location, displayLocation]);

  return (
    <>
      {/* Dim overlay + loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950/95"
          >
            <div className="flex items-center gap-3 mb-3">
              {dots.map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/60"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
            <span className="text-xs tracking-widest text-white/40 uppercase font-medium">
              Just a moment
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={displayLocation.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
