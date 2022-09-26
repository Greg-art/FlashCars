import React from "react";
import { FiArrowRight } from "react-icons/fi";
import DropDown from "./DropDown";
import subjects from '../../../subjects.json'

export function CardFilter() {
  return(
    <>
      <DropDown subjects={subjects}/> <FiArrowRight/> <DropDown subjects={subjects}/>
    </>
  )
}