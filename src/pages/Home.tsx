import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { CursorBubble } from '../components/CursorBubble';
import { projects } from '../content';

export function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 cursor-default">
      <CursorBubble />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-32">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-20"
        >
          {/* Prominent Name & Professional Designation */}
          <div className="flex flex-col mb-6 overflow-visible">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Abhijith V S
            </span>
            <span className="text-sm sm:text-base md:text-lg font-medium text-neutral-500 dark:text-neutral-400 mt-1">
              Product Designer
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.18] sm:leading-[1.16] text-neutral-900 dark:text-white mb-6 overflow-visible pb-1.5">
            I blend engineering
            <br />
            and design to create
            <br />
            <span className="highlight-serif">products people love.</span>
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed overflow-visible">
            Hi, I'm Abhijith. I enjoy exploring ideas, solving problems and bringing meaningful experiences to life.
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>

        {/* Homepage Footer with LinkedIn icon and Antigravity credit */}
        <footer className="mt-28 pt-12 pb-8 border-t border-neutral-100 dark:border-neutral-900 flex flex-col items-center justify-center gap-3 text-center">
          <motion.a
            href="https://www.linkedin.com/in/abhijith-v-s-152105322"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm transition-colors"
            aria-label="LinkedIn profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium tracking-normal">
            Designed &amp; Built with Antigravity
          </p>
        </footer>
      </main>
    </div>
  );
}
