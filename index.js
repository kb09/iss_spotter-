const {fetchMyIP} = require('./fetchMyIp')
const {fetchCoordsByIP} = require('./ffetchCoordsByIP')

//  require and run our main fetch function.const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('99.247.121.151', function(error, coordinates){
  if(error){
    console.log('there is an error', error)
    return
  }
  console.log('coordinates are', coordinates)

}) // end of fetchCoordsByIP