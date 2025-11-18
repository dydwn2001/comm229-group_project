// src/pages/Project1.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import './Project1.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Project1() {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Goals Scored',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  const barData = {
    labels: ['Basketball', 'Soccer', 'Football'],
    datasets: [
      {
        label: 'Games Played',
        data: [8, 15, 10],
        backgroundColor: ['#4bc0c0', '#ff6384', '#36a2eb'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Sports Tracker Stats' },
    },
  };

  return (
    <div className="project-wrapper">
      <h2>Sports Tracker</h2>
      <div className="charts-container">
        <div className="chart-box">
          <Line data={lineData} options={options} />
        </div>
        <div className="chart-box">
          <Bar data={barData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Project1;
