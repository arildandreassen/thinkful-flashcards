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
      <div>Delete this deck?</div>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={handleCancel}>No</button>
    </div>
  );
};

export default DeckDeleteConFirmation;
