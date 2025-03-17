import type React from "react"
import "@/app/globals.css"
import FixedOrderButton from "@/components/fixed-order-button"
import { Montserrat, Playfair_Display } from "next/font/google"

// Load fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata = {
  title: "Lamhan Banh Mi - Vietnamese Restaurant",
  description: "Authentic Vietnamese cuisine in the heart of the city",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans">
          {children}
          <FixedOrderButton />
      </body>
    </html>
  )
}

