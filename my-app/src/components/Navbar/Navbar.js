import React, { useEffect,useState } from "react";
import { animateScroll as scroll, } from 'react-scroll'
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo_other1.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';





function Navbar () {
 
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)


  return (
    <div className='h-[100px]'> 

      <div className=' flex justify-between items-center md:px-[30px] py-[35px]'>
         <div className='flex justify-start items-center  w-[200px] md:w-[200px]'>
          <img src={logoImg} alt="pic" className=' w-[300px]' />
        </div>

        <div className='cursor-pointer'>
          <ul className='hidden md:flex justify-around items-center gap-x-10 text-slate-500'>
          <li className='text-sm hover:text-black font-semibold'>How It Works</li>
          <li className='text-sm hover:text-black font-semibold'>Pricing</li>
           <li className='text-sm hover:text-black font-semibold'>FAQ</li>
           <li className='text-sm hover:text-black font-semibold'>Blog</li>
           <li className='text-purple-700 text-sm hover:text-purple-900 font-semibold'>Sign In</li>
           <button className='bg-purple-700 px-5 py-2 font-semibold rounded-2xl text-white text-sm font-bold hover:underline'>Sign up</button>
          </ul>
          </div>

          <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-10' /> : <MenuIcon className='w-10' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute w-full px-8 mt-[-20px] cursor-pointer'}>
          <li onClick={handleClose} smooth={true} duration={500} className='text-sm hover:text-black mt-3'>How It Works</li>
          <li onClick={handleClose} smooth={true} duration={500} className='text-sm hover:text-black mt-3'>Pricing</li>
           <li onClick={handleClose} smooth={true} duration={500} className='text-sm hover:text-black mt-3'>FAQ</li>
           <li onClick={handleClose} smooth={true} duration={500} className='text-sm hover:text-black mt-3'>Blog</li>
           <li onClick={handleClose} smooth={true} duration={500} className='text-purple-700 text-sm mt-3 hover:text-purple-900'>Sign In</li>
           <button onClick={handleClose} smooth={true} duration={500} className='bg-purple-700 px-5 py-2 mt-3 rounded-3xl text-white text-xl  hover:underline'>Sign up</button>
          </ul>

      




    </div>
  )
}


export default Navbar;
