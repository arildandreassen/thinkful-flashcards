import { Link } from "react-router-dom";
import "./DeckList.css";

import DeckCard from "./DeckCard";

function DeckList({ decks }) {
  return (
    <>
      <ul>
        <Link to="/decks/new">
          <button type="button" className="btn btn-secondary">
            Create Deck
          </button>
        </Link>
        {decks.map((deck) => {
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

export default DeckList;
