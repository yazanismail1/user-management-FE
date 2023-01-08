import './globals.css'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
