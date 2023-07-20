import React, {useState} from 'react'
import {Route, Routes} from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Price } from './components/Price/Price';
import { Schedule } from './components/Schedule/Schedule';
import { Meet } from './components/Meet/Meet';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/meet' element={<Meet/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/price' element={<Price/>}/>
      </Routes>
    </div>
  );
}

export default App;
