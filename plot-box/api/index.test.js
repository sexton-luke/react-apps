// Unit testing for api/index.js
const createLatitudeLongitudeArrays = require('./index.js');

const coordinateOneLatitude = -50.3614;
const coordinateOneLongitude = 165.5822;
const coordinateTwoLatitude = 40.9305;
const coordinateTwoLongitude = 78.9564;

const jsonCoordinates = {
  coordinateOne: [coordinateOneLatitude, coordinateOneLongitude],
  coordinateTwo: [coordinateTwoLatitude, coordinateTwoLongitude],
};

const [latitudeArray, longitudeArray] =
  createLatitudeLongitudeArrays(jsonCoordinates);

test('separates JSON coordinates into latitude and longitude arrays', () => {
  expect(latitudeArray[0]).toBe(coordinateOneLatitude);
  expect(latitudeArray[1]).toBe(coordinateTwoLatitude);
  expect(longitudeArray[0]).toBe(coordinateOneLongitude);
  expect(longitudeArray[1]).toBe(coordinateTwoLongitude);
});
