'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { WA_MESSAGES, whatsappUrl } from '@/lib/constants';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative mr-1 rounded-2xl bg-white p-4 shadow-elevated"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full text-muted transition-colors hover:bg-background-alt"
              aria-label="Fechar"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="pr-6 text-sm font-semibold text-foreground">
              Precisa de ajuda?
            </p>
            <p className="mt-1 text-xs text-muted">
              Fale conosco pelo WhatsApp
            </p>
            <a
              href={whatsappUrl(WA_MESSAGES.generic)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-3 w-full py-2.5 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Iniciar conversa
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Float Button */}
      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-xl animate-pulse-soft"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </div>
  );
}
