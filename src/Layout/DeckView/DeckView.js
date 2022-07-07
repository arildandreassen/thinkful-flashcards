import { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard, readDeck } from "../../utils/api";
import DeckDeleteConFirmation from "../DeckDeleteConfirmation";
import Breadcrumbs from "../Breadcrumbs";
import "./DeckView.css";

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

  const handleCardDelete = (id) => {
    deleteCard(id);
    history.go(0);
  };

  return (
    <>
      {deck && (
        <div>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <h5>{deck.name}</h5>
          <div>{deck.description}</div>
          <div className="buttons">
            <Link to={`${url}/edit`}>
              <button className="btn btn-secondary">Edit</button>
            </Link>
            <Link to={`${url}/study`}>
              <button className="btn btn-primary">Study</button>
            </Link>
            <Link to={`${url}/cards/new`}>
              <button className="btn btn-primary">Add Cards</button>
            </Link>
            <button
              className="btn btn-danger button-margin"
              data-toggle="modal"
              data-target="#deleteConfirmation"
            >
              Delete
            </button>
          </div>
          <div className="card-section">
            <h1>Cards</h1>
            <div>
              {deck.cards.map((card, index) => {
                return (
                  <div key={index} className="card">
                    <div className="card-sides">
                      <div>{card.front}</div>
                      <div>{card.back}</div>
                    </div>
                    <div className="buttons">
                      <Link
                        to={`${url}/cards/${card.id}/edit`}
                        className="button-margin"
                      >
                        <button className="btn btn-secondary">Edit</button>
                      </Link>
                      <button
                        onClick={() => handleCardDelete(card.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <DeckDeleteConFirmation deleteId={deckId} deleteName={deck.name} />
        </div>
      )}
    </>
  );
}

export default Deck;
