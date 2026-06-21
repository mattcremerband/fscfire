import { buildSmtpTransportOptions } from './send-email';

describe('buildSmtpTransportOptions', () => {
  it('builds configurable SMTP connection options from environment variables', () => {
    const options = buildSmtpTransportOptions({
      SMTP_SERVER_HOST: 'smtp.example.com',
      SMTP_SERVER_PORT: '465',
      SMTP_SERVER_SECURE: 'true',
      SMTP_SERVER_USERNAME: 'user@example.com',
      SMTP_SERVER_PASSWORD: 'password',
      SMTP_TLS_REJECT_UNAUTHORIZED: 'false',
    });

    expect(options).toEqual({
      host: 'smtp.example.com',
      port: 465,
      secure: true,
      auth: {
        user: 'user@example.com',
        pass: 'password',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  });
});
