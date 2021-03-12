const request = require('request');
const myArgs = process.argv.slice(2);
const userInput = myArgs.toString();



  const userChoice = request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
    if (myArgs === null || userInput === undefined || userInput === '') {
      return ('Breed not found', error);
    }
  const obj = ('body:', body); // Print the HTML for the site.
  const apiReturn = JSON.parse(body);
  const api = apiReturn;
  console.log(api[0].description);
});



module.exports = fetchBreedDescription; 