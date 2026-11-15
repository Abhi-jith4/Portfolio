import { motion, useReducedMotion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../content';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0A0A0A] sm:bg-[#FAF9F6] sm:dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
      {/* Mobile subtle top radial glow (Perry Wang inspired), strictly dark-mode only on mobile */}
      <div
        className="hidden dark:block sm:dark:hidden pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-[radial-gradient(ellipse_100%_350px_at_50%_0%,rgba(36,36,36,0.8)_0%,rgba(23,23,23,0.5)_50%,transparent_100%)] blur-2xl" />
      </div>

      {/* Main Content: Direct on page background on mobile and desktop */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 sm:pt-32 pb-16">
        {/* Hero: Sequential, lightweight entrance sequence inspired by Perry Wang */}
        <div className="mb-14 sm:mb-20">
          {/* 1. Name: Enters first with subtle fade-in and slight upward movement */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.4,
              delay: shouldReduceMotion ? 0 : 0.05,
              ease: EASE,
            }}
            className="overflow-visible"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Abhijith V S
            </span>
          </motion.div>

          {/* 2. Designation: Appears shortly after name with small stagger */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.4,
              delay: shouldReduceMotion ? 0 : 0.16,
              ease: EASE,
            }}
            className="overflow-visible mt-1 mb-6"
          >
            <span className="text-sm sm:text-base md:text-lg font-medium text-neutral-500 dark:text-neutral-400">
              Product Designer
            </span>
          </motion.div>

          {/* 3. Engineering & design tagline: Appears next in sequence */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.48,
              delay: shouldReduceMotion ? 0 : 0.28,
              ease: EASE,
            }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.18] sm:leading-[1.16] text-neutral-900 dark:text-white mb-6 overflow-visible pb-1.5 headline-depth"
          >
            I blend engineering
            <br />
            and design to create
            <br />
            <span className="highlight-serif">products people love.</span>
          </motion.h1>

          {/* 4. Introductory description text: Appears last */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.42,
              delay: shouldReduceMotion ? 0 : 0.4,
              ease: EASE,
            }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed overflow-visible"
          >
            Hi, I'm Abhijith. I enjoy exploring ideas, solving problems and bringing meaningful experiences to life.
          </motion.p>
        </div>

        {/* Project grid: Cards animate individually with progressive stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Homepage Footer: Subtle viewport-based reveal */}
        <motion.footer
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: EASE,
          }}
          className="mt-12 sm:mt-16 pb-4 flex flex-col items-center justify-center gap-3.5 text-center"
        >
          <div className="flex items-center justify-center gap-3.5 sm:gap-4">
            <motion.a
              href="https://github.com/Abhi-jith4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex items-center justify-center w-[42px] h-[42px] rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-100/90 dark:hover:bg-neutral-800/90 shadow-sm transition-colors cursor-pointer"
              aria-label="GitHub profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/abhijith-v-s-152105322"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex items-center justify-center w-[42px] h-[42px] rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-100/90 dark:hover:bg-neutral-800/90 shadow-sm transition-colors cursor-pointer"
              aria-label="LinkedIn profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
          </div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium tracking-normal">
            &copy; 2026 Abhijith V S. Designed &amp; Built with Antigravity
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
