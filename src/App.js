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

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/houses/:id" element={<Houses/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  ); 
}

export default App;
