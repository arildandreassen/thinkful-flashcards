import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createCard } from "../utils/api";
import Breadcrumbs from "./Breadcrumbs";
import "./DeckCreate.css";

function CardCreate({ parentUrl }) {
  const defaultForm = {
    front: "",
    back: "",
  };
  const { deckId } = useParams();

  const [formData, setFormData] = useState(defaultForm);
  const history = useHistory();

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
      <Breadcrumbs active="Create Deck" />
      <div>
        <div>Create Card</div>
        <form className="createForm" onSubmit={handleSubmit}>
          <label>Front</label>
          <textarea
            type="text"
            name="front"
            placeholder="Front side of card"
            onChange={handleChange}
            value={formData.name}
          ></textarea>
          <label>Back</label>
          <textarea
            type="text"
            name="back"
            placeholder="Back side of card"
            onChange={handleChange}
            value={formData.description}
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

export default CardCreate;
