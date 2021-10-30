import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import App from "./App";
import { ThemeProvider } from "./context";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
