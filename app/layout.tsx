import type { Metadata } from 'next'
import './globals.css'
// Update layout.tsx metadata
export const metadata: Metadata = {
  title: 'MedIoT',
  description: 'Created with Wasim',
  generator: 'Sk wasimuddin',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
