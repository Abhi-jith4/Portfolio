import { motion } from 'framer-motion';
import { CopyEmail } from '../components/CopyEmail';

export function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <main className="max-w-6xl mx-auto px-6 pt-24 sm:pt-32 pb-20 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-start sm:items-center"
        >
          {/* Circular Profile Image (left-aligned on mobile, centered on desktop) */}
          <div className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden transition-transform hover:scale-105 duration-300">
              <img
                src="/assets/about/avatar.png"
                alt="Abhijith V S"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Headline (left-aligned on mobile, centered on desktop) */}
          <div className="max-w-4xl w-full text-left sm:text-center mb-6 sm:mb-8 overflow-visible">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.25] sm:leading-[1.28] overflow-visible pb-1 sm:pb-2">
              I'm passionate about bringing engineering and design together to create products that{' '}
              <span className="highlight-serif">empower people.</span>
            </h1>
          </div>

          {/* Copy Email Action (left-aligned on mobile, centered on desktop) */}
          <div className="flex justify-start sm:justify-center mb-10 sm:mb-12 w-full">
            <CopyEmail />
          </div>

          {/* Biography Container */}
          <div className="max-w-3xl w-full text-left sm:text-center overflow-visible">
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
          </div>
        </motion.div>
      </main>
    </div>
  );
}
