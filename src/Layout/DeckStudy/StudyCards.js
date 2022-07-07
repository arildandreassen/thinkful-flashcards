import React from "react";
import { useState } from "react";
import RestartDeck from "./RestartDeck";
import "./StudyCards.css";

function StudyCards({ cards }) {
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
        <div className="study-card">
          <h4>
            Card {cardIndex + 1} of {cards.length}
          </h4>
          <div>{front ? card.front : card.back}</div>
          <button onClick={handleFlip} className="btn btn-secondary">
            Flip
          </button>
          {hasFlipped && (
            <button onClick={handleNext} className="btn btn-primary">
              Next
            </button>
          )}
        </div>
      )}
      {deckComplete && <RestartDeck />}
    </div>
  );
}

export default StudyCards;
