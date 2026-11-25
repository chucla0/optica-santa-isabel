# Óptica Santa Isabel

Web de una óptica de Zaragoza abierta desde 1985. Enseña sus servicios y colecciones y permite pedir cita.

**[Ver la web](https://optica-santa-isabel.vercel.app/)**

![Portada de Óptica Santa Isabel](https://izandelacruz.dev.ar/shots/optica.webp)

## Qué tiene

- Páginas de servicios, colecciones, audiología, historia y contacto.
- Un ojo animado con Rive y animaciones de entrada con Framer Motion.
- Scroll suave con Lenis.
- Formulario de cita y contacto que se envía por correo.

## Tecnologías

Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Rive, Lenis y Nodemailer.

## Un reto

Enviar las citas por correo sin un servicio externo. Una ruta de servidor de Next.js (`app/api/contact`) habla con el correo por SMTP, así que las claves nunca llegan al navegador.

## En local

```sh
npm install
npm run dev
```

La web queda en `http://localhost:3000`. Para probar el formulario, copia `.env.example` como `.env` y pon los datos de un servidor SMTP.

## Documentación

- [Arquitectura](docs/architecture.md)
- [Sistema de correo](docs/email-system.md)
- [Puesta en marcha y despliegue](docs/setup.md)

## Autor

Izan de la Cruz, desarrollador full stack junior.
[Portafolio](https://izandelacruz.dev.ar) · [LinkedIn](https://linkedin.com/in/iizancruzz)
