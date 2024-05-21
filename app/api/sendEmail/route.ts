import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { userId, email, betaCode } = await request.json();

  if (!userId || !email || !betaCode) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Usa el servicio que prefieras, puede ser 'smtp.example.com'
    auth: {
      user: process.env.EMAIL_USER, // Configura estas variables en tu .env
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // Usamos el correo del formulario
    subject: 'Registro en BETA GAMES',
    text: `Hola ${userId},\n\nGracias por registrarte en el programa BETA para el juego ${betaCode}.\n\n¡Esperamos que disfrutes la experiencia!\n\nSaludos,\nEl equipo de BetaGames`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
