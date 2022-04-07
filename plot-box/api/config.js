// config file for constant variables

module.exports = {
  // express
  JSON_OPTIONS: [
    {
      strict: true, // only accepts arrays and objects
      limit: '100kb', // limit payload size
    },
  ],

  API_PREFIX: '/api',
  COORDINATES_END_POINT: '/coordinates',

  // default localhost port if environment variable does not exist
  PORT: 5000,

  // generate random number params
  CEILING: 10,
  OFFSET: 1,

  // request codes
  BAD_REQUEST: 400,
  SUCCESS_CODE: 200,
};
