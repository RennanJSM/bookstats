import axios from 'axios';


const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
const BASE_URL = 'https://www.googleapis.com/books/v1';


export const searchBooks = async (query: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/volumes`, {
            params: {
              q: query, 
              key: API_KEY, 
            },
          });
          return response.data.items;
    }

    catch (error) {
        console.error("Erro na requisição:", error);
        throw error;
    }
}

        
