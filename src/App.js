import React from "react";
import Header from "./Components/Layout/Header"
import Auth from "./Components/Pages/Auth";
import Welcome from "./Components/Layout/Welcome"

import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/welcome">
          <Welcome/>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;