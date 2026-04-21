'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: 'Inicio', href: '/' },
    { label: 'Historia', href: '/historia' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Audiología', href: '/audiologia' },
    { label: 'Colecciones', href: '/colecciones' },
    { label: 'Contacto', href: '/contacto' }
  ];

  return (
    <>
      <div
        className={`${
          isHome
            ? 'absolute left-6 right-6 top-4 z-[60] md:left-8 md:right-8 md:top-6'
            : 'sticky top-0 z-[60] border-b border-charcoal/5 bg-[#F2F0EC]/80 px-4 py-3 md:px-12 md:py-4 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-start md:items-center justify-between">
          <Link href="/" className="flex items-start transition-opacity hover:opacity-80 relative z-[70] -ml-1 md:-ml-4" onClick={() => setIsMenuOpen(false)}>
            <motion.div
              key={`logo-${pathname}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: isHome ? 2.2 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/images/logo_transparent.png"
                alt="Óptica Santa Isabel Logo"
                width={320}
                height={160}
                className="h-14 md:h-20 w-auto object-contain opacity-90"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <motion.nav 
            key={`nav-${pathname}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: isHome ? 0.8 : 0.1, ease: 'easeOut' }}
            className="hidden items-center gap-8 text-[13px] font-medium uppercase tracking-[0.14em] text-cyan-deep md:flex"
          >
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors duration-300 text-cyan-deep hover:text-cyan ${pathname === item.href ? 'border-b border-cyan-deep/30' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>

          {/* Mobile Menu Button - Styled like the reference */}
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden mt-1 flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-[#F2F0EC] text-[10px] font-medium tracking-[0.1em] relative z-[70] transition-transform hover:scale-105"
          >
            {isMenuOpen ? "X" : "MENU"}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] flex flex-col justify-center bg-[#F2F0EC] px-8 py-24 md:hidden">
          <nav className="flex flex-col gap-8 text-center text-3xl font-serif text-charcoal">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="transition-colors hover:text-cyan"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
