'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { TESTIMONIALS, GOOGLE_REVIEWS } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < count ? 'star-filled' : 'text-border'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding bg-background-alt">
      <div className="container-custom">
        <SectionTitle
          tag="Depoimentos"
          title="O que nossos clientes dizem"
          subtitle={`Avaliação ${GOOGLE_REVIEWS.rating} estrelas no Google com mais de ${GOOGLE_REVIEWS.count} avaliações`}
        />

        {/* Testimonial cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="card flex flex-col gap-4"
            >
              {/* Decorative quote mark */}
              <span
                className="select-none text-5xl font-bold leading-none text-coral-100"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Testimonial text */}
              <p className="-mt-3 flex-1 text-sm leading-relaxed text-muted">
                {testimonial.text}
              </p>

              {/* Author info + stars */}
              <div className="flex items-center justify-between border-t border-border-light pt-4">
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
                <Stars count={testimonial.rating} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google reviews link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <a
            href={GOOGLE_REVIEWS.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-coral transition-colors hover:text-coral-dark"
          >
            Ver todas as avaliações no Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
