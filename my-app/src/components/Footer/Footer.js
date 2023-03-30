import React from 'react'
import logoImg from '../../assets/extra_white_logo.png';

function Footer () {
  return (
    <div className='bg-purple-600 p-1 max-h-[300px] md:p-20'>

     <div className='bg-purple-600 grid md:grid-cols-4 gap-x-10 px-2'>

      <div className='col-span-full  md:col-span-1'>
      <img src={logoImg} alt="pic" className=' w-[200px]' />
      <p className='mt-3 text-white text-sm hover:underline text-sm md:mt-3'>©Extra.Live PTY LTD 2021.</p>
      <p className='mt-1 text-white text-sm hover:underline text-sm md:mt-3'>All rights reserved</p>
    </div>

    <div className='cursor-pointer col-span-full  md:col-span-1'>
    <p className='mt-5 text-white font-normal  text-xl'>Useful Link</p>
    <p className=' text-white text-sm font-bold mt-10 hover:underline text-sm'>Pricing</p>
    <p className='mt-3 text-sm  text-white font-bold hover:underline text-sm'>Features</p>
    <p className='mt-3 text-sm  text-white font-bold hover:underline text-sm'>Register</p>
    <p className='mt-3 text-sm  text-white font-bold hover:underline text-sm'>Join Affliates</p>
    </div>

    <div className='col-span-full  cursor-pointer md:col-span-1'>
    <p className='mt-5 text-white font-normal text-xl'>Useful Link</p>
    <p className='mt-10 text-white text-sm font-bold hover:underline text-sm'>Live Chat </p>
    <p className='mt-3 text-sm  text-white font-bold hover:underline text-sm '>Helpdesk</p>
    <p className='mt-3 text-sm  text-white font-bold hover:underline text-sm'>Blog</p>
    <p className='mt-3 text-sm  text-white font-bold hover:underline text-sm'>Affliates</p>
   
    </div>
    <div className='col-span-full md:col-span-1 '>
    <p className='mt-5  text-white font-normal text-xl'>Contact us</p>
    <p className='mt-10 text-white text-sm hover:underline text-sm'>Tapiola Center Tower Tapiontori 1,</p>
    <p className='mt-3 text-white text-sm hover:underline text-sm '>02100 Espoo, Finlan</p>
  
    </div>

   

    


      </div>
      
    
    
   
  

  </div>

)
}

export default Footer;

