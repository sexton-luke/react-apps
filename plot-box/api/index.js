'use-strict';

require('dotenv').config();
const createLatitudeLongitudeArrays = require('./functions/createLatitudeLongitudeArrays');
const config = require('./config');
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const port = process.env.PORT || config.PORT;

app.use(express.json(config.JSON_OPTIONS)); // Allow JSON payloads

app.get(
  config.ENDPOINT,
  body(config.NORTH_EAST_BOUNDARY).isArray(),
  body(config.SOUTH_WEST_BOUNDARY).isArray(),
  (req, res) => {
    // handle validation errors from request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(config.BAD_REQUEST).json({ errors: errors.array() });
    }

    // create latitude and longitude boundaries
    const [latitudeBoundaries, longitudeBoundaries] =
      createLatitudeLongitudeArrays(req.body);

    // get random number between 1 and 10
    const randomNumber = getRandomNumber(config.CEILING, config.OFFSET);

    // get random coordinates between latitude/longitude boundaries
    const coordinates = getRandomCoordinates(
      randomNumber,
      latitudeBoundaries,
      longitudeBoundaries
    );

    res.send(coordinates);
    console.log(coordinates);
  }
);

app.listen(port, () => console.log(`Listening on port ${port}...`));

// helper functions
const calculateRandomFloatFromArray = array =>
  Math.random() * (array[0] - array[1]) - array[1];

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
    const latitude = calculateRandomFloatFromArray(latitudeBoundaries);
    const longitude = calculateRandomFloatFromArray(longitudeBoundaries);

    // build coordinate array
    coordinateData.push(latitude.toFixed(DECIMAL_PLACES));
    coordinateData.push(longitude.toFixed(DECIMAL_PLACES));

    coordinate[key] = coordinateData;
    // add named array to coordinates dictionary
    coordinates.push(coordinate);
  }
  return coordinates;
};

const getRandomNumber = (ceiling, offset) =>
  Math.floor(Math.random() * ceiling) + offset;
