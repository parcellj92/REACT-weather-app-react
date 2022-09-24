import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather.js";

import SearchEngine from "./SearchEngine.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
