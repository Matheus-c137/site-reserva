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
      <div className="container-custom max-w-[1280px] relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* ── Left: Text Content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5"
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
              Seu endereço fiscal em Fortaleza com{' '}
              <span className="text-coral">12 anos de experiência</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-muted sm:text-lg"
            >
              Endereço fiscal e comercial com Processo Gestor do Corpo de
              Bombeiros, Alvará de Funcionamento e toda a estrutura para abrir
              e manter sua empresa. Coworking com salas privativas e localização estratégica em Fortaleza.
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
                data-track="click_whatsapp"
                data-track-location="hero"
              >
                Solicitar Atendimento
                <ArrowRight className="h-4.5 w-4.5" />
              </a>

              <WhatsAppButton
                message={WA_MESSAGES.generic}
                label="Falar no WhatsApp"
                size="large"
                trackLocation="hero"
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

          {/* ── Right: Responsive Hero Images ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative w-full lg:col-span-7"
          >
            <div className="relative mx-auto w-full overflow-hidden rounded-3xl border border-border bg-background-alt shadow-card">
              <picture>
                <source srcSet="/images/hero-desktop.webp" media="(min-width: 1024px)" />
                <img
                  src="/images/hero-mobile.webp"
                  alt="Reserva Coworking Espaço Integrado"
                  className="h-auto w-full block"
                  loading="eager"
                />
              </picture>
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
