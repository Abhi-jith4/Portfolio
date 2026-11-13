import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { ProjectData } from '../content/types';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.5, ease: 'easeOut' }}
      onClick={() => navigate(`/projects/${project.slug}`)}
      data-cursor-hover
      className="group relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 cursor-none border border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 hover:-translate-y-1 flex flex-col h-full"
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} case study`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/projects/${project.slug}`); }}
    >
      {/* Cover media */}
      <div className="relative w-full aspect-video overflow-hidden bg-neutral-200 dark:bg-neutral-800 shrink-0">
        {project.coverMedia.type === 'video' ? (
          <video
            src={project.coverMedia.src}
            poster={project.coverMedia.poster}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            aria-label={`${project.title} demo video`}
          />
        ) : (
          <img
            src={project.coverMedia.src}
            alt={`${project.title} cover`}
            className="w-full h-full object-cover"
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
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}, transparent 70%)` }}
      />
    </motion.div>
  );
}

