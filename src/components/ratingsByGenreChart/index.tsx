import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface RatingsByGenreChartProps {
  data: { genre: string; rating: number }[];
}

const RatingsByGenreChart: React.FC<RatingsByGenreChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.genre),
    datasets: [
      {
        label: 'Média de Avaliação',
        data: data.map(item => item.rating),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
        text: 'Distribuição de Avaliações por Gênero',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default RatingsByGenreChart;
