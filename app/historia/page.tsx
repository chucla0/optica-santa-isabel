import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nuestra Historia desde 1985',
  description: 'Conoce la trayectoria de Óptica Santa Isabel. Más de 35 años cuidando de la salud visual de los zaragozanos.',
};

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-[#F2F0EC] overflow-x-hidden">
      {/* Narrative Header */}
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <AnimatedSection direction="up">
          <span className="text-cyan-deep tracking-[0.6em] uppercase text-xs font-bold block mb-4">Established 1985</span>
          <h1 className="font-serif text-7xl md:text-[10rem] text-charcoal tracking-tighter leading-[0.8] mb-12">
            Nuestra <br /> <span className="italic">Herencia</span>
          </h1>
        </AnimatedSection>
      </section>

      {/* Main Story */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <AnimatedSection direction="left">
            <p className="text-2xl md:text-3xl font-serif text-charcoal leading-snug">
              En <strong className="italic">Óptica Santa Isabel</strong>, nuestra trayectoria no se mide en años, sino en la confianza de generaciones de vecinos.
            </p>
            <div className="mt-12 space-y-8 text-xl text-charcoal/70 font-light leading-relaxed">
              <p>
                Desde 1985, hemos sido mucho más que un centro óptico; hemos sido testigos de la evolución de nuestro barrio y de la tecnología que nos permite cuidar tu visión y audición.
              </p>
              <p>
                Nuestra filosofía fusiona la <span className="text-charcoal font-medium">tradición</span> del trato cercano y humano con la <span className="text-charcoal font-medium">vanguardia</span> clínica más absoluta. Creemos que la salud no debe estar reñida con la estética, por eso seleccionamos cada pieza de nuestro stock con criterio editorial.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-4 h-64">
            <div className="bg-cyan flex items-center justify-center p-8 text-center">
                <span className="font-serif text-2xl text-charcoal italic">Compromiso Local</span>
            </div>
            <div className="relative overflow-hidden">
                <Image src="/gallery/img-13.jpg" alt="Story Detail" fill className="object-cover grayscale" />
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
            <Image src="/gallery/img-10.jpg" alt="Vintage vibe" fill className="object-cover grayscale" />
            <div className="absolute inset-0 bg-cyan/10 blend-multiply" />
          </div>
          
          <AnimatedSection direction="right" className="bg-charcoal p-12 text-cream">
            <h3 className="font-serif text-3xl mb-6">Valores Fundamentales</h3>
            <ul className="space-y-6">
                {[
                    { title: 'Excelencia Técnica', desc: 'Formación continua y equipos de última generación.' },
                    { title: 'Trato Humano', desc: 'Somos tus vecinos. Tu salud nos importa de verdad.' },
                    { title: 'Garantía Real', desc: 'Dos años de protección en todas nuestras soluciones.' }
                ].map((valor) => (
                    <li key={valor.title} className="space-y-2">
                        <h4 className="text-cyan uppercase tracking-widest text-xs font-bold">{valor.title}</h4>
                        <p className="font-light text-cream/60 italic">{valor.desc}</p>
                    </li>
                ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-32 bg-cyan text-charcoal text-center px-6">
        <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-6xl max-w-4xl mx-auto leading-tight italic">
                &quot;Cuidamos de tu vista con la experiencia de ayer y la innovación de mañana.&quot;
            </h2>
        </AnimatedSection>
      </section>
    </main>
  );
}
