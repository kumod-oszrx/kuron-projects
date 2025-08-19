import './styles.css'

import React from 'react'

import { Metadata } from 'next'

import {
  inter,
  notoJP,
  notoKR,
  notoSC,
} from '@/fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://kuron-projects.vercel.app'),
  title: {
    default: 'Kuron Project – Centralized CMS & Data Hub',
    template: '%s | Kuron Project', // "%s" = dynamic title page
  },
  description:
    'Kuron Project is a centralized CMS and data hub that manages content, source code, and website data with seamless REST API integration.',
  keywords: [
    'Kuron Project',
    'CMS',
    'Centralized Data Hub',
    'Content Management',
    'REST API',
    'Website Management',
    'Source Code Management',
    'Data Integration',
    'Web Development',
    'Open Source CMS',
    'Headless CMS',
    'Content Delivery',
    'Web Content Management',
    'API-First CMS',
    'Digital Experience Platform',
    'Kuron CMS',
    'Kuron Data Hub',
    'Kuron Project CMS',
    'Kuron Project Data Hub',
    'Kuron Project Content Management',
    'Kuron Project REST API',
    'Kuron Project Web Development',
    'Kuron Project Open Source',
    'Kuron Project Headless CMS',
    'Kuron Project Digital Experience',
    'Kuron Project API-First CMS',
    'Kuron Project Web Content Management',
    'Kuron Project Content Delivery',
    'Kuron',
    'Kuron CMS',
    'Kuron Data Hub',
  ],
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/favicon-96x96.png',
    },
  ],
  authors: [{ name: 'Kuron Team' }],
  creator: 'Kuron Project',
  publisher: 'Kuron Project',
  openGraph: {
    title: 'Kuron Project – Centralized CMS & Data Hub',
    description:
      'Manage all website content, source code, and data in one powerful CMS. Kuron Project connects systems via REST API for seamless integration.',
    url: 'https://kuron-projects.vercel.app',
    siteName: 'Kuron Project',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kuron Project CMS',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kuron Project – Centralized CMS & Data Hub',
    description:
      'A powerful CMS and data hub for managing website content and integrating with REST API.',
    images: ['/twitter-card.jpg'],
    creator: '@kuronproject',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'technology',
  alternates: {
    canonical: 'https://kuron-projects.vercel.app',
    languages: {
      'en-US': 'https://kuron-projects.vercel.app',
      'vi-VN': 'https://kuron-projects.vercel.app',
    },
  },
  applicationName: 'Kuron Project',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

const structuredData = {
  __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kuron Project',
    url: 'https://kuron-projects.vercel.app',
    logo: 'https://kuron-projects.vercel.app/android-icon-192x192.png',
  }),
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      suppressHydrationWarning={true}
      lang="en"
      className={`${inter.variable} ${notoJP.variable} ${notoKR.variable} ${notoSC.variable}`}
    >
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <script type="application/ld+json" dangerouslySetInnerHTML={structuredData} />
      </head>
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  )
}
