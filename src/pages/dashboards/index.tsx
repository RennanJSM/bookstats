import React, { useState, useEffect } from 'react';
import './styles.css';
import RatingsByGenreChart from '../../components/ratingsByGenreChart';
import RatingsOverTimeChart from '../../components/ratingsOverTimeChart';
import { searchBooks } from '../../services/api';
import SearchBar from '../../components/searchBar';


const Dashboard: React.FC = () => {
    const [genreData, setGenreData] = useState<{genre: string; rating: number}[]>([]);
    const [timeData, setTimeData] = useState<{date: string; rating: number}[]>([]);
    const [query, setQuery] = useState('');

    const processData = (books: any[]) => {
        const genreMap: { [genre: string]: number[] } = {};
        const timeMap: { [date: string]: number[] } = {};
    
        books.forEach((book) => {
          const genres = book.volumeInfo.categories || [];
          const rating = book.volumeInfo.averageRating;
          const publishedDate = book.volumeInfo.publishedDate;
    
          
          genres.forEach((genre: string) => {
            if (!genreMap[genre]) {
              genreMap[genre] = [];
            }
            if (rating) {
              genreMap[genre].push(rating);
            }
          });
    
          
          if (publishedDate && rating) {
            const date = publishedDate.slice(0, 7); 
            if (!timeMap[date]) {
              timeMap[date] = [];
            }
            timeMap[date].push(rating);
          }
        });
    
       
        const genreDataProcessed = Object.entries(genreMap).map(([genre, ratings]) => ({
          genre,
          rating: ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
        }));
    
        
        const timeDataProcessed = Object.entries(timeMap).map(([date, ratings]) => ({
          date,
          rating: ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
        }));
    
        setGenreData(genreDataProcessed);
        setTimeData(timeDataProcessed);
      };
    
      
      const fetchData = async () => {
        try {
          const results = await searchBooks(query); 
          processData(results);
        } catch (error) {
          console.error('Erro ao buscar dados da API:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, [query]);

      const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery);
      };

  return (
    <div>
      <h1>Dashboard de Visualização</h1>


      <div className='search-box-container'>
        <SearchBar onSearch={handleSearch} />
      </div>


      <RatingsByGenreChart data={genreData} />
      <RatingsOverTimeChart data={timeData} />
    </div>
  );
};

export default Dashboard;
