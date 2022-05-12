import BackCard from "./Sides/BackCard";
import FrontCard from "./Sides/FrontCard";
import styles from './styles.module.scss'
import { useContext, useState } from "react";
import { CardContext } from "../../contexts/CardContext";

interface CardProps{
  question: string,
  anwser: string,
}

export default function Card( { question, anwser }: CardProps){
  const { isCardTurned } = useContext(CardContext)
  
  return(
    <>
    <div className={styles.flipCard} >
      {/* <div className={ cn(turnCard ? styles.flipCardInner : '', styles) } */}
      <div className={`${styles.flipCardInner} ${isCardTurned ? styles.back : styles.front}`}
      >
        <div className={styles.frontCard} >
          <FrontCard text={question} isFront={true}/> 
        </div>
        <div className={styles.backCard} >
          <BackCard text={anwser} isFront={false}/>
        </div>        
      </div>
    </div>
    </>
  )
}