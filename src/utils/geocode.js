const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "http://api.positionstack.com/v1/forward?access_key=2ff4c3f2291773ffbf6f1ab92f790c59&query=" +
    encodeURIComponent(address) +
    "&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services.", undefined);
    } else if (body.data === undefined || body.data.length === 0) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].label,
      });
    }
  });
};

module.exports = geocode;
