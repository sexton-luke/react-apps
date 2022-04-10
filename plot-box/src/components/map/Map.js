import React from 'react';
import mapboxgl from 'mapbox-gl';
import config from '../../config';
import setMarkers from './functions/setMarkers';
const URL = process.env.REACT_APP_API_URL || config.DEFAULT_URL;

mapboxgl.accessToken = process.env.REACT_APP_MAP_ACCESS_TOKEN;

export default class Map extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            lng: config.DEFAULT_LNG,
            lat: config.DEFAULT_LAT,
            zoom: config.DEFAULT_ZOOM,
            bounds: [],
        };
        this.mapContainer = React.createRef();
        this.map = {};
        this.markers = [];
    }

    requestCoordinates = (bounds) => {
        console.log('requesting coordinates from ', URL);
        console.log('bounds: ', bounds);

        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bounds),
            };

            fetch(URL, requestOptions)
                .then(response => response.json())
                .then(data => setMarkers(this.map, data, this.markers));
        } catch (error) {
            console.log('error fetching data => ', error);
        }
    }


    componentDidMount() {
        const { lng, lat, bounds } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: config.DEFAULT_ZOOM,
            scrollZoom: false
        });

        this.map = map;
        bounds.push(map.getBounds());

        map.addControl(new mapboxgl.NavigationControl());
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(config.COORDINATE_DECIMAL_PLACES),
                lat: map.getCenter().lat.toFixed(config.COORDINATE_DECIMAL_PLACES),
                zoom: map.getZoom().toFixed(config.ZOOM_DECIMAL_PLACES),
                bounds: map.getBounds(),
            });
        });
    }


    render() {
        const { lng, lat, bounds } = this.state;
        return (
            <div>
                <div className='sidebar'>
                    Lng: {lng} | Lat: {lat}
                    <button id='plot' onClick={() => this.requestCoordinates(bounds)}>Plot Coordinates</button>
                </div>
                <div ref={this.mapContainer} className="map-container" />
            </div>
        );
    }
}