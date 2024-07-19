// src/App.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';  // Chart.js 자동 등록

const data = {
  labels: ['Ca', 'Mg', 'Na', 'K', 'P', 'Zn', 'Cu', 'Se', 'Fe', 'Cr', 'V', 'Mn', 'Mo', 'Co', 'S', 'B', 'Li', 'Sr'],
  datasets: [
    {
      label: 'Measured',
      data: [440, 48, 246, 74, 170, 187, 14.3, 0.93, 114, 0.1, 0.015, 0.42, 0.004, 0.010, 58347, 0.37, 0.03, 0.4],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Standard Range Min',
      data: [175, 25, 100, 10, 160, 80, 10, 1.0, 8, 0.2, 0.02, 0.11, 0.008, 0.004, 20000, 0.25, 0.03, 0.4],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Standard Range Max',
      data: [525, 65, 200, 310, 240, 205, 17, 1.6, 18, 0.4, 0.31, 0.49, 0.015, 0.011, 50000, 0.5, 0.06, 0.88],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Element Analysis',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Element Analysis Chart</h1>
        <Bar data={data} options={options} />
      </header>
    </div>
  );
}

export default App;
