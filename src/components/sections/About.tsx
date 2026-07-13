'use client';

import { motion } from 'framer-motion';
import {
  Building,
  ShieldCheck,
  MapPin,
  Zap,
  Headset,
  Scale,
} from 'lucide-react';
import { DIFFERENTIALS_FULL } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';
import Badge from '@/components/shared/Badge';

const ICON_MAP: Record<string, React.ElementType> = {
  Building,
  ShieldCheck,
  MapPin,
  Zap,
  Headset,
  Scale,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

export default function About() {
  return (
    <section id="diferenciais" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <SectionTitle
          tag="Sobre Nós"
          title="Mais estabilidade e segurança para sua empresa"
        />

        {/* Row 1 — Explanatory text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            O Reserva Coworking possui imóvel próprio com toda a documentação
            necessária para funcionamento empresarial. Isso inclui Processo
            Gestor do Corpo de Bombeiros, Alvará de Funcionamento e Vigilância
            Sanitária. Na prática, isso significa menos burocracia: em muitos
            casos, sua empresa utiliza o Processo Gestor já existente no imóvel,
            reduzindo significativamente o tempo e os custos de abertura.
          </p>
        </motion.div>

        {/* Centered Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex justify-center"
        >
          <Badge />
        </motion.div>

        {/* Row 2 — Differentials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {DIFFERENTIALS_FULL.map((diff) => {
            const Icon = ICON_MAP[diff.icon] ?? Building;
            return (
              <motion.div
                key={diff.title}
                variants={cardVariants}
                className="card flex flex-col items-start gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-50 text-coral">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
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
