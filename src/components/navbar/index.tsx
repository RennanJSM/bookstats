import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';


interface NavbarProps {
  isDarkMode: boolean;
  onThemeChange: () => void;
}


const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onThemeChange }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          BookStats
        </Typography>
        <IconButton color="inherit" onClick={onThemeChange}>
          {isDarkMode ? <WbSunnyIcon /> : <Brightness2Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};


export default Navbar;
