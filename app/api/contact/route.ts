import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { nombre, telefono, motivo } = await request.json();

    // Limpiar el teléfono para el enlace tel: (quitar espacios)
    const telLimpio = telefono.replace(/\s+/g, '');


    // Configurar el transportista (transporter)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const date = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });

    // Configurar el contenido del email
    const mailOptions = {
      from: `"Web Óptica Santa Isabel" <${process.env.SMTP_USER}>`, 
      to: process.env.CONTACT_EMAIL,
      subject: `📞 Nueva solicitud de cita: ${nombre} (${date})`,

      text: `Has recibido una nueva solicitud de cita desde la web.\n\nNombre: ${nombre}\nTeléfono: ${telefono}\nMotivo: ${motivo}\n\nAcción: Debes llamar al cliente para confirmar el horario.`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #F2F0EC;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-top: 5px solid #008080;">
            <h1 style="color: #008080; font-size: 22px; text-align: center; text-transform: uppercase;">Óptica Santa Isabel</h1>
            <p style="text-align: center; color: #666; font-size: 12px;">Nueva Solicitud de Cita</p>
            
            <p style="margin-top: 30px; line-height: 1.5;">Has recibido una nueva solicitud de cita. Por favor, <strong>llama al cliente ahora</strong> para confirmar.</p>
            
            <div style="background-color: #f4f4f4; padding: 20px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Nombre:</strong> ${nombre}</p>
              <p style="margin: 5px 0;"><strong>Teléfono:</strong> <a href="tel:${telLimpio}" style="color: #008080; font-weight: bold;">${telefono}</a></p>
              <p style="margin: 5px 0;"><strong>Motivo:</strong> ${motivo}</p>
            </div>

            <p style="font-size: 11px; color: #999; text-align: center; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">

              Enviado desde opticasantaisabel.com
            </p>
          </div>
        </div>
      `,


    };


    // Enviar el email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email enviado correctamente' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json({ message: 'Error al enviar el email' }, { status: 500 });
  }
}
