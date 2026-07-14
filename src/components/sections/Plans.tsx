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
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2 flex-wrap">
                  <span>{plan.name}</span>
                  {plan.id === 'fiscal-telefone' && (
                    <svg
                      className="h-5 w-5 text-[#25D366] fill-current shrink-0"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L32 503l139.7-36.6c32.7 17.7 69.2 27 107.1 27 122.4 0 222-99.6 222-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-83.1 21.8 22.2-81-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  )}
                </h3>
                {plan.subtitle && (
                  <div className="flex flex-col">
                    <p className="mt-0.5 text-xs text-muted">{plan.subtitle}</p>
                    {plan.subtitle.toLowerCase().includes('inscrição estadual') && (
                      <span className="text-[11px] font-semibold text-coral mt-0.5 leading-none">
                        (Consulte viabilidade)
                      </span>
                    )}
                  </div>
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
              <div className="mb-6">
                <p className="text-sm leading-relaxed text-muted">
                  {plan.description}
                </p>
                {plan.description.toLowerCase().includes('inscrição estadual') && (
                  <p className="text-[11px] font-semibold text-coral mt-1">
                    (Consulte viabilidade)
                  </p>
                )}
              </div>

              {/* Benefits */}
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.benefits.map((benefit) => {
                  const hasIE = benefit.text.toLowerCase().includes('inscrição estadual');
                  return (
                    <li key={benefit.text} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                      <div className="flex flex-col">
                        <span
                          className={`text-sm leading-snug ${
                            benefit.highlight
                              ? 'font-semibold text-coral'
                              : 'text-foreground'
                          }`}
                        >
                          {benefit.text}
                        </span>
                        {hasIE && (
                          <span className="text-[11px] font-semibold text-coral mt-0.5 leading-none">
                            (Consulte viabilidade)
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
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
