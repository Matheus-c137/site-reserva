'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, Upload, PenLine, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { STEPS } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';

const ICON_MAP: Record<string, LucideIcon> = {
  MousePointerClick,
  Upload,
  PenLine,
  Rocket,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-background">
      <div className="container-custom">
        <SectionTitle
          tag="Como Funciona"
          title="Comece a usar em 4 passos simples"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        >
          {/* Desktop connecting line */}
          <div
            className="pointer-events-none absolute top-10 hidden h-px bg-border lg:block"
            style={{ left: '12.5%', right: '12.5%' }}
            aria-hidden="true"
          />

          {STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.icon];
            const isLast = i === STEPS.length - 1;

            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center lg:px-4"
              >
                {/* Mobile connecting line (between steps, not after the last) */}
                {!isLast && (
                  <div
                    className="absolute left-1/2 top-20 h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-border md:hidden"
                    aria-hidden="true"
                  />
                )}

                {/* Number Circle */}
                <div className="relative z-10 mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-coral text-white shadow-lg">
                  <span className="text-2xl font-extrabold">{step.number}</span>
                </div>

                {/* Icon */}
                {Icon && (
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-coral-50 text-coral">
                    <Icon className="h-5 w-5" />
                  </div>
                )}

                {/* Text */}
                <h3 className="mb-1.5 text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="max-w-[220px] text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
