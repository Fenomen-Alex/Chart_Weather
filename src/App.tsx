import React, {useState} from 'react';
import GeoForm from './components/GeoForm';
import WeatherChart from './components/WeatherChart';
import {LatLngType} from './types';
import './App.css';

const App = () => {
  const [latLng, setLatLng] = useState<null | LatLngType>(null);

  return (
    <div className="app">
      {/* form goes here */}
      <GeoForm setLatLng={setLatLng} />
      {/* chart goes here */}
      {latLng && <WeatherChart latLng={latLng}/>}
    </div>
  );
};

export default App;
