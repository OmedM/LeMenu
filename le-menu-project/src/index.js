import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './nav-bar.js';
import Footer from './footer.js';

function App() {
  return (
    <>
      <Nav />

      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);