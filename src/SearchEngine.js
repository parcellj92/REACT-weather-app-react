import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "80e7e03978eecacba428a41c3f4a5874";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80e7e03978eecacba428a41c3f4a5874&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city..." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div className="Container">
        <div className="App">
          <div className="Weather">
            <SearchEngine />
            <div className="row mt-5">
              <div className="col-6">
                <h1>
                  <span>{weather.temperature}</span>
                  <span className="unit align-text-top">˚F | ˚C</span>
                </h1>
                <h2>{weather.city}</h2>

                <div>
                  <h3 className="date">{weather.date}</h3>
                </div>
                <div>
                  <h3>{weather.description}</h3>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div>
                  <img src={weather.icon} alt={weather.description} id="icon" />
                </div>

                <div>Wind: {weather.wind}mph</div>
                <div>Humidity: {weather.humidity}%</div>
              </div>
            </div>
            <div className="daily-weather"></div>
            <div className="weather-forecast" id="forecast">
              <div className="row">
                <div className="col-2">
                  <div className="weather-forecast-date">Thu</div>
                  ☀️
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temperature-max">
                      18˚
                    </span>
                    <span className="weather-forecast-temperature-min">
                      12˚
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <footer>
            <a href="https://github.com/parcellj92/REACT-weather-app-react">
              Open-source code
            </a>{" "}
            by Jessica Parcell
          </footer>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
