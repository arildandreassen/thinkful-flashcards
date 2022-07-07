import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import DeckList from "./Home/DeckList";
import NotFound from "./NotFound";
import DeckCreate from "./DeckCreate/DeckCreate.js";
import DeckRouter from "./DeckRouter";

function Layout() {
  const [decks, setDecks] = useState([]);

  return (
    <div>
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
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
