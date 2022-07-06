import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DeckList.css";
import { DeckList } from "../utils/api";
import DeckCard from "./DeckCard";

function DeckLists() {
  const [decks, setDecks] = useState();

  useEffect(() => {
    DeckList().then((decks) => setDecks(decks));
  }, []);

  return (
    <>
      <ul>
        <Link to="/decks/new">
          <button type="button" className="btn btn-secondary">
            Create Deck
          </button>
        </Link>
        {decks &&
          decks.map((deck) => {
            return (
              <li key={deck.id}>
                <DeckCard deck={deck} />
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default DeckLists;
