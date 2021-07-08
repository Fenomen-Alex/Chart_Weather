import React from 'react';
import {LatLngType} from '../types';
import {Bar, defaults} from "react-chartjs-2";

// @ts-ignore
defaults.global.legend.display = false;

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const labels = [...Array(7).map((_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return days[date.getDate()];
})]

const WeatherChart = ({latLng}: { latLng: LatLngType }) => {
  return (
      <Bar
          type="bar"
          options={{
            tooltips: { node: 'index', intersect: false},
            scales: {
              xAxes: [
                {
                  gridLines: false,
                  ticks: {
                    fontColor: '#F680BC',
                    fontSize: 10,
                    padding:20
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: false,
                  ticks: {
                    fontColor: '#F680BC',
                    fontSize: 10,
                    padding:20
                  }
                }
              ]
            }
          }}
          data={{
            labels,
            datasets: [
              {
                label: 'Highs',
                backgroundColor: '#EC9CAC',
                borderColor: '#EC9CAC',
                data: [140, 200, 300]
              },
              {
                label: 'Lows',
                backgroundColor: '#9CCAF6',
                borderColor: '#EC9CAC',
                data: [40, 20, 30]
              }
            ]
          }}
      />
  );
};

export default WeatherChart;
