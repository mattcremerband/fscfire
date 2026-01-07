'use client';

import type { ComponentProps } from 'react';
import { GoogleReCaptchaProvider as _GoogleReCaptchaProvider } from '@google-recaptcha/react';

export type ReCaptchaProviderProps = ComponentProps<typeof _GoogleReCaptchaProvider>;

export const GoogleReCaptchaProvider = (props: any) => <_GoogleReCaptchaProvider {...props} />;
