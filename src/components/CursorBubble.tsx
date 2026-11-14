import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';

const CURSOR_SIZE = 110;

export function CursorBubble() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const isTouch = useRef(false);

  // Smooth spring following
  const springCfg = { stiffness: 240, damping: 30 };
  const x = useSpring(mouseX, springCfg);
  const y = useSpring(mouseY, springCfg);

  const handleMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  const handleClick = useCallback(() => {
    setClicked(true);
    setTimeout(() => setClicked(false), 280);
  }, []);

  useEffect(() => {
    isTouch.current = window.matchMedia('(hover: none)').matches;
    if (isTouch.current) return;

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
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full select-none"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        // Use CSS for the visual — no animated filter/backdrop here
        background: 'rgba(255,255,255,0.12)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.25)',
        willChange: 'transform',
      }}
      animate={{
        scale: hovered ? 1 : 0,
        opacity: hovered ? 1 : 0,
        // Click ripple via scale
        ...(clicked && hovered ? { scale: 1.08 } : {}),
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
    >
      {hovered && (
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.15 }}
          className="text-[11px] font-semibold tracking-wide text-white uppercase whitespace-nowrap"
        >
          View project
        </motion.span>
      )}
    </motion.div>
  );
}
