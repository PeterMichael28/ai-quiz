import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils';
import Providers from '@/Providers/Provider';
import Navbar from '@/components/Navbar';
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ai-Quiz',
  description: 'Created by Michael Peter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (


    <html lang="en">
      <body className={ cn( inter.className, "antialiased min-h-screen pt-16" ) }>
        <Providers>
      <Navbar />
        { children }
        <Toaster />
        </Providers>
      </body>
    </html>
   

  )
}
