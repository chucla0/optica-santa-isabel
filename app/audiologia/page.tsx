import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gabinete de Audiología',
  description: 'Especialistas en audición en Zaragoza. Estudios audiológicos gratuitos, adaptación de audífonos invisibles y protectores a medida.',
};

export default function AudiologiaPage() {
  const audiometryTypes = [
    { label: 'Pérdida Leve', desc: 'Soluciones discretas para quienes empiezan a notar dificultades en ambientes ruidosos.' },
    { label: 'Pérdida Moderada', desc: 'Audífonos potentes con procesamiento de voz avanzado para una claridad total.' },
    { label: 'Pérdida Severa', desc: 'Sistemas de alta fidelidad diseñados para maximizar el resto auditivo.' }
  ];

  return (
    <main className="min-h-screen bg-[#F2F0EC] overflow-x-hidden">
      {/* Header Audiología */}
      <section className="bg-charcoal pt-32 pb-24 px-6 md:px-12 text-center overflow-hidden relative">
        <AnimatedSection direction="up">
          <h1 className="font-serif text-6xl md:text-9xl text-cream tracking-tighter mb-8 leading-none">
            Vuelve a <br /> <span className="text-cyan italic">Escuchar</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-cream/60 font-light">
            Recuperar la audición es recuperar tu conexión con el mundo. Gabinete de audiología integral con tecnología de vanguardia.
          </p>
        </AnimatedSection>
        {/* Decoración sutil */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[150%] h-[200px] bg-cyan/5 blur-[120px] rounded-full" />
      </section>

      {/* Marcas y Especialidades */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[3/4] overflow-hidden grayscale">
            <Image 
              src="/gallery/img-18.jpg" 
              alt="Audiología Profesional" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-cyan-deep tracking-[0.3em] uppercase text-sm font-bold">Tecnología de Vanguardia</span>
              <h2 className="font-serif text-5xl text-charcoal">Solo primeras marcas mundiales.</h2>
              <p className="text-xl text-charcoal/70 font-light leading-relaxed">
                Trabajamos con los líderes de la industria para garantizar una audición natural. Disponemos de sistemas recargables, conectividad con smartphones y procesamiento de IA.
              </p>
            </div>
            
            <div className="grid gap-8">
              {['Oticon - Tecnología BrainHearing™', 'ReSound - Sonido Orgánico', 'Widex - Sonido Natural Puro'].map((brand) => (
                <div key={brand} className="flex h-20 items-center justify-between border-b border-charcoal/10 px-4 group hover:bg-cyan transition-colors duration-500">
                  <span className="font-serif text-2xl text-charcoal">{brand.split(' - ')[0]}</span>
                  <span className="text-xs uppercase tracking-widest text-charcoal/40 group-hover:text-charcoal transition-colors">{brand.split(' - ')[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Pérdida */}
      <section className="bg-charcoal py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl text-cream mb-20 text-center">Soluciones a medida</h2>
          <AnimatedSection direction="up" className="grid md:grid-cols-3 gap-12">
            {audiometryTypes.map((type, idx) => (
              <div 
                key={type.label} 
                className="border border-cream/10 p-12 hover:border-cyan/50 hover:bg-white/[0.02] transition-all duration-700 group"
              >
                <span className="text-cyan font-serif text-6xl opacity-20 group-hover:opacity-100 transition-opacity duration-700">0{idx + 1}</span>
                <h3 className="font-serif text-3xl text-cream mt-4 mb-6">{type.label}</h3>
                <p className="text-cream/60 font-light leading-relaxed italic group-hover:text-cream transition-colors">{type.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Cabinet y Servicios Adicionales */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-cyan p-12 md:p-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8 italic">Nuestro Gabinete Propio</h2>
            <p className="text-lg text-charcoal/80 font-light leading-relaxed">
              Realizamos estudios audiológicos completos sin compromiso. Disponemos de moldes a medida y tapones de protección especializados (natación, sueño, ruido industrial).
            </p>
          </div>
          <ul className="space-y-4 border-l border-charcoal/20 pl-8">
            {['Prueba de audífonos gratuita', 'Reajustes periódicos de por vida', 'Financiación a medida', 'Servicio técnico inmediato'].map(item => (
              <li key={item} className="flex items-center gap-3 text-charcoal font-medium">
                <div className="h-1.5 w-1.5 bg-charcoal rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
