import { motion, useReducedMotion } from 'framer-motion';
import { CopyEmail } from '../components/CopyEmail';

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.8,
    delay: shouldReduceMotion ? 0 : delay,
    ease: 'easeOut' as const,
  });

  const getMotionProps = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: getTransition(delay),
  });

  return (
    <div className="min-h-screen bg-[#f0f2f5] dark:bg-black sm:bg-white sm:dark:bg-neutral-950 px-3.5 pt-20 pb-12 sm:px-0 sm:pt-0 sm:pb-0 transition-colors duration-300">
      {/* Main Content: Inset Rounded Container on Mobile, Standard Editorial Layout on Desktop */}
      <main className="max-w-6xl mx-auto bg-white dark:bg-[#141414] sm:bg-transparent sm:dark:bg-transparent rounded-[36px] sm:rounded-none border border-black/[0.06] dark:border-white/[0.07] sm:border-none shadow-sm sm:shadow-none px-6 py-10 sm:px-6 sm:pt-32 sm:pb-24 transition-colors duration-300">
        <div className="flex flex-col items-start sm:items-center">
          {/* Circular Profile Image (left-aligned on mobile, centered on desktop) */}
          <motion.div {...getMotionProps(0)} className="mb-7 sm:mb-9">
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
            {...getMotionProps(0.14)}
            className="max-w-4xl w-full text-left sm:text-center mb-6 sm:mb-8 overflow-visible"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.25] sm:leading-[1.28] overflow-visible pb-1 sm:pb-2 headline-depth">
              I'm passionate about bringing engineering and design together to create products that{' '}
              <span className="highlight-serif">empower people.</span>
            </h1>
          </motion.div>

          {/* Copy Email Action (hidden on mobile, centered on desktop) */}
          <motion.div
            {...getMotionProps(0.28)}
            className="hidden sm:flex justify-center mb-12 w-full"
          >
            <CopyEmail />
          </motion.div>

          {/* Biography Container */}
          <motion.div
            {...getMotionProps(0.4)}
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
