import type { Metadata } from 'next';
import { Playfair_Display, Jost } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { DevServiceWorkerReset } from '@/components/DevServiceWorkerReset';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import './globals.css';

const jost = Jost({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://opticasantaisabel.com'),
  title: {
    default: 'Óptica Santa Isabel | Optometría y Audiología en Zaragoza',
    template: '%s | Óptica Santa Isabel'
  },
  description:
    'Especialistas en salud visual y auditiva en Santa Isabel, Zaragoza. Gafas graduadas, lentes de contacto, audífonos de última generación y taller propio desde 1985.',
  keywords: [
    'óptica zaragoza', 'audiología santa isabel', 'gafas graduadas', 
    'lentes de contacto', 'audífonos', 'examen visual', 'óptica santa isabel',
    'progresivas zaragoza', 'revisión vista santa isabel', 'taller óptico',
    'contactología especializada', 'lentillas blandas', 'lentillas semirrígidas',
    'gafas de sol polarizadas', 'gafas de sol espejo', 'gafas todas las edades',
    'audífonos pérdida auditiva', 'oticon zaragoza', 'resound zaragoza', 'widex zaragoza',
    'detección cataratas', 'detección glaucoma', 'medida tensión ocular',
    'tonometría', 'filtros baja visión', 'gafas 2x1 zaragoza', 'liquidación gafas 50%',
    'óptico optometrista zaragoza', 'audiólogo certificado', 'gafas garantía 2 años'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Óptica Santa Isabel | Tu mirada, nuestra obra de arte',
    description: 'Excelencia en servicios ópticos y audiológicos en Zaragoza. Tecnología de vanguardia y trato humano.',
    url: 'https://opticasantaisabel.com',
    siteName: 'Óptica Santa Isabel',
    images: [
      {
        url: '/images/sobre-nosotros.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior de Óptica Santa Isabel Zaragoza',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Óptica Santa Isabel',
    description: 'Salud visual y auditiva de alta gama en Zaragoza.',
    images: ['/images/sobre-nosotros.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo_transparent.png',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Optician',
  '@id': 'https://opticasantaisabel.com/#organization',
  name: 'OpticaSta. Isabel (Ebro)',
  image: 'https://opticasantaisabel.com/images/sobre-nosotros.jpg',
  url: 'https://opticasantaisabel.com',
  telephone: '+34 976 46 57 97',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenida Santa Isabel 117',
    addressLocality: 'Zaragoza',
    postalCode: '50016',
    addressRegion: 'Aragón',
    addressCountry: 'ES'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.6667,
    longitude: -0.8333
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:30',
      closes: '13:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '17:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '13:00'
    }
  ],
  priceRange: '€€',
  areaServed: {
    '@type': 'City',
    name: 'Zaragoza'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Óptica y Audiología',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Examen Visual Completo'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Adaptación de Audífonos'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contactología Especializada'
        }
      }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${jost.variable} ${playfair.variable} bg-cream font-sans text-charcoal antialiased overflow-x-hidden`}>
        <Script id="json-ld-local-business" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(localBusinessJsonLd)}
        </Script>
        <DevServiceWorkerReset />
        <Navbar />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}