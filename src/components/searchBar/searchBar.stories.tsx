import React from 'react';
import SearchBar from './index';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
};

export const Default = () => <SearchBar onSearch={(query) => console.log(query)} />;
