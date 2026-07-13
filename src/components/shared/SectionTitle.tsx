'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionTitle({
  tag,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 max-w-2xl ${alignClass} ${className}`}
    >
      {tag && (
        <span className="mb-3 inline-block rounded-full bg-coral-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-coral uppercase">
          {tag}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
