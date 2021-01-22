import React from "react";
import { Switch, Route } from "react-router";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/KMList/Home";

export default function App() {
  return (
    <div className="container-app">
     
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>

  );
}
