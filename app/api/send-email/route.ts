import { NextResponse } from 'next/server';
import { render } from '@react-email/render';
import ContactTemplate from '@/app/contact/_template/ContactTemplate';
import { sendMail } from '@/app/lib/send-email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    await sendMail({
      email,
      subject: `FSC Web Contact || ${subject}`,
      text: message,
      html: await render(ContactTemplate({ name, email, subject, message })),
    });

    return NextResponse.json({ status: 1, message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('ERROR', error);
    return NextResponse.json({
      status: -1,
      message: 'Something went wrong, please try again!',
    }, { status: 500 });
  }
}
