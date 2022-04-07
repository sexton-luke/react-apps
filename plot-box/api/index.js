'use-strict';

// initialise functions
const createLatitudeLongitudeArrays = require('./functions/createLatitudeLongitudeArrays');
const getRandomCoordinates = require('./functions/getRandomCoordinates');

require('dotenv').config();
const config = require('./config');
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const port = process.env.NODE_PORT || config.PORT;

app.use(express.json(config.JSON_OPTIONS)); // Allow JSON payloads

app.post(config.ENDPOINT, body().isJSON(), (req, res) => {
  console.log('REQUEST BODY: ', req.body);
  console.log('TYPE: ', typeof req.body);

  // handle validation errors from request
  const errors = validationResult(req.body);
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
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

// helper functions
const getRandomNumber = (ceiling, offset) =>
  Math.floor(Math.random() * ceiling) + offset;
