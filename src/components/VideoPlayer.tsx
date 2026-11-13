import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  accent?: string;
}

export function VideoPlayer({ src, poster, className = '', accent = '#F97316' }: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      onClick={toggle}
      className={`relative cursor-pointer rounded-xl overflow-hidden bg-black select-none ${className}`}
      role="button"
      tabIndex={0}
      aria-label={playing ? 'Click to pause video' : 'Click to play video'}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        playsInline
        loop
        className="w-full h-full object-contain pointer-events-none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label="Project demo video"
      />

      {/* Play Button Overlay - Only visible when video is paused */}
      <AnimatePresence>
        {!playing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center shadow-xl shadow-black/50"
              style={{ background: accent }}
            >
              <Play size={26} className="text-white fill-white ml-1" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
