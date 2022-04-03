// Unit testing for api/index.js
const isRequestBodyValid = require('./index');

const BODY = {
  a: 'value',
  b: 'value2',
  c: 'value3',
};
const MATCHING_PROPERTIES = ['a', 'b', 'c'];
const MISMATCHING_PROPERTIES = ['a', 'b', 'c', 'd'];

test('Ensures JSON body has matching properties.', () => {
  const valid = isRequestBodyValid(BODY, MATCHING_PROPERTIES);
  expect(valid).toBeTruthy();
});

test('Expect JSON body to have mismatching properties.', () => {
  const valid = isRequestBodyValid(BODY, MISMATCHING_PROPERTIES);
  expect(valid).toBeFalsy();
});
