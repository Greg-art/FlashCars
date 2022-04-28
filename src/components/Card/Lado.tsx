import { Box, Stack, Text } from "@chakra-ui/react";
import BackBottom from "./CardBottom/BackBottom";
import FrontBottom from "./CardBottom/frontBottom";

// https://www.w3schools.com/howto/howto_css_flip_card.asp

interface LadoProps {
  text: string;  
  isFront?: boolean; 
}

export default function Lado( { text, isFront = true }: LadoProps){
  

  return(
    <Box>
      <Stack
        bg='gray.300'
        w='500px'
        h='600px'
        borderRadius='20px'
        p='10'
        justify='space-between'
        align='center'
      >
        <Text
          textAlign='justify'
          lineHeight='200%'
          color='gray.800'
        >{text}</Text>
        <a color='black.500' >

          { isFront && <FrontBottom />}
          { !isFront && <BackBottom />}
          
        </a>
      </Stack> 
      
    </Box>
  )


}