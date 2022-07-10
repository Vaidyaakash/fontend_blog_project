import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bollywood from './Pages/Bollywood';
import Sports from './Pages/Sports';
import Home from './Pages/Home';
import Nav from './Pages/Nav';
import Technology from './Pages/Technology';
import Tourism from './Pages/Tourism';
import Health from './Pages/Health';
import Navigater from './Pages/Navigater';
import "./Style.css"
import BlogApi from './Data/BlogApi';


const App = () => {

  return (
    <BlogApi>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/health' element={<Health />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/tourism' element={<Tourism />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/:category/:ids' element={<Navigater />} />
        </Routes>
      </BrowserRouter>
    </BlogApi>
  )
}

export default App;