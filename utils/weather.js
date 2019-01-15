const axios = require("axios");

module.exports = async (location, forecast) => {
  const baseURL = "http://api.openweathermap.org/data/2.5";
  const type = forecast || "weather";
  const APIKEY = "0377e46a7d6cbd710c217b8b56558ae9";

  const weather_url = `${baseURL}/${type}?q=${encodeURIComponent(
    location
  )}&APPID=${APIKEY}&units=metric`;
  console.log("weather_url", weather_url);

  const result = await axios(weather_url);

  return result.data;
};
