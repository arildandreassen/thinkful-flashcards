import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, createCard } from "../../utils/api";
import Breadcrumbs from "../Breadcrumbs";
import CardForm from "./CardForm";

function CardAddEdit({ parentUrl }) {
  const defaultForm = {
    front: "",
    back: "",
  };
  const { cardId, deckId } = useParams();
  const [deck, setDeck] = useState({ name: "", description: "" });
  const [formData, setFormData] = useState(defaultForm);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    readDeck(deckId).then((deck) => {
      const title = `Add Card`;
      setDeck(deck);
      setBreadcrumbs([
        { title: deck.name, path: parentUrl, active: false },
        { title, active: true },
      ]);
    });
  }, [cardId, deckId, parentUrl]);

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
    setFormData(defaultForm);
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    history.push(parentUrl);
  };

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div>
        <h2>{deck.name}: Add Card</h2>
        <CardForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancelClick={handleCancelClick}
          formData={formData}
        />
      </div>
    </div>
  );
}

export default CardAddEdit;
