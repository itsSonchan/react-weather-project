import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
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
        <h1>Hamburg</h1>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Sunday 11:08</li>
              <li>Sunny</li>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1894/1894536.png"
                  alt="weather icon"
                  width="80px"
                ></img>
                <span className="current-temp">
                  18<span className="unit">°C</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 20%</li>
              <li>Humidity: 80%</li>
              <li>Wind: 3 km/h</li>
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
}
