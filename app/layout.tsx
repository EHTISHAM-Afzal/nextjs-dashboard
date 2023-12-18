import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description:
    'The official Next.js Course Dashboard, built with App Router. By ehtisham afzal',
  metadataBase: new URL('https://proj-dashboard.vercel.app/dashboard'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>{children}</body>
    </html>
  );
}
