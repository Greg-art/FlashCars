import { Text } from "@chakra-ui/react";

interface TextButtonProps {
  color: string;
  text: string;
}

export function TextButton( {color, text}: TextButtonProps ){
  return(
    <Text
      color='Black'
      p='10px 20px'
      borderRadius='10px'
      bg={color}
      fontWeight='bold'
      fontSize='xl'
      transition= '.2s'
      _hover={{
        cursor: 'pointer',
        // opacity: '0.8',
        boxShadow: ' inset 5px 5px 20px -2px  rgba(0, 0, 0, 0.3)'
      }}
    >          
      {text}
    </Text> 
  )
}