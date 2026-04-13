import { useEffect, useState } from "react";
import weatherService from "../services/weather";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    weatherService
      .getWeatherByCapital(capital)
      .then((data) => setWeather(data));
  }, []);

  return (
    <div>
      <h2>Weather in {capital}</h2>

      {weather ? (
        <>
          <p>Temperature {weather.main.temp} Celsius</p>

          <h3>{weather.weather[0].main}</h3>
          <p>{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].main}
          />
          <p>Wind {weather.wind.speed} m/s</p>
        </>
      ) : (
        "Loading data..."
      )}
    </div>
  );
};

export default Weather;
