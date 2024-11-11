import React from 'react';
import RatingsOverTimeChart from './index';

export default {
  title: 'Components/RatingsOverTimeChart',
  component: RatingsOverTimeChart,
};

const sampleData = [
  { date: '2021-01', rating: 4.2 },
  { date: '2021-02', rating: 4.0 },
  { date: '2021-03', rating: 3.9 },
];

export const Default = () => <RatingsOverTimeChart data={sampleData} />;
