import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MainOne  from './components/MainOne/MainOne'
import Footer from './components/Footer/Footer'
import './App.css';
import Header from './components/Header/Header';
import Handler from './components/Handler/Handler';
import MainTwo from './components/MainTwo/MainTwo';

function App() {
  return (
    <div className=''>
      <Header />
      <Navbar />
      <div className='bg-purple-600'>
      <MainOne />
      <Handler classname='my-[-20px]'/>
      </div>
      <MainTwo />
     
      <Footer />
    </div>
  );
}

export default App;
