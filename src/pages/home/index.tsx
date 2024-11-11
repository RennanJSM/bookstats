import React, { useState } from 'react';
import './styles.css';
import BookCard from '../../components/bookCard';
import SearchBar from '../../components/searchBar';
import { searchBooks } from '../../services/api';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);


  const handleSearch = async (query: string) => {
    try {
      const results = await searchBooks(query);
      setBooks(results || []);
    } catch (error) {
      alert("Erro ao buscar livros. Por favor, tente novamente.");
    }
  };

  return (
    <div className='container'>
      <h1>Página Principal</h1>
      <div className='search-bar-container'>
        <SearchBar onSearch={handleSearch} />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <motion.div variants={itemVariants}>
            <BookCard
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors || []}
              thumbnail={book.volumeInfo.imageLinks?.thumbnail}
              averageRating={book.volumeInfo.averageRating}
              categories={book.volumeInfo.categories}
            />
            </motion.div>
          </Grid>
        ))}
      </Grid>
      </motion.div>
    </div>
  );
};

export default Home;