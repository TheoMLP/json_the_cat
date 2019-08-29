const request = require("request");
const name = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) => {
  if (error) {
    console.log("Error: ", error);
  }
  const data = JSON.parse(body)[0];
  if (data === undefined) {
    console.log("Unable to find breed");
  } else {
    console.log(data);
  }
});

