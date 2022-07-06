import { Route, Switch, useRouteMatch } from "react-router-dom";
import DeckStudy from "./DeckStudy";
import DeckView from "./DeckView";
import NotFound from "./NotFound";
import DeckEdit from "./DeckEdit";
import CardAddEdit from "./CardAddEdit";
// import CardAdd from "./CardAdd";
// import CardEdit from "./CardEdit";

function DeckRouter({ decks }) {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/`}>
        <DeckView decks={decks} />
      </Route>
      <Route path={`${path}/study`}>
        <DeckStudy parentUrl={url} />
      </Route>
      <Route path={`${path}/edit`}>
        <DeckEdit parentUrl={url} />
      </Route>
      <Route path={`${path}/cards/new`}>
        <CardAddEdit parentUrl={url} addOrEdit="add" />
      </Route>
      <Route path={`${path}/cards/:cardId/edit`}>
        <CardAddEdit parentUrl={url} addOrEdit="edit" />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default DeckRouter;
