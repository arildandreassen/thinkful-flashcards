import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listDecks } from "../../utils/api";
import DeckSummary from "./DeckSummary";
import DeckDeleteConFirmation from "../DeckDeleteConfirmation";
import "./DeckList.css";

function DeckList() {
  const [decks, setDecks] = useState();
  const [deleteId, setDeleteId] = useState();
  const [deleteName, setDeleteName] = useState("");

  useEffect(() => {
    listDecks().then((decks) => setDecks(decks));
  }, []);

  return (
    <div>
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
                <DeckSummary
                  deck={deck}
                  setDeleteId={setDeleteId}
                  setDeleteName={setDeleteName}
                />
              </li>
            );
          })}
        <DeckDeleteConFirmation deleteId={deleteId} deleteName={deleteName} />
      </ul>
    </div>
  );
}

export default DeckList;
