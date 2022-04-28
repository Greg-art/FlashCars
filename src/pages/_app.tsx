import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/300.css'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
