import React from "react";
import axios from "axios";
import "./Weather.css";
import SearchEngine from "./SearchEngine.js";
export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 76,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: "80",
    wind: "10",
  };
  return (
    <div>
      <div className="App">
        <div className="Weather">
          <SearchEngine />

          <div className="daily-weather"></div>
          <div className="weather-forecast" id="forecast">
            <div className="row">
              <div className="col-2">
                <div className="weather-forecast-date">Thu</div>
                ☀️
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">18˚</span>
                  <span className="weather-forecast-temperature-min">12˚</span>
                </div>
              </div>
            </div>
          </div>
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
