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
    const element = document.createElement('div');
    element.className = 'marker';

    const marker = new mapboxgl.Marker(element)
      .setLngLat(coordinates[coordinate])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(
            `<h3>Lng Lat <br></h3>
            <p>${coordinates[coordinate]['lng']} |
            ${coordinates[coordinate]['lat']}</p>`
          )
      )
      .addTo(map);

    markers.push(marker);
  }
  console.log('markers added..', markers);
};

module.exports = setMarkers;
