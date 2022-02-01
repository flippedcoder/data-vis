import React from 'react';

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  labels: [-56, 74, -25, 25, 68, -47, 1, -10, 38],
  datasets: [
    {
      label: 'This dataset',
      data: [6, 74, 25, -25, -68, 47, -1, 10, -38],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

export default function ScatterPlot() {
  return <Scatter options={options} data={data} />;
}
