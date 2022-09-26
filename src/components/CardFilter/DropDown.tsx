import { Box, Flex, Select, Text } from "@chakra-ui/react";
import styles from './styles.module.scss'
import { FiChevronDown, FiEdit2, FiPlus } from "react-icons/fi";

import fs from 'fs'
import { createRef, useEffect, useRef, useState } from "react";

type Subject ={
  id: number;
  title: string;
  questions: {
      id: number;
      question: string;
      answer: string;
  }[];
}[]

interface DropDownProps{
  subjects: Subject
}

export default function DropDown({ subjects }:DropDownProps){
  const [ chosenSubject, setChosenSubject ] = useState(0)
  const [ showDropDown, setShowDropDown ] = useState(false)

    const BoxRef = useRef(null);

    const handleKeyDown = (event: MouseEvent) => {
      const box2 = BoxRef.current
      
        if (!box2.contains(event.target)) {
          setShowDropDown(false)
        }        
    };
  
    useEffect(() => {
      window.addEventListener('click', e => handleKeyDown(e));
  
      // cleanup this component
      return () => {
        window.removeEventListener('click', e => handleKeyDown(e));
      };
    }, []);

  return(
    <Flex className='DropDown' ref={BoxRef} flexDir='column' gap='10px' >
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
      <Text ml='20px' color='gray.200'>Tudo</Text>
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
            <Flex 
              key={subject.id} 
              justify='space-between' 
              align='center'
              _hover={{
                bg:'gray.600',
                cursor: 'pointer'
              }}
            >
              <Text py='5px' pl='10px' w='100%'>
                {subject.title}
              </Text>
              <Flex 
                py='8px'
                px='10px'
                align='center'
                _hover={{ bg:'gray.500' }}
              >
                <FiEdit2 />
              </Flex>
            </Flex>
          ))}
            <Flex 
              justify='center' 
              align='center'
              _hover={{
                bg:'gray.600',
                cursor: 'pointer'
              }}
            >
              <Text                 
                py='10px' 
              >
                <FiPlus /> 
              </Text>

            </Flex>          
        </Flex>
      } 

    </Flex>
  )
}