import Lado from "./Lado";
import styles from './styles.module.scss'
import { useState } from "react";

export default function Card(){
  const [ turnCard, setTurnCard ]  = useState(false)

  const textA = 'Qual nome do osso do braço que parece com o nome de uma tecnologia de transimissão de audio?'
  const textB = 'Radio é o nome do bixo'


  function handleClick() { 
    setTurnCard(!turnCard); 
  } 

  return(
    <>
    <div className={styles.flipCard} onClick={handleClick}>
      {/* <div className={ cn(turnCard ? styles.flipCardInner : '', styles) } */}
      <div className={`${styles.flipCardInner} ${turnCard ? styles.back : styles.front}`}
      >
        <div className={styles.frontCard}>
          <Lado text={textA} isFront={true} /> 
        </div>
        <div className={styles.backCard}>
          <Lado text={textB} isFront={false} />
        </div>        
      </div>
    </div>
    </>
  )
}