import { AnimatedSection } from '@/components/AnimatedSection';

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#F2F0EC] pt-40 pb-32 px-6 md:px-12">
      <AnimatedSection direction="up" className="max-w-4xl mx-auto space-y-12">
        <h1 className="font-serif text-5xl md:text-7xl text-charcoal tracking-tighter">Política de Privacidad</h1>
        
        <div className="space-y-10 text-charcoal/70 font-light leading-relaxed text-lg pb-20">
          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">Identificación del Responsable del Tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recogidos en Óptica Santa Isabel es:
            </p>
            <ul className="list-none space-y-2 border-l border-cyan pl-6 py-2">
              <li><strong>Titular:</strong> Armando Miralles Guerrero</li>
              <li><strong>DNI:</strong> 25171606S</li>
              <li><strong>Dirección:</strong> Avenida Santa Isabel 117, Zaragoza</li>
              <li><strong>Email:</strong> opticasantaisabel@hotmail.com</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">Finalidad del Tratamiento</h2>
            <p>
              Los datos personales que nos facilite a través de esta web serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar y responder a las solicitudes de cita previa formuladas a través del formulario de contacto.</li>
              <li>Mantener el contacto administrativo, comercial o informativo necesario para la prestación de nuestros servicios.</li>
              <li>Cumplir con las obligaciones legales aplicables a centros sanitarios de óptica y audiología.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">Base Legal para el Tratamiento</h2>
            <p>
              La base legal para el tratamiento de sus datos es el **consentimiento del interesado** al enviar el formulario de contacto, y el cumplimiento de una relación precontractual o contractual en el caso de la gestión de citas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">Plazo de Conservación</h2>
            <p>
              Sus datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos. Como centro sanitario, los datos clínicos se conservarán el tiempo legalmente estipulado por la normativa vigente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">Derechos del Usuario</h2>
            <p>
              Cualquier persona tiene derecho a obtener confirmación sobre si en Óptica Santa Isabel estamos tratando datos personales que les conciernan o no. Las personas interesadas tienen derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Solicitar el acceso a los datos personales relativos al interesado.</li>
              <li>Solicitar su rectificación o supresión.</li>
              <li>Solicitar la limitación de su tratamiento.</li>
              <li>Oponerse al tratamiento.</li>
              <li>Solicitar la portabilidad de los datos.</li>
            </ul>
            <p className="mt-4">
              Podrá ejercer estos derechos enviando una comunicación escrita a la dirección física o electrónica arriba indicada, acompañando copia de su DNI.
            </p>
          </section>
        </div>
      </AnimatedSection>
    </main>
  );
}
