import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/KMList/Home";
import { CreateBotModal } from "./components/KMList";
import ReportDisplay from "./components/KMList/ReportDisplay";
import NavBar from "./components/KMList/NavBar";

export default function App() {

  return (
    <Router>
      <div className="container-app">
      <NavBar />
      <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/createBot">
            <CreateBotModal />
          </Route>
          <Route path="/report/:id">
            <ReportDisplay/>
          </Route>
          <Route path="/entity/:name">
            <EntityDisplay/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
