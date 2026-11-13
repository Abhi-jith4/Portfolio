import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const EMAIL = 'abhijith7107@gmail.com';

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.button
      onClick={copy}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="glass-button relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium select-none cursor-pointer"
      aria-label="Copy email address"
    >
      {/* Specular Diagonal Sheen (Dousan Miao style) */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/[0.14] dark:via-white/[0.08] to-transparent rotate-45 pointer-events-none" />
        <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none" />
      </div>

      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="check"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium"
          >
            <Check size={15} /> Copied!
          </motion.span>
        ) : (
          <motion.span
            key="mail"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 flex items-center gap-2 text-neutral-800 dark:text-neutral-100"
          >
            <Mail size={15} className="text-neutral-600 dark:text-neutral-300" />
            <span>Copy email</span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

