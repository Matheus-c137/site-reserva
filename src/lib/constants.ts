// ============================================================
// Reserva Coworking — Central Data Constants
// ============================================================

// WhatsApp — update with actual number
export const WHATSAPP_NUMBER = '558530320055';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SITE_URL = 'https://reservacoworking.com.br';
export const SITE_NAME = 'Reserva Coworking';

export const CONTACT = {
  phone: '(85) 3032-0055',
  phoneRaw: '+558530320055',
  email: 'contato@reservacoworking.com.br',
  address: {
    street: 'Rua Monsenhor Otávio de Castro, 435',
    neighborhood: 'Bairro de Fátima',
    city: 'Fortaleza',
    state: 'CE',
    zip: '60050-150',
    full: 'Rua Monsenhor Otávio de Castro, 435 — Bairro de Fátima, Fortaleza - CE, 60050-150',
  },
  hours: {
    weekdays: '08:00 – 18:00',
    saturday: 'Fechado',
    sunday: 'Fechado',
    display: 'Seg a Sex: 08h – 18h',
  },
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3!2d-38.527!3d-3.735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sReserva+Coworking!5e0!3m2!1spt-BR!2sbr!4v1',
  googleMapsLink:
    'https://www.google.com/maps/dir//Rua+Monsenhor+Ot%C3%A1vio+de+Castro,+435+-+Fatima,+Fortaleza+-+CE,+60050-150',
} as const;

export const SOCIAL = {
  facebook: 'https://www.facebook.com/reservacoworking',
  instagram: 'https://www.instagram.com/reservacoworking/',
  linkedin: 'https://br.linkedin.com/company/reservacoworking',
} as const;

export const GOOGLE_REVIEWS = {
  rating: 4.5,
  count: 82,
  url: 'https://www.google.com/search?q=reserva+coworking',
} as const;

// ============================================================
// Navigation
// ============================================================
export const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Salas', href: '#salas' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Localização', href: '#localizacao' },
] as const;

// ============================================================
// WhatsApp Messages (pre-filled)
// ============================================================
export function whatsappUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  generic: 'Olá! Gostaria de mais informações sobre o Reserva Coworking.',
  endereco_comercial:
    'Olá! Gostaria de saber mais sobre o plano de Endereço Comercial.',
  endereco_fiscal:
    'Olá! Gostaria de saber mais sobre o plano de Endereço Fiscal.',
  fiscal_telefone:
    'Olá! Gostaria de saber mais sobre o plano Endereço Fiscal + Telefone Empresarial.',
  fiscal_ie:
    'Olá! Gostaria de consultar as condições do plano com Inscrição Estadual e IPTU exclusivo.',
  salas: 'Olá! Gostaria de solicitar um orçamento para Salas Privativas.',
  telefone:
    'Olá! Gostaria de saber mais sobre o Telefone Empresarial.',
} as const;

// ============================================================
// Services
// ============================================================
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  waMessage: string;
}

export const SERVICES: Service[] = [
  {
    id: 'endereco-comercial',
    icon: 'MapPin',
    title: 'Endereço Comercial',
    description:
      'Utilize um endereço profissional para divulgar sua empresa. Ideal para quem precisa de um ponto de referência confiável para clientes e parceiros.',
    waMessage: WA_MESSAGES.endereco_comercial,
  },
  {
    id: 'endereco-fiscal',
    icon: 'FileText',
    title: 'Endereço Fiscal',
    description:
      'Endereço completo com toda a documentação necessária para abertura e funcionamento da sua empresa. Processo Gestor já regularizado.',
    waMessage: WA_MESSAGES.endereco_fiscal,
  },
  {
    id: 'salas-privativas',
    icon: 'Building2',
    title: 'Salas Privativas',
    description:
      'Espaços privativos e climatizados com toda a infraestrutura que sua empresa precisa. Ambiente profissional com recepção e segurança.',
    waMessage: WA_MESSAGES.salas,
  },
  {
    id: 'telefone-empresarial',
    icon: 'Phone',
    title: 'Telefone Empresarial',
    description:
      'Número de telefone fixo empresarial com ligações ilimitadas. Transmita mais credibilidade e profissionalismo aos seus clientes.',
    waMessage: WA_MESSAGES.telefone,
  },
];

