import { Analytics } from '@vercel/analytics/react';
import { JetBrains_Mono } from 'next/font/google';

import './globals.css';

// Define a few shared values
const title = 'Patrick Cason';
const description = `I'm a freelance software developer, UI designer, engineering manager, and entrepreneur working remote in Nashville, Tennessee.`;

// Declare the metadata for the site
export const metadata = {
  title,
  description,
  colorScheme: 'dark',
  openGraph: {
    title,
    description,
    siteName: title,
    locale: 'en-US',
    type: 'website',
    url: 'https://patrickcason.com',
    images: [
      {
        url: 'https://patrickcason.com/meta.jpg',
        width: 1200,
        height: 1200,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['https://patrickcason.com/meta.jpg'],
  },
};

// Import the main font
const jetbrains = JetBrains_Mono({ subsets: ['latin'] });

// Define the layout for the site, including the font
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={jetbrains.className}>
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
