import nodemailer from 'nodemailer';
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? SMTP_SERVER_USERNAME;

const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  email,
  subject,
  text,
  html,
}: {
  email: string;
  subject: string;
  text: string;
  html?: string;
}) {
  if (!CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    throw new Error('Missing contact email sender or recipient configuration');
  }

  try {
    await transporter.verify();
  } catch (error) {
    console.error('SMTP verification failed', error);
    throw error;
  }

  const info = await transporter.sendMail({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: subject,
    text: text,
    html: html ? html : '',
  });

  return info;
}
