import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import HomeSub from "./routes/HomeSub";
import Shop from "./routes/Shop";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/home-sub">
          <HomeSub />
        </Route>

        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
