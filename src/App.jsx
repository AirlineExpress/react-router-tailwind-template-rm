import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Yakuza from './pages/Yakuza';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/yakuza" element={<Yakuza />} />
      </Routes>
    </Router>
  );
};

export default App;
