/**
 *  Separates coordinates into latitude and longitude number arrays from given JSON coordinates
 *
 *  @param   { Object } jsonData  JSON data containing named arrays (coordinates)
 *  @return  { array<number>, array<number>] }  [longitudes, latitudes] return separated arrays (longitude & latitude)
 */

const createLongitudeLatitudeArrays = jsonData => {
  let longitudes = [];
  let latitudes = [];

  for (let jsonArray of Object.values(jsonData)) {
    longitudes.push(parseFloat(jsonArray['lng']));
    latitudes.push(parseFloat(jsonArray['lat']));
  }
  console.log('longitudeArray: ', longitudes);
  console.log('latitdueArray: ', latitudes);
  return [longitudes, latitudes];
};

module.exports = createLongitudeLatitudeArrays;
