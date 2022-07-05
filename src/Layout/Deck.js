import { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api";
import Breadcrumbs from "./Breadcrumbs";

function Deck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState();
  const { url } = useRouteMatch();

  useEffect(() => {
    readDeck(deckId).then((deck) => {
      setDeck(deck);
    });
  }, [deckId]);

  return (
    <>
      <Breadcrumbs active="React Router" />
      {deck && (
        <div>
          <div>{deck.name}</div>
          <div>{deck.description}</div>
          <div>
            <Link to={`${url}/edit`}>
              <button>Edit</button>
            </Link>
            <Link to={`${url}/study`}>
              <button>Study</button>
            </Link>
            <Link to={`${url}/cards/new`}>
              <button>Add Cards</button>
            </Link>
            <button>Delete</button>
          </div>
          <div>
            <h1>Cards</h1>
            <div>
              {deck.cards.map((card, index) => {
                return <div key={index}>{card.front}</div>;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Deck;
