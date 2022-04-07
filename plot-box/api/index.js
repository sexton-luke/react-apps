'use-strict';

// initialise functions
const createLatitudeLongitudeArrays = require('./functions/createLatitudeLongitudeArrays');
const getRandomCoordinates = require('./functions/getRandomCoordinates');

require('dotenv').config();
const config = require('./config');
const express = require('express');
const { body, validationResult } = require('express-validator');
const cors = require('cors');
const app = express();
const port = process.env.API_PORT || config.PORT;

app.use(express.json(config.JSON_OPTIONS)); // allow JSON payloads
app.use(express.urlencoded({ extended: true })); // parse URL encoded data
app.use(cors());

app.post(
  config.API_PREFIX + config.COORDINATES_END_POINT,
  body().isJSON(),
  (req, res) => {
    console.log('REQUEST BODY: ', req.body);
    console.log('TYPE: ', typeof req.body);
    const body = JSON.stringify(req.body);
    console.log('STRINGIFY BODY: ', body);

    // handle validation errors from request
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(config.BAD_REQUEST).json({ errors: errors.array() });
    }

    // create longitude and latitude boundaries
    const [longitudeBoundaries, latitudeBoundaries] =
      createLatitudeLongitudeArrays(req.body);

    // get random number between 1 and 10
    const randomNumber = getRandomNumber(config.CEILING, config.OFFSET);

    // get random coordinates between latitude/longitude boundaries
    const coordinates = getRandomCoordinates(
      randomNumber,
      longitudeBoundaries,
      latitudeBoundaries
    );
    console.log('number of coordinates: ', randomNumber);
    console.log('coordinates: ', coordinates);
    res.send(coordinates);
  }
);

app.listen(port, () => console.log(`Listening on port ${port}...`));

// helper functions
const getRandomNumber = (ceiling, offset) =>
  Math.floor(Math.random() * ceiling) + offset;
