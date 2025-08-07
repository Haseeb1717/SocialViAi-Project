// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Add more routes here later */}
      </Routes>
    </Router>
  );
};

export default App;
