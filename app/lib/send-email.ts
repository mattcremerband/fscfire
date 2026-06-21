import nodemailer from 'nodemailer';

const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? SMTP_SERVER_USERNAME;

type SmtpEnvironment = Record<string, string | undefined>;

export function buildSmtpTransportOptions(env: SmtpEnvironment) {
  const rejectUnauthorized = env.SMTP_TLS_REJECT_UNAUTHORIZED;

  return {
    host: env.SMTP_SERVER_HOST,
    port: Number(env.SMTP_SERVER_PORT ?? 587),
    secure: env.SMTP_SERVER_SECURE === 'true',
    auth: {
      user: env.SMTP_SERVER_USERNAME,
      pass: env.SMTP_SERVER_PASSWORD,
    },
    ...(rejectUnauthorized
      ? {
          tls: {
            rejectUnauthorized: rejectUnauthorized !== 'false',
          },
        }
      : {}),
  };
}

const transporter = nodemailer.createTransport(buildSmtpTransportOptions(process.env));

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
