const request = require('request');
const myArgs = process.argv.slice(2);
const userInput = myArgs.toString();




const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const apiReturn = JSON.parse(body);
    const breed = apiReturn[0];
    
    if (breed) {
      callback(null, breed.description);
    } else {
      callback('Breed not found', null);
    }

  });

};


module.exports = { fetchBreedDescription };