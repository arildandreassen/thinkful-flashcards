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
      <p>
        Restart Cards?
        <br /> Click 'No' to return to the home page
        <br /> Click 'Yes' to start over
      </p>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};

export default RestartDeck;
