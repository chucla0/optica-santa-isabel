'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const sections = [
    {
      title: 'Explorar',
      links: [
        { label: 'Inicio', href: '/' },
        { label: 'Historia', href: '/historia' },
        { label: 'Servicios', href: '/servicios' },
        { label: 'Audiología', href: '/audiologia' },
        { label: 'Colecciones', href: '/colecciones' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Aviso Legal', href: '/aviso-legal' },
        { label: 'Privacidad', href: '/privacidad' },
        { label: 'Cookies', href: '/cookies' }
      ]
    }
  ];

  return (
    <footer className="bg-charcoal text-cream pt-24 pb-12 px-6 md:px-12 border-t border-cream/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 pb-20 border-b border-cream/10">
          
          {/* Logo y Eslogan */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block opacity-90 hover:opacity-100 transition-opacity">
              <Image 
                src="/images/logo_transparent.png" 
                alt="Óptica Santa Isabel" 
                width={200} 
                height={80} 
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-cream/50 font-light text-lg max-w-sm leading-relaxed">
              Desde 1985 cuidando de tu visión y audición con la excelencia técnica y el trato humano que nos define.
            </p>
          </div>

          {/* Enlaces */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-cream/60 hover:text-cyan transition-colors duration-300 font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-cream/40 tracking-widest uppercase font-medium">
            © {currentYear} OPTICASTA. ISABEL (EBRO) · ZARAGOZA
          </p>
          <div className="flex gap-8">
             <span className="text-[10px] text-cream/20 uppercase tracking-[0.4em]">Est. 1985</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
