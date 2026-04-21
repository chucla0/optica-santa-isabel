# Óptica Santa Isabel — Plataforma Digital Premium

Este repositorio contiene el sitio web oficial de **Óptica Santa Isabel**, Zaragoza. Se ha desarrollado bajo un enfoque editorial de lujo, combinando alta tecnología web con un diseño minimalista y sofisticado.

## Resumen del Proyecto

El objetivo principal de esta plataforma es ofrecer una experiencia de usuario fluida y visualmente impactante, destacando los servicios de salud visual y colecciones de óptica mediante animaciones interactivas y una navegación intuitiva.

- **Diseño**: Minimalista, con paleta de colores curada y tipografía de alta gama.
- **Funcionalidad**: Sistema integrado de cita previa y contacto directo.
- **Experiencia**: Scroll suave coordinado con animaciones de entrada asimétricas.

---

## Stack Tecnológico

El proyecto está construido sobre las herramientas más modernas del ecosistema web:

- **Frontend**: [Next.js 15 (App Router)](https://nextjs.org/) con [TypeScript](https://www.typescriptlang.org/).
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) para una gestión de diseño atómica.
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/) y [Rive](https://rive.app/) para componentes interactivos complejos.
- **Efectos**: [Lenis](https://github.com/darkroomengineering/lenis) para scroll suave editorial.
- **Backend**: Integración nativa con [NodeMailer](https://nodemailer.com/) para envíos SMTP.

---

## Documentación Detallada

Para una comprensión profunda de cómo está construido el proyecto y cómo configurarlo, revisa la carpeta `docs/`:

1.  📂 [**Arquitectura del Sistema**](docs/architecture.md): Estructura de carpetas y patrones de renderizado.
2.  📂 [**Sistema de Email**](docs/email-system.md): Configuración de SMTP y envío de formularios.
3.  📂 [**Setup y Despliegue**](docs/setup.md): Guía paso a paso para desarrollo y producción en Vercel.

---

## Guía Rápida de Inicio

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`.

---

© 2024 Óptica Santa Isabel. Desarrollado con pasión por la excelencia visual.