# Guía de Configuración y Despliegue

Sigue estos pasos para poner el proyecto en marcha en un entorno local o de producción.

## Desarrollo Local

1. **Instalación**:
   ```bash
   npm install
   ```

2. **Variables`:
   Copia el archivo `.env.example` a `.env` y rellena tus datos SMTP.

3. **Ejecución**:
   ```bash
   npm run dev
   ```

## Despliegue en Vercel

El proyecto está optimizado para Vercel (Next.js):

1. **GitHub**: Sube el código a tu repositorio.
2. **Importación**: Conecta tu repo en el Dashboard de Vercel.
3. **Variables de Entorno**: Asegúrate de añadir todas las variables de `.env` en la pestaña de Settings del proyecto en Vercel.
4. **Build Settings**: Next.js detectará automáticamente la configuración adecuada (`next build`).

## Configuración de Dominio
Una vez desplegado, añade tu dominio personalizado en Vercel. Asegúrate de actualizar los registros DNS (A y CNAME) según las instrucciones de Vercel para que el dominio apunte correctamente al servidor.
