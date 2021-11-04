const {fetchMyIP} = require('./fetchMyIp')
const {fetchCoordsByIP} = require('./fetchCoordsByIP')

//  require and run our main fetch function.const { fetchMyIP } = require('./iss');

fetchCoordsByIP('99.247.121.151', function(error, coordinates){
  if(error){
    console.log('there is an error', error)
    return
  }
  console.log('coordinates are', coordinates)

}) // end of fetchCoordsByIP