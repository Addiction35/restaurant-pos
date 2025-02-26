import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CHILL App',
  description: 'Restaurant App POS',
  generator: 'Next.js + Tailwind CSS',
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
