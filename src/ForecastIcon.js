import React from "react";

export default function ForecastIcon(props) {
  const stateMappingDay = {
    "sky is clear":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/058/original/Unbenanntes_Projekt.png?1758541047",
    "clear sky":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/058/original/Unbenanntes_Projekt.png?1758541047",
    "few clouds":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/059/original/Unbenanntes_Projekt_2.png?1758541557",
    "broken clouds":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/060/original/Unbenanntes_Projekt_3.png?1758541636",
    "overcast clouds":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/061/original/Unbenanntes_Projekt_4.png?1758541815",
    "light intensity shower rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/062/original/Unbenanntes_Projekt_5.png?1758541923",
    "light rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/062/original/Unbenanntes_Projekt_5.png?1758541923",
    "moderate rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/062/original/Unbenanntes_Projekt_5.png?1758541923",
    mist: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/066/original/Unbenanntes_Projekt_9.png?1758542999",
    "light snow":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/067/original/Unbenanntes_Projekt_10.png?1758543058",
    "heavy snow":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/068/original/Unbenanntes_Projekt_11.png?1758543097",
    snow: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/068/original/Unbenanntes_Projekt_11.png?1758543097",
    "heavy rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/063/original/Unbenanntes_Projekt_6.png?1758541997",
    "very heavy rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/063/original/Unbenanntes_Projekt_6.png?1758541997",
    haze: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/066/original/Unbenanntes_Projekt_9.png?1758542999",
    fog: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/066/original/Unbenanntes_Projekt_9.png?1758542999",
    "scattered clouds":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/059/original/Unbenanntes_Projekt_2.png?1758541557",
    thunderstorm:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/064/original/Unbenanntes_Projekt_7.png?1758542507",
    "heavy intensity rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/063/original/Unbenanntes_Projekt_6.png?1758541997",
    "shower rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/063/original/Unbenanntes_Projekt_6.png?1758541997",
    "thunderstorm with rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/065/original/Unbenanntes_Projekt_8.png?1758542672",
  };
  const stateMappingNight = {
    "sky is clear":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/070/original/Unbenanntes_Projekt_15.png?1758543170",
    "clear sky":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/070/original/Unbenanntes_Projekt_15.png?1758543170",
    "few clouds":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/108/original/Unbenanntes_Projekt_18.png?1758645039",
    "broken clouds":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/108/original/Unbenanntes_Projekt_18.png?1758645039",
    "overcast clouds":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/107/original/Unbenanntes_Projekt_17.png?1758644929",
    "light intensity shower rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/062/original/Unbenanntes_Projekt_5.png?1758541923",
    "light rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/062/original/Unbenanntes_Projekt_5.png?1758541923",
    "moderate rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/062/original/Unbenanntes_Projekt_5.png?1758541923",
    mist: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/066/original/Unbenanntes_Projekt_9.png?1758542999",
    "light snow":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/067/original/Unbenanntes_Projekt_10.png?1758543058",
    "heavy snow":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/068/original/Unbenanntes_Projekt_11.png?1758543097",
    snow: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/068/original/Unbenanntes_Projekt_11.png?1758543097",
    "heavy rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/063/original/Unbenanntes_Projekt_6.png?1758541997",
    "very heavy rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/063/original/Unbenanntes_Projekt_6.png?1758541997",
    haze: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/066/original/Unbenanntes_Projekt_9.png?1758542999",
    fog: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/066/original/Unbenanntes_Projekt_9.png?1758542999",
    "scattered clouds":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/108/original/Unbenanntes_Projekt_18.png?1758645039",
    thunderstorm:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/064/original/Unbenanntes_Projekt_7.png?1758542507",
    "heavy intensity rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/063/original/Unbenanntes_Projekt_6.png?1758541997",
    "shower rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/063/original/Unbenanntes_Projekt_6.png?1758541997",
    "thunderstorm with rain":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/065/original/Unbenanntes_Projekt_8.png?1758542672",
  };
  let date = new Date(props.time * 1000);
  let hours = date.getHours();
  if (hours < 18 && hours > 6) {
    let icon = stateMappingDay[props.data.condition.description];
    return <img src={icon} alt="forecast icon" className="forecast-icon" />;
  } else {
    let icon = stateMappingNight[props.data.condition.description];
    return <img src={icon} alt="forecast icon" className="forecast-icon" />;
  }
}
