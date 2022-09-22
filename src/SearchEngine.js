import React, { useState } from "react";
import axios from "axios";
export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 20˚F in ${city}`);

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80e7e03978eecacba428a41c3f4a5874&units=imperial`;
    axios.get(apiUrl);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city..."
          autoFocus="on"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
