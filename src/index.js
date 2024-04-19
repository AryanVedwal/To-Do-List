// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadState } from "./localStorage";
import App from "./App";
import "./index.css";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
