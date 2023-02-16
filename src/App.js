import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './View/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home/>
        <Routes>
          <Route path='/' element = { <> </>} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
