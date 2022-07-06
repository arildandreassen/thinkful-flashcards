import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../utils/api";
import Breadcrumbs from "./Breadcrumbs";
import "./DeckCreate.css";

function CardEdit({ parentUrl }) {
  const defaultForm = {
    front: "",
    back: "",
  };
  const { cardId, deckId } = useParams();
  const [formData, setFormData] = useState(defaultForm);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    readCard(cardId, signal).then((card) => setFormData(card));
    readDeck(deckId, signal).then((deck) => {
      setBreadcrumbs([
        { title: deck.name, path: parentUrl, active: false },
        { title: `Edit Card ${cardId}`, active: true },
      ]);
    });
    return () => abortController.abort();
  }, [cardId, deckId, parentUrl]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateCard(formData);
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
        <div>Edit Card</div>
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

export default CardEdit;
