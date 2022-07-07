import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, readCard, updateCard, createCard } from "../../utils/api";
import Breadcrumbs from "../Breadcrumbs";

function CardAddEdit({ parentUrl, addOrEdit }) {
  const isAdd = addOrEdit === "add" ? true : false;
  const defaultForm = {
    front: "",
    back: "",
  };
  const { cardId, deckId } = useParams();
  const [deck, setDeck] = useState({ name: "", description: "" });
  const [formData, setFormData] = useState(defaultForm);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!isAdd) {
      readCard(cardId).then((card) => setFormData(card));
    }
    readDeck(deckId).then((deck) => {
      const title = isAdd ? `Add Card` : `Edit Card ${cardId}`;
      setDeck(deck);
      setBreadcrumbs([
        { title: deck.name, path: parentUrl, active: false },
        { title: title, active: true },
      ]);
    });
  }, [cardId, deckId, parentUrl, isAdd]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isAdd) {
      await createCard(deckId, formData);
      setFormData(defaultForm);
    } else {
      await updateCard(formData);
      history.push(parentUrl);
    }
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    history.push(parentUrl);
  };

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div>
        <h2>{isAdd ? `${deck.name}: Add Card` : "Edit Card"}</h2>
        <form className="createForm" onSubmit={handleSubmit}>
          <label>Front</label>
          <textarea
            type="text"
            name="front"
            placeholder="Front side of card"
            onChange={handleChange}
            value={formData.front}
            required={true}
          ></textarea>
          <label>Back</label>
          <textarea
            type="text"
            name="back"
            placeholder="Back side of card"
            onChange={handleChange}
            value={formData.back}
            required={true}
          ></textarea>
          <div>
            <button
              type="cancel"
              onClick={handleCancelClick}
              className="btn btn-secondary"
            >
              Done
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardAddEdit;
