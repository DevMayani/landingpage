import React from 'react'
import Message from '../../assets/Message_fill.png';

function Header() {
  return (
    <div className='p-5 h-[60px] bg-black flex justify-start items-center cursor-pointer'>
      <img src={Message} alt="pic" className=' w-[30px]' />
      <p className='text-white font-bold'>info@Extra.live</p>
    </div>
  )
}


export default Header;