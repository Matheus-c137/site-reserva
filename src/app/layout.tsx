import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from '@/lib/schemas';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#D8674B',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Reserva Coworking — Endereço Fiscal e Comercial em Fortaleza | Imóvel Próprio',
    template: '%s | Reserva Coworking',
  },
  description:
    'Coworking com imóvel próprio no Bairro de Fátima, Fortaleza. Endereço fiscal e comercial com Processo Gestor do Corpo de Bombeiros, Alvará de Funcionamento e toda a estrutura para abertura de empresas. Planos a partir de R$ 49,90/mês.',
  keywords: [
    'Coworking Fortaleza',
    'Coworking Bairro de Fátima',
    'Endereço Fiscal Fortaleza',
    'Endereço Comercial Fortaleza',
    'Sala Comercial Fortaleza',
    'Sala Privativa Fortaleza',
    'Abrir Empresa Fortaleza',
    'Endereço para CNPJ',
    'Coworking Ceará',
    'Endereço Fiscal Ceará',
    'Coworking com Imóvel Próprio',
    'Coworking com Processo Gestor do Corpo de Bombeiros',
    'Coworking Regularizado',
    'Abrir CNPJ Fortaleza',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      'Reserva Coworking — Endereço Fiscal e Comercial em Fortaleza | Imóvel Próprio',
    description:
      'Coworking com imóvel próprio em Fortaleza. Endereço fiscal, comercial, salas privativas e toda a estrutura para sua empresa. Planos a partir de R$ 49,90/mês.',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Reserva Coworking — Endereço Fiscal e Comercial em Fortaleza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reserva Coworking — Endereço Fiscal e Comercial em Fortaleza',
    description:
      'Coworking com imóvel próprio. Endereço fiscal e comercial com Processo Gestor do Corpo de Bombeiros. Planos a partir de R$ 49,90/mês.',
    images: ['/images/og-image.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png' }],
  },
};

// JSON-LD Structured Data
const schemas = [
  getOrganizationSchema(),
  getLocalBusinessSchema(),
  getWebSiteSchema(),
  getFaqSchema(),
  getBreadcrumbSchema(),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* JSON-LD Structured Data */}
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N4ZQSPNR');
        `}} />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N4ZQSPNR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
