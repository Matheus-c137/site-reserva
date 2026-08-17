'use client';

import { motion } from 'framer-motion';
import { MapPin, FileText, Building2, Phone } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  MapPin,
  FileText,
  Building2,
  Phone,
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
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

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-background-alt">
      <div className="container-custom">
        <SectionTitle
          tag="Serviços"
          title="Soluções completas para sua empresa"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                variants={cardVariant}
                className="card flex flex-col gap-4 p-6 sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral-50">
                  {Icon && <Icon className="h-6 w-6 text-coral" />}
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>

                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <div className="pt-2">
                  <WhatsAppButton
                    message={service.waMessage}
                    label="Saiba mais"
                    variant="outline"
                    trackLocation="services"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
