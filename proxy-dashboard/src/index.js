import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TenentProvider } from "./contexts/TenentContext";
import { theme } from "./theme";

let root = document.documentElement;

for (const [key, val] of Object.entries(theme)) {
  root.style.setProperty(key, val);
}

ReactDOM.render(
  <React.StrictMode>
    <TenentProvider>
      <App />
    </TenentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
