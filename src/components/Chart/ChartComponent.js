// ChartComponent.js

import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Price',
      },
    },
  },
};

const data = {
  labels: Array.from({ length: 36 }, (_, i) => `${i + 1} month`),
  datasets: [
    {
      label: 'Price',
      data: Array.from({ length: 36 }, () => Math.floor(Math.random() * 1000 + 100)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function ChartComponent() {
  const [chartType, setChartType] = useState('bar');

  return (
    <div>
      <div>
        <button onClick={() => setChartType('bar')}>Bar Chart</button>
        <button onClick={() => setChartType('line')}>Line Chart</button>
      </div>
      {chartType === 'bar' ? (
        <Bar data={data} options={options} />
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
}

export default ChartComponent;
