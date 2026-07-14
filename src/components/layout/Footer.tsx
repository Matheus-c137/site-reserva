import { MapPin, Phone, Clock } from 'lucide-react';
import { CONTACT, SOCIAL, NAV_LINKS, WA_MESSAGES, whatsappUrl, SITE_NAME } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-white" role="contentinfo">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="mb-5 inline-flex items-center gap-2" aria-label="Reserva Coworking">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral">
                <span className="text-lg font-bold text-white">R</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Reserva<span className="text-coral">.</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Coworking com imóvel próprio em Fortaleza. Endereço fiscal e comercial com toda a estrutura para sua empresa.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/60 transition-all hover:bg-coral hover:text-white"
                aria-label="Instagram"
              >
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/60 transition-all hover:bg-coral hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/60 transition-all hover:bg-coral hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white/40 uppercase">
              Navegação
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-coral"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white/40 uppercase">
              Serviços
            </h3>
            <ul className="space-y-3">
              <li><a href="#planos" className="text-sm text-white/60 transition-colors hover:text-coral">Endereço Comercial</a></li>
              <li><a href="#planos" className="text-sm text-white/60 transition-colors hover:text-coral">Endereço Fiscal</a></li>
              <li><a href="#salas" className="text-sm text-white/60 transition-colors hover:text-coral">Salas Privativas</a></li>
              <li><a href="#planos" className="text-sm text-white/60 transition-colors hover:text-coral">Telefone Empresarial</a></li>
              <li><a href="#servicos" className="text-sm text-white/60 transition-colors hover:text-coral">Abertura de Empresas</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white/40 uppercase">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <span className="text-sm leading-relaxed text-white/60">
                  {CONTACT.address.street}<br />
                  {CONTACT.address.neighborhood}<br />
                  {CONTACT.address.city} - {CONTACT.address.state}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-coral" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="text-sm text-white/60 transition-colors hover:text-coral">
                  {CONTACT.phone}
                </a>
              </li>
               <li className="flex items-center gap-3">
                 <svg
                   className="h-4 w-4 shrink-0 text-coral fill-current"
                   viewBox="0 0 448 512"
                   xmlns="http://www.w3.org/2000/svg"
                   aria-hidden="true"
                 >
                   <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L32 503l139.7-36.6c32.7 17.7 69.2 27 107.1 27 122.4 0 222-99.6 222-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-83.1 21.8 22.2-81-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                 </svg>
                 <a
                   href={whatsappUrl(WA_MESSAGES.generic)}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm text-white/60 transition-colors hover:text-coral"
                 >
                   WhatsApp
                 </a>
               </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-coral" />
                <span className="text-sm text-white/60">{CONTACT.hours.display}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {currentYear} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/40">
            CNPJ: {CONTACT.cnpj} · Fortaleza, CE
          </p>
        </div>
      </div>
    </footer>
  );
}
