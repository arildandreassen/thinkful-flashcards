import "./DeckCard.css";
import { Link } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";

function DeckCard({ deck }) {
  const { id, name, description } = deck;

  const handleDelete = () => {
    deleteDeck(id);
  };

  return (
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
  );
}

export default DeckCard;
