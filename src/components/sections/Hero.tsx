'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whatsappUrl, WA_MESSAGES } from '@/lib/constants';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const trustBadges = [
  '✔ Imóvel Próprio',
  '✔ Processo Gestor Regularizado',
  '✔ Localização Estratégica',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-coral-50 pt-24 pb-16 md:pb-0 md:min-h-screen md:flex md:items-center">
      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: Text Content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={fadeUp}>
              <span className="mb-4 inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-green uppercase">
                Coworking com Imóvel Próprio
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.15]"
            >
              Seu endereço empresarial em Fortaleza com a{' '}
              <span className="text-coral">segurança de um imóvel próprio</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-muted sm:text-lg"
            >
              Endereço fiscal e comercial com Processo Gestor do Corpo de
              Bombeiros, Alvará de Funcionamento e toda a estrutura para abrir
              ou manter sua empresa. Coworking com imóvel próprio no Bairro de
              Fátima.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={whatsappUrl(WA_MESSAGES.generic)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-base"
              >
                Solicitar Atendimento
                <ArrowRight className="h-4.5 w-4.5" />
              </a>

              <WhatsAppButton
                message={WA_MESSAGES.generic}
                label="Falar no WhatsApp"
                size="large"
              />
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-border-light bg-white px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Decorative Gradient Orbs ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative mx-auto aspect-square w-full max-w-lg">
              {/* Main coral orb */}
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/30 blur-3xl"
              />

              {/* Blue-light orb */}
              <motion.div
                animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-8 right-8 h-48 w-48 rounded-full bg-blue-light/40 blur-3xl"
              />

              {/* Yellow orb */}
              <motion.div
                animate={{ y: [0, 10, 0], x: [0, 6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-12 left-12 h-40 w-40 rounded-full bg-yellow/30 blur-3xl"
              />

              {/* Small coral accent */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute top-16 left-16 h-24 w-24 rounded-full bg-coral/20 blur-2xl"
              />

              {/* Central decorative ring */}
              <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-coral/10" />
              <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-light/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background subtle gradient accent */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-coral-50/60 blur-3xl"
        aria-hidden="true"
      />
    </section>
  );
}
