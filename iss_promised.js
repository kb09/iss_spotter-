// iss_promised.js
const request = require('request-promise-native');


const fetchMyIP = function() {
  return request('https://api.ipify.org?format=jsonx');
};

const fetchCoordsByIP = function(body) {

  const ip = JSON.parse(body).ip;
  
  return request(`https://ipvigilante.com/${ip}`);
};

const fetchISSFlyOverTimes = function(body) {

  let { latitude, longitude } = JSON.parse(body).data;
  let url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };
module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };

