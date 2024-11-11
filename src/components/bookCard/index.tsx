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
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ width: '600px', margin: '20px auto' }}
    >
      <Card sx={{ display: 'flex', width: '100%', height: 250 }}>
        {thumbnail ? (
          <CardMedia
            component="img"
            sx={{ width: 180, height: '100%', objectFit: 'cover' }}
            image={thumbnail}
            alt={title}
          />
        ) : (
          <Box
            sx={{
              width: 180,
              height: '100%',
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
        <CardContent sx={{ flex: 1, overflow: 'hidden' }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Authors: {authors.join(', ')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genre: {categories?.join(', ') || 'Unknown'}
          </Typography>
          {averageRating !== undefined && (
            <Box mt={7}>
              <Typography variant="body2">Rating:</Typography>
              <Rating value={averageRating} readOnly precision={0.5} />
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BookCard;
