import { Box, Flex, Text } from "@chakra-ui/react";
import { FiArrowRight, FiChevronDown, FiEdit2, FiPlus } from "react-icons/fi";

import { useContext, useEffect, useRef, useState } from "react";
import { CardContext } from "../../contexts/CardContext";
import DropDownItem from "./DropDownItem";
import { Subject } from ".";



interface DropDownProps{
  subjects: Subject[]
}

export default function DropDown({ subjects }:DropDownProps){
  const [ chosenSubject, setChosenSubject ] = useState<Subject>({} as Subject)
  const [ showDropDown, setShowDropDown ] = useState(false)
  const { HandleSetCards, cards } = useContext(CardContext)

  const BoxRef = useRef(null);

  function handleChooseSubject(subject: Subject){
    setShowDropDown(false)
    setChosenSubject(subject)
  }

  // const handleKeyDown = (event: MouseEvent) => {
  //   const box2 = BoxRef.current
    
  //     if (!box2.contains(event.target)) {
  //       setShowDropDown(false)
  //     }        
  // };

  // useEffect(() => {
  //   window.addEventListener('click', e => handleKeyDown(e));

  //   // cleanup this component
  //   return () => {
  //     window.removeEventListener('click', e => handleKeyDown(e));
  //   };
  // }, []);

  useEffect(() => {
      if(chosenSubject.questions ) {
        HandleSetCards(chosenSubject.questions)
      }
  }, [chosenSubject])

  return(
    <>
      <Flex className='DropDown' ref={BoxRef} flexDir='column' gap='10px' position='relative'>
        <Flex         
          pos='relative'
          w='150px' 
          py='5px'
          bg='gray.700' 
          borderRadius='5px' 
          justify='space-between'
          transition='0.2s'
          opacity='0.8'
          onClick={() => setShowDropDown(!showDropDown)}
          _hover={{
            opacity: 1,
            cursor: 'pointer'
          }}
        >
          { chosenSubject.title && 
            <Text ml='20px' color='gray.200'>{chosenSubject.title}</Text>        
          }
          { !chosenSubject.title && 
            <Text ml='20px' color='gray.200'>Tudo</Text>      
          }
          <Flex right='10px' align='center' mr='10px'>
            <Box bg='gray.600' h='20px' w='1px' mr='8px'/>
            <FiChevronDown color='gray'/>
          </Flex>
        </Flex>

        { showDropDown &&
          <Flex 
            minH='200px'
            w='150px' 
            bg='gray.700' 
            position='absolute' 
            top='45px'
            flexDir='column'
            pt='5px'
            pb='5px'
            borderRadius='5px'
          >
          { subjects.map(subject => (            
            <DropDownItem key={subject.id} handleChooseSubject={handleChooseSubject} subject={subject}/>
          ))}
            <Flex 
              justify='center' 
              align='center'
              _hover={{
                bg:'gray.600',
                cursor: 'pointer'
              }}
            >
              <Text py='10px'>
                <FiPlus /> 
              </Text>
            </Flex>               
          </Flex>
        } 

      </Flex>      

      { chosenSubject.subjects &&
        <>
          <FiArrowRight/> 
          <DropDown subjects={chosenSubject.subjects}/>
        </>
      }
      
    </>
  )
}