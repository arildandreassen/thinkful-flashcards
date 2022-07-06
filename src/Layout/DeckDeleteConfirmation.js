import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { deleteDeck } from "../utils/api";

const DeckDeleteConFirmation = ({ id, handleCancel }) => {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();

  const handleDelete = () => {
    deleteDeck(id);
    url === "/" ? history.go(location.pathname) : history.push("/");
  };

  return (
    <div>
      <p>
        Delete this deck? <br />
        You will not be able to recover it
      </p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={handleCancel}>No</button>
    </div>
  );
};

export default DeckDeleteConFirmation;
