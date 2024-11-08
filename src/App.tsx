import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboards';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboards' element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