// ============================================================
// Plans
// ============================================================
export interface PlanBenefit {
  text: string;
  highlight?: boolean;
}

export interface Plan {
  id: string;
  name: string;
  subtitle?: string;
  priceAnnual: string | null;
  priceMonthly: string | null;
  description: string;
  benefits: PlanBenefit[];
  hasBadge: boolean;
  isPopular: boolean;
  ctaLabel: string;
  waMessage: string;
}

export const PLANS: Plan[] = [
  {
    id: 'comercial',
    name: 'Endereço Comercial',
    priceAnnual: '49,90',
    priceMonthly: '59,90',
    description: 'Ideal para divulgação de produtos e serviços.',
    benefits: [
      { text: 'Endereço Comercial' },
      { text: 'Recebimento de correspondências' },
      { text: 'Divulgação da empresa' },
      { text: 'Localização estratégica' },
    ],
    hasBadge: false,
    isPopular: false,
    ctaLabel: 'Quero este plano',
    waMessage: WA_MESSAGES.endereco_comercial,
  },
  {
    id: 'fiscal',
    name: 'Endereço Fiscal',
    priceAnnual: '99,90',
    priceMonthly: '119,90',
    description: 'Tudo que você precisa para abrir e manter sua empresa.',
    benefits: [
      { text: 'Coworking com imóvel próprio', highlight: true },
      { text: 'Processo Gestor do Corpo de Bombeiros', highlight: true },
      { text: 'Vigilância Sanitária' },
      { text: 'Alvará de Funcionamento' },
      { text: 'Abertura de Empresas' },
      { text: 'Emissão de Nota Fiscal' },
      { text: 'Inscrição Estadual para algumas atividades*' },
    ],
    hasBadge: true,
    isPopular: true,
    ctaLabel: 'Solicitar Atendimento',
    waMessage: WA_MESSAGES.endereco_fiscal,
  },
  {
    id: 'fiscal-telefone',
    name: 'Fiscal + Telefone',
    subtitle: 'Endereço Fiscal + Telefone Empresarial',
    priceAnnual: '129,90',
    priceMonthly: '149,90',
    description: 'Inclui tudo do Plano Fiscal, com telefone fixo empresarial.',
    benefits: [
      { text: 'Tudo do plano Endereço Fiscal' },
      { text: 'Número de telefone fixo empresarial', highlight: true },
      { text: 'Ligações ilimitadas', highlight: true },
      { text: 'Maior credibilidade para sua empresa' },
    ],
    hasBadge: true,
    isPopular: false,
    ctaLabel: 'Quero profissionalizar minha empresa',
    waMessage: WA_MESSAGES.fiscal_telefone,
  },
  {
    id: 'fiscal-ie',
    name: 'Fiscal + IE + IPTU',
    subtitle: 'Endereço Fiscal + Inscrição Estadual + IPTU Exclusivo',
    priceAnnual: null,
    priceMonthly: null,
    description: 'Solução completa para empresas que necessitam de Inscrição Estadual.',
    benefits: [
      { text: 'Endereço Fiscal completo' },
      { text: 'Emissão de Inscrição Estadual*' },
      { text: 'IPTU exclusivo de sala privativa', highlight: true },
    ],
    hasBadge: false,
    isPopular: false,
    ctaLabel: 'Consultar condições',
    waMessage: WA_MESSAGES.fiscal_ie,
  },
];

// ============================================================
// Differentials
// ============================================================
export interface Differential {
  icon: string;
  title: string;
  description: string;
}

export const DIFFERENTIALS_TOP: Differential[] = [
  {
    icon: 'Building',
    title: 'Imóvel Próprio',
    description:
      'Mais estabilidade e segurança para o seu negócio. Sem risco de mudança de endereço.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Processo Gestor Regularizado',
    description:
      'Processo Gestor do Corpo de Bombeiros já aprovado. Menos burocracia para sua empresa.',
  },
  {
    icon: 'MapPin',
    title: 'Localização Estratégica',
    description:
      'Bairro de Fátima, região central de Fortaleza, com fácil acesso e excelente infraestrutura.',
  },
  {
    icon: 'FileCheck',
    title: 'Estrutura Completa',
    description:
      'Alvará de Funcionamento, Vigilância Sanitária e todas as licenças para abertura de empresas.',
  },
];

