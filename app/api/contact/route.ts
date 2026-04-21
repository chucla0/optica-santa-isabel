import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { nombre, telefono, motivo } = await request.json();

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

    // Configurar el contenido del email
    const mailOptions = {
      from: `"${nombre}" <${process.env.SMTP_USER}>`, // El remitente suele ser el propio servidor para evitar spam
      to: process.env.CONTACT_EMAIL,
      replyTo: process.env.SMTP_USER, // O el email del usuario si lo pides en el form
      subject: `Nueva solicitud de cita: ${motivo}`,
      text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nMotivo: ${motivo}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #008080;">Nueva Solicitud de Cita</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Motivo:</strong> ${motivo}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Este mensaje fue enviado desde el formulario de contacto de Óptica Santa Isabel.</p>
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
