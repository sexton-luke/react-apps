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
    console.log('jsonArray: ', jsonArray);

    for (let lngLatValues of Object.values(jsonArray)) {
      console.log('array', lngLatValues);
      longitudes.push(parseFloat(lngLatValues['lng']));
      latitudes.push(parseFloat(lngLatValues['lat']));
    }

  }
  console.log('longitudeArray: ', longitudes);
  console.log('latitdueArray: ', latitudes);
  return [longitudes, latitudes];
};

module.exports = createLongitudeLatitudeArrays;
