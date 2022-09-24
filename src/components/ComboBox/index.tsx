import { Box, Flex, Select, Text } from "@chakra-ui/react";
import styles from './styles.module.scss'
import { FiChevronDown, FiEdit2, FiPlus } from "react-icons/fi";

import subjects from '../../../subjects.json'
import fs from 'fs'
import { useEffect, useState } from "react";

export default function ComboBox(){
  const [ chosenSubject, setChosenSubject ] = useState(0)
  const [ showComboBox, setShowComboBox ] = useState(false)


  return(
    <Flex id='ComboBox' flexDir='column' gap='10px' >
      <Flex         
        pos='relative'
        w='150px' 
        py='5px'
        bg='gray.700' 
        borderRadius='5px' 
        justify='space-between'
        transition='0.2s'
        opacity='0.8'
        onClick={() => setShowComboBox(!showComboBox)}
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

      { showComboBox &&
        <Flex 
          minH='200px'
          w='150px' 
          bg='gray.700' 
          position='absolute' 
          top='50px'
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
              <Text                 
                py='5px' 
                pl='10px'
                w='100%'
              >
                {subject.title}
              </Text>
              <Flex 
                px='10px'
                _hover={{ bg:'gray.500' }}
                h='100%'
                align='center'
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