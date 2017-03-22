var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9bad31798b60ac39e253c737ce88db3b&units=imperial';
//
module.exports = {
getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  return  axios.get(requestUrl).then( function (response) {

      if (response.data.cod && response.data.message){
        throw new Error(response.data.message);
      }
      else{
        return response.data.main.temp;
      }
    }, function (error) {
    throw new Error('City not found');;
  });
 }
}
