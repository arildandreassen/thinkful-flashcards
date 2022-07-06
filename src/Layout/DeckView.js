import { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard, readDeck } from "../utils/api";
import Breadcrumbs from "./Breadcrumbs";

function Deck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState();
  const { url } = useRouteMatch();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    readDeck(deckId, signal).then((deck) => {
      setDeck(deck);
      setBreadcrumbs([{ title: deck.name, active: true }]);
    });
    return () => abortController.abort();
  }, [deckId]);

  const handleDelete = (id) => {
    deleteCard(id);
    history.go(0);
  };

  return (
    <>
      {deck && (
        <div>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
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
                return (
                  <div key={index}>
                    <div>{card.front}</div>
                    <div>{card.back}</div>
                    <div>
                      <Link to={`${url}/cards/${card.id}/edit`}>
                        <button>Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(card.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Deck;
