import { AnimatedSection } from '@/components/AnimatedSection';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#F2F0EC] pt-40 pb-32 px-6 md:px-12">
      <AnimatedSection direction="up" className="max-w-4xl mx-auto space-y-12">
        <h1 className="font-serif text-5xl md:text-7xl text-charcoal tracking-tighter">Política de Cookies</h1>
        
        <div className="space-y-10 text-charcoal/70 font-light leading-relaxed text-lg pb-20">
          <p>
            En cumplimiento con lo establecido en el artículo 22.2 de la Ley de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI) y en adecuación con la Directiva Europea 2009/136/CE, Óptica Santa Isabel le informa que este sitio web utiliza cookies.
          </p>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">¿Qué son las cookies?</h2>
            <p>
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">Tipos de cookies utilizadas</h2>
            <p><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen.</p>
            <p><strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario.</p>
            <p><strong>Cookies de análisis:</strong> Son aquellas que bien tratadas por nosotros o por terceros (como Google Analytics), nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">Gestión y Desactivación</h2>
            <p>
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome:</strong> Configuración - Mostrar opciones avanzadas - Privacidad - Configuración de contenido.</li>
              <li><strong>Firefox:</strong> Herramientas - Opciones - Privacidad - Historial - Configuración Personalizada.</li>
              <li><strong>Safari:</strong> Preferencias - Seguridad.</li>
              <li><strong>Edge:</strong> Configuración - Ver configuración avanzada - Privacidad y servicios.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-charcoal font-bold uppercase tracking-widest text-xs">Consentimiento</h2>
            <p>
              Al navegar y continuar en nuestro sitio web estará consintiendo el uso de las cookies antes enunciadas, por los plazos señalados y en las condiciones contenidas en la presente Política de Cookies.
            </p>
          </section>
        </div>
      </AnimatedSection>
    </main>
  );
}
