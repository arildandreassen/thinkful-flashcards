import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import Breadcrumbs from "./Breadcrumbs";
import "./DeckCreate.css";

function CardAdd({ parentUrl }) {
  const defaultForm = {
    front: "",
    back: "",
  };
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ name: "" });
  const [formData, setFormData] = useState(defaultForm);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then((deck) => {
      setDeck(deck);
      setBreadcrumbs([
        { title: deck.name, path: "/", active: false },
        { title: "Creat Deck", active: true },
      ]);
    });
  }, [deckId]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createCard(deckId, formData);
    history.push(parentUrl);
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    history.push(parentUrl);
  };

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div>
        <div>{deck.name}:</div>
        <div>Add Card</div>
        <form className="createForm" onSubmit={handleSubmit}>
          <label>Front</label>
          <textarea
            type="text"
            name="front"
            placeholder="Front side of card"
            onChange={handleChange}
            value={formData.front}
          ></textarea>
          <label>Back</label>
          <textarea
            type="text"
            name="back"
            placeholder="Back side of card"
            onChange={handleChange}
            value={formData.back}
          ></textarea>
          <div>
            <button type="cancel" onClick={handleCancelClick}>
              Done
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CardAdd;
