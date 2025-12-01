import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_TC, Pacifico } from "next/font/google"
import "./globals.css"

const _notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const _pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export const metadata: Metadata = {
  title: "涼夏飲品 Cool Summer Drinks ✨ Maid Cafe",
  description: "歡迎光臨主人！一杯清爽，消暑一整天。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body className={`font-sans antialiased ${_notoSansTC.className} ${_pacifico.variable}`}>{children}</body>
    </html>
  )
}
