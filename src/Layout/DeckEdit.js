import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import Breadcrumbs from "./Breadcrumbs";

function DeckEdit({ parentUrl }) {
  const { deckId } = useParams();
  const [deck, setDeck] = useState();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const defaultForm = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(defaultForm);
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    readDeck(deckId, signal)
      .then((deck) => {
        setFormData({ name: deck.name, description: deck.description });
        setDeck(deck);
        setBreadcrumbs([
          { title: deck.name, path: "/", active: false },
          { title: "Edit Deck", active: true },
        ]);
      })
      .catch(console.log);
    return () => abortController.abort();
  }, [deckId, setDeck, setBreadcrumbs]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDeck({ ...formData, id: deckId });
    history.push(parentUrl);
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    history.push(parentUrl);
  };

  return (
    <>
      {deck && (
        <div>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <div>Edit Deck</div>
          <form className="createForm" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            ></input>
            <label>Description</label>
            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              value={formData.description}
            ></textarea>
            <div>
              <button type="cancel" onClick={handleCancelClick}>
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default DeckEdit;
