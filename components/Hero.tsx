'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    let nextBlinkTimeoutId: number | undefined;
    let openEyeTimeoutId: number | undefined;

    const scheduleBlink = () => {
      const delay = 3500 + Math.random() * 5000;

      nextBlinkTimeoutId = window.setTimeout(() => {
        setIsBlinking(true);

        openEyeTimeoutId = window.setTimeout(() => {
          setIsBlinking(false);
          scheduleBlink();
        }, 180);
      }, delay);
    };

    scheduleBlink();

    return () => {
      if (nextBlinkTimeoutId) {
        window.clearTimeout(nextBlinkTimeoutId);
      }
      if (openEyeTimeoutId) {
        window.clearTimeout(openEyeTimeoutId);
      }
    };
  }, []);

  const irisOffset = useMemo(() => {
    const center = { x: 810, y: 310 };
    const deltaX = mousePosition.x - center.x;
    const deltaY = mousePosition.y - center.y;
    const xRange = 320;
    const yRange = 220;
    const maxX = 30;
    const maxY = 16;

    const limitedX = Math.max(-1, Math.min(1, deltaX / xRange)) * maxX;
    const limitedY = Math.max(-1, Math.min(1, deltaY / yRange)) * maxY;

    return {
      x: limitedX,
      y: limitedY
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-10 pt-24 md:px-12"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 1400;
        const y = ((event.clientY - rect.top) / rect.height) * 620;
        setMousePosition({ x, y });
      }}
    >
      <div className="absolute left-6 right-6 top-6 z-30 mx-auto flex max-w-7xl items-start justify-between md:left-12 md:right-12">
        <div className="flex items-start gap-3 text-charcoal">
          <svg viewBox="0 0 120 52" className="h-9 w-auto" aria-hidden="true">
            <path d="M5 26C12 16 27 10 44 10C61 10 76 16 83 26C76 36 61 42 44 42C27 42 12 36 5 26Z" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
            <circle cx="54" cy="26" r="10" fill="#F8F7F5" stroke="#1A1A1A" strokeWidth="2.5" />
            <circle cx="56" cy="26" r="4" fill="#1A1A1A" />
          </svg>
          <div>
            <p className="font-serif text-3xl leading-none tracking-[0.08em]">ÓPTICA</p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-charcoal/75">Santa Isabel</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.11em] text-cyan md:flex">
          {['Equipo', 'Gafas de Sol', 'Monturas', 'Lentes de Contacto', 'Contacto'].map((item) => (
            <a key={item} href="#" className="hover:text-charcoal">
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div className="relative" initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <div className="pointer-events-none absolute left-[10%] top-[47%] z-20 -translate-y-1/2 select-none text-cyan">
            <p className="font-serif text-[clamp(4rem,11vw,10rem)] uppercase leading-[0.86] tracking-[0.03em]">Óptica</p>
            <p className="font-serif text-[clamp(4rem,11vw,10rem)] uppercase leading-[0.86] tracking-[0.03em]">Santa</p>
            <p className="font-serif text-[clamp(4rem,11vw,10rem)] uppercase leading-[0.86] tracking-[0.03em]">Isabel</p>
          </div>

          <svg viewBox="0 0 1400 620" role="img" aria-label="Ilustración de ojo interactivo" className="w-full">
            <title>Ojo interactivo Óptica Santa Isabel</title>
            <path
              d="M220 316C360 186 566 116 790 116C1012 116 1178 188 1268 316"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="36"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M220 316C362 446 566 514 790 514C1014 514 1178 444 1268 316"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="36"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <motion.g
              animate={{
                x: irisOffset.x,
                y: irisOffset.y,
                scaleY: isBlinking ? 0.1 : 1
              }}
              transition={{
                x: { type: 'spring', stiffness: 70, damping: 18, mass: 1.1 },
                y: { type: 'spring', stiffness: 70, damping: 18, mass: 1.1 },
                scaleY: { duration: isBlinking ? 0.1 : 0.2, ease: 'easeInOut' }
              }}
              style={{ transformOrigin: '810px 310px' }}
            >
              <circle cx="810" cy="310" r="140" fill="#F8F7F5" />
              <path
                d="M706 302C706 238 757 188 821 188C883 188 935 236 939 297"
                fill="none"
                stroke="#1A1A1A"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M938 316C935 378 883 432 815 432C751 432 699 388 688 326"
                fill="none"
                stroke="#1A1A1A"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="810" cy="310" r="56" fill="#1A1A1A" />
              <circle cx="835" cy="286" r="10" fill="#F8F7F5" opacity="0.92" />
            </motion.g>
          </svg>

          <p className="absolute bottom-8 left-10 text-lg uppercase tracking-[0.08em] text-cyan/95 md:text-xl">Tu mirada, nuestra obra de arte</p>
        </motion.div>
      </div>
    </section>
  );
}