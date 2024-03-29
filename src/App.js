import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './View/Home';
import Houses from './components/Houses';
import Characters from './components/Characters';
import Details from './View/details';

import injectContext from './store/context'
import Favorites from './View/favorites';
import Profile from './components/profile';
import Login from './View/login';
import Register from './View/register';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/houses" element={<Houses/>}/>
          <Route path='/characters' element={<Details/>} />
          <Route path='/profile/:id' element={<Profile/>} />
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/users' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  ); 
}

export default injectContext(App);
