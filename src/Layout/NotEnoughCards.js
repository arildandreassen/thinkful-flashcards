import { Link } from "react-router-dom";

const NotEnoughCards = ({ deck, min, parentUrl }) => {
  const cardCount = deck.cards.length;
  return (
    <div>
      <div>Not Enough Cards</div>
      <div>
        You need at least {min} cards to study. There are {cardCount} cards in
        this deck
      </div>
      <Link to={`${parentUrl}/cards/new`}>
        <button>Add Cards</button>
      </Link>
    </div>
  );
};

export default NotEnoughCards;
