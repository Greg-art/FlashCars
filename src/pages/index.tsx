
import { Flex,  } from "@chakra-ui/react";
import Card from "../components/Card";
import { useContext, useEffect,  } from "react";
import { CardContext } from "../contexts/CardContext";
import { CardFilter } from "../components/CardFilter";


export default function Home(){
  const { setCards, cards, cardIndex } = useContext(CardContext)

  useEffect(() => {
    console.log(cards)

  }, [cards] )

  // fs.writeFile('./duos.json', JSON.stringify(server, null, 2), 'utf-8', (error) => {
  //   if(error){
  //     console.log(error)
  //     return;
  //   }
  // })
  
  return (
    <>
      <header>
        <CardFilter />
      </header>

      <Flex w='100vw' h='800px' align='center' justify='center'>
        { cards && (
          <Card question={cards[cardIndex].question} anwser={cards[cardIndex].answer}/>
        )}
      </Flex>


    </>
  )
}

