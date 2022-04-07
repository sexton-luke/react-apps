import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import config from '../../config.js';
const URL = process.env.REACT_APP_API_URL;

mapboxgl.accessToken =
  'pk.eyJ1IjoibHVrZS1zZXh0b24iLCJhIjoiY2wxbm4zMHRmMGhsNDNrcGN3cmdpN3djeCJ9.Xo8UgocO3400h_0XbUel2A';

export default function Map() {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  const [latitude, setLatitude] = useState(config.DEFAULT_LATITUDE);
  const [longitude, setLongitude] = useState(config.DEFAULT_LONGITUDE);
  const [zoom, setZoom] = useState(config.DEFAULT_ZOOM);
  const [boundaries, setBoundaries] = useState();

  const markers = [];

  // initiate map
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [longitude, latitude],
      zoom: zoom,
      scrollZoom: false,
    });

    setBoundaries(map.current.getBounds());
  }, [longitude, latitude, zoom, boundaries]);

  // store new coordinates
  useEffect(() => {
    if (!map.current) return; // wait for map to initialise
    map.current.on('move', () => {
      setLongitude(
        map.current
          .getCenter()
          .longitude.toFixed(config.COORDINATE_DECIMAL_PLACES)
      );
      setLatitude(
        map.current
          .getCenter()
          .latitude.toFixed(config.COORDINATE_DECIMAL_PLACES)
      );
      setZoom(map.current.getZoom().toFixed(config.ZOOM_DECIMAL_PLACES));
      setBoundaries(map.current.getBounds());
      console.log('BOUNDARIES ARE CHANGING!', boundaries['_se']['lat']);
    });
  }, [longitude, latitude, zoom, boundaries]);

  // setting coordinates on map

  // sending api request
  function requestCoordinates(boundaries) {
    console.log('URL: ', URL);
    console.log('BOUNDARIES .JSON: ', JSON.stringify(boundaries));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(boundaries),
    };

    fetch(URL, requestOptions)
      .then(response => response.json())
      .then(data => setCoordinates(data));
  }

  function setCoordinates(coordinates) {
    clearMarkers(markers);

    console.log('markers: ', markers);
    for (let coordinate of Object.keys(coordinates)) {
      const marker = new mapboxgl.Marker()
        .setLngLat(coordinates[coordinate])
        .addTo(map.current);

      markers.push(marker);
    }
    console.log('markers added..', markers);
  }

  function clearMarkers(markers) {
    console.log('clearing markers...');
    for (let i = markers.length - 1; i >= 0; i--) {
      markers[i].remove(); // remove from map
      markers.pop(); // remove marker from array
    }
  }

  return (
    <div>
      <div ref={mapContainerRef} className="map-container" />
      <div>
        <button
          onClick={() => requestCoordinates(boundaries)}
          className="map-plot-button"
        >
          Plot Coordinates!
        </button>
      </div>
    </div>
  );
}
