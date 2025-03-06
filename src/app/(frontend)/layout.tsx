import type { Metadata } from 'next'

import { Montserrat } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import { cn } from 'src/utilities/cn'
import React from 'react'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import Header from './_components/Header'
import Footer from './_components/Footer'
import { Toaster } from '@/components/ui/toaster'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(montserrat.variable, openSans.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <title>NexusBerry</title>
        <meta name="description" content="This is NexusBerry home page." />
      </head>
      <body>
        <Toaster />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
