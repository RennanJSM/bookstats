import React from 'react';
import { Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';

interface BookCardProps {
  title: string;
  authors: string[];
  thumbnail?: string;
  averageRating?: number;
  categories?: string[];
}

const BookCard: React.FC<BookCardProps> = ({ title, authors, thumbnail, averageRating, categories }) => {
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
        <Typography variant="body2" color="text.secondary">
          Genre: {categories?.join(', ') || 'Unknown'}
        </Typography>
        {averageRating !== undefined && (
          <div>
            <Typography variant="body2">Rating:</Typography>
            <Rating value={averageRating} readOnly precision={0.5} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookCard;
