// config file for constant variables

module.exports = {
  //api
  ENDPOINT: '/api/coordinates',

  // express
  JSON_OPTIONS: [
    {
      strict: true, // only accepts arrays and objects
      limit: '1000kb', // limit payload to 1mb
    },
  ],

  // validator request fields
  BOUNDARY_BOX: 'boundaryBox',
  NORTH_EAST_BOUNDARY: 'northEastBoundary',
  SOUTH_WEST_BOUNDARY: 'southWestBoundary',

  // default localhost port if environment variable does not exist
  PORT: 3000,

  // generate random number params
  CEILING: 10,
  OFFSET: 1,

  // request codes
  BAD_REQUEST: 400,
};
