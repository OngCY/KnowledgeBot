import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/KMList/Home";
import { CreateBotModal } from "./components/KMList";
import ReportDisplay from "./components/KMList/ReportDisplay";

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
          <Route exact path="/displayReport/:id">
            <ReportDisplay />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
