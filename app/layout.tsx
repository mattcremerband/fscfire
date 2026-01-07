import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { GoogleReCaptchaProvider } from './google-recaptcha-provider';
import { theme } from '../theme';
import SiteHeader from '@/components/Structure/SiteHeader/SiteHeader';
import SiteFooter from '@/components/Structure/SiteFooter/SiteFooter';

export const metadata = {
  title: 'FSC - Fitness, Strength and Conditioning',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <GoogleReCaptchaProvider type="v3" reCaptchaKey={process.env.GOOGLE_SITE_KEY}>
          <MantineProvider theme={theme}>
            <Notifications />
            <SiteHeader />

            {children}

            <SiteFooter />
          </MantineProvider>
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}
