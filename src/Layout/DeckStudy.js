import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import Breadcrumbs from "./Breadcrumbs";
import Cards from "./Cards";

function DeckStudy() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState();

  useEffect(() => {
    readDeck(deckId).then((deck) => setDeck(deck));
  }, [deckId]);

  return (
    <>
      <Breadcrumbs />
      {deck && (
        <div>
          <h1>Study: {deck.name}</h1>
          <Cards cards={deck.cards} />
        </div>
      )}
    </>
  );
}

export default DeckStudy;
