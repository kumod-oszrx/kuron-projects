// app/fonts.ts
import { Inter, Noto_Sans_JP, Noto_Sans_KR, Noto_Sans_SC } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin', 'latin-ext'], // hỗ trợ tiếng Việt, Âu
  display: 'swap',
  variable: '--font-inter',
})

export const notoJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-jp',
})

export const notoKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-kr',
})

export const notoSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sc',
})
