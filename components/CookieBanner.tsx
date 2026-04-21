'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:w-[400px]"
        >
          <div className="bg-charcoal text-cream p-8 shadow-2xl border border-cream/10 relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-cyan rounded-full animate-pulse" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan">Privacidad & Cookies</h4>
              </div>
              <p className="text-sm font-light leading-relaxed text-cream/70">
                Utilizamos cookies propias y de terceros para mejorar su experiencia y analizar el tráfico de navegación.
              </p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={acceptCookies}
                  className="w-full bg-cyan py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal hover:bg-white transition-colors duration-500"
                >
                  ACEPTAR TODAS
                </button>
                <Link 
                  href="/cookies" 
                  className="text-center text-[10px] uppercase tracking-[0.2em] text-cream/40 hover:text-cream transition-colors py-2"
                >
                  Configurar Preferencias
                </Link>
              </div>
            </div>
            {/* Decoración sutil */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
