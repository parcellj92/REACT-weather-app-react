import React from "react";
import "./Weather.css";
import SearchEngine from "./SearchEngine.js";
export default function Weather() {
  return (
    <div>
      <div className="App">
        <div className="Weather">
          <SearchEngine />
        </div>
      </div>
      <footer>
        <a href="https://github.com/parcellj92/REACT-weather-app-react">
          Open-source code
        </a>{" "}
        by Jessica Parcell
      </footer>
    </div>
  );
}
