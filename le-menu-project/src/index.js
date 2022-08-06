import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/nav-bar.js';
import Footer from './components/footer.js';

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