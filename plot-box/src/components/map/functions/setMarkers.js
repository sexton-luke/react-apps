/**
 * Generate and add markers to map from given coordinate data
 *
 * @param { mapboxgl.Map }                  map         mapbox map to place markers on
 * @param { Object<Object<string, string> } coordinates coordinate data to create markers
 * @param { array<mapboxgl.Marker }         markers     marker array for removing and setting new markers
 */

const mapboxgl = require('mapbox-gl');
const clearMarkers = require('./clearMarkers');

const setMarkers = (map, coordinates, markers) => {
  console.log('map: ', map);
  console.log('coordinates: ', coordinates);
  console.log('markers: ', markers);


  markers = clearMarkers(map, markers);

  for (let coordinate of Object.keys(coordinates)) {
    const marker = new mapboxgl.Marker()
      .setLngLat(coordinates[coordinate])
      .addTo(map);

    markers.push(marker);
  }
  console.log('markers added..', markers);
};

module.exports = setMarkers;
