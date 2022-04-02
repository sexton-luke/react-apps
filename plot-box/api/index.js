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
  /* 
  request coordinates
  const numberOfCoordinates => getRandomNumber() between 1 & 10
  const coordinates => getRandomCoordinates(req.body.boundaryBoxValues)
  res.send(coordinates)
  */
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
