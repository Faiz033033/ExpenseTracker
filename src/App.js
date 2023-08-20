import React from "react";
import Header from "./Layout/Header";
import Auth from "./Pages/Auth/Auth";
import Welcome from "./Pages/Welcome/Welcome";
import { Switch, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
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
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;