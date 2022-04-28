import { Flex, Stack, Text } from "@chakra-ui/react";

export default function BackBottom () {
  return(
    <Stack direction='row' spacing={5}>
      <Text
        color='green.600'
        fontWeight='bold'
        fontSize='xl'
        _hover={{
          color: 'black.100',
          cursor: 'pointer'
        }}
      >          
        Easy
      </Text> 
        <Text
        color='yellow.600'
        fontWeight='bold'
        fontSize='xl'
        _hover={{
          color: 'black.100',
          cursor: 'pointer'
        }}
      >          
        Medium
      </Text> 
        <Text
        color='red.700'
        fontWeight='bold'
        fontSize='xl'
        _hover={{
          color: 'black.100',
          cursor: 'pointer'
        }}
      >          
        Hard
      </Text> 
    </Stack>
  )
}