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
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        key={locationKey}
        initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: shouldReduceMotion ? 0 : 0.32,
            ease: EASING,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: shouldReduceMotion ? 0 : 0.2,
            ease: EASING,
          },
        }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
