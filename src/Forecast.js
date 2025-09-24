import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [forecastData, setforecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
  }, [props.data.city]);

  function handleResponse(response) {
    setLoaded(true);
    setforecastData(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="row forecast justify-content-center gx-3">
        {forecastData.map(function (dailyForecast, index) {
          if (index > 0 && index < 6) {
            return (
              <ForecastDay
                key={index}
                data={dailyForecast}
                time={props.data.date}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const url = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=4d6d3a603f2o058afbtc1e8fa6515357`;
    axios.get(url).then(handleResponse);
  }
}
