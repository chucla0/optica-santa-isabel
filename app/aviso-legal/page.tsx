import { AnimatedSection } from '@/components/AnimatedSection';

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-[#F2F0EC] pt-40 pb-32 px-6 md:px-12">
      <AnimatedSection direction="up" className="max-w-4xl mx-auto space-y-12">
        <h1 className="font-serif text-5xl md:text-7xl text-charcoal tracking-tighter">Aviso Legal</h1>
        
        <div className="space-y-10 text-charcoal/70 font-light leading-relaxed text-lg pb-20">
          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">1. INFORMACIÓN GENERAL</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se hace constar que el titular de esta página web es:
            </p>
            <ul className="list-none space-y-2 border-l border-cyan pl-6 py-2">
              <li><strong>Titular:</strong> Armando Miralles Guerrero</li>
              <li><strong>DNI:</strong> 25171606S</li>
              <li><strong>Dirección:</strong> Avenida Santa Isabel 117, 50016 Zaragoza</li>
              <li><strong>Email:</strong> opticasantaisabel@hotmail.com</li>
              <li><strong>Teléfono:</strong> 976 46 57 97</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">2. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
            <p>
              Óptica Santa Isabel es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
            </p>
            <p>
              Cualquier uso no autorizado previamente por Óptica Santa Isabel será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">3. EXCLUSIÓN DE RESPONSABILIDAD</h2>
            <p>
              Óptica Santa Isabel no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">4. MODIFICACIONES</h2>
            <p>
              Óptica Santa Isabel se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">5. ENLACES</h2>
            <p>
              En el caso de que en la web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Óptica Santa Isabel no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
            </p>
          </section>
        </div>
      </AnimatedSection>
    </main>
  );
}
