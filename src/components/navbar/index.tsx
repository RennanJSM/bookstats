import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart'; 


interface NavbarProps {
  isDarkMode: boolean;
  onThemeChange: () => void;
}


const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onThemeChange }) => {
  return (
    <AppBar position="static">
      <Toolbar>
      <Box display="flex" alignItems="center">
        <Typography variant="h6" style={{ flexGrow: 1, marginRight: 7 }}>
          BookStats
        </Typography>
        
        <IconButton
          component={Link}
          to="/"
          color="inherit"
          aria-label="Ir para a página inicial"
        >

          <HomeIcon />
        </IconButton>

        <IconButton
          component={Link}
          to="/dashboards"
          color="inherit"
          aria-label="Ir para a página de dashboards"
        >
          <BarChartIcon />
        </IconButton>
        </Box>

        <Box flexGrow={1} display="flex" justifyContent="flex-end">
        <IconButton
          color="inherit" 
          onClick={onThemeChange}
          aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          {isDarkMode ? <WbSunnyIcon /> : <Brightness2Icon />}
        </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};


export default Navbar;
