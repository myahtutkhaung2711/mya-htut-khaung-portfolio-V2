import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Mya Htut Khaung | Full Stack Web Developer',
  description: 'Full Stack Web Developer specializing in PHP, Laravel, React.js, Node.js, and MySQL. Building responsive and user-friendly web applications.',
  icons: {
    icon: "/images/terminal.svg",
    shortcut: "/images/terminal.svg",
    apple: "/images/terminal.png",
  },
  keywords: ['Full Stack Developer', 'Web Developer', 'PHP', 'Laravel', 'React.js', 'Node.js', 'MySQL', 'Myanmar'],
  authors: [{ name: 'Mya Htut Khaung' }],
  openGraph: {
    title: 'Mya Htut Khaung | Full Stack Web Developer',
    description: 'Full Stack Web Developer specializing in PHP, Laravel, React.js, Node.js, and MySQL.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${roboto.variable} ${robotoMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
