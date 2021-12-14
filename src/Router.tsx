import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import HomeSub from "./routes/HomeSub";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home-sub">
          <HomeSub />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
