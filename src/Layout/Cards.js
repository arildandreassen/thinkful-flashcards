import { useState } from "react";
import RestartDeck from "./RestartDeck";

function Cards({ cards }) {
  const [deckComplete, setDeckComplete] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [front, setFront] = useState(true);
  const [hasFlipped, setHasFlipped] = useState(false);
  const card = cards[cardIndex];

  const handleFlip = () => {
    setFront(!front);
    setHasFlipped(true);
  };

  const handleNext = () => {
    const newIndex = cardIndex + 1;
    if (newIndex === cards.length) {
      setDeckComplete(true);
    } else {
      setCardIndex(newIndex);
      setFront(true);
      setHasFlipped(false);
    }
  };

  return (
    <div>
      {!deckComplete && (
        <>
          <div>
            Card {cardIndex + 1} of {cards.length}
          </div>
          <div>{front ? card.front : card.back}</div>
          <button onClick={handleFlip}>Flip</button>
          {hasFlipped && <button onClick={handleNext}>Next</button>}
        </>
      )}
      {deckComplete && <RestartDeck />}
    </div>
  );
}

export default Cards;
