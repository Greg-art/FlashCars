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
  setCards: (cards: CardType[]) => void;
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

  return(
    <CardContext.Provider value={{cardIndex, HandleAddCardIndex, setCards, cards, HandleTurnCard, isCardTurned}}>
      {children}
    </CardContext.Provider>
  )
}

