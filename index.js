const {fetchMyIP} = require('./fetchMyIp')
const {fetchCoordsByIP} = require('./fetchCoordsByIP')

//  require and run our main fetch function.const { fetchMyIP } = require('./iss');

fetchCoordsByIP('99.247.121.151', function(error, coordinates){
  if(error){
    console.log('there is an error', error)
    return
  }
  console.log('coordinates are', { latitude: '49.27670', longitude: '-123.13000' })

}) // end of fetchCoordsByIP


// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:' , passTimes);
// })