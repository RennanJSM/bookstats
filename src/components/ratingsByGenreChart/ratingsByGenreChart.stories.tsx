import React from 'react';
import RatingsByGenreChart from './index';

export default {
  title: 'Components/RatingsByGenreChart',
  component: RatingsByGenreChart,
};

const sampleData = [
  { genre: 'Fiction', rating: 4.5 },
  { genre: 'Fantasy', rating: 3.8 },
  { genre: 'Science', rating: 4.2 },
];

export const Default = () => <RatingsByGenreChart data={sampleData} />;
