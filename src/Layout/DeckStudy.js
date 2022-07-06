import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import Breadcrumbs from "./Breadcrumbs";
import Cards from "./Cards";
import NotEnoughCards from "./NotEnoughCards";

function DeckStudy({ parentUrl }) {
  const MIN_CARDS = 3;
  const [enoughCards, setEnoughCards] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const { deckId } = useParams();
  const [deck, setDeck] = useState();

  useEffect(() => {
    readDeck(deckId).then((deck) => {
      setDeck(deck);
      if (deck.cards.length >= MIN_CARDS) {
        setEnoughCards(true);
      }
      setBreadcrumbs([
        { title: deck.name, path: parentUrl, active: false },
        { title: "Creat Deck", active: true },
      ]);
    });
  }, [deckId, setBreadcrumbs]);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {deck && enoughCards && (
        <div>
          <h1>Study: {deck.name}</h1>
          <Cards cards={deck.cards} />
        </div>
      )}
      {deck && !enoughCards && (
        <NotEnoughCards min={MIN_CARDS} deck={deck} parentUrl={parentUrl} />
      )}
    </>
  );
}

export default DeckStudy;
