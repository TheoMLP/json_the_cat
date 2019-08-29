const { assert } = require("chai");
const { fetchBreedDescription } = require("../breedFetcher");

describe("#fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(desc, expectedDesc);
      done();
    });
  });
  it("returns 'Unable to find breed' when passed an invalid/non-existent breed", (done) => {
    fetchBreedDescription("feijfiejf", (err, desc) => {
      assert.equal(desc, null);

      const expectedErr = "Unable to find breed";
      assert.equal(err, expectedErr);
      done();
    });
  });
});