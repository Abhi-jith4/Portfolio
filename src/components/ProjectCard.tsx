import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import type { ProjectData } from '../content/types';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set comfortable, slower playback rate for UI previews
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, [project.coverMedia]);

  const handleCardClick = () => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <motion.div
      data-project-card="true"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 0.38 + index * 0.09,
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={handleCardClick}
      className="group relative overflow-hidden rounded-[22px] bg-[#F0EFEC] dark:bg-[#202020] cursor-none border border-black/[0.06] dark:border-[#303030] hover:border-black/[0.14] dark:hover:border-[#484848] transition-all duration-400 ease-out shadow-sm hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/60 hover:-translate-y-1 flex flex-col h-full select-none"
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} case study`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigate(`/projects/${project.slug}`);
        }
      }}
    >
      {/* Cover media */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#E5E3DE] dark:bg-[#161616] shrink-0 rounded-t-[21px]">
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
      </div>

      {/* Card info */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-lg leading-snug text-[#171717] dark:text-[#F5F5F5] tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs text-[#888888] dark:text-[#737373] shrink-0 mt-0.5 font-medium">
              {project.year}
            </span>
          </div>
          <p className="text-sm text-[#5C5C5C] dark:text-[#A3A3A3] leading-relaxed mb-4">
            {project.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#E2DFD8] dark:bg-[#282828] text-[#4A4A4A] dark:text-[#D4D4D4] border border-black/[0.04] dark:border-[#343434]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Restrained hover accent glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}, transparent 70%)` }}
      />
    </motion.div>
  );
}
