import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';

function App() {

  return (
    <div className="App">
     <Navbar />
     <Banner />
     {/* banner */}
     {/* rows */}
     {/* video */}
     {/* quick view */}
     <Footer />
    </div>
  );
}

export default App;
