import { useState } from 'react';

const useMap = () => {
  const [coordinates, setCoordinates] = useState([2.1686, 41.3874]);
  const [zoom, setZoom] = useState('place');

  const changeCoordinates = (newCoordinates) => setCoordinates(newCoordinates);

  const changeZoom = (newZoom) => setZoom(newZoom);

  return { coordinates, zoom, changeCoordinates, changeZoom };
};

export default useMap;
