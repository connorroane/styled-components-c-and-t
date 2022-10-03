import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cards from '../pages/Cards';

const Router = () => {
  return (
  <Routes>
    <Route path=''  element={<Home title="Home" />} />
    <Route path='/cards' element={ <Cards title='Cards' /> } />
      
  </Routes>
  )
}

export default Router;