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
    <div className="relative min-h-screen bg-[#FAF9F6] dark:bg-[#171717] px-3.5 pt-20 pb-12 sm:px-0 sm:pt-0 sm:pb-0 transition-colors duration-300">
      {/* Subtle Perry Wang inspired atmospheric ambient lighting */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(186,210,235,0.12)_0%,rgba(186,210,235,0.03)_40%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(147,197,253,0.06)_0%,rgba(147,197,253,0.015)_45%,transparent_70%)] blur-2xl" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto bg-[#F0EFEC] dark:bg-[#202020] sm:bg-transparent sm:dark:bg-transparent rounded-[26px] sm:rounded-none border border-black/[0.06] dark:border-white/[0.08] sm:border-none shadow-sm sm:shadow-none px-6 py-10 sm:px-6 sm:pt-32 sm:pb-24 transition-colors duration-300">
        <div className="flex flex-col items-start sm:items-center">

          {/* Profile Image — enters with scale + fade and refined dual ring */}
          <motion.div {...makeImageFade(0.04)} className="mb-7 sm:mb-9 relative">
            <div className="w-[122px] h-[122px] sm:w-44 sm:h-44 rounded-full overflow-hidden ring-2 ring-black/[0.06] dark:ring-white/[0.12] shadow-xl shadow-black/10 dark:shadow-black/40 transition-transform hover:scale-[1.03] duration-500 ease-out">
              <img
                src="/assets/about/avatar.png"
                alt="Abhijith V S"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            {...makeFade(0.14, mobile ? 0.52 : 0.68)}
            className="max-w-4xl w-full text-left sm:text-center mb-6 sm:mb-8 overflow-visible"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold tracking-tight text-[#171717] dark:text-[#F5F5F3] leading-[1.25] sm:leading-[1.28] overflow-visible pb-1 sm:pb-2 headline-depth">
              I'm passionate about bringing engineering and design together to create products that{' '}
              <span className="highlight-serif">empower people.</span>
            </h1>
          </motion.div>

          {/* Copy Email (desktop only) */}
          <motion.div
            {...makeFade(0.24)}
            className="hidden sm:flex justify-center mb-12 w-full"
          >
            <CopyEmail />
          </motion.div>

          {/* Biography */}
          <motion.div
            {...makeFade(0.32)}
            className="max-w-3xl w-full text-left sm:text-center overflow-visible"
          >
            <div className="flex items-center justify-start sm:justify-center gap-2 mb-4 text-xs font-semibold tracking-widest uppercase text-[#737373] dark:text-[#888888]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#737373] dark:bg-[#888888]" aria-hidden="true" />
              <span>ABOUT ME</span>
            </div>

            <div className="space-y-6 text-base sm:text-[17px] text-[#404040] dark:text-[#CCCCCC] leading-[1.85] font-normal">
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
