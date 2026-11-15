import { motion, useReducedMotion } from 'framer-motion';
import { CopyEmail } from '../components/CopyEmail';

const EASE = [0.22, 1, 0.36, 1] as const;

function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 640;
}

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const mobile = isMobile();

  const makeFade = (delay: number, duration?: number) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: mobile ? 10 : 18 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: shouldReduceMotion ? 0 : (duration ?? (mobile ? 0.48 : 0.62)),
      delay: shouldReduceMotion ? 0 : (mobile ? delay * 0.7 : delay),
      ease: EASE,
    },
  });

  const makeImageFade = (delay: number) => ({
    initial: shouldReduceMotion
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: mobile ? 0.96 : 0.93 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: shouldReduceMotion ? 0 : (mobile ? 0.5 : 0.7),
      delay: shouldReduceMotion ? 0 : (mobile ? delay * 0.7 : delay),
      ease: EASE,
    },
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] dark:bg-[#0A0A0A] sm:bg-white sm:dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
      {/* Mobile subtle top radial glow (Perry Wang inspired), strictly hidden on desktop */}
      <div
        className="sm:hidden pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-[radial-gradient(ellipse_100%_350px_at_50%_0%,rgba(36,36,36,0.8)_0%,rgba(23,23,23,0.5)_50%,transparent_100%)] blur-2xl" />
      </div>

      {/* Main Content: Direct on page background on both mobile and desktop (no contrasting card), consistent across Work & Info */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 transition-colors duration-300">
        <div className="flex flex-col items-start sm:items-center">

          {/* Profile Image (left-aligned on mobile, centered on desktop, clean circular) */}
          <motion.div {...makeImageFade(0.04)} className="mb-7 sm:mb-9">
            <div className="w-[118px] h-[118px] sm:w-44 sm:h-44 rounded-full overflow-hidden transition-transform hover:scale-[1.03] duration-500 ease-out">
              <img
                src="/assets/about/avatar.png"
                alt="Abhijith V S"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Headline (left-aligned on mobile, centered on desktop) */}
          <motion.div
            {...makeFade(0.14, mobile ? 0.52 : 0.68)}
            className="max-w-4xl w-full text-left sm:text-center mb-6 sm:mb-8 overflow-visible"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.25] sm:leading-[1.28] overflow-visible pb-1 sm:pb-2 headline-depth">
              I'm passionate about bringing engineering and design together to create products that{' '}
              <span className="highlight-serif">empower people.</span>
            </h1>
          </motion.div>

          {/* Copy Email Action (hidden on mobile, centered on desktop) */}
          <motion.div
            {...makeFade(0.24)}
            className="hidden sm:flex justify-center mb-12 w-full"
          >
            <CopyEmail />
          </motion.div>

          {/* Biography Container (left-aligned on mobile, centered on desktop) */}
          <motion.div
            {...makeFade(0.32)}
            className="max-w-3xl w-full text-left sm:text-center overflow-visible"
          >
            {/* Subtle Section Label: ABOUT ME */}
            <div className="flex items-center justify-start sm:justify-center gap-2 mb-4 text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-400" aria-hidden="true" />
              <span>ABOUT ME</span>
            </div>

            <div className="space-y-6 text-base sm:text-[17px] text-neutral-600 dark:text-neutral-300/90 leading-[1.8]">
              <p>
                I'm a final-year Electronics and Communication Engineering student at Rajiv Gandhi Institute of Technology, Kottayam, who loves turning complex hardware systems into products people can actually use. I care about the full picture: the circuit, the code, and the screen the user sees.
              </p>
              <p>
                I focus on building complete user experiences around hardware projects. I craft intuitive app screens and telemetry dashboards using tools like Figma and Framer, alongside AI tools like Antigravity to bring those concepts to life as live, functional interfaces.
              </p>
              <p>
                I'm passionate about experimenting with AI tools and emerging design tech to make my designs better, especially with smooth, purposeful transitions that make an interface feel polished.
              </p>
              <p>
                Outside of work, you can usually find me playing football, hanging out with friends, or exploring new places together.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
