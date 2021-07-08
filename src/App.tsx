import React, {useState} from 'react';
import GeoForm from './components/GeoForm';
import WeatherChart from './components/WeatherChart';
import {LatLngType} from './types';
import './App.css';

// openweathermap.org
// https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&units=imperial&appid=bb96c7f9ac6f57dc00333727c5407547
// api key: bb96c7f9ac6f57dc00333727c5407547

// google maps api
// api key: AIzaSyDp4os33WF6-4d-xFVyL0HsUUHN7dOml_w

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
