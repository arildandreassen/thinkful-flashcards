import "./DeckSummary.css";
import { Link } from "react-router-dom";

function DeckSummary({ deck, setDeleteId, setDeleteName }) {
  const { id, name, description, cards } = deck;

  const handleDelete = () => {
    setDeleteId(id);
    setDeleteName(name);
  };

  return (
    <>
      <div className="card">
        <header>
          <h5>{name}</h5>
          <div className="card-count">{cards.length} cards</div>
        </header>
        <div>{description}</div>
        <div className="buttons">
          <Link to={`/decks/${id}`}>
            <button className="btn btn-secondary">View</button>
          </Link>
          <Link to={`/decks/${id}/study`} className="study-button">
            <button className="btn btn-primary">Study</button>
          </Link>
          <button
            className="btn btn-danger right-button"
            data-toggle="modal"
            data-target="#deleteConfirmation"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default DeckSummary;
