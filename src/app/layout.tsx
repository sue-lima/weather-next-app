import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Weather App',
  description: 'Weather App using Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <link rel="icon" type="image/png" href="/public/weather-forecast.png"></link>
      <body className={poppins.className}>
        {children}
        <div className="attribution">
          Coded with 💙 by <a href="https://github.com/sue-lima">Sue Lima</a>
        </div>
      </body>
    </html>
  )
}
