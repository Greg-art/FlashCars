
import { Stack, Box, Text, Flex, Button } from "@chakra-ui/react";
import ComboBox from "../components/ComboBox";
import { FiArrowRight } from "react-icons/fi";
import Card from "../components/Card";
import { useContext, useEffect } from "react";
import { api } from "../../services/api";
import { CardContext } from "../contexts/CardContext";


export default function Home(){
  const { setCards, cards, cardIndex } = useContext(CardContext)

  useEffect(() =>{
    api.get('cards').then(response => {
      console.log(response.data)
      setCards(response.data)
    });
  },[])
  console.log(JSON.stringify(cards))

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
        { cards && (
          <Card question={cards[cardIndex].front} anwser={cards[cardIndex].back}/>
        )}
      </Flex>


    </>
  )
}

