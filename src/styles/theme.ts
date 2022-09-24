import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  colors: {
    black: {
      '100': '#000000',
      '300': '#1D1D1D',
      '400': '#262626',
      '500': '#2C2C2C',
    },
  },
  fonts:{
    heading: 'Open Sans',
    body: 'Open Sans'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
        overflow:'hidden'
      },
      Option: {
        bg: 'black'
      },

    }
  }
})

export default theme