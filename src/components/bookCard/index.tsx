import React from 'react';
import { Box, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface BookCardProps {
  title: string;
  authors: string[];
  thumbnail?: string;
  averageRating?: number;
  categories?: string[];
}

const BookCard: React.FC<BookCardProps> = ({ title, authors, thumbnail, averageRating, categories }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Ponto de partida da animação
      animate={{ opacity: 1, y: 0 }}  // Ponto final da animação
      transition={{ duration: 0.5, ease: "easeOut" }} // Duração e tipo de transição
    >
    <Card sx={{ display: 'flex', marginBottom: 2, maxWidth: 600 }}>
      {thumbnail ? (
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={thumbnail}
          alt={title}
        />
      ) : (
        <Box
          sx={{
            width: 100,
            height: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            color: '#aaa',
            fontSize: '0.875rem',
          }}
        >
          No Cover
        </Box>
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
    </motion.div>
  );
};

export default BookCard;
