import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hobby Lobby',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="https://i.postimg.cc/439mX8nw/Whats-App-Image-2025-03-19-at-12-17-48-PM-removebg-preview.png" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        {children}

        {/* Floating Call Button */}
        <a 
          href="tel:+919284017480" 
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          📞
        </a>
      </body>
    </html>
  )
}
