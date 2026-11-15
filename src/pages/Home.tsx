import { motion, useReducedMotion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { CopyEmail } from '../components/CopyEmail';
import { projects } from '../content';

const EASE = [0.22, 1, 0.36, 1] as const;

// Determine mobile vs desktop stagger based on viewport width
function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 640;
}

export function Home() {
  const shouldReduceMotion = useReducedMotion();
  const mobile = isMobile();

  const makeFade = (delay: number, extraDuration?: number) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: mobile ? 10 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : (extraDuration ?? (mobile ? 0.5 : 0.65)),
      delay: shouldReduceMotion ? 0 : (mobile ? delay * 0.7 : delay),
      ease: EASE,
    },
  });

  return (
    <div className="relative min-h-screen bg-transparent transition-colors duration-300">
      {/* Subtle atmospheric ambient lighting over #111111 charcoal depth */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,rgba(186,210,235,0.04)_40%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04)_0%,rgba(147,197,253,0.015)_40%,transparent_70%)] blur-3xl" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 sm:pt-32 pb-16">
        {/* Hero */}
        <div className="mb-14 sm:mb-20">
          {/* Name & title — first to appear */}
          <motion.div
            {...makeFade(0.05)}
            className="flex flex-col mb-6 overflow-visible"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F5F5] leading-tight">
              Abhijith V S
            </span>
            <span className="text-sm sm:text-base md:text-lg font-medium text-[#737373] dark:text-[#A3A3A3] mt-1">
              Product Designer
            </span>
          </motion.div>

          {/* Main headline — second */}
          <motion.h1
            {...makeFade(0.14, mobile ? 0.55 : 0.72)}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.18] sm:leading-[1.16] text-[#171717] dark:text-[#F5F5F5] mb-6 overflow-visible pb-1.5 headline-depth"
          >
            I blend engineering
            <br />
            and design to create
            <br />
            <span className="highlight-serif">products people love.</span>
          </motion.h1>

          {/* Description — third */}
          <motion.p
            {...makeFade(0.26)}
            className="text-lg text-[#5C5C5C] dark:text-[#A3A3A3] max-w-lg leading-relaxed overflow-visible"
          >
            Hi, I'm Abhijith. I enjoy exploring ideas, solving problems and bringing meaningful experiences to life.
          </motion.p>

          {/* Copy Email (mobile only) — fourth */}
          <motion.div
            {...makeFade(0.34)}
            className="flex sm:hidden mt-6 overflow-visible"
          >
            <CopyEmail />
          </motion.div>
        </div>

        {/* Project grid — staggered #202020 cards with subtle #303030 borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : (mobile ? 0.7 : 1.0),
            ease: EASE,
          }}
          className="mt-12 sm:mt-16 pb-4 flex flex-col items-center justify-center gap-3 text-center"
        >
          <motion.a
            href="https://www.linkedin.com/in/abhijith-v-s-152105322"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-black/[0.08] dark:border-[#303030] bg-[#F0EFEC]/80 dark:bg-[#1B1B1B]/80 text-[#555555] dark:text-[#A3A3A3] hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:border-black/20 dark:hover:border-[#505050] shadow-sm transition-colors"
            aria-label="LinkedIn profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
          <p className="text-xs text-[#888888] dark:text-[#737373] font-medium tracking-normal">
            &copy; 2026 Abhijith V S. Designed &amp; Built with Antigravity
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
