import { Route, Switch, useRouteMatch } from "react-router-dom";
import DeckStudy from "./DeckStudy";
import Deck from "./Deck";
import NotFound from "./NotFound";

function DeckRouter({ decks }) {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/study`}>
        <DeckStudy decks={decks} />
      </Route>
      <Route path={`${path}/`}>
        <Deck decks={decks} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default DeckRouter;
