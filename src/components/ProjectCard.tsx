import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState, useCallback } from 'react';
import type { ProjectData } from '../content/types';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

const BUBBLE_SIZE = 110;
const HALF = BUBBLE_SIZE / 2;

export function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Bubble state: position relative to image container + visibility
  const [bubblePos, setBubblePos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Detect touch/coarse pointer — disable bubble on mobile
  const isCoarsePointer = useRef(
    typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches
  );

  // Set comfortable, slower playback rate for UI previews
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, [project.coverMedia]);

  // Track pointer position relative to the image container
  const handlePointerMove = useCallback((e: PointerEvent) => {
    const container = imageContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    // clientX/Y are viewport-relative; getBoundingClientRect() is also viewport-relative
    // so the subtraction gives element-relative coordinates — correct across all scroll positions
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;

    // Clamp so the bubble circle never overflows the image container
    const clampedX = Math.max(HALF, Math.min(rect.width - HALF, rawX));
    const clampedY = Math.max(HALF, Math.min(rect.height - HALF, rawY));

    setBubblePos({ x: clampedX, y: clampedY });
  }, []);

  const handlePointerEnter = useCallback(() => {
    if (isCoarsePointer.current) return;
    setIsHoveringImage(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHoveringImage(false);
  }, []);

  const handleCardClick = useCallback(() => {
    setClicked(true);
    setTimeout(() => setClicked(false), 280);
    navigate(`/projects/${project.slug}`);
  }, [navigate, project.slug]);

  // Attach pointer events directly to the image container element
  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container || isCoarsePointer.current) return;

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerenter', handlePointerEnter);
    container.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [handlePointerMove, handlePointerEnter, handlePointerLeave]);

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 0.38 + index * 0.09,
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={handleCardClick}
      className="group relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 cursor-none border border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-400 ease-out hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 hover:-translate-y-1 flex flex-col h-full"
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} case study`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/projects/${project.slug}`); }}
    >
      {/* Cover media — bubble is scoped inside here, clipped by overflow-hidden */}
      <div
        ref={imageContainerRef}
        className="relative w-full aspect-video overflow-hidden bg-neutral-200 dark:bg-neutral-800 shrink-0"
      >
        {project.coverMedia.type === 'video' ? (
          <video
            ref={videoRef}
            src={project.coverMedia.src}
            poster={project.coverMedia.poster}
            autoPlay
            muted
            loop
            playsInline
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 0.75;
            }}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            aria-label={`${project.title} demo video`}
          />
        ) : (
          <img
            src={project.coverMedia.src}
            alt={`${project.title} cover`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="lazy"
          />
        )}

        {/* Accent bar at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-80"
          style={{ background: project.accent }}
        />

        {/* VIEW PROJECT bubble — lives INSIDE the image container.
            Positioned element-relative, clipped by parent overflow-hidden.
            Never bleeds onto description or neighboring cards. */}
        {!isCoarsePointer.current && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute z-10 flex items-center justify-center rounded-full select-none"
            style={{
              width: BUBBLE_SIZE,
              height: BUBBLE_SIZE,
              left: bubblePos.x - HALF,
              top: bubblePos.y - HALF,
              background: 'rgba(255,255,255,0.13)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.28)',
              willChange: 'transform, opacity',
            }}
            animate={{
              scale: isHoveringImage ? 1 : 0,
              opacity: isHoveringImage ? 1 : 0,
              ...(clicked && isHoveringImage ? { scale: 1.08 } : {}),
            }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          >
            <motion.span
              animate={{
                opacity: isHoveringImage ? 1 : 0,
                scale: isHoveringImage ? 1 : 0.85,
              }}
              transition={{ duration: 0.14, ease: 'easeOut' }}
              className="text-[11px] font-semibold tracking-wide text-white uppercase whitespace-nowrap"
            >
              View project
            </motion.span>
          </motion.div>
        )}
      </div>

      {/* Card info */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-lg leading-snug text-neutral-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5">{project.year}</span>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
            {project.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover accent glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ease-out pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}, transparent 70%)` }}
      />
    </motion.div>
  );
}
