import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const getWeatherByCapital = (capital) => {
  const request = axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: capital,
      appid: apiKey,
      units: "metric",
    },
  });

  return request.then((response) => response.data);
};

export default { getWeatherByCapital };
