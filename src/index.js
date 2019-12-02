import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import inputReducer from "./store/reducers/input";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route, Link } from "react-router-dom";
const store = createStore(inputReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
