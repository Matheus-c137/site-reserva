'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { CONTACT } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';

export default function Location() {
  return (
    <section id="localizacao" className="section-padding bg-background-alt">
      <div className="container-custom">
        <SectionTitle
          tag="Localização"
          title="Fácil acesso no coração de Fortaleza"
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-coral-50 text-coral">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Endereço</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {CONTACT.address.street}
                  <br />
                  {CONTACT.address.neighborhood}, {CONTACT.address.city} -{' '}
                  {CONTACT.address.state}
                  <br />
                  CEP: {CONTACT.address.zip}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-coral-50 text-coral">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Telefone</p>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="mt-1 inline-block text-sm text-muted transition-colors hover:text-coral"
                  data-track="click_phone"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-coral-50 text-coral">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  Horário de Funcionamento
                </p>
                <p className="mt-1 text-sm text-muted">
                  {CONTACT.hours.display}
                </p>
              </div>
            </div>

            {/* Directions button */}
            <a
              href={CONTACT.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-fit"
              data-track="click_location"
            >
              <Navigation className="h-4.5 w-4.5" />
              Como chegar
            </a>
          </motion.div>

          {/* Right — Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <iframe
              src={CONTACT.googleMapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Reserva Coworking no Google Maps"
              className="block w-full"
            />
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-center text-sm text-muted"
        >
          Bairro de Fátima — Região central com fácil acesso por transporte
          público
        </motion.p>
      </div>
    </section>
  );
}
