import { Box, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CardContext } from "../../../contexts/CardContext";
import { TextButton } from "../../TextButton";

// https://www.w3schools.com/howto/howto_css_flip_card.asp

interface LadoProps {
  text: string;  
  isFront?: boolean; 
}

export default function QuestionSide( { text, isFront = true }: LadoProps){
  const { HandleTurnCard } = useContext(CardContext)

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
          fontSize='17px'
          textAlign='justify'
          lineHeight='180%'
          color='gray.800'
        >
          {text}
        </Text>
        <a color='black.500' onClick={HandleTurnCard}>
          <TextButton color='transparent' text='Virar'/>          
        </a>
      </Stack> 
      
    </Box>
  )


}