'use client';

import { motion } from 'framer-motion';
import { Building, ShieldCheck, MapPin, FileCheck } from 'lucide-react';
import { DIFFERENTIALS_TOP } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Building,
  ShieldCheck,
  MapPin,
  FileCheck,
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Differentials() {
  return (
    <section id="diferenciais-destaque" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          tag="Diferenciais"
          title="Por que escolher o Reserva Coworking"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {DIFFERENTIALS_TOP.map((diff) => {
            const Icon = iconMap[diff.icon];

            return (
              <motion.div
                key={diff.title}
                variants={cardVariant}
                className="card flex flex-col items-start gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral-50">
                  {Icon && <Icon className="h-6 w-6 text-coral" />}
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {diff.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted">
                  {diff.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
