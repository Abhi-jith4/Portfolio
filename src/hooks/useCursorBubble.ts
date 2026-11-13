import { useEffect, useRef, useCallback } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export function useCursorBubble() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const isHovering = useRef(false);
  const isTouch = useRef(false);

  const springConfig = { stiffness: 300, damping: 30 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    isTouch.current = window.matchMedia('(hover: none)').matches;
    if (isTouch.current) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return { x, y, isHovering, isTouch };
}

