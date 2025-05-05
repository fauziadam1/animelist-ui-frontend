import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.view';
import Beranda from './pages/Beranda.view';

function App() {
  return (
    <Router>
      <Routes>
        <Navbar>
          <Route path='/' element={<Beranda/>}/>
        </Navbar>
      </Routes>
    </Router>
  )
}

export default App
