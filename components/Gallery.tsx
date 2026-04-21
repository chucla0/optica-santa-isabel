'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: '/gallery/img-18.jpg', size: 'large', label: 'Nuestro Gabinete' },
  { src: '/gallery/img-2.jpg', size: 'small', label: 'Precisión' },
  { src: '/gallery/img-10.jpg', size: 'small', label: 'Herencia' },
  { src: '/gallery/img-6.jpg', size: 'medium', label: 'Taller Propio' },
  { src: '/gallery/img-11.jpg', size: 'medium', label: 'Colecciones' },
  { src: '/gallery/img-3.jpg', size: 'large', label: 'Atención' },
];

export function Gallery() {
  return (
    <section id="galeria" className="w-full bg-[#F2F0EC] py-32 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-cyan-deep tracking-[0.4em] uppercase text-xs font-bold">Atmósfera</span>
            <h2 className="font-serif text-5xl md:text-8xl text-charcoal tracking-tighter leading-none">
              Nuestro <br /> <span className="italic">Espacio</span>
            </h2>
          </div>
          <p className="max-w-xs text-charcoal/50 font-light italic text-lg leading-relaxed">
            Un entorno diseñado para la calma y la precisión clínica. Pasen y vean.
          </p>
        </div>

        {/* Grid Asimétrico Editorial - Ajustado para evitar huecos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden group cursor-crosshair
                ${idx === 0 ? 'md:col-span-7 md:row-span-2' : 
                  idx === 1 ? 'md:col-span-5 md:row-span-1' : 
                  idx === 2 ? 'md:col-span-5 md:row-span-1' :
                  idx === 3 ? 'md:col-span-4 md:row-span-2' :
                  idx === 4 ? 'md:col-span-8 md:row-span-2' :
                  'md:col-span-12 md:row-span-2'}
              `}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-1000 scale-105 group-hover:scale-100 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                <span className="text-cream font-serif text-2xl italic tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  {img.label}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-cream/40 text-[10px] tracking-[0.3em] uppercase hidden group-hover:block transition-all italic">
                   ISABEL · 1985
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
