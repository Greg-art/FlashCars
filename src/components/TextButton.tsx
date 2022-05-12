import { Text } from "@chakra-ui/react";

interface TextButtonProps {
  color: string;
  text: string;
}

export function TextButton( {color, text}: TextButtonProps ){
  return(
    <Text
      color={color}
      fontWeight='bold'
      fontSize='xl'
      _hover={{
        color: 'black.100',
        cursor: 'pointer'
      }}
    >          
      {text}
    </Text> 
  )
}