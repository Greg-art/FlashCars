import AnswerSide from "./Sides/AnswerSide";
import QuestionSide from "./Sides/QuestionSide";
import styles from './styles.module.scss'
import { useContext, useState } from "react";
import { CardContext } from "../../contexts/CardContext";

interface CardProps{
  question: string,
  Answer: string,
}

export default function Card( { question, Answer }: CardProps){
  const { isCardTurned } = useContext(CardContext)
  
  return(
    <>
    <div className={styles.flipCard} >
      {/* <div className={ cn(turnCard ? styles.flipCardInner : '', styles) } */}
      <div className={`${styles.flipCardInner} ${isCardTurned ? styles.back : styles.front}`}
      >
        <div className={styles.QuestionSide} >
          <QuestionSide text={question} isFront={true}/> 
        </div>
        <div className={styles.AnswerSide} >
          <AnswerSide text={Answer} isFront={false}/>
        </div>        
      </div>
    </div>
    </>
  )
}