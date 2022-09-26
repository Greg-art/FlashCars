import { createContext, ReactNode, useEffect, useState } from 'react';

interface CardContextProviderProps {
  children: ReactNode
}

type CardType = {
  id: number;
  question: string;
  answer: string;
}

type CardContextData = {
  HandleTurnCard: () => void;
  isCardTurned: boolean;
  cards: CardType[] | null;
  HandleSetCards: (cards: CardType[]) => void;
  HandleAddCardIndex: () => void;
  cardIndex: number;
}

export const CardContext = createContext({} as CardContextData);

export function CardContextProvider({ children }: CardContextProviderProps){
  const [isCardTurned, setIsCardTurned] = useState(false)
  const [cards, setCards] = useState<CardType[] | null>(null)
  const [cardIndex, setCardIndex] = useState(0)

  function HandleAddCardIndex(){
    setCardIndex(cardIndex + 1)
  }

  function HandleTurnCard(){
    setIsCardTurned(!isCardTurned)
  }  
  
  function HandleSetCards(cards: CardType[]){
    setCards(cards)
    setCardIndex(0)
    setIsCardTurned(false)
  }



  return(
    <CardContext.Provider value={{cardIndex, HandleAddCardIndex, HandleSetCards, cards, HandleTurnCard, isCardTurned}}>
      {children}
    </CardContext.Provider>
  )
}

