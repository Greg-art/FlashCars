
import { Stack, Box, Text, Flex, Button } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import Card from "../components/Card";
import { useContext, useEffect } from "react";
import { api } from "../services/api";
import { CardContext } from "../contexts/CardContext";
import { CardFilter } from "../components/CardFilter";


export default function Home(){
  const { setCards, cards, cardIndex } = useContext(CardContext)



  // fs.writeFile('./duos.json', JSON.stringify(server, null, 2), 'utf-8', (error) => {
  //   if(error){
  //     console.log(error)
  //     return;
  //   }
  // })

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

          <CardFilter />

        </Stack>  
      </header>

      <Flex w='100vw' h='800px' align='center' justify='center'>
        { cards && (
          <Card question={cards[cardIndex].front} anwser={cards[cardIndex].back}/>
        )}
      </Flex>


    </>
  )
}

