import { motion, useReducedMotion } from 'framer-motion';
import { CopyEmail } from '../components/CopyEmail';

const EASE = [0.22, 1, 0.36, 1] as const;

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#0A0A0A] dark:bg-[#0A0A0A] sm:bg-white sm:dark:bg-neutral-950 px-3.5 pt-20 pb-12 sm:px-0 sm:pt-0 sm:pb-0 transition-colors duration-300 relative overflow-hidden">
      {/* Mobile subtle top radial glow (Perry Wang inspired), strictly hidden on desktop */}
      <div
        className="sm:hidden pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-[radial-gradient(ellipse_100%_350px_at_50%_0%,rgba(36,36,36,0.8)_0%,rgba(23,23,23,0.5)_50%,transparent_100%)] blur-2xl" />
      </div>

      {/* Main Content:
          - MOBILE: Rounded inset container card with dark #1B1B1B surface, #303030 border, rounded-[26px], padding px-6 py-10
          - DESKTOP: Direct on page background (sm:bg-transparent sm:border-none sm:shadow-none sm:rounded-none), preserving exact original layout */}
      <main className="relative z-10 max-w-6xl mx-auto bg-white dark:bg-[#1B1B1B] sm:bg-transparent sm:dark:bg-transparent rounded-[26px] sm:rounded-none border border-black/[0.06] dark:border-[#303030] sm:border-none shadow-sm sm:shadow-none px-6 py-10 sm:px-6 sm:pt-32 sm:pb-24 transition-colors duration-300">
        <div className="flex flex-col items-start sm:items-center">

          {/* 2. Profile Image (clean circular, enters smoothly shortly after headline) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: shouldReduceMotion ? 0 : 0.18,
              ease: EASE,
            }}
            className="mb-7 sm:mb-9"
          >
            <div className="w-[118px] h-[118px] sm:w-44 sm:h-44 rounded-full overflow-hidden transition-transform hover:scale-[1.03] duration-500 ease-out">
              <img
                src="/assets/about/avatar.png"
                alt="Abhijith V S"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* 1. Main Introductory Heading (appears first in sequence) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: shouldReduceMotion ? 0 : 0.06,
              ease: EASE,
            }}
            className="max-w-4xl w-full text-left sm:text-center mb-6 sm:mb-8 overflow-visible"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.25] sm:leading-[1.28] overflow-visible pb-1 sm:pb-2 headline-depth">
              I'm passionate about bringing engineering and design together to create products that{' '}
              <span className="highlight-serif">empower people.</span>
            </h1>
          </motion.div>

          {/* 3. Copy Email Action (enters next) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.4,
              delay: shouldReduceMotion ? 0 : 0.28,
              ease: EASE,
            }}
            className="flex justify-start sm:justify-center mb-8 sm:mb-12 w-full"
          >
            <CopyEmail />
          </motion.div>

          {/* 4. Biography Container: Section label & initial paragraphs */}
          <div className="max-w-3xl w-full text-left sm:text-center overflow-visible">
            {/* About Me Section Label */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : 0.38,
                ease: EASE,
              }}
              className="flex items-center justify-start sm:justify-center gap-2 mb-4 text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-400" aria-hidden="true" />
              <span>ABOUT ME</span>
            </motion.div>

            {/* Initial Bio Paragraphs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
                delay: shouldReduceMotion ? 0 : 0.46,
                ease: EASE,
              }}
              className="space-y-6 text-base sm:text-[17px] text-neutral-600 dark:text-neutral-300/90 leading-[1.8]"
            >
              <p>
                I'm a final-year Electronics and Communication Engineering student at Rajiv Gandhi Institute of Technology, Kottayam, who loves turning complex hardware systems into products people can actually use. I care about the full picture: the circuit, the code, and the screen the user sees.
              </p>
              <p>
                I focus on building complete user experiences around hardware projects. I craft intuitive app screens and telemetry dashboards using tools like Figma and Framer, alongside AI tools like Antigravity to bring those concepts to life as live, functional interfaces.
              </p>
            </motion.div>

            {/* 5. Lower Bio Content: Scroll-based viewport reveal */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.48,
                ease: EASE,
              }}
              className="space-y-6 text-base sm:text-[17px] text-neutral-600 dark:text-neutral-300/90 leading-[1.8] mt-6"
            >
              <p>
                I'm passionate about experimenting with AI tools and emerging design tech to make my designs better, especially with smooth, purposeful transitions that make an interface feel polished.
              </p>
              <p>
                Outside of work, you can usually find me playing football, hanging out with friends, or exploring new places together.
              </p>
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  );
}
