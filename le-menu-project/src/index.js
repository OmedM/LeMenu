import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Nav from './components/nav-bar.js';
import Footer from './components/footer.js';
import Home from './components/home-page.js';
import Restaurants from './components/restaurants-page.js'
import About from './components/about-page.js';
import Contact from './components/contact-page.js'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/restaurants" element={<Restaurants />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);