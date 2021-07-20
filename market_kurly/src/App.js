import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GoodsList from "./pages/GoodsList";
import Main from "./pages/Main";
import Header from "../src/components/Header";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/category" component={GoodsList} />
      </Switch>
    </Router>
  );
};

export default App;
