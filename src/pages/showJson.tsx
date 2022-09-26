import { Flex } from "@chakra-ui/react";
import React from "react";
import subjects from '../../subjects.json'

export default function showJson() {

  // const PrettyPrintJson = ({subjects}) => ();

  
  return (
    <Flex flexDir='column' h='100vh' bg='gray.900' overflowY='auto' px='10%'>
      Lista de assuntos, onde cada assunto pode 
        questões dentro, mas também outros assuntos
      
      <div>
        <pre>
          { JSON.stringify(subjects, null, 2) }
        </pre>
      </div>
    </Flex>
  )
}