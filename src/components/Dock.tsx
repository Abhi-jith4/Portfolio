import { motion, useReducedMotion } from 'framer-motion';

export function Dock() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
        className="pointer-events-auto flex items-center gap-1 px-4 py-2 rounded-full glass-pill shadow-lg shadow-black/5 dark:shadow-black/30"
      >
        <motion.a
          href="https://www.linkedin.com/in/abhijith-v-s-152105322"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex items-center justify-center w-9 h-9 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors"
          aria-label="LinkedIn profile"
        >
          {/* LinkedIn SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
}
