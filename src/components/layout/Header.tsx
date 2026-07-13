'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, WA_MESSAGES, whatsappUrl } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex h-[72px] items-center justify-between" aria-label="Navegação principal">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="Reserva Coworking - Início">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral">
              <span className="text-lg font-bold text-white">R</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Reserva<span className="text-coral">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground hover:bg-background-alt"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsappUrl(WA_MESSAGES.generic)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-5 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-background-alt lg:hidden"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <div className="container-custom flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-background-alt hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 border-t border-border pt-4">
                <a
                  href={whatsappUrl(WA_MESSAGES.generic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
