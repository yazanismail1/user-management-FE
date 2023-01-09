import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'

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
