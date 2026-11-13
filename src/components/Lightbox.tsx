import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LightboxProps {
  image: { src: string; alt: string; caption?: string } | null;
  onClose: () => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    if (!image) return;

    // Prevent background scrolling while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-neutral-950/90 backdrop-blur-md cursor-zoom-out select-none"
          role="dialog"
          aria-modal="true"
          aria-label={image.alt || 'Enlarged image view'}
        >
          {/* Close button top right */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="fixed top-5 right-5 sm:top-6 sm:right-8 z-[110] w-11 h-11 flex items-center justify-center rounded-full glass-pill text-white hover:text-white bg-neutral-900/80 border border-neutral-700/60 shadow-xl transition-colors cursor-pointer"
            aria-label="Close enlarged preview"
          >
            <X size={20} />
          </motion.button>

          {/* Centered Image Container */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center max-w-full max-h-full cursor-default"
          >
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-2xl">
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-[80vh] max-w-[92vw] md:max-w-5xl w-auto h-auto object-contain rounded-2xl"
              />
            </div>
            {image.caption && (
              <p className="mt-3.5 px-4 text-xs sm:text-sm text-neutral-300 dark:text-neutral-300 text-center max-w-2xl leading-relaxed font-medium">
                {image.caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

