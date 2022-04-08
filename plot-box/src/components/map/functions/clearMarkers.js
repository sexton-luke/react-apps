/**
 *  Remove all marker objects from current map and marker array
 *
 * @param { mapboxgl.Map }  map         remove markers from current map
 * @param { array<mapboxgl.Marker> }    markers     array containing Marker objects
 * @returns {array }        markers     empty array
 */

const clearMarkers = (map, markers) => {
  console.log('clearing markers...');
  for (let i = markers.length - 1; i >= 0; i--) {
    markers[i].remove(); // remove from map
    markers.pop(); // remove marker from array
  }
  return markers;
};

module.exports = clearMarkers;
