import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/KMList/Home";
import { CreateBotModal } from "./components/KMList";

export default function App() {
  return (
    <Router>
      <div className="container-app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/createBot">
            <CreateBotModal />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
