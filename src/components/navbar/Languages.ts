import {
  britainFlag,
  franceFlag,
  nepalFlag,
  spainFlag,
} from '@/assets/images/images';

export const languages = [
  { code: 'en', label: 'English', icon: britainFlag },
  { code: 'es', label: 'Español', icon: spainFlag },
  { code: 'fr', label: 'Français', icon: franceFlag },
  { code: 'np', label: 'Nepali', icon: nepalFlag },
] as const;

export type LanguageCode = (typeof languages)[number]['code'];
