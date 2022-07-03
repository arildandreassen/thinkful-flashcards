const NotEnoughCards = ({ cards, min }) => {
  return (
    <div>
      <div>Not Enough Cards</div>
      <div>
        You need at least {min} cards to study. There are {cards.length} cards
        in this deck
      </div>
      <button>Add Cards</button>
    </div>
  );
};

export default NotEnoughCards;
