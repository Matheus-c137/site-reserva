'use client';

import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { GOOGLE_REVIEWS } from '@/lib/constants';

function Stars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
      {hasHalf && (
        <Star className="h-4 w-4 fill-amber-400/50 text-amber-400" />
      )}
    </span>
  );
}

const stats = [
  {
    id: 'rating',
    render: () => (
      <div className="flex items-center gap-2">
        <Stars rating={GOOGLE_REVIEWS.rating} />
        <span className="text-sm font-semibold text-foreground">
          {GOOGLE_REVIEWS.rating}
        </span>
        <span className="text-sm text-muted">Google</span>
      </div>
    ),
  },
  {
    id: 'count',
    render: () => (
      <span className="text-sm text-muted">
        <span className="font-semibold text-foreground">{GOOGLE_REVIEWS.count}+</span>{' '}
        Avaliações
      </span>
    ),
  },
  {
    id: 'location',
    render: () => (
      <div className="flex items-center gap-1.5 text-sm text-muted">
        <MapPin className="h-3.5 w-3.5 text-coral" />
        Bairro de Fátima, Fortaleza
      </div>
    ),
  },
];

export default function SocialProof() {
  return (
    <section className="bg-background-alt py-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="container-custom"
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={stat.id} className="flex items-center gap-4 sm:gap-8 md:gap-12">
              {stat.render()}
              {i < stats.length - 1 && (
                <div className="hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
