import React from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";

import GoodsList from "./pages/GoodsList";
import Main from "./pages/Main";
import Header from "../src/components/Header";
import ProductList from "./pages/ProductList";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path={"/category/:product"} component={ProductList} />
        <Route
          exact
          path={"/category/:product/:number"}
          component={ProductList}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
