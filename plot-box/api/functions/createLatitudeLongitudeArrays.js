/**
 *  Separates coordinates into latitude and longitude number arrays from given JSON coordinates
 *
 *  @param   { Object }         jsonData      JSON data containing named arrays (coordinates)
 *  @return  { array<number>, array<number>] } return separated arrays (longitude & latitude)
 */

const createLongitudeLatitudeArrays = jsonData => {
  let longitudeArray = [];
  let latitudeArray = [];

  for (let jsonArray of Object.values(jsonData)) {
    longitudeArray.push(parseFloat(jsonArray['lng']));
    latitudeArray.push(parseFloat(jsonArray['lat']));
  }
  console.log('longitudeArray: ', longitudeArray);
  console.log('latitdueArray: ', latitudeArray);
  return [longitudeArray, latitudeArray];
};

module.exports = createLongitudeLatitudeArrays;
