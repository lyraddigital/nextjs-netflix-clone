import localFont from 'next/font/local';
import clsx from 'clsx';

import '@/app/ui/globals.css';

const myFont = localFont({ src: '../public/Netflix Sans Light.otf' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(
        "bg-black text-white text-lg font-medium",
        myFont.className
      )}>{children}</body>
    </html>
  );
}
