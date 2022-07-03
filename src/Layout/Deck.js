import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

function Deck({ decks }) {
  const { deckId } = useParams();
  const [deck, setDeck] = useState();

  useEffect(() => {
    const deck = decks.find((deck) => deck.id === Number(deckId));
    setDeck(deck);
  }, [decks, deckId]);

  return (
    <>
      <Breadcrumbs active="React Router" />
      {deck && <div>{deck.name}</div>}
    </>
  );
}

export default Deck;
