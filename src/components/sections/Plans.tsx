'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { PLANS } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import Badge from '@/components/shared/Badge';

type BillingPeriod = 'annual' | 'monthly';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Plans() {
  const [billing, setBilling] = useState<BillingPeriod>('annual');

  return (
    <section id="planos" className="section-padding bg-background">
      <div className="container-custom">
        <SectionTitle
          tag="Planos"
          title="Escolha o plano ideal para sua empresa"
        />

        {/* Billing Toggle */}
        <div className="mb-12 flex flex-col items-center gap-3">
          <p className="text-sm text-muted">
            Economize contratando o plano anual.
          </p>
          <div className="plan-switch">
            <button
              type="button"
              className={`plan-switch-option ${billing === 'annual' ? 'active' : ''}`}
              onClick={() => setBilling('annual')}
            >
              Plano Anual
            </button>
            <button
              type="button"
              className={`plan-switch-option ${billing === 'monthly' ? 'active' : ''}`}
              onClick={() => setBilling('monthly')}
            >
              Plano Mensal
            </button>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className={`relative flex flex-col ${
                plan.isPopular ? 'card-elevated' : 'card'
              }`}
            >
              {/* Popular Ribbon */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-coral px-4 py-1 text-xs font-bold tracking-wide text-white uppercase">
                    Mais Contratado
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground">
                  {plan.name}
                </h3>
                {plan.subtitle && (
                  <p className="mt-0.5 text-xs text-muted">{plan.subtitle}</p>
                )}
              </div>

              {/* Badge */}
              {plan.hasBadge && (
                <div className="mb-4">
                  <Badge variant="small" />
                </div>
              )}

              {/* Price */}
              <div className="mb-1 flex items-baseline gap-1">
                {plan.priceAnnual !== null ? (
                  <>
                    <span className="text-sm font-medium text-muted">R$</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${plan.id}-${billing}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl font-extrabold tracking-tight text-foreground"
                      >
                        {billing === 'annual'
                          ? plan.priceAnnual
                          : plan.priceMonthly}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-sm font-medium text-muted">/mês</span>
                  </>
                ) : (
                  <span className="text-4xl font-extrabold tracking-tight text-coral">
                    Consulte
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-muted">
                {plan.description}
              </p>

              {/* Benefits */}
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.benefits.map((benefit) => (
                  <li key={benefit.text} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                    <span
                      className={`text-sm leading-snug ${
                        benefit.highlight
                          ? 'font-semibold text-coral'
                          : 'text-foreground'
                      }`}
                    >
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-auto">
                <WhatsAppButton
                  message={plan.waMessage}
                  label={plan.ctaLabel}
                  variant={plan.isPopular ? 'primary' : 'outline'}
                  className="w-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-sm text-muted">
          *Consulte viabilidade para sua atividade
        </p>
      </div>
    </section>
  );
}
