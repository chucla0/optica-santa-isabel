import Link from 'next/link';
import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Óptica Profesional',
  description: 'Exámenes visuales, tonometría, contactología y taller propio en Zaragoza. Soluciones a medida en lentes graduadas y protección solar.',
};

export default function ServiciosPage() {
  const visualSolutions = [
    {
      título: 'Lentes Monofocales',
      desc: 'Optimización precisa para una única distancia, ya sea para visión de lejos o de cerca.',
      image: '/gallery/img-2.jpg'
    },
    {
      título: 'Lentes Bifocales y Trifocales',
      desc: 'Soluciones clásicas multienfoque para quienes buscan versatilidad en una sola montura.',
      image: '/gallery/img-12.jpg'
    },
    {
      título: 'Progresivas de Alta Gama',
      desc: 'Transición suave entre distancias con campos visuales ultra-anchos y mínima distorsión.',
      image: '/gallery/img-9.jpg'
    },
    {
      título: 'Gafas de Sol y Especiales',
      desc: 'Lentes polarizadas, con espejo y filtros de alta protección para todas las edades.',
      image: '/gallery/img-7.jpg'
    }
  ];

  return (
    <main className="min-h-screen bg-[#F2F0EC] pb-32 overflow-x-hidden">
      {/* Hero de Servicios */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-charcoal">
        <Image 
          src="/gallery/img-6.jpg" 
          alt="Gabinete Óptico" 
          fill 
          className="object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <AnimatedSection direction="up">
            <h1 className="font-serif text-6xl md:text-9xl text-cream tracking-tighter">Servicios</h1>
            <p className="mt-6 text-xl md:text-2xl font-light text-cyan italic">Precisión clínica y excelencia técnica</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight">Cuidado visual <br/> sin compromisos.</h2>
            <p className="text-xl text-charcoal/70 font-light leading-relaxed">
              En Óptica Santa Isabel, cada graduación es un proceso meticuloso. Combinamos la experiencia de nuestro equipo con tecnología de última generación para detectar patologías como el glaucoma o las cataratas a través de pruebas precisas como la tonometría (medida de la tensión ocular).
            </p>
          </div>
          <div className="bg-cyan p-12 h-fit">
            <h3 className="font-serif text-3xl text-charcoal mb-6 underline decoration-charcoal/20 underline-offset-8">Taller Propio</h3>
            <p className="text-lg text-charcoal/80 font-light">
              Disponemos de taller propio de montaje, lo que nos permite un control total sobre la calidad final de tus gafas y realizar reparaciones con la mayor agilidad posible.
            </p>
          </div>
        </div>
      </section>

      {/* Grilla Editorial de Soluciones */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {visualSolutions.map((solucion, idx) => (
          <AnimatedSection 
            key={solucion.título} 
            direction={idx % 2 === 0 ? 'right' : 'left'}
            className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
          >
            <div className="w-full md:w-3/5 aspect-video md:aspect-[16/8] relative overflow-hidden">
              <Image src={solucion.image} alt={solucion.título} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <span className="text-cyan-deep text-sm tracking-[0.4em] uppercase font-bold">Variedad Óptica</span>
              <h3 className="font-serif text-4xl md:text-5xl text-charcoal">{solucion.título}</h3>
              <p className="text-lg text-charcoal/60 font-light italic">{solucion.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </section>

      {/* Franja de Garantía */}
      <section className="mt-32 py-20 bg-charcoal text-center px-6">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">Tranquilidad Absoluta</h2>
          <p className="text-cyan text-xl tracking-widest font-light">2 AÑOS DE GARANTÍA EN TODAS TUS GAFAS</p>
        </AnimatedSection>
      </section>
    </main>
  );
}
