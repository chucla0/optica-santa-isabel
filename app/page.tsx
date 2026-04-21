import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Gallery } from '@/components/Gallery';

const services = ['Examen Visual', 'Contactología', 'Óptica Infantil', 'Asesoramiento'];
const brands = ['ZEISS', 'RAY-BAN', 'OAKLEY', 'PRADA', 'TOM FORD', 'PERSOL'];

export default function HomePage() {
  const mainServices = [
    {
      title: 'Óptica Avanzada',
      items: ['Monofocales', 'Bifocales', 'Trifocales', 'Progresivas'],
      description: 'Gafas graduadas con la máxima precisión. Especialistas en protección solar con lentes polarizadas y de espejo para todas las edades.',
      image: '/gallery/img-2.jpg',
      align: 'left'
    },
    {
      title: 'Audiología Profesional',
      items: ['Pérdida leve', 'Moderada', 'Severa'],
      description: 'Cuidado auditivo integral en nuestro gabinete propio. Adaptamos audífonos de última generación para recuperar tu calidad de vida.',
      image: '/gallery/img-18.jpg',
      align: 'right'
    },
    {
      title: 'Contactología Especializada',
      items: ['Blandas', 'Semirrígidas', 'Permeables al gas'],
      description: 'Adaptación precisa de lentillas de todo tipo y filtros terapéuticos avanzados para baja visión. Salud y comodidad para tus ojos.',
      image: '/gallery/img-5.jpg',
      align: 'left'
    }
  ];

  const technicalStats = [
    { label: 'Taller Propio', desc: 'Montaje artesanal y reparaciones' },
    { label: 'Gabinete Clínico', desc: 'Optometría y Audiología' },
    { label: 'Salud Ocular', desc: 'Detección de Glaucoma y Cataratas' },
    { label: 'Garantía', desc: '2 años de protección total' }
  ];

  return (
    <main className="relative bg-[#F2F0EC] overflow-x-hidden">
      <Hero />
      
      {/* Promoción Destacada - Estilo Editorial */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-cream overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image 
                src="/gallery/img-11.jpg" 
                alt="Liquidación" 
                fill 
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-cyan text-7xl md:text-9xl font-serif italic leading-none">-50%</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight">
                LIQUIDACIÓN <br /> 
                <span className="italic text-cyan">TOTAL</span>
              </h2>
              <p className="mt-8 text-xl font-light text-cream/70 max-w-md">
                Todo nuestro stock al 50%. Una oportunidad única por renovación de colecciones. Calidad de primeras marcas a mitad de precio.
              </p>
              <div className="mt-12 bg-cyan/10 border border-cyan/20 p-8">
                <h3 className="font-serif text-2xl text-cyan mb-2 italic">Oferta 2x1</h3>
                <p className="text-lg font-light text-cream/80">
                  Dos gafas graduadas (lejos y/o cerca) por solo <span className="font-medium text-cream underline decoration-cyan underline-offset-4">99€</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Editoriales */}
      <section id="servicios" className="py-32 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-4">
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter text-charcoal">Nuestros Servicios</h2>
            <p className="text-xl text-charcoal/50 font-light italic">Desde 1985 cuidando de tu bienestar visual y auditivo.</p>
          </div>

          <div className="space-y-40">
            {mainServices.map((service, idx) => (
              <AnimatedSection 
                key={service.title} 
                direction={service.align === 'left' ? 'right' : 'left'}
                className={`flex flex-col ${service.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
              >
                <div className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-8">
                  <span className="text-sm tracking-[0.3em] uppercase text-cyan-deep font-semibold">0{idx + 1} / 03</span>
                  <h3 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight">{service.title}</h3>
                  <p className="text-xl text-charcoal/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
                    {service.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-charcoal/80 font-medium">
                        <span className="h-1 w-1 rounded-full bg-cyan" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Asimétrica - Nueva posición */}
      <Gallery />

      {/* Secciones Técnicas y Garantía */}
      <section className="bg-cyan pt-24 pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {technicalStats.map((stat) => (
              <div key={stat.label} className="border-b border-charcoal/10 pb-8 md:border-b-0 md:border-l md:pl-8">
                <h4 className="font-serif text-3xl text-charcoal mb-2">{stat.label}</h4>
                <p className="text-charcoal/60 font-light uppercase tracking-widest text-xs">{stat.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-32 relative overflow-hidden bg-charcoal p-12 md:p-24 text-center">
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-6xl text-cream leading-tight">
                Precisión clínica, <br className="hidden md:block"/> trato de confianza.
              </h2>
              <p className="mt-8 text-cream/60 max-w-2xl mx-auto font-light text-lg">
                Realizamos tonometría (medida de la tensión ocular) y detección de patologías oculares como glaucoma y cataratas. Nuestro taller propio garantiza que cada gafa se ajuste a la perfección a tus necesidades.
              </p>
              <Link href="/contacto" className="mt-12 inline-block border-b border-cyan text-cyan py-2 text-xl tracking-widest hover:text-white hover:border-white transition-colors duration-300">
                RESERVAR CITA
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <Link
        href="/contacto"
        className="fixed bottom-6 right-6 z-50 flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full border border-cyan/20 bg-charcoal text-[9px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-cyan shadow-2xl transition-transform duration-500 hover:scale-105 active:scale-95 group"
        data-cursor="interactive"
      >
        <span className="text-center leading-[1.3] mt-0.5 group-hover:tracking-[0.2em] transition-all">PEDIR<br/>CITA</span>
      </Link>
    </main>
  );
}