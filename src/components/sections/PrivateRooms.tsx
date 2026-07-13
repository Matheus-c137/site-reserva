'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRIVATE_ROOM_BENEFITS, WA_MESSAGES } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PrivateRooms() {
  return (
    <section id="salas" className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Content */}
          <div>
            <SectionTitle
              tag="Salas Privativas"
              title="Seu escritório particular no coração de Fortaleza"
              align="left"
            />

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-8 flex flex-col gap-4"
            >
              {PRIVATE_ROOM_BENEFITS.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/10">
                    <Check className="h-3.5 w-3.5 text-green" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground sm:text-base">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <WhatsAppButton
                message={WA_MESSAGES.salas}
                label="Solicitar orçamento"
                size="large"
              />
            </motion.div>
          </div>

          {/* Right — Decorative Gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-green-50 to-blue-light/20" />

              {/* Floating decorative elements */}
              <div className="absolute left-8 top-8 h-24 w-24 rounded-2xl bg-coral/10 animate-float" />
              <div className="absolute bottom-12 right-12 h-32 w-32 rounded-full bg-green/10 animate-float [animation-delay:1s]" />
              <div className="absolute right-8 top-1/3 h-16 w-16 rounded-xl bg-blue-light/20 animate-float [animation-delay:0.5s]" />

              {/* Card preview elements */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%]">
                <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-sm">
                  <div className="mb-3 h-3 w-1/2 rounded-full bg-coral/20" />
                  <div className="mb-2 h-2.5 w-full rounded-full bg-foreground/5" />
                  <div className="mb-2 h-2.5 w-4/5 rounded-full bg-foreground/5" />
                  <div className="h-2.5 w-3/5 rounded-full bg-foreground/5" />
                  <div className="mt-5 flex gap-2">
                    <div className="h-8 w-8 rounded-lg bg-green/15" />
                    <div className="h-8 w-8 rounded-lg bg-coral/15" />
                    <div className="h-8 w-8 rounded-lg bg-blue-light/25" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
