const createLatitudeLongitudeArrays = require('../functions/createLatitudeLongitudeArrays');
// test data
const jsonData = {
  coordinate0: ['-73.9876', '40.7661'], // longitude/latitude
};

// run function
const arrays = [];
const [latitudeArray, longitudeArray] = createLatitudeLongitudeArrays(jsonData);
arrays.push(latitudeArray);
arrays.push(longitudeArray);

describe('createLatitudeLongitudeArrays', () => {
  it('assert data types and length of return arrays are equal to amount of coordinates from given param', () => {
    const jsonDataLength = Object.keys(jsonData).length;
    for (let i = 0; i < arrays.length; i++) {
      expect(typeof arrays[i]).toBe(typeof []);
      expect(typeof arrays[i][0]).toBe('number');
      expect(arrays[i].length).toEqual(jsonDataLength);
    }
  });
  it('assert the latitude, longitude values from JSON data are being split correctly into the return arrays respectively', () => {
    const jsonLatitude = jsonData['coordinate0'][0];
    const jsonLongitude = jsonData['coordinate0'][1];

    // convert number to string
    const latitudeString = latitudeArray[0].toString();
    const longitudeString = longitudeArray[0].toString();

    expect(jsonLatitude === latitudeString).toBeTruthy();
    expect(jsonLongitude === longitudeString).toBeTruthy();
  });
});
