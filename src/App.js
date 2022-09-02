import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GifApp from './pages/GifApp';
import Footer from './components/Footer';

export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/Home' element={ <Home /> } />
          <Route path='/GifApp' element={ <GifApp /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}