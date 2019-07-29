import React from "react";
import { render } from "react-dom";
import "papercss/dist/paper.min.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components";
import "./style.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
