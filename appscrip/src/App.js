// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
