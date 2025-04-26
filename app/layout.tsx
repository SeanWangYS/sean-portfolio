import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sean Wang Portfolio',
  description: '5 years of experience in data engineering and data science',
  generator: 'v0.dev',
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
