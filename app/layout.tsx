import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
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
        <MantineProvider theme={theme}>
          <SiteHeader />
          
          {children}
          
          <SiteFooter />
        </MantineProvider>
      </body>
    </html>
  );
}
