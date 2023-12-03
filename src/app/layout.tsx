import type { Metadata } from 'next'
import '../css/globals.css'
import Provider from '@/components/provider'

export const metadata: Metadata = {
  title: {
    default: "Welcome",
    template: "%s - Template",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
