'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EyeRive = dynamic(() => import('./EyeRive').then((m) => m.EyeRive), { ssr: false });

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#F2F0EC]">

      {/* Global Navbar handles top content now */}

      {/* Contenedor principal — ojo centrado, texto solapando desde la izquierda */}
      <div className="relative flex min-h-screen items-center overflow-hidden">
        <motion.div
          className="relative w-full h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          {/* Ojo — Enorme y perfectamente centrado */}
          {/* Tamaño masivo en móvil (w-[220vw]) para que se corte con estilo */}
          <div className="absolute top-[45%] md:top-1/2 left-1/2 w-[220vw] sm:w-[180vw] md:w-[130vw] lg:w-[120vw] max-w-[2000px] -translate-x-1/2 -translate-y-1/2 z-10">
            <EyeRive />
          </div>

          {/* Texto superpuesto izquierda — En móvil abajo (estilo referencia), en desktop centrado superpuesto */}
          <div className="pointer-events-none absolute left-[5%] md:left-[10%] bottom-[12%] md:bottom-auto md:top-1/2 z-20 md:-translate-y-1/2 select-none overflow-hidden">
            <motion.p 
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(4.2rem,16vw,7.5rem)] font-normal md:font-light uppercase leading-[0.8] tracking-[0.02em] text-cyan-deep drop-shadow-sm"
            >
              Óptica
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(4.2rem,16vw,7.5rem)] font-normal md:font-light italic uppercase leading-[0.8] tracking-[0.04em] text-cyan-deep/90 drop-shadow-sm"
            >
              Santa
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(4.2rem,16vw,7.5rem)] font-normal md:font-light uppercase leading-[0.8] tracking-[0.02em] text-cyan-deep drop-shadow-sm"
            >
              Isabel
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 md:bottom-12 left-[5%] md:left-[10%] z-20 text-sm md:text-xl italic uppercase tracking-[0.15em] text-cyan-deep font-semibold"
          >
            ~ Desde 1985 cuidando de tu vista ~
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}