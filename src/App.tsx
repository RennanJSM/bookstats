import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme';
import Home from './pages/home';
import Dashboard from './pages/dashboards';
import Navbar from './components/navbar';;


const App: React.FC = () => {


  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });


  const handleThemeChange = () => {
    setIsDarkMode((prevMode: boolean) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return newMode;
    });
  };




  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
       
        <Navbar isDarkMode={isDarkMode} onThemeChange={handleThemeChange} />


        <Container style={{ marginTop: '20px' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='dashboards' element={<Dashboard />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};


export default App;