export const DIFFERENTIALS_FULL: Differential[] = [
  {
    icon: 'Building',
    title: 'Imóvel Próprio',
    description:
      'Nosso espaço é próprio. Isso garante estabilidade e continuidade para sua empresa, sem riscos de mudanças inesperadas de endereço.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Estrutura Regularizada',
    description:
      'Possuímos Processo Gestor do Corpo de Bombeiros, Alvará de Funcionamento e Vigilância Sanitária. Sua empresa utiliza nossa documentação existente.',
  },
  {
    icon: 'MapPin',
    title: 'Localização Estratégica',
    description:
      'Situados no Bairro de Fátima, região central de Fortaleza com fácil acesso por transporte público e principais vias da cidade.',
  },
  {
    icon: 'Zap',
    title: 'Menos Burocracia',
    description:
      'Em muitos casos, o cliente utiliza o Processo Gestor já existente no imóvel, reduzindo significativamente a burocracia na abertura de empresas.',
  },
  {
    icon: 'Headset',
    title: 'Atendimento Especializado',
    description:
      'Equipe preparada para orientar sobre abertura de empresa, endereço fiscal, inscrição estadual e demais processos empresariais.',
  },
  {
    icon: 'Scale',
    title: 'Segurança Jurídica',
    description:
      'Toda documentação e licenciamento em dia. Sua empresa opera com total segurança e conformidade legal.',
  },
];

// ============================================================
// How It Works
// ============================================================
export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Escolha o plano',
    description: 'Selecione o plano ideal para as necessidades da sua empresa.',
    icon: 'MousePointerClick',
  },
  {
    number: 2,
    title: 'Envie sua documentação',
    description: 'Envie os documentos necessários de forma simples e rápida.',
    icon: 'Upload',
  },
  {
    number: 3,
    title: 'Assine o contrato',
    description: 'Contrato claro e transparente, sem burocracia desnecessária.',
    icon: 'PenLine',
  },
  {
    number: 4,
    title: 'Comece a usar',
    description: 'Utilize seu novo endereço empresarial imediatamente.',
    icon: 'Rocket',
  },
];

// ============================================================
// Testimonials (based on Google reviews)
// ============================================================
export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos Eduardo',
    role: 'Empresário',
    text: 'Excelente coworking! O fato de ser imóvel próprio me deu total segurança para registrar minha empresa. Atendimento impecável e localização perfeita.',
    rating: 5,
  },
  {
    name: 'Ana Beatriz',
    role: 'Contadora',
    text: 'Indico para todos os meus clientes. A estrutura regularizada com Processo Gestor facilita muito a abertura de empresas. Economiza tempo e dinheiro.',
    rating: 5,
  },
  {
    name: 'Roberto Mendes',
    role: 'MEI',
    text: 'Precisava de um endereço fiscal confiável para meu CNPJ. O Reserva Coworking ofereceu tudo que eu precisava com um preço muito justo.',
    rating: 5,
  },
  {
    name: 'Fernanda Lima',
    role: 'Advogada',
    text: 'A sala privativa é excelente. Ambiente climatizado, recepção profissional e internet rápida. Meus clientes sempre elogiam o espaço.',
    rating: 5,
  },
  {
    name: 'Marcos Souza',
    role: 'Diretor Comercial',
    text: 'Migrei minha empresa para o Reserva e foi a melhor decisão. Todo o processo de licenciamento já estava pronto. Muito prático.',
    rating: 4,
  },
  {
    name: 'Juliana Pinto',
    role: 'Empreendedora',
    text: 'Atendimento personalizado e estrutura completa. Me ajudaram com toda a documentação para abertura da minha empresa. Super recomendo!',
    rating: 5,
  },
];

