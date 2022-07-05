import { Route, Switch, useRouteMatch } from "react-router-dom";
import DeckStudy from "./DeckStudy";
import Deck from "./Deck";
import NotFound from "./NotFound";
import DeckEdit from "./DeckEdit";
import CardCreate from "./CardCreate";

function DeckRouter({ decks }) {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/`}>
        <Deck decks={decks} />
      </Route>
      <Route path={`${path}/study`}>
        <DeckStudy parentUrl={url} />
      </Route>
      <Route path={`${path}/edit`}>
        <DeckEdit decks={decks} parentUrl={url} />
      </Route>
      <Route path={`${path}/cards/new`}>
        <CardCreate decks={decks} parentUrl={url} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default DeckRouter;
