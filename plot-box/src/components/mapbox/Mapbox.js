import React, { useEffect, useRef, useState } from 'react';
import './Mapbox.css';
import mapboxgl from 'mapbox-gl';
const config = require('../../config.js');

mapboxgl.accessToken = //
  'pk.eyJ1IjoibHVrZS1zZXh0b24iLCJhIjoiY2wxbm4zMHRmMGhsNDNrcGN3cmdpN3djeCJ9.Xo8UgocO3400h_0XbUel2A';

const Map = () => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  const [latitude, setLatitude] = useState(config.DEFAULT_LATITUDE);
  const [longitude, setLongitude] = useState(config.DEFAULT_LONGITUDE);
  const [zoom, setZoom] = useState(config.DEFAULT_ZOOM);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });
  });

  // Store new coordinates
  useEffect(() => {
    if (!map.current) return;
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
      setZoom(map.getZoom().toFixed(config.ZOOM_DECIMAL_PLACES));
    });
  });

  return (
    <div>
      <div className="sidebarStyle">
        <div>
          Longitude: {longitude} | Latitude: {latitude} | Zoom: {zoom}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