// ============================================================
// FAQ
// ============================================================
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O que é um endereço fiscal?',
    answer:
      'Endereço fiscal é o endereço registrado junto à Receita Federal e demais órgãos governamentais para fins tributários e legais da sua empresa. É o endereço que consta no CNPJ e é utilizado para recebimento de notificações fiscais, emissão de notas e inscrição estadual.',
  },
  {
    question: 'Qual a diferença entre endereço fiscal e endereço comercial?',
    answer:
      'O endereço fiscal é utilizado para registro da empresa junto à Receita Federal, prefeitura e demais órgãos. Já o endereço comercial é utilizado para divulgação da empresa, recebimento de correspondências e como referência para clientes e parceiros. O endereço fiscal exige documentação mais completa do imóvel.',
  },
  {
    question: 'MEI pode utilizar o endereço fiscal do coworking?',
    answer:
      'Sim! O MEI pode utilizar o endereço fiscal do Reserva Coworking para registrar sua empresa. Isso é especialmente útil para quem trabalha em casa e deseja separar o endereço residencial do empresarial, ou para quem precisa de um endereço em Fortaleza.',
  },
  {
    question: 'Como funciona a abertura de empresa no coworking?',
    answer:
      'O processo é simplificado. Nosso imóvel já possui Processo Gestor do Corpo de Bombeiros, Alvará de Funcionamento e Vigilância Sanitária. Em muitos casos, sua empresa utiliza a documentação já existente, reduzindo significativamente a burocracia e o tempo de abertura.',
  },
  {
    question: 'O que é o Processo Gestor do Corpo de Bombeiros?',
    answer:
      'O Processo Gestor é uma certificação emitida pelo Corpo de Bombeiros que atesta que o imóvel possui as condições adequadas de segurança contra incêndio. É um documento obrigatório para diversas atividades empresariais e pode ser um processo demorado. No Reserva Coworking, este processo já está aprovado.',
  },
  {
    question: 'Posso emitir Nota Fiscal usando o endereço do coworking?',
    answer:
      'Sim. Com o plano de Endereço Fiscal, sua empresa pode emitir notas fiscais normalmente, pois o endereço está regularizado com toda a documentação necessária junto à prefeitura e demais órgãos.',
  },
  {
    question: 'É possível obter Inscrição Estadual no coworking?',
    answer:
      'Sim, para algumas atividades é possível obter Inscrição Estadual utilizando o endereço do Reserva Coworking. Consulte nossa equipe para verificar a viabilidade de acordo com o CNAE da sua empresa.',
  },
  {
    question: 'Como funciona o recebimento de correspondências?',
    answer:
      'Recebemos todas as correspondências enviadas para o endereço da sua empresa. Você é notificado assim que uma correspondência chega e pode retirá-la pessoalmente ou combinar a melhor forma de entrega.',
  },
  {
    question: 'As salas privativas incluem qual infraestrutura?',
    answer:
      'Nossas salas privativas incluem ambiente climatizado, internet de alta velocidade, recepção, segurança, limpeza e manutenção. São espaços profissionais prontos para uso imediato, em uma localização estratégica no Bairro de Fátima.',
  },
  {
    question: 'Qual o prazo mínimo de contrato?',
    answer:
      'Oferecemos planos mensais e anuais. O plano anual oferece condições especiais com valores reduzidos. Não há cobrança de taxas de adesão e o contrato é transparente, sem surpresas.',
  },
  {
    question: 'Por que escolher um coworking com imóvel próprio?',
    answer:
      'Um coworking com imóvel próprio oferece mais estabilidade e segurança. Não há risco de mudança de endereço por questões contratuais com proprietários. Sua empresa mantém o mesmo endereço fiscal por tempo indeterminado, evitando custos e transtornos com alterações cadastrais.',
  },
  {
    question: 'Quais documentos preciso para contratar?',
    answer:
      'Para pessoas físicas: RG, CPF e comprovante de residência. Para empresas já constituídas: contrato social, CNPJ e documentos dos sócios. Nossa equipe orienta todo o processo de documentação.',
  },
];

// ============================================================
// Private Rooms Benefits
// ============================================================
export const PRIVATE_ROOM_BENEFITS = [
  'Mais privacidade para reuniões e operações',
  'Ambiente profissional e climatizado',
  'Recepção para atendimento de clientes',
  'Internet de alta velocidade',
  'Segurança e controle de acesso',
  'Excelente localização no Bairro de Fátima',
  'Manutenção e limpeza inclusos',
  'Endereço fiscal com IPTU exclusivo',
] as const;
