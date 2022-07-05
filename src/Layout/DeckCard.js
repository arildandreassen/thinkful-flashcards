import { useState } from "react";
import "./DeckCard.css";
import { Link } from "react-router-dom";
import DeckDeleteConFirmation from "./DeckDeleteConfirmation";

function DeckCard({ deck }) {
  const { id, name, description } = deck;
  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = () => {
    setShowDelete(true);
  };

  const handleCancel = () => {
    setShowDelete(false);
  };

  return (
    <>
      <div className="card">
        <div>{name}</div>
        <div>{description}</div>
        <div>
          <Link to={`/decks/${id}`}>
            <button>View</button>
          </Link>
          <Link to={`/decks/${id}/study`}>
            <button>Study</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {showDelete && (
        <DeckDeleteConFirmation id={id} handleCancel={handleCancel} />
      )}
    </>
  );
}

export default DeckCard;
