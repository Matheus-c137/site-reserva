'use client';

import { motion } from 'framer-motion';
import { WA_MESSAGES } from '@/lib/constants';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-coral to-coral-dark py-16 md:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Pronto para profissionalizar sua empresa?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Fale com nossa equipe e descubra o plano ideal para o seu negócio.
          </p>
          <WhatsAppButton
            message={WA_MESSAGES.generic}
            label="Falar no WhatsApp"
            size="large"
            className="mt-2 bg-white !text-coral shadow-lg hover:bg-white/90 hover:!text-coral-dark"
            trackLocation="ctabanner"
          />
        </motion.div>
      </div>
    </section>
  );
}
