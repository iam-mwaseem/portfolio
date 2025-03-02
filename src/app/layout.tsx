export const metadata = {
  title: 'Muhammad Waseem',
  description: 'Portfolio',
}

import '@/styles/style.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        {children}
        </body>
    </html>
  )
}
