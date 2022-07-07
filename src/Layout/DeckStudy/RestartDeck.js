import React from "react";
import { useHistory } from "react-router-dom";
import "./RestartDeck.css";

const RestartDeck = () => {
  const history = useHistory();

  const handleYes = () => {
    history.go(0);
  };

  const handleNo = () => {
    history.push("/");
  };

  return (
    <div className="restart-card">
      <h5>Restart Cards?</h5>
      <p>
        <br /> Click 'No' to return to the home page
        <br /> Click 'Yes' to start over
      </p>
      <button onClick={handleYes} className="btn btn-primary">
        Yes
      </button>
      <button onClick={handleNo} className="btn btn-secondary">
        No
      </button>
    </div>
  );
};

export default RestartDeck;
