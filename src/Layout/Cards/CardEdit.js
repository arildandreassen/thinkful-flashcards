import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api";
import Breadcrumbs from "../Breadcrumbs";
import CardForm from "./CardForm";

function CardAddEdit({ parentUrl }) {
  const defaultForm = {
    front: "",
    back: "",
  };
  const { cardId, deckId } = useParams();

  const [formData, setFormData] = useState(defaultForm);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    readCard(cardId).then((card) => setFormData(card));
    readDeck(deckId).then((deck) => {
      const title = `Edit Card ${cardId}`;

      setBreadcrumbs([
        { title: deck.name, path: parentUrl, active: false },
        { title, active: true },
      ]);
    });
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
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div>
        <h2>Edit Card</h2>
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
