import { Link } from "react-router-dom";

const NotEnoughCards = ({ deck, min, parentUrl }) => {
  const cardCount = deck.cards.length;
  return (
    <div>
      <h5>Not Enough Cards</h5>
      <div>
        You need at least <b>{min}</b> cards to study. There are
        <b> {cardCount}</b> cards in this deck
      </div>
      <Link to={`${parentUrl}/cards/new`}>
        <button className="btn btn-primary">Add Cards</button>
      </Link>
    </div>
  );
};

export default NotEnoughCards;
