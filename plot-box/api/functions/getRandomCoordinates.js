/**
 *  Generate a random number of coordinates (latitude/longitude values) within given boundaries
 *
 * @param { number }    coordinateAmount    any number
 * @param { array<number> }     latitudeBoundaries  north/South boundary values
 * @param { array<number> }     longitudeBoundaries east/West boundary values
 * @returns { array<Object> }   coordinates         array of named arrays
 */

const getRandomCoordinates = (
  coordinateAmount,
  latitudeBoundaries,
  longitudeBoundaries
) => {
  // return given number of coordinates within given boundaries.
  const coordinates = [];
  const name = 'coordinate';
  const DECIMAL_PLACES = 4;

  // Create random coordinates
  for (let i = 0; i < coordinateAmount; i++) {
    const coordinate = {};
    const coordinateData = [];
    const key = name + i;

    // Calculate randomness
    const latitude = calculateRandomFloatFromArray(
      latitudeBoundaries[1],
      latitudeBoundaries[0]
    );
    const longitude = calculateRandomFloatFromArray(
      longitudeBoundaries[1],
      longitudeBoundaries[0]
    );

    // build coordinate array
    coordinateData.push(latitude.toFixed(DECIMAL_PLACES));
    coordinateData.push(longitude.toFixed(DECIMAL_PLACES));

    coordinate[key] = coordinateData;
    // add named array to coordinates dictionary
    coordinates.push(coordinate);
  }
  return coordinates;
};

const calculateRandomFloatFromArray = (min, max) =>
  Math.random() * (max - min + 0.001) + min;

module.exports = getRandomCoordinates;
