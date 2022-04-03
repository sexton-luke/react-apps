'use-strict';

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const endpoint = '/api/coordinates';
const OPTIONS = [
  {
    strict: true, // only accepts arrays and objects
    limit: '1000kb', // limit payload to 1mb
  },
];

app.use(express.json(OPTIONS)); // Allow JSON payloads

app.get(endpoint, (req, res) => {
  // Validate request data with expected properties
  const VALID_PROPERTIES = ['northEastBoundary', 'southWestBoundary'];
  if (isRequestBodyValid(req.body, VALID_PROPERTIES)) {
    // Get random number between 1 and 10
    const CEILING = 10;
    const OFFSET = 1;
    const randomNumber = getRandomNumber(CEILING, OFFSET);
    console.log(randomNumber);
  } else {
    // Deny requested data
    const message =
      'Requested data within body does not contain valid properties...';
    res.send(message);
  }
  // const coordinates = getRandomCoordinates(randomNumber);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

// Helper functions
const isRequestBodyValid = (body, properties) => {
  console.log('Request JSON body: ', body);
  console.log('Valid properties: ', properties);

  let valid = false;
  let count = 0;

  // Count amount of properties in body
  for (let i = 0; i < properties.length; i++) {
    if (body.hasOwnProperty(properties[i])) {
      count += 1;
    }
  }
  // Define valid data if body contains all properties
  if (count === properties.length) {
    valid = true;
  }

  return valid;
};

const getRandomNumber = (ceiling, offset) =>
  Math.floor(Math.random() * ceiling) + offset;

// Export functions for testing
module.exports = isRequestBodyValid;
