import React, {useEffect, useState} from 'react';
import {Dataset, LatLngType, Weather} from '../types';
import {Bar, defaults} from 'react-chartjs-2';

defaults.plugins.legend.display = false;

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const labels = [...Array(7)].map((_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return days[date.getDay()];
});
const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1,
  tooltips: {node: 'index', intersect: false},
  scales: {
    xAxes: [
      {
        gridLines: false,
        ticks: {
          fontColor: '#F680BC',
          fontSize: 10,
          padding: 20
        }
      }
    ],
    yAxes: [
      {
        gridLines: false,
        ticks: {
          fontColor: '#F680BC',
          fontSize: 10,
          padding: 20
        }
      }
    ]
  }
};

const apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?'
    + '&exclude=hourly,minutely&units=imperial'
    + '&appid=bb96c7f9ac6f57dc00333727c5407547';

const WeatherChart = ({latLng}: { latLng: LatLngType }) => {

  const [datasets, setDatasets] = useState<Dataset[]>([]);

  useEffect(() => {
    const formatWeatherData = (data: Weather): Dataset[] => {
      return [
        {
          label: 'Highs',
          backgroundColor: '#EC9CAC',
          borderColor: '#EC9CAC',
          data: data.daily.map((day) => day.temp.max)
        },
        {
          label: 'Lows',
          backgroundColor: '#9CCAF6',
          borderColor: '#9CCAF6',
          data: data.daily.map((day) => day.temp.min)
        }
      ]
    };
    const getWeatherData = async (): Promise<void> => {
      const res = await fetch(`${apiUrl}&lat=${latLng.lat}&lon=${latLng.lng}`);
      const data = await res.json();
      const formattedData = formatWeatherData(data);
      setDatasets(formattedData);
    };
    getWeatherData();
  }, [latLng])

  return (
      <div className="chart">
        <Bar
            type="bar"
            options={options}
            data={{ labels, datasets }}
        />
      </div>
  );
};

export default WeatherChart;
