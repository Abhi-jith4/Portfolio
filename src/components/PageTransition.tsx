import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  locationKey: string;
}

const EASING = [0.22, 1, 0.36, 1] as const;

export function PageTransition({ children, locationKey }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();
  const prevKeyRef = useRef(locationKey);

  useEffect(() => {
    if (prevKeyRef.current !== locationKey) {
      window.scrollTo(0, 0);
      prevKeyRef.current = locationKey;
    }
  }, [locationKey]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={locationKey}
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 14 }
        }
        animate={{ opacity: 1, y: 0 }}
        exit={
          shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: -8, transition: { duration: 0.15, ease: 'easeIn' } }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.42, ease: EASING }
        }
        className="w-full min-h-screen will-change-[opacity,transform]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
