import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../styles/theme'
import { CardContextProvider } from '../contexts/CardContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider theme={theme}>
      <CardContextProvider>
        <Component {...pageProps} />
      </CardContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
