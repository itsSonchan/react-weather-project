import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function App(props) {
  const [activeSearch, setActiveSearch] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(props.defaultcity);
  const [error, setError] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    if (response.data.message === "City not found") {
      setError(true);
      setActiveSearch(true);
    } else {
      setError(false);
      setWeather({
        celsius: response.data.temperature.current,
        wind: response.data.wind.speed,
        city: response.data.city,
        country: response.data.country,
        humidity: response.data.temperature.humidity,
        condition: response.data.condition.description,
        date: response.data.time,
      });
      setActiveSearch(true);
    }
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

  if (activeSearch && error === false) {
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
        <Forecast data={weather} />
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
  } else if (error && activeSearch) {
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
        <div className="error-field">
          <h1 className="text-center mt-3 mb-3">Please enter a valid city.</h1>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/135/original/Unbenanntes_Projekt_19.png?1758696136"
            width="300px"
            className="question-cat"
            alt="cat with question marks"
          ></img>
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
    search();
  }
}
