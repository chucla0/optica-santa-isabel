# Sistema de Contacto y Email

El sitio integra un servicio de "mini-servidor" para gestionar las solicitudes de cita previa sin depender de servicios externos de terceros.

## Funcionamiento
1. **Frontend**: El componente `ContactForm` valida los datos y los envía mediante un `fetch POST` al endpoint `/api/contact`.
2. **Backend**: La ruta de Next.js (`route.ts`) recibe los datos de forma segura en el servidor.
3. **Transporte**: Se utiliza **Nodemailer** configurado con el protocolo **SMTP**.

## Variables de Entorno
Para que el sistema funcione, se requieren las siguientes variables en el servidor (Vercel o local):

- `SMTP_HOST`: Dirección del servidor de correo.
- `SMTP_PORT`: Generalmente 465 (SSL) o 587 (TLS).
- `SMTP_USER`: Tu correo electrónico corporativo.
- `SMTP_PASS`: Contraseña o App Password.
- `CONTACT_EMAIL`: Dirección donde se recibirán las consultas.

## Seguridad
- La lógica SMTP nunca se expone al cliente.
- Se utilizan encabezados `Content-Type: application/json`.
- El manejo de errores está implementado para dar feedback visual al usuario en caso de fallo en el servidor de correo.
