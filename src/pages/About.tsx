import { motion } from 'framer-motion';
import { CopyEmail } from '../components/CopyEmail';

export function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Centred Circular Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden transition-transform hover:scale-105 duration-300">
              <img
                src="/assets/about/avatar.png"
                alt="Abhijith V S"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Wider Desktop Headline Container (~900-1050px) */}
          <div className="max-w-4xl w-full text-center mb-8 overflow-visible">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.26] sm:leading-[1.28] overflow-visible pb-2">
              I'm passionate about bringing engineering and design together to create products that{' '}
              <span className="highlight-serif">empower people.</span>
            </h1>
          </div>

          {/* Copy Email Action */}
          <div className="flex justify-center mb-12">
            <CopyEmail />
          </div>

          {/* Biography Container (~750-850px) with comfortable line wrapping */}
          <div className="max-w-3xl w-full space-y-6 text-base sm:text-[17px] text-neutral-600 dark:text-neutral-300/90 leading-[1.8] text-center overflow-visible">
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
      </main>
    </div>
  );
}
