import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Lumina Tech',
  description: 'Construction equipment simulation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0 }} suppressHydrationWarning>{children}</body>
    </html>
  );
}
