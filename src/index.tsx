import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userTimer from "./Features/Timer";
import charactersFound from "./Features/CharactersFound";
import check from "./Features/ReloadSlice";

export const store = configureStore({
  reducer: {
    timer: userTimer,
    counter: charactersFound,
    reload: check,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
