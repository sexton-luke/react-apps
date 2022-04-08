/**
 *
 *  Generate a random number of coordinates (latitude/longitude values) within given boundaries
 *
 * @param { number }        coordinateAmount    any number
 * @param { array<number> } latitudeBoundaries  north/South boundary values
 * @param { array<number> } longitudeBoundaries east/West boundary values
 * @return { Object<Object<string, string> }   coordinates         array of named arrays
 */

const getRandomCoordinates = (
  coordinateAmount,
  longitudeBoundaries,
  latitudeBoundaries
) => {
  // return given number of coordinates within given boundaries.
  const coordinates = {};
  const DECIMAL_PLACES = 4;

  console.log('lng bounds: ', longitudeBoundaries);
  console.log('lat bounds: ', latitudeBoundaries);

  // Create random coordinates
  for (let i = 0; i < coordinateAmount; i++) {
    // Calculate randomness
    const longitude = calculateRandomFloatFromArray(
      longitudeBoundaries[0],
      longitudeBoundaries[1]
    );
    const latitude = calculateRandomFloatFromArray(
      latitudeBoundaries[1],
      latitudeBoundaries[0]
    );

    // build coordinate data
    const coordinate = {
      lng: longitude.toFixed(DECIMAL_PLACES),
      lat: latitude.toFixed(DECIMAL_PLACES),
    };

    // add coordinate to collection of coordinates
    coordinates[i] = coordinate;
  }
  return coordinates;
};

const calculateRandomFloatFromArray = (min, max) =>
  Math.random() * (max - min + 0.001) + min;

module.exports = getRandomCoordinates;
