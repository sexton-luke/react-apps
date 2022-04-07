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

  // default localhost port if environment variable does not exist
  PORT: 5000,

  // generate random number params
  CEILING: 10,
  OFFSET: 1,

  // request codes
  BAD_REQUEST: 400,
};
