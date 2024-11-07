import React, { useState } from 'react';
import './styles.css';
import BookCard from '../../components/bookCard';
import SearchBar from '../../components/searchBar';
import { searchBooks } from '../../services/api';
import { Grid } from '@mui/material';

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
      <SearchBar onSearch={handleSearch} />
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <BookCard
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors || []}
              thumbnail={book.volumeInfo.imageLinks?.thumbnail}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;