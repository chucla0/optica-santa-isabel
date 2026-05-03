import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactForm } from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto y Cita Previa',
  description: 'Pide tu cita previa en Óptica Santa Isabel Zaragoza. Ubicación, teléfono, horario y formulario de contacto.',
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#F2F0EC] pb-32 overflow-x-hidden">
      {/* Header Contacto */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-charcoal/5">
        <AnimatedSection direction="up">
          <h1 className="font-serif text-7xl md:text-[8rem] text-charcoal tracking-tighter leading-none mb-6">
            Reserva tu <span className="italic">Cita</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-charcoal/50 italic max-w-2xl">
            Atención personalizada y sin esperas. Dedicamos el tiempo necesario a tu salud visual y auditiva.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Información y Formulario */}
          <div className="space-y-16">
            <AnimatedSection direction="left">
               <div className="grid sm:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <span className="text-cyan-deep tracking-widest text-[10px] font-bold uppercase">Ubicación</span>
                    <p className="text-xl font-serif text-charcoal">Avenida Santa Isabel 117,<br/>50016 Zaragoza</p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-cyan-deep tracking-widest text-[10px] font-bold uppercase">Llamar</span>
                    <p className="text-xl font-serif text-charcoal">976 46 57 97<br/>640 35 84 54</p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-cyan-deep tracking-widest text-[10px] font-bold uppercase">Digital</span>
                    <p className="text-lg font-light text-charcoal/70 italic">opticasantaisabel@hotmail.com</p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-cyan-deep tracking-widest text-[10px] font-bold uppercase">Horario</span>
                    <p className="text-sm font-light text-charcoal/80 uppercase tracking-widest leading-loose">
                      L a V: 9:30 - 13:00 / 17:00 - 20:00<br/>
                      Sábados: 10:00 - 13:00 (solo con cita previa)
                    </p>
                  </div>
               </div>
            </AnimatedSection>

            <AnimatedSection direction="up" className="bg-charcoal p-10 md:p-16 text-cream shadow-2xl relative overflow-hidden">
              <ContactForm />
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            </AnimatedSection>
          </div>

          {/* Mapa Integrado */}
          <AnimatedSection direction="right" className="h-full min-h-[500px] border border-charcoal/5 grayscale hover:grayscale-0 transition-all duration-1000 relative">
            <iframe
              title="Mapa de Óptica Santa Isabel"
              src="https://maps.google.com/maps?q=OpticaSta.%20Isabel%20(Ebro)%20Zaragoza&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </AnimatedSection>

        </div>
      </section>
    </main>
  );
}
