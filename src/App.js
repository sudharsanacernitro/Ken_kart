import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Main from './components/main/main';
import Sub_main from './components/sub_main/sub_main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/sub_main" element={<Sub_main />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
