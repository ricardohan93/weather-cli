const ora = require("ora");
const getWeather = require("../utils/weather");
const getLocation = require("../utils/location");

module.exports = async args => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l || (await getLocation());
    const weather = await getWeather(location, "forecast");

    spinner.stop();

    console.log(`Forecast for ${location}:`);
    weather.list.forEach(obj => {
      console.log(
        `\t${obj.dt_txt} - Low: ${obj.main.temp_min}º | High: ${
          obj.main.temp_max
        } | ${obj.weather[0].description}`
      );
    });
  } catch (err) {
    spinner.stop();

    console.error("err");
  }
};
