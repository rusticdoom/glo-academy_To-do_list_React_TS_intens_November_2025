import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";
import "./assets/scss/normalize.scss";
import { ToDoList } from "./pages/ToDoList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);
