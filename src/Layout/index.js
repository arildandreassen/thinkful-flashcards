import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import DeckList from "./DeckList";
// import NotFound from "./NotFound";
import DeckCreate from "./DeckCreate";
import DeckRouter from "./DeckRouter";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch("//localhost:8080/decks")
      .then((response) => response.json())
      .then((decks) => setDecks(decks));
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckList decks={decks} />
          </Route>
          <Route path="/decks/new">
            <DeckCreate decks={decks} setDecks={setDecks} />
          </Route>
          <Route path="/decks/:deckId">
            <DeckRouter decks={decks} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
