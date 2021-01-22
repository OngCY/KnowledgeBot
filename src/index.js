import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import App from "./App";
import allReducer from './store/reducers/'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const store = createStore(allReducer, applyMiddleware(thunk));



render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
