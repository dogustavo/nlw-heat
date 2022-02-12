import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'

import { AuthProvider } from 'contexts/auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyles />
      <main>
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  )
}

export default MyApp
