import { useState, useEffect } from "react";
import RestartDeck from "./RestartDeck";
import NotEnoughCards from "./NotEnoughCards";

function Cards({ cards }) {
  const MIN_CARDS = 3;
  const [enoughCards, setEnoughCards] = useState(false);
  const [deckComplete, setDeckComplete] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [front, setFront] = useState(true);
  const [hasFlipped, setHasFlipped] = useState(false);
  const card = cards[cardIndex];

  useEffect(() => {
    if (cards.length >= MIN_CARDS) {
      setEnoughCards(true);
    }
  }, [cards]);

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
      {!deckComplete && enoughCards && (
        <>
          <div>
            Card {cardIndex + 1} of {cards.length}
          </div>
          <div>{front ? card.front : card.back}</div>
          <button onClick={handleFlip}>Flip</button>
          {hasFlipped && <button onClick={handleNext}>Next</button>}
        </>
      )}
      {deckComplete && enoughCards && <RestartDeck />}
      {!enoughCards && <NotEnoughCards min={MIN_CARDS} cards={cards} />}
    </div>
  );
}

export default Cards;
