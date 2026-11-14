import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';

const BUBBLE_SIZE = 104; // 104px diameter (in the 100-110px range)
const HALF = BUBBLE_SIZE / 2;

export function CursorBubble() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  // Track cursor position
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const hasMoved = useRef(false);
  const hideTimer = useRef<number | null>(null);
  const lastPos = useRef({ x: -500, y: -500 });

  // Spring physics for buttery, direct tracking without lag or overshoot
  const springConfig = { stiffness: 420, damping: 32, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset hover state immediately when navigating to another route
  useEffect(() => {
    setIsHovered(false);
    setIsClicked(false);
  }, [location.pathname]);

  useEffect(() => {
    // Only run on desktop with fine pointer / hover capability
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) return;

    const checkHover = (x: number, y: number, target?: EventTarget | null) => {
      let el: Element | null = null;
      if (target instanceof Element) {
        el = target;
      } else {
        el = document.elementFromPoint(x, y);
      }
      return Boolean(el?.closest('[data-project-card]'));
    };

    const handlePointerMove = (e: PointerEvent) => {
      lastPos.current = { x: e.clientX, y: e.clientY };

      // Initialize spring directly on first move to eliminate offscreen fly-in jumps
      if (!hasMoved.current) {
        mouseX.jump(e.clientX - HALF);
        mouseY.jump(e.clientY - HALF);
        hasMoved.current = true;
      } else {
        mouseX.set(e.clientX - HALF);
        mouseY.set(e.clientY - HALF);
      }

      const isOver = checkHover(e.clientX, e.clientY, e.target);

      if (isOver) {
        if (hideTimer.current) {
          window.clearTimeout(hideTimer.current);
          hideTimer.current = null;
        }
        setIsHovered(true);
      } else {
        // 80ms grace timeout: allows the bubble to smoothly extend beyond card boundaries
        // and glide across gaps without flickering
        if (!hideTimer.current) {
          hideTimer.current = window.setTimeout(() => {
            setIsHovered(false);
            hideTimer.current = null;
          }, 80);
        }
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (checkHover(e.clientX, e.clientY, e.target)) {
        setIsClicked(true);
      }
    };

    const handlePointerUp = () => {
      setIsClicked(false);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setIsClicked(false);
    };

    const handleScroll = () => {
      if (lastPos.current.x >= 0 && lastPos.current.y >= 0) {
        const isOver = checkHover(lastPos.current.x, lastPos.current.y);
        if (!isOver) {
          setIsHovered(false);
        }
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  // Don't render on SSR or on touch/coarse devices
  if (!mounted || typeof window === 'undefined') return null;
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  if (isTouch) return null;

  return createPortal(
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: BUBBLE_SIZE,
        height: BUBBLE_SIZE,
        x: smoothX,
        y: smoothY,
        pointerEvents: 'none',
        zIndex: 99999,
        willChange: 'transform, opacity',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isHovered ? (isClicked ? 0.92 : 1) : 0,
        opacity: isHovered ? 1 : 0,
      }}
      transition={{
        scale: { type: 'spring', stiffness: 380, damping: 26 },
        opacity: { duration: 0.16, ease: 'easeOut' },
      }}
      className="cursor-bubble-glass rounded-full flex flex-col items-center justify-center select-none"
    >
      <span className="text-[13px] font-medium leading-[1.25] text-center tracking-normal">
        View<br />project
      </span>
    </motion.div>,
    document.body
  );
}
