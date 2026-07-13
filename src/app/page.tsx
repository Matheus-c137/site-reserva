import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import Differentials from '@/components/sections/Differentials';
import Services from '@/components/sections/Services';
import Plans from '@/components/sections/Plans';
import PrivateRooms from '@/components/sections/PrivateRooms';
import HowItWorks from '@/components/sections/HowItWorks';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import CtaBanner from '@/components/sections/CtaBanner';
import Faq from '@/components/sections/Faq';
import Location from '@/components/sections/Location';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — First impression & primary CTAs */}
      <Hero />

      {/* 2. Social Proof — Google reviews rating bar */}
      <SocialProof />

      {/* 3. Differentials — 4 key differentials cards */}
      <Differentials />

      {/* 4. Services — Endereço Comercial, Fiscal, Salas, Telefone */}
      <Services />

      {/* 5. Plans — Stripe-inspired pricing section */}
      <Plans />

      {/* 6. Private Rooms — Salas Privativas showcase */}
      <PrivateRooms />

      {/* 7. How It Works — 4-step timeline */}
      <HowItWorks />

      {/* 8. About + Full Differentials — Company story & all differentials */}
      <About />

      {/* 9. Testimonials — Client reviews */}
      <Testimonials />

      {/* 10. CTA Banner — Conversion push before FAQ */}
      <CtaBanner />

      {/* 11. FAQ — 12 frequently asked questions */}
      <Faq />

      {/* 12. Location + Contact — Map & address */}
      <Location />
    </>
  );
}
