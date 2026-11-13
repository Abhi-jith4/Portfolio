import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';

export function CursorBubble() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const isTouch = useRef(false);

  const springCfg = { stiffness: 300, damping: 30 };
  const x = useSpring(mouseX, springCfg);
  const y = useSpring(mouseY, springCfg);

  const handleMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  const handleClick = useCallback(() => {
    setClicked(true);
    setTimeout(() => setClicked(false), 400);
  }, []);

  useEffect(() => {
    isTouch.current = window.matchMedia('(hover: none)').matches;
    if (isTouch.current) return;

    // Detect hover over project cards
    const onEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('[data-cursor-hover]')) {
        setHovered(true);
      }
    };
    const onLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('[data-cursor-hover]')) {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', onEnter);
    window.addEventListener('mouseout', onLeave);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', onEnter);
      window.removeEventListener('mouseout', onLeave);
      window.removeEventListener('click', handleClick);
    };
  }, [handleMove, handleClick]);

  if (isTouch.current) return null;

  return (
    <AnimatePresence>
      {(hovered || true) && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full select-none"
          style={{
            x,
            y,
            translateX: '-50%',
            translateY: '-50%',
            backdropFilter: 'blur(4px) saturate(1.4)',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3)',
            background: 'rgba(255,255,255,0.15)',
            width: hovered ? 110 : 0,
            height: hovered ? 110 : 0,
            opacity: hovered ? 1 : 0,
          }}
          animate={{
            width: hovered ? 110 : 0,
            height: hovered ? 110 : 0,
            opacity: hovered ? 1 : 0,
            scale: clicked ? 1.15 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {hovered && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-[11px] font-semibold tracking-wide text-white uppercase whitespace-nowrap"
            >
              View project
            </motion.span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
