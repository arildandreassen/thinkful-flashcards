import { useHistory, useLocation } from "react-router-dom";
import { deleteDeck } from "../utils/api";

const DeckDeleteConFirmation = ({ id, handleCancel }) => {
  const history = useHistory();
  const location = useLocation();

  const handleDelete = () => {
    deleteDeck(id);
    history.go(location.pathname);
  };

  return (
    <div>
      <div>Delete this deck?</div>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={handleCancel}>No</button>
    </div>
  );
};

export default DeckDeleteConFirmation;
