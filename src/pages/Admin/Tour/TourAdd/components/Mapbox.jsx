import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { makeStyles } from '@material-ui/core/styles';

// Mapbox css
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: 375,
  },
}));

const Mapbox = () => {
  const classes = useStyles();
  const mapContainer = useRef(null);
  const map = useRef(null); // prevent the map from reloading when the user interacts with the map.
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className={classes.mapContainer} />
    </div>
  );
};

export default Mapbox;
