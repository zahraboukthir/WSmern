import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import store from "./JS/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
