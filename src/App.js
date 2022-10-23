import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, About, Explore } from './pages';

const App = () => {
  return (
    <Router>
    <div className='App'>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/explore' element={<Explore />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App
