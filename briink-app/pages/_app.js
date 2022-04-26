import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function BriinkApp ({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default BriinkApp
