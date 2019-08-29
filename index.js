const { fetchBreedDescription } = require("./breedFetcher");
const name = process.argv[2];

fetchBreedDescription(name, (error, description) => {
  error ? console.log(error) : console.log(description);
});