import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";

export default function App(props) {
  const [activeSearch, setActiveSearch] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(props.defaultcity);

  function handleResponse(response) {
    setWeather({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      condition: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
    setActiveSearch(true);
  }
  function search() {
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=4d6d3a603f2o058afbtc1e8fa6515357`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (activeSearch) {
    return (
      <div className="App">
        <form className="row" onSubmit={handleSubmit}>
          <input
            onChange={handleCityChange}
            className="col-8 search-input "
            type="search"
            placeholder="Enter a city..."
          ></input>
          <input
            type="submit"
            value="Search"
            className="col-3 submit-input"
          ></input>
        </form>
        <WeatherInfo data={weather} />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/156305-sonja-grund"
            target="_blank"
            rel="noreferrer"
          >
            Sonja Grund
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/itsSonchan/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          .
        </footer>
      </div>
    );
  } else {
    search();
  }
}
