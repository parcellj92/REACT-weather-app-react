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
          <div className="row mt-5">
            <div className="col-6">
              <h1>
                <span>{weatherData.temperature}</span>
                <span className="unit align-text-top">˚F</span>
              </h1>
              <h2>{weatherData.city}</h2>

              <div>
                <h3 className="date">{weatherData.date}</h3>
              </div>
              <div>
                <h3>{weatherData.description}</h3>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  id="icon"
                />
              </div>

              <div>Wind: {weatherData.wind}mph</div>
              <div>Humidity: {weatherData.humidity}%</div>
            </div>
          </div>
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
