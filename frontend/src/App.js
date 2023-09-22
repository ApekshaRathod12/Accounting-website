import React from 'react';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './Components/Home';

import Contact from './Components/Contact';
import Nav from './Nav';

function App() {
  return (
    <div>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App