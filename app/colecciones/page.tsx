import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colecciones Exclusive & Lujo',
  description: 'Descubre nuestra selección de monturas exclusivas: Ray-Ban, Prada, Oakley, Tom Ford y más en Zaragoza.',
};

const marcas = [
  { name: 'Ray-Ban', style: 'Iconic Design' },
  { name: 'Zeiss', style: 'Expert Optics' },
  { name: 'Oakley', style: 'Sport Performance' },
  { name: 'Persol', style: 'Italian Craft' },
  { name: 'Tom Ford', style: 'Modern Luxury' },
  { name: 'Prada', style: 'High Fashion' },
  { name: 'Silhouette', style: 'Minimalist' },
  { name: 'Carolina Herrera', style: 'Elegant Style' }
];

export default function ColeccionesPage() {
  return (
    <main className="min-h-screen bg-[#F2F0EC] overflow-x-hidden">
      {/* Editorial Header */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-charcoal/5">
        <AnimatedSection direction="left">
          <h1 className="font-serif text-7xl md:text-9xl text-charcoal tracking-tighter leading-none mb-6">
            Colecciones
          </h1>
          <p className="text-xl md:text-2xl font-light text-charcoal/50 italic max-w-2xl">
            Seleccionamos cada montura como una pieza de diseño única. Estética y salud visual en perfecta armonía.
          </p>
        </AnimatedSection>
      </section>

      {/* Promociones Destacadas */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-charcoal/10">
          <div className="bg-charcoal p-12 md:p-20 text-cream flex flex-col justify-center gap-8">
            <span className="text-cyan text-sm tracking-[0.4em] uppercase font-bold">Oportunidad Limitada</span>
            <h2 className="font-serif text-5xl md:text-6xl">Liquidación <br /> Total <span className="text-cyan italic">-50%</span></h2>
            <p className="text-cream/50 font-light text-lg">
              Renovamos nuestro stock. Todas las colecciones actuales a mitad de precio hasta fin de existencias.
            </p>
          </div>
          <div className="bg-cyan p-12 md:p-20 text-charcoal flex flex-col justify-center gap-8">
            <span className="text-charcoal/40 text-sm tracking-[0.4em] uppercase font-bold">Promoción 2x1</span>
            <h2 className="font-serif text-5xl md:text-6xl italic">99€</h2>
            <p className="text-charcoal/70 font-light text-lg">
              Dos gafas graduadas (lejos y/o cerca) con cristales incluidos por solo 99€. La calidad de siempre, por partida doble.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Marcas Editorial */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 italic">Firmas Internacionales</h2>
          <div className="w-20 h-1 bg-cyan" />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-px bg-charcoal/5">
          {marcas.map((marca) => (
            <AnimatedSection key={marca.name} direction="up" className="group">
              <div className="aspect-square bg-white flex flex-col items-center justify-center p-8 transition-all duration-700 group-hover:bg-cyan">
                {/* Logo Simulado con Tipografía */}
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <span className={`text-2xl md:text-3xl text-charcoal group-hover:scale-110 transition-transform duration-700
                    ${marca.name === 'Ray-Ban' ? 'font-sans font-black tracking-tighter' : 
                      marca.name === 'Prada' ? 'font-serif font-light tracking-[0.2em] uppercase' :
                      marca.name === 'Zeiss' ? 'font-sans font-medium tracking-normal' :
                      marca.name === 'Oakley' ? 'font-sans font-extrabold tracking-widest italic uppercase' :
                      marca.name === 'Persol' ? 'font-serif italic font-bold tracking-tight' :
                      marca.name === 'Tom Ford' ? 'font-sans font-bold tracking-[0.1em] uppercase' :
                      'font-serif tracking-widest uppercase'
                    }
                  `}>
                    {marca.name}
                  </span>
                  <div className="mt-4 h-[1px] w-0 group-hover:w-8 bg-charcoal transition-all duration-700" />
                  <p className="mt-2 text-[9px] uppercase tracking-[0.4em] text-charcoal/20 group-hover:text-charcoal/60 transition-colors">
                    {marca.style}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Lookbook Teaser */}
      <section className="h-[80vh] relative overflow-hidden bg-charcoal">
        <Image 
          src="/gallery/img-11.jpg" 
          alt="Style Collections" 
          fill 
          className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2s]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6 px-6">
                <h2 className="font-serif text-5xl md:text-8xl text-cream tracking-tighter">Encuentra tu estilo.</h2>
                <button className="border border-cream/20 hover:bg-cream hover:text-charcoal text-cream px-12 py-4 transition-all duration-500 uppercase tracking-widest text-sm backdrop-blur-sm">
                    EXPLORAR CATÁLOGO
                </button>
            </div>
        </div>
      </section>
    </main>
  );
}
