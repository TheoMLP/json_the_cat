const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body)[0];
      data === undefined ? callback("Unable to find breed", null) : callback(null, data.description);
    }
  });
};


module.exports = { fetchBreedDescription };

// if (error) {
//   console.log("Error: ", error);
// }
// const data = JSON.parse(body)[0];
// if (data === undefined) {
// console.log("Unable to find breed");
// } else {
//   console.log(data);
//   }