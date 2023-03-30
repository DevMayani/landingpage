import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import MainOne  from './components/MainOne/MainOne'
import Footer from './components/Footer/Footer'
import './App.css';
import Header from './components/Header/Header';
import Handler from './components/Handler/Handler';
import MainTwo from './components/MainTwo/MainTwo';
import Down from './assets/downloadone.png';
import Downnew from './assets/iconback.png';
import Faq from './components/Faq'
import Boxc from './components/Boxc';
import { IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';


function App() {


  
  return (
    <div className='bg-slate-300'>
      <Header />
      <Navbar />
      <div className='bg-purple-600 relative'>
      <MainOne />
      <Handler />
      </div>
      <MainTwo />
      <Boxc/>
      <Faq />

      <div className='w-[90%]  bg-purple-600  drop-shadow-2xl rounded-xl md:w-[80%] min-h-[200px] m-auto '> 
       <h1 className=' p-5 m-auto text-center font-bold mt-10 md: text-white text-xl'>What our customer are sayin</h1>
       <hr className='w-[10%] mt-[1px] decoration-8 m-auto' />
       <center className='m-auto p-10  flex justify-between items-center '>
       
        <IoIosArrowBack className='text-white w-[7%] md:w-[3%]'/>
        <IoIosArrowForward className='text-white w-[7%] md:w-[3%]'/>
       </center>
       
      </div>
      <div className='bg-white mt-5 min-h-[260px] w-[95%] m-auto'> 
       <h4 className='text-center text-2xl p-10 font-semibold'>Newsletter</h4>
       <p className=' text-center mt-[-30px] font-semibold text-sm text-slate-400'>Sign up for our newsletters</p>
       <div className='m-auto flex justify-center items-center  mt-5 flex-col  gap-2 md:flex-row w-[50%]'>  
       <input name='email'
              
               type="text"
               
               placeholder='Enter Email Address'
                className='w-[100%] text-sm border border-purple-600 mb-4 h-11 text-center md:w-[35%] '/>
                <button type='submit' className='px-2 py-2 mb-4 outline-none bg-purple-600 w-[60%]  text-white text-xl md:w-[25%]'>Subscribe</button>
       </div>
       
      </div>
     
      <Footer />
    </div>
  );
}

export default App;
