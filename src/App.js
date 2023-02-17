import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './View/Home';
import Houses from './components/Houses';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/houses/" element={<Houses />} 
                  path="/gryffindor"/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
