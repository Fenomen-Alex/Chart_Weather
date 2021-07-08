import React, {useCallback, useEffect, useState} from 'react';
import Geocode from 'react-geocode';

Geocode.setApiKey("AIzaSyDp4os33WF6-4d-xFVyL0HsUUHN7dOml_w");

const GeoForm = ({ setLatLng }: { setLatLng: Function }) => {

  const [value, setValue] = useState('Kyiv');

  const getLatLng = useCallback((address: string) => {
    Geocode.fromAddress(address)
        .then((res) => {
          const { lat, lng } = res.results[0].geometry.location;
          setLatLng({lat, lng})
        })
  },[]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getLatLng(value);
  };

  useEffect(() => {
    getLatLng(value);
  },[]);

  return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
      </form>
  )
};

export default GeoForm;
