import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ["400", "700"], 
})

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
      <body className={poppins.className}>
        <div className='moving-clouds'></div>
        {children}
      </body>
    </html>
  )
}
