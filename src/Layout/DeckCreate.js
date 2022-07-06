import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import Breadcrumbs from "./Breadcrumbs";
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
    setBreadcrumbs([{ title: "Creat Deck", active: true }]);
  }, [setBreadcrumbs]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createDeck(formData);
    history.push("/");
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div>
        <div>Create Deck</div>
        <form className="createForm" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Deck Name"
            onChange={handleChange}
            value={formData.name}
          ></input>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Brief description of the deck"
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
    </>
  );
}

export default DeckCreate;
