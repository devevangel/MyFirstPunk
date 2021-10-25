import React from "react";
import { Switch, Route } from "react-router";

import MainPage from "./pages/mainpage/mainpage.component";
import ComparePage from "./pages/comparepage/comparepage.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/compare" component={ComparePage} />
      </Switch>
    </div>
  );
};

export default App;
