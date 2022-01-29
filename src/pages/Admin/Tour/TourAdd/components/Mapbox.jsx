import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { makeStyles } from '@material-ui/core/styles';

// Mapbox css
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: 325,
  },
}));

const placeType = {
  country: 4,
  region: 10,
  postcode: 10,
  district: 12,
  place: 12,
  locality: 17,
  neighborhood: 17,
  address: 17,
  poi: 17,
};

const Mapbox = ({ coordinates, zoom }) => {
  const classes = useStyles();
  const mapContainer = useRef(null);
  const map = useRef(null); // prevent the map from reloading when the user interacts with the map.
  const marker = useRef(null);

  const flyToPlace = (coors) => {
    map.current.flyTo({
      center: coors,
      essential: true,
      zoom: placeType[zoom],
    });
  };
  console.log(coordinates);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    // Code below run only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates,
      zoom: placeType[zoom],
    });

    // init marker
    marker.current = new mapboxgl.Marker({
      color: '#2980b9',
      draggable: false,
    })
      .setLngLat(coordinates)
      .addTo(map.current);
  });

  useEffect(() => {
    if (coordinates[0] === 0 && coordinates[1] === 0) return; // avoid re-create marker when input is blank

    marker.current.setLngLat(coordinates).addTo(map.current);
    flyToPlace(coordinates);
  }, coordinates);

  return (
    <div>
      <div ref={mapContainer} className={classes.mapContainer} />
    </div>
  );
};

export default Mapbox;
