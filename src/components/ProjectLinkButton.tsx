import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectExternalLink } from '../content/types';

export function GitHubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function FigmaIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    </svg>
  );
}

export function ProjectLinkButton({ link }: { link: ProjectExternalLink }) {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="glass-button group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium select-none cursor-pointer no-underline text-neutral-800 dark:text-neutral-100"
      aria-label={link.label}
    >
      {/* Specular Diagonal Sheen (consistent with CopyEmail) */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/[0.14] dark:via-white/[0.08] to-transparent rotate-45 pointer-events-none" />
        <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none" />
      </div>

      <span className="relative z-10 flex items-center justify-center gap-2 text-neutral-800 dark:text-neutral-100 font-medium">
        {link.icon === 'github' ? (
          <GitHubIcon className="w-[15px] h-[15px] text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors shrink-0" />
        ) : (
          <FigmaIcon className="w-[15px] h-[15px] text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors shrink-0" />
        )}
        <span>{link.label}</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
      </span>
    </motion.a>
  );
}
