import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import Breadcrumbs from "../Breadcrumbs";
import "./DeckCreate.css";

function DeckCreate() {
  const defaultForm = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(defaultForm);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setBreadcrumbs([{ title: "Create Deck", active: true }]);
  }, [setBreadcrumbs]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const deck = await createDeck(formData);
    history.push(`/decks/${deck.id}`);
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div>
        <h1>Create Deck</h1>
        <form className="createForm" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Deck Name"
            onChange={handleChange}
            value={formData.name}
            required={true}
          ></input>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Brief description of the deck"
            onChange={handleChange}
            value={formData.description}
            required={true}
          ></textarea>
          <div>
            <button
              type="cancel"
              onClick={handleCancelClick}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeckCreate;
