import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import SessionProviderComp from '../components/SessionProviderComp'
import AuthContextProvider from './contexts/AuthContext'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className='max-w-7xl mx-auto p-4'>
          <SessionProviderComp>
            <AuthContextProvider>

              <Header />
              {children}
            </AuthContextProvider>
          </SessionProviderComp>
        </main>
      </body>
    </html>
  )
}