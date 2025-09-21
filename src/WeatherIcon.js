import React from "react";

import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props);
  const stateMapping = {
    "clear sky": "CLEAR_DAY",
    "few clouds": "CLOUDY",
    "broken clouds": "CLOUDY",
    "overcast clouds": "CLOUDY",
    "light intensity shower rain": "RAIN",
    "light rain": "RAIN",
    "moderate rain": "RAIN",
    mist: "FOG",
    "light snow": "SNOW",
    "heavy snow": "SNOW",
    snow: "SNOW",
    "heavy rain": "SLEET",
    haze: "FOG",
    fog: "FOG",
    "scattered clouds": "PARTLY_CLOUDY_DAY",
    thunderstorm: "CLOUDY",
    "heavy intensity rain": "SLEET",
    "shower rain": "SLEET",
  };
  const defaults = {
    icon: stateMapping[props.data.condition],
    color: "#BE5103",
    size: 70,
    animate: true,
  };
  return (
    <ReactAnimatedWeather
      icon={defaults.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}
