import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Reserva Coworking — Endereço Fiscal e Comercial em Fortaleza',
    short_name: 'Reserva Coworking',
    description:
      'Coworking com imóvel próprio em Fortaleza. Endereço fiscal e comercial com Processo Gestor do Corpo de Bombeiros e toda a estrutura para sua empresa.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#D8674B',
    icons: [
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
