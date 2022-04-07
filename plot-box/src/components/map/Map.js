import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import PlotButton from '../plot-button/PlotButton.js';
import config from '../../config.js';
const PORT = process.env.NODE_PORT;
// const URL = 'http://localhost:' + PORT + '/api/coordinates';
const URL = 'http://localhost:3000/api/coordinates';

mapboxgl.accessToken =
  'pk.eyJ1IjoibHVrZS1zZXh0b24iLCJhIjoiY2wxbm4zMHRmMGhsNDNrcGN3cmdpN3djeCJ9.Xo8UgocO3400h_0XbUel2A';

export default function Map() {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  const [latitude, setLatitude] = useState(config.DEFAULT_LATITUDE);
  const [longitude, setLongitude] = useState(config.DEFAULT_LONGITUDE);
  const [zoom, setZoom] = useState(config.DEFAULT_ZOOM);
  const [boundaries, setBoundaries] = useState();

  const [coordinates, requestCoordinates] = useState();

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

  // sending api request
  useEffect(() => {
    fetch(URL, {
      method: 'POST',
      body: boundaries,
    })
      .then(response => response.json())
      .then(data => coordinates);
  }, [boundaries, coordinates]);

  return (
    <div>
      <div ref={mapContainerRef} className="map-container" />
      <div>
        <button
          onClick={() => requestCoordinates()}
          className="map-plot-button"
        >
          Plot Coordinates!
        </button>
      </div>
    </div>
  );
}
