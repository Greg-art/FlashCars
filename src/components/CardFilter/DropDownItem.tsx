import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FiPlus, FiEdit2 } from 'react-icons/fi'
import { Subject } from '.'

interface DropDownItemsProps {
  subject: Subject;
  handleChooseSubject(subject: Subject): void;
}

export default function DropDownItem({ subject, handleChooseSubject}: DropDownItemsProps) {
  return (
      <Flex 
        justify='space-between' 
        align='center'
      >
        <Text 
          py='5px' 
          pl='10px' 
          w='100%'
          _hover={{ bg:'gray.600', cursor: 'pointer' }}
          onClick={() => handleChooseSubject(subject)}
        >
          {subject.title}
        </Text>
        <Flex 
          py='8px'
          px='10px'
          align='center'
          _hover={{ bg:'gray.600', cursor: 'pointer' }}
        >
          <FiEdit2 />
        </Flex>
      </Flex>
 
  )
}