import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Splash from './components/Splash';
import WishlistTheirs from './components/WishlistTheirs';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/wishlists/:wishlistId' element={<WishlistTheirs />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/splash' element={<Splash />}></Route>
    </Routes>
  );
}

export default App;
