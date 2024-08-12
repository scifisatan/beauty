import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<head>
        <title>Nail Hub & Hair Academy</title>
        <meta name="description" content="Nail Hub & Hair Academy" />
        <meta property="og:title" content="Nail Hub & Hair Academy" />
        <meta property="og:description" content="Nail Hub & Hair Academy" />
        <meta property="og:image" content="hero.webp" />
        {/* <meta property="og:url" content="" /> */}
        <meta name="twitter:card" content="hero.webp" />
        <meta name="twitter:title" content="Nail Hub & Hair Academy" />
        <meta name="twitter:description" content="Nail Hub & Hair Academy" />
        {/* <meta name="twitter:image" content="URL_TO_IMAGE" /> */}

      </head>
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
