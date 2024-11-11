import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <TextField 
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Pesquisar livros..."
        aria-label="Campo de busca de livros"
        variant="outlined"
        size="small"
        style={{ marginRight: '8px' }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch} 
        aria-label="Pesquisar"
      >
        Pesquisar
      </Button>
    </div>
  );
};

export default SearchBar;
