import { motion, useReducedMotion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { CursorBubble } from '../components/CursorBubble';
import { CopyEmail } from '../components/CopyEmail';
import { projects } from '../content';

export function Home() {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.45,
    delay: shouldReduceMotion ? 0 : delay,
    ease: 'easeOut' as const,
  });

  const getMotionProps = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: getTransition(delay),
  });

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 cursor-default">
      <CursorBubble />

      {/* Main Content: Direct on page background on mobile, standard layout on desktop */}
      <main className="max-w-5xl mx-auto px-6 pt-24 sm:pt-32 pb-16">
        {/* Hero */}
        <div className="mb-14 sm:mb-20">
          {/* Prominent Name & Professional Designation */}
          <motion.div
            {...getMotionProps(0)}
            className="flex flex-col mb-6 overflow-visible"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Abhijith V S
            </span>
            <span className="text-sm sm:text-base md:text-lg font-medium text-neutral-500 dark:text-neutral-400 mt-1">
              Product Designer
            </span>
          </motion.div>

          <motion.h1
            {...getMotionProps(0.06)}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.18] sm:leading-[1.16] text-neutral-900 dark:text-white mb-6 overflow-visible pb-1.5 headline-depth"
          >
            I blend engineering
            <br />
            and design to create
            <br />
            <span className="highlight-serif">products people love.</span>
          </motion.h1>

          <motion.p
            {...getMotionProps(0.12)}
            className="text-lg text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed overflow-visible"
          >
            Hi, I'm Abhijith. I enjoy exploring ideas, solving problems and bringing meaningful experiences to life.
          </motion.p>

          {/* Mobile Copy Email Button (Dousan Miao mobile layout) */}
          <motion.div
            {...getMotionProps(0.16)}
            className="flex sm:hidden mt-6 overflow-visible"
          >
            <CopyEmail />
          </motion.div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Homepage Footer with LinkedIn icon and Antigravity credit */}
        <motion.footer
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' }}
          className="mt-12 sm:mt-16 pb-4 flex flex-col items-center justify-center gap-3 text-center"
        >
          <motion.a
            href="https://www.linkedin.com/in/abhijith-v-s-152105322"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm transition-colors"
            aria-label="LinkedIn profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium tracking-normal">
            &copy; 2026 Abhijith V S. Designed &amp; Built with Antigravity
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
