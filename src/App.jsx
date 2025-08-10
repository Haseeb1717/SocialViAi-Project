// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup'; // <-- import your signup page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* <-- signup route */}
      </Routes>
    </Router>
  );
};

export default App;
