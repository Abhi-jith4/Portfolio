import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import type { ProjectData } from '../content/types';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

// Smooth ease-out curve inspired by Dousan Miao's refined portfolio motion
const EASE = [0.22, 1, 0.36, 1] as const;

// Project-specific accent glow colors and labels
const PROJECT_ACCENTS: Record<string, { glow: string; border: string; label: string }> = {
  agrirover: {
    glow: 'rgba(249, 115, 22, 0.22)', // Subtle orange glow
    border: '#F97316', // Crisp orange accent border
    label: 'IoT Mobile App',
  },
  motorex: {
    glow: 'rgba(229, 57, 53, 0.20)', // Subtle red ambient glow
    border: '#E53935', // Refined red border (~#E53935)
    label: 'Autonomous HMI',
  },
  motorage: {
    glow: 'rgba(0, 245, 106, 0.22)', // Subtle green glow
    border: '#00F56A', // Crisp green accent border
    label: 'Electric Vehicle Dashboard',
  },
  medisync: {
    glow: 'rgba(139, 92, 246, 0.22)', // Subtle purple glow
    border: '#8B5CF6', // Crisp purple accent border
    label: 'Remote Healthcare Application',
  },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPressed, setIsPressed] = useState(false);

  // Set comfortable, slower playback rate for UI previews
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, [project.coverMedia]);

  const accentInfo = PROJECT_ACCENTS[project.slug] || {
    glow: 'rgba(255, 255, 255, 0.15)',
    border: 'rgba(255, 255, 255, 0.35)',
    label: 'Case Study',
  };

  const handleCardClick = () => {
    if (typeof document !== 'undefined' && 'startViewTransition' in document && !shouldReduceMotion) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        navigate(`/projects/${project.slug}`);
      });
    } else {
      navigate(`/projects/${project.slug}`);
    }
  };

  // Touch and pointer interactions for mobile press / long-press feedback
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch' || e.button === 0) {
      setIsPressed(true);
    }
  };

  const handlePointerUp = () => {
    setIsPressed(false);
  };

  const handlePointerCancel = () => {
    setIsPressed(false);
  };

  const handlePointerLeave = () => {
    setIsPressed(false);
  };

  return (
    <motion.div
      data-project-card="true"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : (index % 2) * 0.1,
        ease: EASE,
      }}
      onClick={handleCardClick}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onPointerLeave={handlePointerLeave}
      className={`group relative rounded-[20px] sm:rounded-[22px] bg-white dark:bg-[#151515] border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700/80 transition-all duration-300 ease-out cursor-none flex flex-col h-full select-none hover:-translate-y-1 sm:hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/50 ${isPressed ? 'scale-[0.99]' : ''
        }`}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} case study`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      {/* ── Ambient Project-Specific Glow (Desktop Hover & Mobile Touch/Press) ── */}
      <div
        className={`absolute -inset-1 rounded-[24px] sm:rounded-[26px] blur-xl transition-opacity duration-300 ease-out pointer-events-none -z-10 ${isPressed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        style={{ background: accentInfo.glow }}
        aria-hidden="true"
      />

      {/* Subtle border highlight on hover and touch/press */}
      <div
        className={`absolute inset-0 rounded-[20px] sm:rounded-[22px] transition-opacity duration-300 ease-out pointer-events-none ${isPressed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        style={{
          boxShadow: `inset 0 0 0 1px ${accentInfo.border}`,
        }}
        aria-hidden="true"
      />

      {/* ── Browser-Window-Style Inset Preview Canvas ── */}
      <div className="p-2 sm:p-2.5 pb-0 sm:pb-0">
        <div className="rounded-xl sm:rounded-[14px] overflow-hidden border border-neutral-200/70 dark:border-white/[0.06] bg-neutral-100 dark:bg-neutral-900/90 flex flex-col shadow-sm">
          {/* Clean Browser Top Bar (No decorative dots, preserving frame & category badge) */}
          <div className="px-3 py-2 sm:px-3.5 sm:py-2 bg-neutral-100/90 dark:bg-[#1B1B1B]/90 border-b border-neutral-200/60 dark:border-white/[0.05] flex items-center justify-end">
            <span className="text-[10px] sm:text-[10.5px] font-medium tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
              {accentInfo.label}
            </span>
          </div>

          {/* Media Viewport */}
          <div className="relative w-full aspect-video overflow-hidden bg-neutral-950">
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
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                aria-label={`${project.title} preview video`}
              />
            ) : (
              <img
                src={project.coverMedia.src}
                alt={`${project.title} cover`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            )}

            {/* Accent strip at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] opacity-80 group-hover:opacity-100 transition-opacity"
              style={{ background: project.accent }}
            />
          </div>
        </div>
      </div>

      {/* ── Card Information Area (Content stays completely stable) ── */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-lg sm:text-[19px] leading-snug text-neutral-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5 font-medium">
              {project.year}
            </span>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
            {project.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-white/[0.04]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
