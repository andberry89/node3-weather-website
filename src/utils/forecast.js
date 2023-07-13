const request = require("postman-request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=ab202605e5b84ddfae9211448231901&q=" +
    lat +
    "," +
    long +
    "&aqi=no";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      const data = body.current;
      callback(
        undefined,
        "It is currently " +
          data.temp_f +
          " degrees out, but feels like " +
          data.feelslike_f +
          " degrees out." +
          "The humidity is " +
          data.humidity +
          "% and there's wind from the " +
          data.wind_dir +
          " blowing at " +
          data.wind_mph +
          " MPH."
      );
    }
  });
};

module.exports = forecast;
