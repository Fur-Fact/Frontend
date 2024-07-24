import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: [
    'Ca',
    'Mg',
    'Na',
    'K',
    'P',
    'Zn',
    'Cu',
    'Se',
    'Fe',
    'Cr',
    'V',
    'Mn',
    'Mo',
    'Co',
    'S',
    'B',
    'Li',
    'Sr',
  ],
  datasets: [
    {
      label: 'Measured',
      data: [
        440, 48, 246, 74, 170, 187, 14.3, 0.93, 114, 0.1, 0.015, 0.42, 0.004,
        0.01, 58347, 0.37, 0.03, 0.4,
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
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
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default App;
