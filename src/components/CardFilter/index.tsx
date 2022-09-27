import React from "react";
import { FiArrowRight } from "react-icons/fi";
import DropDown from "./DropDown";
import subjects from '../../../subjects.json'
import { Stack, Text } from "@chakra-ui/react";

export type Subject = {
  id: number;
  title: string;
  questions: {
      id: number;
      question: string;
      answer: string;
  }[];
  subjects?: Subject[]
}


export function CardFilter() {

  return(
    <>
        <Stack
          spacing='5'
          direction='row'
          marginLeft='20'
          marginTop='10'
          align='center'
        >
          <Text fontSize='lg' fontWeight='light'>Subject:</Text>

          <DropDown subjects={subjects}/> 
          {/* <FiArrowRight/> 
          <DropDown subjects={subjects}/> */}

        </Stack>      
    </>
  )
}