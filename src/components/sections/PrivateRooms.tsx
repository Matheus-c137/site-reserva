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
      <div className="container-custom max-w-[1280px]">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left — Content */}
          <div className="lg:col-span-5">
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

          {/* Right — Responsive Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative w-full lg:col-span-7"
          >
            <div className="relative mx-auto w-full overflow-hidden rounded-3xl border border-border bg-background shadow-card">
              <picture>
                <source srcSet="/images/salas-desktop.webp" media="(min-width: 1024px)" />
                <img
                  src="/images/salas-mobile.webp"
                  alt="Salas Privativas Reserva Coworking"
                  className="h-auto w-full block"
                  loading="lazy"
                />
              </picture>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
