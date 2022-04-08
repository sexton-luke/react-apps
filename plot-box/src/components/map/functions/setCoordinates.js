/**
 * Generate and add markers to map from given coordinate data
 *
 * @param { mapboxgl.Map }                  map         mapbox map to place markers on
 * @param { Object<Object<string, string> } coordinates coordinate data to create markers
 * @param { array<mapboxgl.Marker }         markers     marker array for removing and setting new markers
 */

const mapboxgl = require('mapbox-gl');
const clearMarkers = require('./clearMarkers');

const setCoordinates = (map, coordinates, markers) => {
  markers = clearMarkers(map, markers);

  console.log('markers: ', markers);
  for (let coordinate of Object.keys(coordinates)) {
    const marker = new mapboxgl.Marker()
      .setLngLat(coordinates[coordinate])
      .addTo(map.current);

    markers.push(marker);
  }
  console.log('markers added..', markers);
};

module.exports = setCoordinates;
