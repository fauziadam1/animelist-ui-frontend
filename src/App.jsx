import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.view';
import Beranda from './pages/Beranda/Beranda.view';

function App() {
  return (
    <Router>
        <Navbar>
          <Routes path='/' element={<Beranda/>}/>
        </Navbar>
    </Router>
  )
}

export default App
