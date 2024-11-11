import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface RatingsOverTimeChartProps {
  data: { date: string; rating: number }[];
}

const RatingsOverTimeChart: React.FC<RatingsOverTimeChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Média de Avaliação',
        data: data.map(item => item.rating),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Evolução da Média de Avaliações ao Longo do Tempo',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default RatingsOverTimeChart;
