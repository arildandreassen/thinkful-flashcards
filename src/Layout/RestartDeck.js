import { useHistory } from "react-router-dom";

const RestartDeck = () => {
  const history = useHistory();

  const handleYes = () => {
    history.go(0);
  };

  const handleNo = () => {
    history.push("/");
  };

  return (
    <div>
      <div>Restart Deck?</div>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};

export default RestartDeck;
