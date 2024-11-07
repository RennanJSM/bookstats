import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

interface BookCardProps {
  title: string;
  authors: string[];
  thumbnail?: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, authors, thumbnail }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: 2, maxWidth: 600 }}>
      {thumbnail && (
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={thumbnail}
          alt={title}
        />
      )}
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Authors: {authors.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
