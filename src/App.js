import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [activeSearch, setActiveSearch] = useState(false);
  const [weather, setWeather] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      condition: response.data.condition.description,
      date: "Sunday 11:08",
    });
    setActiveSearch(true);
  }
  if (activeSearch) {
    return (
      <div className="App">
        <form className="row">
          <input
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
        <div className="info-section">
          <h1>{weather.city}</h1>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>{weather.date}</li>
                <li className="text-capitalize">{weather.condition}</li>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1894/1894536.png"
                    alt="weather icon"
                    width="80px"
                  ></img>
                  <span className="current-temp">
                    {Math.round(weather.temperature)}
                    <span className="unit">°C</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {Math.round(weather.humidity)}%</li>
                <li>Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
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
    const url = `https://api.shecodes.io/weather/v1/current?query=Hamburg&key=4d6d3a603f2o058afbtc1e8fa6515357`;
    axios.get(url).then(handleResponse);
  }
}
