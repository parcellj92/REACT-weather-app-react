import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
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
      <div>
        {form}
        <div className="row mt-5">
          <div className="col-6">
            <WeatherTemperature fahrenheit={weather.temperature} />
            <h1>
              <span>{weather.temperature}</span>
              <span className="unit align-text-top">˚F | ˚C</span>
            </h1>
            <h2>{weather.city}</h2>

            <div>
              <FormattedDate date={weather.date} />
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
      </div>
    );
  } else {
    return form;
  }
}
