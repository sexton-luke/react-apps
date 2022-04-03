'use-strict';

require('dotenv').config();
const config = require('./config');
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const port = process.env.PORT || config.PORT;

app.use(express.json(config.JSON_OPTIONS)); // Allow JSON payloads

app.get(
  config.ENDPOINT,
  body(config.NORTH_EAST_BOUNDARY).isArray,
  body(config.SOUTH_WEST_BOUNDARY).isArray,
  (req, res) => {
    // handle validation errors from request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(config.BAD_REQUEST).json({ errors: errors.array() });
    }

    // get random number between 1 and 10
    const randomNumber = getRandomNumber(config.CEILING, config.OFFSET);
    // const coordinates = getRandomCoordinates(randomNumber);
  }
);

app.listen(port, () => console.log(`Listening on port ${port}...`));

// helper functions
const getRandomNumber = (ceiling, offset) =>
  Math.floor(Math.random() * ceiling) + offset;
