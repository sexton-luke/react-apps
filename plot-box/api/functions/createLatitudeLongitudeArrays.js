/**
 *  Separates coordinates into latitude and longitude arrays from given JSON coordinates
 *
 *  @param   { Object }         jsonData    JSON data containing named arrays (coordinates)
 *  @return  { array, array }               return separated arrays (latitude & longitude)
 */

const createLatitudeLongitudeArrays = jsonData => {
  let latitudeArray = [];
  let longitudeArray = [];
  for (let jsonArray of Object.values(jsonData)) {
    latitudeArray.push(parseFloat(jsonArray[0]));
    longitudeArray.push(parseFloat(jsonArray[1]));
  }

  return [latitudeArray, longitudeArray];
};

module.exports = createLatitudeLongitudeArrays;
