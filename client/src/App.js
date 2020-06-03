import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ApiRecipe from "./ApiRecipe";
import ApiNutrition from "./ApiNutrition";
import Home from "./Home";
import NavBar from "./NavBar";
import ApiSeason from "./ApiSeason";
import ShoppingList from "./ShoppingList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/ShoppingList">
            <ShoppingList />
          </Route>

          <Route path="/season">
            <ApiSeason />
          </Route>

          <Route path="/spring">
            <ApiSeason id="2" />
          </Route>

          <Route path="/summer">
            <ApiSeason id="3" />
          </Route>

          <Route path="/autumn">
            <ApiSeason id="4" />
          </Route>

          <Route path="/winter">
            <ApiSeason id="1" />
          </Route>

          <Route path="/recipes">
            <ApiRecipe className="container bg-light" />
          </Route>

          <Route path="/nutrition">
            <ApiNutrition />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
