import React from 'react';
import BookCard from './index';

export default {
  title: 'Components/BookCard',
  component: BookCard,
};

export const Default = () => (
  <BookCard title="Harry Potter" authors={['J.K. Rowling']} />
);

export const WithMultipleAuthors = () => (
  <BookCard title="Some Book" authors={['Author One', 'Author Two']} />
);
