import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
