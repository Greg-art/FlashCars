
import { Stack, Box, Text, Flex, Button } from "@chakra-ui/react";
import ComboBox from "../components/ComboBox";
import { FiArrowRight } from "react-icons/fi";
import Card from "../components/Card";

export default function Home(){
  return (
    <>
      <header>
        <Stack
          spacing='5'
          direction='row'
          marginLeft='20'
          marginTop='10'
          align='center'
        >
          <Text fontSize='lg' fontWeight='light'>Subject:</Text>

          <ComboBox /> <FiArrowRight/> <ComboBox />

        </Stack>  
      </header>

      <Flex w='100vw' h='800px' align='center' justify='center'>
        <Card />
      </Flex>


    </>
  )
}

